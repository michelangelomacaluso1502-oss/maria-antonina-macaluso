#!/usr/bin/env python3
"""
Guida PDF per forzare l'indicizzazione manuale su Google Search Console.
10 URL principali da ispezionare e richiedere indicizzazione.
"""
import os
import sys
import hashlib
from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm, cm
from reportlab.lib.enums import TA_LEFT, TA_CENTER, TA_JUSTIFY
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, PageBreak,
    Table, TableStyle, KeepTogether, ListFlowable, ListItem,
    HRFlowable, Image as RLImage
)
from reportlab.platypus.tableofcontents import TableOfContents
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfgen import canvas

# === FONT REGISTRATION ===
FONT_DIR = "/usr/share/fonts/truetype"
try:
    pdfmetrics.registerFont(TTFont("NotoSerif", f"{FONT_DIR}/noto-serif-sc/NotoSerifSC-Regular.ttf"))
    pdfmetrics.registerFont(TTFont("NotoSerif-Bold", f"{FONT_DIR}/noto-serif-sc/NotoSerifSC-Bold.ttf"))
    pdfmetrics.registerFont(TTFont("NotoSans", f"{FONT_DIR}/liberation/LiberationSans-Regular.ttf"))
    pdfmetrics.registerFont(TTFont("NotoSans-Bold", f"{FONT_DIR}/liberation/LiberationSans-Bold.ttf"))
    BODY_FONT = "NotoSerif"
    BODY_BOLD = "NotoSerif-Bold"
    HEAD_FONT = "NotoSans"
    HEAD_BOLD = "NotoSans-Bold"
except Exception as e:
    print(f"Font registration warning: {e}", file=sys.stderr)
    BODY_FONT = "Helvetica"
    BODY_BOLD = "Helvetica-Bold"
    HEAD_FONT = "Helvetica"
    HEAD_BOLD = "Helvetica-Bold"

# === BRAND PALETTE ===
PAGE_BG       = colors.HexColor('#fdfcfa')
SECTION_BG    = colors.HexColor('#f8f5f0')
CARD_BG       = colors.HexColor('#f3ede4')
TABLE_STRIPE  = colors.HexColor('#f9f6f1')
HEADER_FILL   = colors.HexColor('#3d1810')
COVER_BLOCK   = colors.HexColor('#1a0d0a')
BORDER        = colors.HexColor('#d4af37')
ICON          = colors.HexColor('#a1842b')
ACCENT        = colors.HexColor('#d4af37')
ACCENT_2      = colors.HexColor('#5c2419')
TEXT_PRIMARY   = colors.HexColor('#1a0d0a')
TEXT_MUTED     = colors.HexColor('#5c4a3a')
SEM_SUCCESS   = colors.HexColor('#41955d')
SEM_WARNING   = colors.HexColor('#ae8d4a')
SEM_ERROR     = colors.HexColor('#a8534b')
SEM_INFO      = colors.HexColor('#4d7aa7')

OUTPUT_PATH = "/home/z/my-project/download/guida-indicizzazione-manuale.pdf"

# === STYLES ===
styles = getSampleStyleSheet()

style_h1 = ParagraphStyle('h1', parent=styles['Heading1'],
    fontName=HEAD_BOLD, fontSize=22, textColor=HEADER_FILL,
    spaceBefore=18, spaceAfter=12, leading=28, alignment=TA_LEFT)
style_h2 = ParagraphStyle('h2', parent=styles['Heading2'],
    fontName=HEAD_BOLD, fontSize=15, textColor=ACCENT_2,
    spaceBefore=14, spaceAfter=8, leading=20, alignment=TA_LEFT)
style_h3 = ParagraphStyle('h3', parent=styles['Heading3'],
    fontName=HEAD_BOLD, fontSize=12, textColor=HEADER_FILL,
    spaceBefore=10, spaceAfter=6, leading=16, alignment=TA_LEFT)
style_body = ParagraphStyle('body', parent=styles['BodyText'],
    fontName=BODY_FONT, fontSize=10.5, textColor=TEXT_PRIMARY,
    leading=15.5, spaceAfter=8, alignment=TA_LEFT)
style_callout = ParagraphStyle('callout', parent=style_body,
    fontName=BODY_BOLD, fontSize=10.5, textColor=ACCENT_2,
    leftIndent=12, rightIndent=12, spaceBefore=6, spaceAfter=6,
    borderColor=ACCENT, borderWidth=1, borderPadding=8, backColor=CARD_BG)
style_step = ParagraphStyle('step', parent=style_body,
    fontName=BODY_FONT, fontSize=10.5, textColor=TEXT_PRIMARY,
    leftIndent=20, leading=15.5, spaceAfter=6)
style_url = ParagraphStyle('url', parent=style_body,
    fontName="NotoSans", fontSize=9.5, textColor=SEM_INFO,
    leftIndent=20, spaceAfter=4)
