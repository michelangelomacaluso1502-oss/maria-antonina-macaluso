#!/usr/bin/env python3
"""Fix HTTPS cert bloccato: remove + re-add CNAME su gh-pages via GitHub Contents API.
Mimica il fix UI 'remove custom domain -> re-add' che retriggera il provisioning LE.
Down window stimata ~30-60s (tra DELETE e re-bind del dominio)."""
import os, json, urllib.request, urllib.error, base64, time, sys

TOKEN = os.environ['GH_TOKEN']
REPO = 'michelangelomacaluso1502-oss/maria-antonina-macaluso'
BRANCH = 'gh-pages'
PATH = 'CNAME'
CONTENT = 'mariaantoninamacaluso.it\n'
COMMITTER = {'name': 'SEO Bot', 'email': 'noreply@mariaantoninamacaluso.it'}

def api(method, path, data=None):
    url = f'https://api.github.com/repos/{REPO}/{path}'
    body = json.dumps(data).encode() if data else None
    req = urllib.request.Request(url, data=body, method=method,
        headers={'Authorization': f'Bearer {TOKEN}',
                 'Accept': 'application/vnd.github+json',
                 'Content-Type': 'application/json'})
    try:
        with urllib.request.urlopen(req, timeout=30) as r:
            return r.status, json.loads(r.read() or '{}')
    except urllib.error.HTTPError as e:
        return e.code, json.loads(e.read() or '{}')
    except Exception as e:
        return 0, {'error': str(e)}

# 1. GET CNAME attuale (sha + content)
st, cur = api('GET', f'contents/{PATH}?ref={BRANCH}')
if st != 200:
    print(f'ERRORE GET CNAME: HTTP {st} {cur}', file=sys.stderr); sys.exit(1)
sha = cur.get('sha')
cur_decoded = base64.b64decode(cur.get('content', '')).decode().strip() if cur.get('content') else ''
print(f'[1] CNAME attuale su gh-pages: sha={sha[:8]}, content={cur_decoded!r}')

# 2. DELETE CNAME
st, d = api('DELETE', f'contents/{PATH}', {
    'message': 'Cert fix step 1/2: remove CNAME to retrigger Let\'s Encrypt provisioning',
    'sha': sha, 'branch': BRANCH, 'committer': COMMITTER
})
del_commit = d.get('commit', {}).get('sha', '?')
print(f'[2] DELETE CNAME: HTTP {st}, commit={del_commit[:8]}')
if st not in (200, 204):
    print(f'    ERRORE: {d}', file=sys.stderr); sys.exit(1)

# 3. Pausa breve (lascia GitHub processare la rimozione)
print('[3] Attesa 8s (elaborazione rimozione dominio)...')
time.sleep(8)

# 4. RE-CREATE CNAME (stesso content)
b64 = base64.b64encode(CONTENT.encode()).decode()
st, c = api('PUT', f'contents/{PATH}', {
    'message': 'Cert fix step 2/2: re-add CNAME mariaantoninamacaluso.it (fresh LE provisioning)',
    'content': b64, 'branch': BRANCH, 'committer': COMMITTER
})
cre_commit = c.get('commit', {}).get('sha', '?')
print(f'[4] RE-CREATE CNAME: HTTP {st}, commit={cre_commit[:8]}')
if st not in (200, 201):
    print(f'    ERRORE: {c}', file=sys.stderr); sys.exit(1)

# 5. Verifica config Pages
time.sleep(5)
st, p = api('GET', 'pages')
print(f'[5] Pages config: https_enforced={p.get("https_enforced")}, status={p.get("status")}, cname={p.get("cname")}')
print('\nCNAME re-aggiunto. Ora il provisioning LE dovrebbe ripartire.')
print('Prossimo step: poll openssl per verificare l\'arrivo del certificato.')