style_quote = ParagraphStyle('quote', parent=style_body,
    fontName="NotoSerif", fontSize=10, textColor=TEXT_MUTED,
    leftIndent=18, rightIndent=18, leading=14, spaceBefore=8, spaceAfter=8)
style_toc_h1 = ParagraphStyle('toc1', fontName=HEAD_BOLD, fontSize=11,
    textColor=HEADER_FILL, leftIndent=0, spaceBefore=6, spaceAfter=2, leading=14)
style_toc_h2 = ParagraphStyle('toc2', fontName=BODY_FONT, fontSize=10,
    textColor=TEXT_MUTED, leftIndent=16, spaceBefore=2, spaceAfter=2, leading=13)

# === TOC ===
class TocDocTemplate(SimpleDocTemplate):
    def afterFlowable(self, flowable):
        if hasattr(flowable, 'bookmark_name'):
            level = getattr(flowable, 'bookmark_level', 0)
            text = getattr(flowable, 'bookmark_text', '')
            key = getattr(flowable, 'bookmark_key', '')
            self.notify('TOCEntry', (level, text, self.page, key))

def add_heading(text, style, level=0):
    key = f'h_{hashlib.md5(text.encode()).hexdigest()[:8]}'
    p = Paragraph(f'<a name="{key}"/>{text}', style)
    p.bookmark_name = key
    p.bookmark_level = level
    p.bookmark_text = text
    p.bookmark_key = key
    return p

# === PAGE DECORATIONS ===
def cover_page(canvas, doc):
    w, h = A4
    c = canvas
    c.setFillColor(COVER_BLOCK)
    c.rect(0, 0, w, h, fill=1, stroke=0)
    c.setFillColorRGB(0.83, 0.69, 0.22, alpha=0.10)
    c.rect(0, h * 0.45, w, h * 0.55, fill=1, stroke=0)
    c.setFillColor(ACCENT)
    c.rect(0, 0, 8, h, fill=1, stroke=0)
    c.setStrokeColor(ACCENT)
    c.setLineWidth(1.5)
    c.line(w * 0.10, h * 0.42, w * 0.90, h * 0.42)
    c.setFillColorRGB(0.83, 0.69, 0.22, alpha=0.08)
    c.setFont(HEAD_BOLD, 240)
    c.drawCentredString(w / 2, h * 0.55, "M·A·M")
    c.setFillColor(colors.white)
    c.setFont(HEAD_BOLD, 32)
    c.drawCentredString(w / 2, h * 0.35, "FORZA L'INDICIZZAZIONE")
    c.drawCentredString(w / 2, h * 0.30, "SU GOOGLE")
    c.setFillColor(ACCENT)
    c.setFont(HEAD_BOLD, 16)
    c.drawCentredString(w / 2, h * 0.24, "Guida operativa per Google Search Console")
    c.setFillColorRGB(1, 1, 1, alpha=0.7)
    c.setFont(BODY_FONT, 11)
    c.drawCentredString(w / 2, h * 0.18, "Maria Antonina Macaluso — Attrice Siciliana")
    c.drawCentredString(w / 2, h * 0.155, "Enciclopedia digitale ufficiale")
    c.setFillColorRGB(1, 1, 1, alpha=0.5)
    c.setFont(BODY_FONT, 9)
    c.drawCentredString(w / 2, h * 0.06, "Documento operativo · Versione 1.0 · Agosto 2026")
    c.showPage()

def body_page(canvas, doc):
    w, h = A4
    c = canvas
    c.setFillColor(HEADER_FILL)
    c.rect(0, h - 14, w, 14, fill=1, stroke=0)
    c.setFillColor(ACCENT)
    c.rect(0, h - 16, w, 2, fill=1, stroke=0)
    c.setFillColor(colors.white)
    c.setFont(HEAD_BOLD, 8.5)
    c.drawString(20, h - 10, "FORZA INDICIZZAZIONE · Maria Antonina Macaluso")
    c.drawRightString(w - 20, h - 10, "Guida operativa")
    c.setFillColor(TEXT_MUTED)
    c.setFont(BODY_FONT, 8)
    c.drawString(20, 16, "Enciclopedia digitale · maria-antonina-macaluso.vercel.app")
    c.drawRightString(w - 20, 16, f"Pag. {doc.page - 1}")
    c.setStrokeColor(BORDER)
    c.setLineWidth(0.4)
    c.line(20, 22, w - 20, 22)
    c.showPage()

# === 10 URL PRINCIPALI DA INDICIZZARE ===
URLS_TO_INDEX = [
    ("Homepage", "/", "Pagina principale con Knowledge Panel e tutte le sezioni"),
    ("Biografia", "/biografia", "Biografia completa di Maria Antonina Macaluso"),
    ("Filmografia", "/filmografia", "Lista di tutti i 10 film con copertine"),
    ("Collaborazioni", "/collaborazioni", "Sodalizio artistico con Angelo Faraci"),
    ("Angelo Faraci", "/angelo-faraci", "Pagina dedicata al regista Angelo Faraci"),
    ("Contatti", "/contatti", "Pagina contatti ufficiale e social"),
    ("FAQ", "/faq", "Domande frequenti per SEO long-tail"),
    ("Photo Book", "/photobook", "Galleria 84 foto 8K Ultra HD"),
    ("Timeline", "/timeline", "Cronologia eventi 2019-2026"),
    ("Premi", "/premi", "4 premi ricevuti da Maria Antonina"),
]

def build():
    os.makedirs(os.path.dirname(OUTPUT_PATH), exist_ok=True)
    doc = TocDocTemplate(
        OUTPUT_PATH, pagesize=A4,
        leftMargin=22*mm, rightMargin=22*mm,
        topMargin=24*mm, bottomMargin=22*mm,
        title="Guida Indicizzazione Manuale — Maria Antonina Macaluso",
        author="Maria Antonina Macaluso",
        subject="Guida operativa per forzare indicizzazione su Google Search Console",
        creator="Enciclopedia Digitale Maria Antonina Macaluso",
    )

    story = []
    story.append(PageBreak())

    # === TOC ===
    story.append(add_heading("Indice", style_h1, level=0))
    story.append(Paragraph(
        "Questa guida ti accompagna passo-passo nella procedura di ispezione e "
        "richiesta di indicizzazione manuale su Google Search Console per i 10 URL "
        "principali del sito di Maria Antonina Macaluso. La procedura accelera "
        "l'indicizzazione da 3-7 giorni (crawl naturale) a 24-48 ore (richiesta manuale).",
        style_body
    ))
    story.append(Spacer(1, 6))
    toc = TableOfContents()
    toc.levelStyles = [style_toc_h1, style_toc_h2]
    story.append(toc)
    story.append(PageBreak())

    # === INTRODUZIONE ===
    story.append(add_heading("1. Introduzione", style_h1, level=0))
    story.append(Paragraph(
        "Dopo aver applicato tutti i fix tecnici SEO (BreadcrumbList JSON-LD in 24 pagine, "
        "hreflang it-IT + x-default, notifica IndexNow a 112 URL), il sito di Maria Antonina "
        "Macaluso è tecnicamente pronto per essere indicizzato completamente da Google. Tuttavia, "
        "al momento solo 10 URL su 112 sono visibili nei risultati di ricerca Google — gli altri "
        "102 sono in attesa di essere scoperti dal crawler Googlebot.",
        style_body
    ))
    story.append(Paragraph(
        "Per accelerare questo processo, Google offre uno strumento ufficiale in Search Console "
        "chiamato <b>«Ispezione URL»</b> che permette di verificare lo stato di indicizzazione di "
        "una singola pagina e, se necessario, richiedere manualmente l'indicizzazione. Questo "
        "metodo è molto più veloce del crawl naturale: le pagine richieste manualmente vengono "
        "tipicamente indicizzate entro 24-48 ore, mentre il crawl automatico può richiedere da "
        "3 a 7 giorni per ogni singola pagina.",
        style_body
    ))
    story.append(Paragraph(
        "Questa guida descrive passo-passo la procedura da seguire per i 10 URL principali del "
        "sito. Tempo totale stimato: 30-40 minuti (3-4 minuti per ogni URL).",
        style_callout
    ))
    story.append(PageBreak())

    # === STEP 1 — PREREQUISITI ===
    story.append(add_heading("2. Step 1 — Prerequisiti", style_h1, level=0))
    story.append(Paragraph(
        "Prima di iniziare la procedura di ispezione, verifica di avere tutti i prerequisiti "
        "necessari per accedere a Google Search Console e utilizzare lo strumento di Ispezione URL.",
        style_body
    ))

    story.append(add_heading("2.1 Account Google autorizzato", style_h2, level=1))
    story.append(Paragraph(
        "Devi accedere a Google Search Console con lo stesso account Google che ha rivendicato "
        "la proprietà del sito <b>maria-antonina-macaluso.vercel.app</b>. L'account deve avere "
        "almeno il ruolo di «Proprietario» o «Utente completo» per poter utilizzare la funzione "
        "«Richiedi indicizzazione». Se non sei sicuro di quale account sia autorizzato, accedi "
        "a search.google.com/search-console con l'account usato per la rivendicazione del "
        "Knowledge Panel.",
        style_body
    ))

    story.append(add_heading("2.2 Proprietà verificata", style_h2, level=1))
    story.append(Paragraph(
        "La proprietà <b>maria-antonina-macaluso.vercel.app</b> deve essere verificata in Search "
        "Console. La verifica è stata già completata tramite il meta tag google-site-verification "
        "presente nell'HTML della homepage: <i>7k8LbVSFjRug2y5x-E2w6CGy4aYIIqHUaR66LnNMbhQ</i>. "
        "Per verificare lo stato, accedi a Search Console → seleziona la proprietà → guarda in "
        "basso a sinistra «Impostazioni» → «Verifica proprietà».",
        style_body
    ))

    story.append(add_heading("2.3 Lista URL da indicizzare", style_h2, level=1))
    story.append(Paragraph(
        "Prepara la lista dei 10 URL principali da ispezionare. Tutti gli URL sono relativi "
        "al dominio <b>maria-antonina-macaluso.vercel.app</b>:",
        style_body
    ))

    url_data = [["#", "Pagina", "Path", "Descrizione"]]
    for i, (name, path, desc) in enumerate(URLS_TO_INDEX, 1):
        url_data.append([str(i), name, path, desc])

    url_table = Table(url_data, colWidths=[10*mm, 35*mm, 40*mm, 80*mm])
    url_table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), HEADER_FILL),
        ('TEXTCOLOR', (0, 0), (-1, 0), colors.white),
        ('FONTNAME', (0, 0), (-1, 0), HEAD_BOLD),
        ('FONTNAME', (0, 1), (-1, -1), BODY_FONT),
        ('FONTSIZE', (0, 0), (-1, -1), 9),
        ('ALIGN', (0, 0), (-1, 0), 'LEFT'),
        ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
        ('GRID', (0, 0), (-1, -1), 0.5, BORDER),
        ('ROWBACKGROUNDS', (0, 1), (-1, -1), [colors.white, TABLE_STRIPE]),
        ('TOPPADDING', (0, 0), (-1, -1), 5),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 5),
        ('LEFTPADDING', (0, 0), (-1, -1), 6),
    ]))
    story.append(url_table)
    story.append(Spacer(1, 8))
    story.append(Paragraph(
        "URL completo da incollare in Search Console per ciascuna riga: "
        "<i>https://maria-antonina-macaluso.vercel.app</i> + path della colonna «Path».",
        style_body
    ))
    story.append(PageBreak())

    # === STEP 2 — ACCEDI A SEARCH CONSOLE ===
    story.append(add_heading("3. Step 2 — Accedi a Google Search Console", style_h1, level=0))
    story.append(Paragraph(
        "La prima operazione da fare è accedere a Google Search Console con l'account "
        "autorizzato. Search Console è lo strumento ufficiale di Google per i webmaster e "
        "permette di monitorare l'indicizzazione, le performance di ricerca, i backlink e "
        "molto altro. Per il nostro obiettivo, utilizzeremo esclusivamente la funzione "
        "«Ispezione URL».",
        style_body
    ))

    story.append(add_heading("3.1 Apri il browser e vai su Search Console", style_h2, level=1))
    story.append(Paragraph(
        "Apri il browser web (Chrome, Safari, Firefox o Edge) e digita nella barra degli "
        "indirizzi: <b>search.google.com/search-console</b>. Premi Invio. Verrai reindirizzato "
        "alla pagina di login di Google se non sei già autenticato.",
        style_body
    ))
    story.append(Paragraph(
        "Se non sei autenticato, inserisci email e password dell'account Google autorizzato. "
        "Se sei già autenticato con un account Google ma non quello giusto, clicca sull'avatar "
        "in alto a destra → «Aggiungi un altro account» → inserisci le credenziali dell'account "
        "autorizzato per la proprietà maria-antonina-macaluso.vercel.app.",
        style_step
    ))

    story.append(add_heading("3.2 Seleziona la proprietà corretta", style_h2, level=1))
    story.append(Paragraph(
        "Una volta autenticato, vedrai la dashboard di Search Console con l'elenco delle "
        "proprietà a cui hai accesso (in alto a sinistra, sotto il logo Google Search Console). "
        "Clicca sul selettore di proprietà (a forma di freccia giù) e seleziona "
        "<b>maria-antonina-macaluso.vercel.app</b> dall'elenco a discesa.",
        style_body
    ))
    story.append(Paragraph(
        "Se la proprietà non appare nell'elenco, significa che l'account Google che stai usando "
        "non è autorizzato. In tal caso, contatta chi ha verificato la proprietà e chiedi di "
        "essere aggiunto come utente autorizzato (Search Console → Impostazioni → Utenti e "
        "autorizzazioni → Aggiungi utente).",
        style_callout
    ))

    story.append(add_heading("3.3 Verifica di essere nella proprietà giusta", style_h2, level=1))
    story.append(Paragraph(
        "Dopo aver selezionato la proprietà, in alto a sinistra vedrai il nome del dominio: "
        "<b>maria-antonina-macaluso.vercel.app</b>. Verifica che sia quello corretto prima di "
        "procedere. Sotto il nome del dominio vedrai il menu di navigazione con le voci: "
        "«Panoramica», «Prestazioni», «Copertura», «Sitemap», ecc.",
        style_body
    ))
    story.append(PageBreak())

    # === STEP 3 — ISPEZIONE URL ===
    story.append(add_heading("4. Step 3 — Ispezione del primo URL", style_h1, level=0))
    story.append(Paragraph(
        "Ora inizia la procedura vera e propria. Ripeterai questi step per ognuno dei 10 URL "
        "della lista. Per il primo URL utilizzeremo la homepage come esempio, ma la procedura "
        "è identica per tutti gli altri.",
        style_body
    ))

    story.append(add_heading("4.1 Trova la barra di ispezione URL", style_h2, level=1))
    story.append(Paragraph(
        "In alto al centro della dashboard di Search Console, vedrai una barra di ricerca "
        "con il placeholder «Ispeziona URL nel dominio Maria Antonina Macaluso». Questa è la "
        "barra di Ispezione URL — il nostro strumento principale per tutto il resto della "
        "procedura.",
        style_body
    ))

    story.append(add_heading("4.2 Incolla il primo URL", style_h2, level=1))
    story.append(Paragraph(
        "Copia il seguente URL completo e incollalo nella barra di ispezione:",
        style_body
    ))
    story.append(Paragraph(
        "<b>https://maria-antonina-macaluso.vercel.app/</b>",
        style_url
    ))
    story.append(Paragraph(
        "Premi Invio oppure clicca sul pulsante «Ispeziona» (o lente di ingrandimento) a "
        "destra della barra. Google inizierà a caricare il rapporto di ispezione — questo "
        "può richiedere da 5 a 15 secondi.",
        style_step
    ))

    story.append(add_heading("4.3 Analizza il rapporto di ispezione", style_h2, level=1))
    story.append(Paragraph(
        "Una volta completato il caricamento, vedrai una schermata con il risultato "
        "dell'ispezione. Sono possibili 3 scenari principali:",
        style_body
    ))

    scenario_data = [
        ["Scenario", "Cosa significa", "Azione"],
        ["URL indexed — L'URL è in Google", "Già indicizzato", "✓ Fatto, passa al prossimo URL"],
        ["URL not indexed — Non in Google", "Non ancora indicizzato", "→ Richiedi indicizzazione (Step 4.4)"],
        ["URL non riconosciuto da Google", "Prima visita", "→ Richiedi indicizzazione (Step 4.4)"],
    ]
    scenario_table = Table(scenario_data, colWidths=[50*mm, 50*mm, 65*mm])
    scenario_table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), HEADER_FILL),
        ('TEXTCOLOR', (0, 0), (-1, 0), colors.white),
        ('FONTNAME', (0, 0), (-1, 0), HEAD_BOLD),
        ('FONTNAME', (0, 1), (-1, -1), BODY_FONT),
        ('FONTSIZE', (0, 0), (-1, -1), 9),
        ('ALIGN', (0, 0), (-1, 0), 'LEFT'),
        ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
        ('GRID', (0, 0), (-1, -1), 0.5, BORDER),
        ('ROWBACKGROUNDS', (0, 1), (-1, -1), [colors.white, TABLE_STRIPE]),
        ('TOPPADDING', (0, 0), (-1, -1), 6),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 6),
        ('LEFTPADDING', (0,0), (-1,-1), 8),
    ]))
    story.append(scenario_table)
    story.append(Spacer(1, 8))

    story.append(add_heading("4.4 Richiedi indicizzazione", style_h2, level=1))
    story.append(Paragraph(
        "Se l'URL risulta «Non indicizzato» o «Non riconosciuto da Google», cerca in alto "
        "a destra della schermata il pulsante <b>«Richiedi indicizzazione»</b> (testo blu, "
        "cliccabile). Cliccalo. Google mostrerà un messaggio di conferma:",
        style_body
    ))
    story.append(Paragraph(
        "<i>«Richiesta di indicizzazione inviata. Le pagine richieste vengono aggiunte "
        "alla coda di scansione di Google. In genere ci vogliono 1-2 giorni per "
        "l'elaborazione.»</i>",
        style_quote
    ))
    story.append(Paragraph(
        "Una volta ricevuta questa conferma, l'URL è in coda per essere scansionato e "
        "indicizzato entro 24-48 ore. Ripeti la procedura per tutti gli altri URL della lista.",
        style_body
    ))
    story.append(PageBreak())

    # === STEP 4 — LISTA URL DA ISPEZIONARE ===
    story.append(add_heading("5. Step 4 — Lista completa URL da ispezionare", style_h1, level=0))
    story.append(Paragraph(
        "Ecco la lista completa dei 10 URL da ispezionare. Per ogni URL, segui la procedura "
        "descritta nello Step 3: incolla l'URL nella barra di ispezione → analizza il risultato → "
        "se non indicizzato, clicca «Richiedi indicizzazione».",
        style_body
    ))

    story.append(add_heading("URL 1 — Homepage", style_h2, level=1))
    story.append(Paragraph("<b>https://maria-antonina-macaluso.vercel.app/</b>", style_url))
    story.append(Paragraph(
        "La homepage è la pagina più importante del sito. Contiene il Knowledge Panel, tutte le "
        "sezioni principali (Biografia, Filmografia, Altre Produzioni, Angelo Faraci, Timeline, "
        "Photo Book, Premi, Contatti) e il JSON-LD Person arricchito con 12 sameAs, 5 subjectOf, "
        "10 Movie, 4 TVSeries. Deve essere indicizzata per prima.",
        style_body
    ))

    story.append(add_heading("URL 2 — Biografia", style_h2, level=1))
    story.append(Paragraph("<b>https://maria-antonina-macaluso.vercel.app/biografia</b>", style_url))
    story.append(Paragraph(
        "Pagina biografia completa con 8 capitoli di vita e cinema, dall'incontro con Angelo "
        "Faraci nel 2019 al film Pochi Attimi (2026). Include BreadcrumbList JSON-LD per aiutare "
        "Google a capire la gerarchia del sito.",
        style_body
    ))

    story.append(add_heading("URL 3 — Filmografia", style_h2, level=1))
    story.append(Paragraph("<b>https://maria-antonina-macaluso.vercel.app/filmografia</b>", style_url))
    story.append(Paragraph(
        "Lista di tutti i 10 film con copertine originali, regista, anno, produzione e descrizione. "
        "Pagina cruciale per il Knowledge Panel perché Google estrae da qui la filmografia.",
        style_body
    ))

    story.append(add_heading("URL 4 — Collaborazioni", style_h2, level=1))
    story.append(Paragraph("<b>https://maria-antonina-macaluso.vercel.app/collaborazioni</b>", style_url))
    story.append(Paragraph(
        "Sodalizio artistico tra Maria Antonina Macaluso e Angelo Faraci: 7 film condivisi dal "
        "2019 al 2026. Importante per il Knowledge Graph di Google.",
        style_body
    ))

    story.append(add_heading("URL 5 — Angelo Faraci", style_h2, level=1))
    story.append(Paragraph("<b>https://maria-antonina-macaluso.vercel.app/angelo-faraci</b>", style_url))
    story.append(Paragraph(
        "Pagina dedicata al regista Angelo Faraci, compagno artistico e di vita di Maria Antonina. "
        "Importante per la sezione «Compagno» del Knowledge Panel.",
        style_body
    ))

    story.append(add_heading("URL 6 — Contatti", style_h2, level=1))
    story.append(Paragraph("<b>https://maria-antonina-macaluso.vercel.app/contatti</b>", style_url))
    story.append(Paragraph(
        "Pagina contatti ufficiale con email, social profiles (Instagram, Facebook, TikTok) e "
        "link a IMDb. Importante per i fact rows del Knowledge Panel.",
        style_body
    ))

    story.append(add_heading("URL 7 — FAQ", style_h2, level=1))
    story.append(Paragraph("<b>https://maria-antonina-macaluso.vercel.app/faq</b>", style_url))
    story.append(Paragraph(
        "15 domande frequenti per SEO long-tail. Le FAQ appaiono nei risultati Google come "
        "«People also ask» e generano traffico organico importante.",
        style_body
    ))

    story.append(add_heading("URL 8 — Photo Book", style_h2, level=1))
    story.append(Paragraph("<b>https://maria-antonina-macaluso.vercel.app/photobook</b>", style_url))
    story.append(Paragraph(
        "Galleria con 84 foto 8K Ultra HD di Maria Antonina Macaluso. Google potrebbe usare "
        "queste foto per il photo carousel del Knowledge Panel.",
        style_body
    ))

    story.append(add_heading("URL 9 — Timeline", style_h2, level=1))
    story.append(Paragraph("<b>https://maria-antonina-macaluso.vercel.app/timeline</b>", style_url))
    story.append(Paragraph(
        "Cronologia degli eventi principali dal 2019 al 2026. Aiuta Google a costruire una "
        "narrazione coerente per il Knowledge Graph.",
        style_body
    ))

    story.append(add_heading("URL 10 — Premi", style_h2, level=1))
    story.append(Paragraph("<b>https://maria-antonina-macaluso.vercel.app/premi</b>", style_url))
    story.append(Paragraph(
        "4 premi ricevuti da Maria Antonina: Migliore Attrice Emergente (2021), Premio Speciale "
        "della Giuria Taormina (2022), Attrice Rivelazione Fiuggi (2023), Migliore Attrice "
        "Protagonista Mediterranean Film Festival (2025).",
        style_body
    ))
    story.append(PageBreak())

    # === STEP 5 — DOPO LA RICHIESTA ===
    story.append(add_heading("6. Step 5 — Dopo la richiesta: cosa aspettarsi", style_h1, level=0))
    story.append(Paragraph(
        "Una volta richieste le indicizzazioni per tutti i 10 URL, Google le mette in coda. "
        "Il processo di scansione e indicizzazione avviene automaticamente nei giorni successivi. "
        "Non è necessario fare altro — ma è utile monitorare lo stato per verificare che tutto "
        "proceda correttamente.",
        style_body
    ))

    story.append(add_heading("6.1 Tempi previsti", style_h2, level=1))
    time_data = [
        ["Fase", "Tempo", "Cosa succede"],
        ["Invio richiesta", "Immediato", "URL in coda di scansione Googlebot"],
        ["Prima scansione", "24-48 ore", "Googlebot visita la pagina"],
        ["Indicizzazione", "24-48 ore", "URL appare in search results"],
        ["Propagazione completa", "3-7 giorni", "URL stabile in indice Google"],
    ]
    time_table = Table(time_data, colWidths=[45*mm, 30*mm, 90*mm])
    time_table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), HEADER_FILL),
        ('TEXTCOLOR', (0, 0), (-1, 0), colors.white),
        ('FONTNAME', (0, 0), (-1, 0), HEAD_BOLD),
        ('FONTNAME', (0, 1), (-1, -1), BODY_FONT),
        ('FONTSIZE', (0, 0), (-1, -1), 9.5),
        ('ALIGN', (0, 0), (-1, 0), 'LEFT'),
        ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
        ('GRID', (0, 0), (-1, -1), 0.5, BORDER),
        ('ROWBACKGROUNDS', (0, 1), (-1, -1), [colors.white, TABLE_STRIPE]),
        ('TOPPADDING', (0, 0), (-1, -1), 6),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 6),
        ('LEFTPADDING', (0,0), (-1,-1), 8),
    ]))
    story.append(time_table)
    story.append(Spacer(1, 8))

    story.append(add_heading("6.2 Come monitorare lo stato", style_h2, level=1))
    story.append(Paragraph(
        "Per verificare che gli URL siano stati effettivamente indicizzati, torna in Search "
        "Console → sezione «Copertura» → scheda «Tutte le pagine note». Vedrai l'elenco di "
        "tutte le pagine indicizzate da Google. Aggiorna la pagina ogni 24 ore per vedere "
        "i nuovi URL che entrano nell'indice.",
        style_body
    ))
    story.append(Paragraph(
        "In alternativa, puoi fare una ricerca Google per <i>site:maria-antonina-macaluso.vercel.app</i> "
        "(senza spazi) — Google mostrerà tutti gli URL del sito che ha indicizzato. All'inizio "
        "vedrai 10 risultati, nei prossimi giorni dovresti veder crescere il numero fino a "
        "raggiungere 112 URL totali.",
        style_body
    ))

    story.append(add_heading("6.3 Cosa fare se un URL non viene indicizzato", style_h2, level=1))
    story.append(Paragraph(
        "Se dopo 7 giorni un URL richiesto non è ancora indicizzato, possibili cause e soluzioni:",
        style_body
    ))
    issue_data = [
        ["Problema", "Soluzione"],
        ["Contenuto duplicato o thin", "Verifica che la pagina abbia contenuti unici e sostanziosi (>300 parole)"],
        ["Errori 404/500", "Verifica con URL Inspection che la pagina risponda HTTP 200"],
        ["Canonical errato", "Verifica che il canonical punti all'URL corretto (no redirect)"],
        ["Robots.txt blocca", "Verifica che robots.txt non blocchi Googlebot (già verificato: Allow)"],
        ["Noindex meta tag", "Verifica che non ci sia <meta name=\"robots\" content=\"noindex\"> nella pagina"],
        ["Sovraccarico Googlebot", "Attendi altri 3-5 giorni — Google ha limiti di crawl per dominio"],
    ]
    issue_table = Table(issue_data, colWidths=[55*mm, 110*mm])
    issue_table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), HEADER_FILL),
        ('TEXTCOLOR', (0, 0), (-1, 0), colors.white),
        ('FONTNAME', (0, 0), (-1, 0), HEAD_BOLD),
        ('FONTNAME', (0, 1), (-1, -1), BODY_FONT),
        ('FONTSIZE', (0, 0), (-1, -1), 9.5),
        ('ALIGN', (0, 0), (-1, 0), 'LEFT'),
        ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
        ('GRID', (0, 0), (-1, -1), 0.5, BORDER),
        ('ROWBACKGROUNDS', (0, 1), (-1, -1), [colors.white, TABLE_STRIPE]),
        ('TOPPADDING', (0, 0), (-1, -1), 6),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 6),
        ('LEFTPADDING', (0,0), (-1,-1), 8),
    ]))
    story.append(issue_table)
    story.append(PageBreak())

    # === STEP 6 — INVIARE SITEMAP ===
    story.append(add_heading("7. Step 6 — Invia la sitemap a Google", style_h1, level=0))
    story.append(Paragraph(
        "Oltre all'ispezione manuale dei singoli URL, è fondamentale inviare la sitemap XML "
        "a Google Search Console. La sitemap è un file che elenca tutti gli URL del sito "
        "(112 URL totali) e aiuta Google a scoprirli tutti in una sola volta.",
        style_body
    ))

    story.append(add_heading("7.1 Vai alla sezione Sitemap", style_h2, level=1))
    story.append(Paragraph(
        "In Search Console, clicca su «Sitemap» nel menu di navigazione a sinistra (sotto "
        "«Copertura»). Verrai portato alla pagina di gestione delle sitemap.",
        style_body
    ))

    story.append(add_heading("7.2 Inserisci l'URL della sitemap", style_h2, level=1))
    story.append(Paragraph(
        "In alto alla pagina vedrai un campo di input con il placeholder «Inserisci l'URL "
        "della sitemap». Il dominio è già precompilato (maria-antonina-macaluso.vercel.app). "
        "Nel campo di input, digita: <b>/sitemap.xml</b>",
        style_body
    ))
    story.append(Paragraph(
        "L'URL completo sarà: <i>https://maria-antonina-macaluso.vercel.app/sitemap.xml</i>",
        style_url
    ))

    story.append(add_heading("7.3 Invia la sitemap", style_h2, level=1))
    story.append(Paragraph(
        "Clicca sul pulsante «Invia» a destra del campo di input. Google elaborerà la sitemap "
        "in pochi secondi e mostrerà lo stato «Riuscita» con il numero di URL scoperti: <b>112</b>.",
        style_body
    ))
    story.append(Paragraph(
        "Una volta inviata la sitemap, Google inizierà a scansionare tutti gli 112 URL nei "
        "prossimi 3-7 giorni. Combina questo metodo con l'ispezione manuale dei 10 URL "
        "principali per ottenere l'indicizzazione completa nel minor tempo possibile.",
        style_callout
    ))
    story.append(PageBreak())

    # === CHECKLIST FINALE ===
    story.append(add_heading("8. Checklist operativa", style_h1, level=0))
    story.append(Paragraph(
        "Stampa questa pagina e spunta ogni voce man mano che completi la procedura. "
        "Tutte le voci devono essere spuntate prima di considerare l'operazione conclusa.",
        style_body
    ))
    checklist = [
        "Accesso a Google Search Console con account autorizzato",
        "Proprietà maria-antonina-macaluso.vercel.app selezionata",
        "URL 1 (Homepage) ispezionato e richiesto",
        "URL 2 (Biografia) ispezionato e richiesto",
        "URL 3 (Filmografia) ispezionato e richiesto",
        "URL 4 (Collaborazioni) ispezionato e richiesto",
        "URL 5 (Angelo Faraci) ispezionato e richiesto",
        "URL 6 (Contatti) ispezionato e richiesto",
        "URL 7 (FAQ) ispezionato e richiesto",
        "URL 8 (Photo Book) ispezionato e richiesto",
        "URL 9 (Timeline) ispezionato e richiesto",
        "URL 10 (Premi) ispezionato e richiesto",
        "Sitemap inviata a Google (112 URL)",
        "Verifica stato dopo 24 ore in Search Console → Copertura",
        "Verifica stato dopo 48 ore con site:maria-antonina-macaluso.vercel.app",
        "Verifica completa dopo 7 giorni (112 URL indicizzati)",
    ]
    checklist_data = [["☐", item] for item in checklist]
    checklist_table = Table(checklist_data, colWidths=[10*mm, 155*mm])
    checklist_table.setStyle(TableStyle([
        ('FONTNAME', (0, 0), (0, -1), HEAD_BOLD),
        ('FONTNAME', (1, 0), (1, -1), BODY_FONT),
        ('FONTSIZE', (0, 0), (-1, -1), 10),
        ('ALIGN', (0, 0), (0, -1), 'CENTER'),
        ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
        ('GRID', (0, 0), (-1,-1), 0.3, BORDER),
        ('ROWBACKGROUNDS', (0, 0), (-1, -1), [colors.white, TABLE_STRIPE]),
        ('TOPPADDING', (0, 0), (-1, -1), 6),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 6),
        ('LEFTPADDING', (0,0), (-1,-1), 8),
        ('TEXTCOLOR', (0, 0), (0, -1), ACCENT),
    ]))
    story.append(checklist_table)
    story.append(Spacer(1, 16))
    story.append(HRFlowable(width="100%", thickness=1, color=BORDER))
    story.append(Spacer(1, 10))
    story.append(Paragraph(
        "<b>Tempo totale stimato</b>: 30-40 minuti (3-4 minuti per ogni URL) + 24-48 ore "
        "per l'indicizzazione effettiva da parte di Google.",
        style_callout
    ))
    story.append(Spacer(1, 8))
    story.append(Paragraph(
        "<b>Contatti utili</b><br/>"
        "• Google Search Console: search.google.com/search-console<br/>"
        "• Help Search Console: support.google.com/webmasters<br/>"
        "• Verifica stato: site:maria-antonina-macaluso.vercel.app<br/>"
        "• Sitemap: maria-antonina-macaluso.vercel.app/sitemap.xml<br/>"
        "• Email supporto: mariantonina63@gmail.com",
        style_body
    ))

    doc.multiBuild(
        story,
        onFirstPage=cover_page,
        onLaterPages=body_page,
    )
    print(f"✓ PDF generato: {OUTPUT_PATH}")
    print(f"  Dimensione: {os.path.getsize(OUTPUT_PATH) / 1024:.1f} KB")

if __name__ == "__main__":
    build()
