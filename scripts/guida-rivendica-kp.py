#!/usr/bin/env python3
"""
Guida completa per rivendicare il Knowledge Panel Google di Maria Antonina Macaluso.
Output: PDF con cover + guida step-by-step.
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

# === BRAND PALETTE (cinema siciliano — noir + oro) ===
PAGE_BG       = colors.HexColor('#fdfcfa')
SECTION_BG    = colors.HexColor('#f8f5f0')
CARD_BG       = colors.HexColor('#f3ede4')
TABLE_STRIPE  = colors.HexColor('#f9f6f1')
HEADER_FILL   = colors.HexColor('#3d1810')  # cinema noir
COVER_BLOCK   = colors.HexColor('#1a0d0a')
BORDER        = colors.HexColor('#d4af37')  # oro
ICON          = colors.HexColor('#a1842b')
ACCENT        = colors.HexColor('#d4af37')  # oro
ACCENT_2      = colors.HexColor('#5c2419')  # bordeaux
TEXT_PRIMARY   = colors.HexColor('#1a0d0a')
TEXT_MUTED     = colors.HexColor('#5c4a3a')
SEM_SUCCESS   = colors.HexColor('#41955d')
SEM_WARNING   = colors.HexColor('#ae8d4a')
SEM_ERROR     = colors.HexColor('#a8534b')
SEM_INFO      = colors.HexColor('#4d7aa7')

OUTPUT_PATH = "/home/z/my-project/download/guida-rivendica-knowledge-panel.pdf"

# === STYLES ===
styles = getSampleStyleSheet()

style_h1 = ParagraphStyle(
    'h1', parent=styles['Heading1'],
    fontName=HEAD_BOLD, fontSize=22, textColor=HEADER_FILL,
    spaceBefore=18, spaceAfter=12, leading=28, alignment=TA_LEFT,
    borderColor=ACCENT, borderWidth=0, borderPadding=0,
)
style_h2 = ParagraphStyle(
    'h2', parent=styles['Heading2'],
    fontName=HEAD_BOLD, fontSize=15, textColor=ACCENT_2,
    spaceBefore=14, spaceAfter=8, leading=20, alignment=TA_LEFT,
)
style_h3 = ParagraphStyle(
    'h3', parent=styles['Heading3'],
    fontName=HEAD_BOLD, fontSize=12, textColor=HEADER_FILL,
    spaceBefore=10, spaceAfter=6, leading=16, alignment=TA_LEFT,
)
style_body = ParagraphStyle(
    'body', parent=styles['BodyText'],
    fontName=BODY_FONT, fontSize=10.5, textColor=TEXT_PRIMARY,
    leading=15.5, spaceAfter=8, alignment=TA_LEFT,
    firstLineIndent=0,
)
style_callout = ParagraphStyle(
    'callout', parent=style_body,
    fontName=BODY_BOLD, fontSize=10.5, textColor=ACCENT_2,
    leftIndent=12, rightIndent=12, spaceBefore=6, spaceAfter=6,
    borderColor=ACCENT, borderWidth=1, borderPadding=8,
    backColor=CARD_BG,
)
style_step = ParagraphStyle(
    'step', parent=style_body,
    fontName=BODY_FONT, fontSize=10.5, textColor=TEXT_PRIMARY,
    leftIndent=20, leading=15.5, spaceAfter=6,
)
style_quote = ParagraphStyle(
    'quote', parent=style_body,
    fontName="NotoSerif", fontSize=10, textColor=TEXT_MUTED,
    leftIndent=18, rightIndent=18, leading=14, spaceBefore=8, spaceAfter=8,
    borderColor=BORDER, borderWidth=0, borderPadding=0,
)
style_toc_h1 = ParagraphStyle(
    'toc1', fontName=HEAD_BOLD, fontSize=11, textColor=HEADER_FILL,
    leftIndent=0, spaceBefore=6, spaceAfter=2, leading=14,
)
style_toc_h2 = ParagraphStyle(
    'toc2', fontName=BODY_FONT, fontSize=10, textColor=TEXT_MUTED,
    leftIndent=16, spaceBefore=2, spaceAfter=2, leading=13,
)

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
    """Cover page — cinematic dark theme with gold accents."""
    w, h = A4
    c = canvas
    # Sfondo full-bleed cinema noir
    c.setFillColor(COVER_BLOCK)
    c.rect(0, 0, w, h, fill=1, stroke=0)
    # Gradient simulato con overlay oro
    c.setFillColorRGB(0.83, 0.69, 0.22, alpha=0.10)
    c.rect(0, h * 0.45, w, h * 0.55, fill=1, stroke=0)
    # Striscia oro laterale sinistra
    c.setFillColor(ACCENT)
    c.rect(0, 0, 8, h, fill=1, stroke=0)
    # Linea separatrice orizzontale oro
    c.setStrokeColor(ACCENT)
    c.setLineWidth(1.5)
    c.line(w * 0.10, h * 0.42, w * 0.90, h * 0.42)
    # Monogramma "MAM" decorativo (grande, semi-trasparente)
    c.setFillColorRGB(0.83, 0.69, 0.22, alpha=0.08)
    c.setFont(HEAD_BOLD, 240)
    c.drawCentredString(w / 2, h * 0.55, "M·A·M")
    # Titolo principale
    c.setFillColor(colors.white)
    c.setFont(HEAD_BOLD, 32)
    c.drawCentredString(w / 2, h * 0.35, "RIVENDICA IL TUO")
    c.drawCentredString(w / 2, h * 0.30, "KNOWLEDGE PANEL")
    # Sottotitolo
    c.setFillColor(ACCENT)
    c.setFont(HEAD_BOLD, 16)
    c.drawCentredString(w / 2, h * 0.24, "Guida operativa per Google Knowledge Graph")
    # Riga info
    c.setFillColorRGB(1, 1, 1, alpha=0.7)
    c.setFont(BODY_FONT, 11)
    c.drawCentredString(w / 2, h * 0.18, "Maria Antonina Macaluso — Attrice Siciliana")
    c.drawCentredString(w / 2, h * 0.155, "Enciclopedia digitale ufficiale")
    # Footer
    c.setFillColorRGB(1, 1, 1, alpha=0.5)
    c.setFont(BODY_FONT, 9)
    c.drawCentredString(w / 2, h * 0.06, "Documento operativo · Versione 1.0 · Agosto 2026")
    c.showPage()

def body_page(canvas, doc):
    """Body pages — minimal, clean, with header/footer."""
    w, h = A4
    c = canvas
    # Header sottile
    c.setFillColor(HEADER_FILL)
    c.rect(0, h - 14, w, 14, fill=1, stroke=0)
    c.setFillColor(ACCENT)
    c.rect(0, h - 16, w, 2, fill=1, stroke=0)
    # Testo header
    c.setFillColor(colors.white)
    c.setFont(HEAD_BOLD, 8.5)
    c.drawString(20, h - 10, "RIVENDICA KNOWLEDGE PANEL · Maria Antonina Macaluso")
    c.drawRightString(w - 20, h - 10, "Guida operativa")
    # Footer
    c.setFillColor(TEXT_MUTED)
    c.setFont(BODY_FONT, 8)
    c.drawString(20, 16, "Enciclopedia digitale · maria-antonina-macaluso.vercel.app")
    c.drawRightString(w - 20, 16, f"Pag. {doc.page - 1}")
    # Linea footer
    c.setStrokeColor(BORDER)
    c.setLineWidth(0.4)
    c.line(20, 22, w - 20, 22)
    c.showPage()

# === DOCUMENT BUILD ===
def build():
    os.makedirs(os.path.dirname(OUTPUT_PATH), exist_ok=True)
    doc = TocDocTemplate(
        OUTPUT_PATH,
        pagesize=A4,
        leftMargin=22*mm, rightMargin=22*mm,
        topMargin=24*mm, bottomMargin=22*mm,
        title="Guida Rivendica Knowledge Panel — Maria Antonina Macaluso",
        author="Maria Antonina Macaluso",
        subject="Guida operativa per rivendicare il Knowledge Panel Google",
        creator="Enciclopedia Digitale Maria Antonina Macaluso",
    )

    story = []
    # === Cover (handled by onFirstPage) ===
    story.append(PageBreak())

    # === TOC ===
    story.append(add_heading("Indice", style_h1, level=0))
    story.append(Paragraph(
        "Questa guida ti accompagna passo-passo nella rivendica ufficiale del Knowledge Panel Google di "
        "Maria Antonina Macaluso. Segui i capitoli nell'ordine indicato, spuntando ogni voce della checklist "
        "finale (Sezione 9) prima di considerare la procedura completata.",
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
        "Il Knowledge Panel di Google è il riquadro informativo che appare a destra dei risultati di ricerca "
        "(su desktop) o in cima (su mobile) quando un utente cerca il nome di una persona nota. Per Maria Antonina "
        "Macaluso, attrice siciliana nata a Bologna il 9 novembre 2001, Google ha già attivato un primo pannello "
        "base con nome, sottotitolo «Attrice», data di nascita e una piccola foto di profilo. Il pannello è "
        "riconoscibile come \"rivendicabile\" dall'opzione «Rivendica scheda informativa» che compare nel menu a tre "
        "puntini del pannello stesso.",
        style_body
    ))
    story.append(Paragraph(
        "Questa guida descrive passo-passo la procedura per rivendicare ufficialmente il Knowledge Panel, in modo "
        "che Maria Antonina (o chi la rappresenta) possa assumere il controllo del proprio pannello, verificare le "
        "informazioni, aggiungere foto, bio e dettagli mancanti, e gestire i contenuti che milioni di utenti vedranno "
        "su Google Search. La procedura è gratuita, ufficiale Google, e una volta completata permette di intervenire "
        "direttamente sui dati visualizzati nel pannello tramite Google Search Console.",
        style_body
    ))
    story.append(Paragraph(
        "Tempo stimato per il completamento: 30–60 minuti per la richiesta iniziale + 1–7 giorni per la "
        "verifica Google + 24–48 ore per la propagazione del pannello aggiornato.",
        style_callout
    ))
    story.append(PageBreak())

    # === STEP 1 — VERIFICA PREREQUISITI ===
    story.append(add_heading("2. Step 1 — Verifica prerequisiti", style_h1, level=0))
    story.append(Paragraph(
        "Prima di avviare la procedura di rivendicazione, è necessario disporre di alcuni requisiti fondamentali. "
        "Questa fase preparatoria è cruciale perché Google richiede prove concrete di identità e di associazione "
        "tra la persona fisica e l'entità del Knowledge Graph. Senza questi prerequisiti, la richiesta verrà "
        "automaticamente respinta dal sistema di verifica automatico.",
        style_body
    ))

    story.append(add_heading("2.1 Account Google attivo", style_h2, level=1))
    story.append(Paragraph(
        "È necessario disporre di un account Google personale e funzionante. L'account deve essere attivo da almeno "
        "30 giorni, con cronologia di login regolare e preferibilmente associato a un numero di telefono verificato. "
        "Si consiglia di utilizzare l'account Google personale di Maria Antonina stessa, o in alternativa un account "
        "dedicato gestito dall'agenzia di rappresentanza (Ancora Cinematografica). Evitare account temporanei o "
        "appena creati: Google li considera sospetti e potrebbe richiedere verifica telefonica aggiuntiva.",
        style_body
    ))

    story.append(add_heading("2.2 Email professionale verificata", style_h2, level=1))
    story.append(Paragraph(
        "Google richiede un'email verificata per comunicare l'esito della richiesta. Si consiglia di utilizzare "
        "l'email professionale già nota al pubblico: <b>mariantonina63@gmail.com</b>. Questa email deve poter "
        "ricevere messaggi da <i>search-console-support@google.com</i> e deve essere monitorata nei 7 giorni "
        "successivi alla richiesta. Verificare anche che l'email non sia filtrata come spam dai provider di posta.",
        style_body
    ))

    story.append(add_heading("2.3 Documento di identità valido", style_h2, level=1))
    story.append(Paragraph(
        "Google può richiedere, in fase di verifica avanzata, un documento di identità in corso di validità "
        "(carta d'identità, passaporto o patente) per confermare l'identità della persona che rivendica il "
        "pannello. Il documento deve riportare nome, cognome e data di nascita coerenti con i dati pubblici "
        "di Maria Antonina Macaluso. Il documento viene caricato in forma digitale e Google garantisce la "
        "cancellazione entro 30 giorni dalla verifica, in conformità con il GDPR.",
        style_body
    ))

    story.append(add_heading("2.4 Sito web ufficiale verificato", style_h2, level=1))
    story.append(Paragraph(
        "Il sito ufficiale <b>maria-antonina-macaluso.vercel.app</b> è già verificato in Google Search Console "
        "(codice verifica: <i>7k8LbVSFjRug2y5x-E2w6CGy4aYIIqHUaR66LnNMbhQ</i>). Questo è un vantaggio competitivo "
        "determinante: Google considererà la rivendicazione più attendibile perché il richiedente controlla già il "
        "dominio ufficiale dell'entità. Verificare di poter accedere a Google Search Console con l'account Google "
        "personale e di vedere la proprietà «maria-antonina-macaluso.vercel.app» nell'elenco delle proprietà.",
        style_body
    ))

    story.append(add_heading("2.5 Profili social verificati", style_h2, level=1))
    story.append(Paragraph(
        "Google utilizza i profili social come segnale di identità. I profili già pubblici e attivi sono:",
        style_body
    ))
    social_data = [
        ["Piattaforma", "Handle", "URL"],
        ["Instagram", "@mary.macaluso09", "instagram.com/mary.macaluso09"],
        ["Facebook", "@mary.macaluso.16", "facebook.com/mary.macaluso.16"],
        ["TikTok", "@mary.macaluso", "tiktok.com/@mary.macaluso"],
        ["IMDb", "nm14708762", "imdb.com/name/nm14708762"],
    ]
    social_table = Table(social_data, colWidths=[35*mm, 50*mm, 80*mm])
    social_table.setStyle(TableStyle([
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
        ('LEFTPADDING', (0, 0), (-1, -1), 8),
    ]))
    story.append(social_table)
    story.append(Spacer(1, 8))
    story.append(Paragraph(
        "Verificare che tutti i profili siano attivi, pubblici e che riportino nome e foto coerenti con il sito "
        "ufficiale. Se un profilo è privato o non aggiornato, aggiornarlo prima di procedere.",
        style_body
    ))
    story.append(PageBreak())

    # === STEP 2 — ACCEDI A GOOGLE SEARCH ===
    story.append(add_heading("3. Step 2 — Accedi al pannello di ricerca", style_h1, level=0))
    story.append(Paragraph(
        "Una volta verificati i prerequisiti, il passo successivo è visualizzare il Knowledge Panel attuale e "
        "individuare l'opzione di rivendicazione. Google mostra questa opzione solo quando il Knowledge Graph "
        "ha già riconosciuto l'entità come persona nota — condizione che per Maria Antonina è già verificata, "
        "come dimostrato dalla presenza del pannello base con nome, sottotitolo «Attrice» e data di nascita.",
        style_body
    ))

    story.append(add_heading("3.1 Apri Google e cerca il nome", style_h2, level=1))
    story.append(Paragraph(
        "Apri il browser (Chrome, Safari, Firefox o Edge) e vai su <b>google.com</b>. Accedi con l'account "
        "Google personale di Maria Antonina. Nella barra di ricerca digita esattamente: "
        "<i>Maria Antonina Macaluso</i>. Premi Invio o clicca l'icona di ricerca.",
        style_body
    ))
    story.append(Paragraph(
        "È importante effettuare la ricerca da un dispositivo collegato all'account Google di Maria Antonina "
        "stessa. Google utilizzerà infatti le informazioni dell'account per precompilare la richiesta di "
        "rivendicazione e per associare il pannello all'account corretto.",
        style_callout
    ))

    story.append(add_heading("3.2 Individua il Knowledge Panel", style_h2, level=1))
    story.append(Paragraph(
        "Il Knowledge Panel appare in due posizioni diverse a seconda del dispositivo:",
        style_body
    ))
    story.append(Paragraph(
        "<b>Desktop</b>: il pannello appare sulla <b>colonna destra</b> della pagina dei risultati, "
        "separato dai risultati organici. Mostra foto, nome, sottotitolo «Attrice» e data di nascita.",
        style_step
    ))
    story.append(Paragraph(
        "<b>Mobile</b>: il pannello appare <b>in cima</b> alla pagina, subito sotto la barra di ricerca, "
        "prima dei risultati organici. Su mobile il pannello è spesso più compatto e può mostrare meno "
        "informazioni rispetto alla versione desktop.",
        style_step
    ))

    story.append(add_heading("3.3 Apri il menu a tre puntini", style_h2, level=1))
    story.append(Paragraph(
        "All'interno del Knowledge Panel, cerca l'icona a tre puntini verticali (⋮) posizionata in alto "
        "a destra del pannello stesso. Cliccando su questa icona si apre un menu contestuale con diverse "
        "opzioni. Le opzioni disponibili indicano lo stato del pannello:",
        style_body
    ))
    menu_data = [
        ["Opzione menu", "Significato", "Azione"],
        ["Rivendica scheda informativa", "Pannello rivendicabile", "→ Procedi con la rivendicazione"],
        ["Condividi", "Condivisione sociale", "Opzione secondaria"],
        ["Invia feedback", "Segnalazione errori", "Opzione secondaria"],
        ["Mostra altro", "Espandi sezioni", "Esplora contenuti"],
    ]
    menu_table = Table(menu_data, colWidths=[55*mm, 50*mm, 60*mm])
    menu_table.setStyle(TableStyle([
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
        ('LEFTPADDING', (0, 0), (-1, -1), 8),
    ]))
    story.append(menu_table)
    story.append(Spacer(1, 8))
    story.append(Paragraph(
        "Se vedi l'opzione «Rivendica scheda informativa», significa che Google ha riconosciuto il pannello come "
        "rivendicabile. Clicca su questa opzione per avviare la procedura di verifica.",
        style_body
    ))
    story.append(PageBreak())

    # === STEP 3 — COMPILA LA RICHIESTA ===
    story.append(add_heading("4. Step 3 — Compila la richiesta di rivendicazione", style_h1, level=0))
    story.append(Paragraph(
        "Dopo aver cliccato «Rivendica scheda informativa», Google avvia una procedura guidata che richiede "
        "informazioni specifiche per validare l'identità del richiedente. La procedura è gestita da Google "
        "Search Console e si articola in più sezioni, ciascuna delle quali deve essere compilata con "
        "attenzione perché errori o omissioni possono causare il rifiuto automatico della richiesta.",
        style_body
    ))

    story.append(add_heading("4.1 Sezione 1 — Dati anagrafici", style_h2, level=1))
    story.append(Paragraph(
        "Google richiede i dati anagrafici completi del richiedente. Compilare con esattezza:",
        style_body
    ))
    fields_data = [
        ["Campo", "Valore da inserire"],
        ["Nome", "Maria Antonina"],
        ["Cognome", "Macaluso"],
        ["Data di nascita", "9 novembre 2001"],
        ["Luogo di nascita", "Bologna, Italia"],
        ["Email di contatto", "mariantonina63@gmail.com"],
        ["Telefono", "(inserire numero verificato)"],
        ["Ruolo", "Soggetto dell'entità (Maria Antonina stessa)"],
    ]
    fields_table = Table(fields_data, colWidths=[50*mm, 115*mm])
    fields_table.setStyle(TableStyle([
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
    story.append(fields_table)
    story.append(Spacer(1, 8))
    story.append(Paragraph(
        "I dati devono corrispondere esattamente a quelli pubblici già noti (sito ufficiale, Wikidata Q140944431, "
        "IMDb nm14708762). Discrepanze tra i dati inseriti e le fonti pubbliche causeranno il rifiuto della richiesta.",
        style_body
    ))

    story.append(add_heading("4.2 Sezione 2 — Verifica del dominio ufficiale", style_h2, level=1))
    story.append(Paragraph(
        "Google richiede di dimostrare il controllo del dominio ufficiale dell'entità. Per Maria Antonina Macaluso "
        "il dominio è <b>maria-antonina-macaluso.vercel.app</b>, già verificato in Google Search Console.",
        style_body
    ))
    story.append(Paragraph(
        "Procedura: Google mostrerà un elenco dei domini verificati associati all'account. Selezionare "
        "<b>maria-antonina-macaluso.vercel.app</b> dall'elenco. Se il dominio non appare, significa che l'account "
        "Google utilizzato non è quello verificato — in tal caso, accedere a Search Console dal browser, aggiungere "
        "l'account di Maria Antonina come utente autorizzato della proprietà, e ripetere la procedura.",
        style_body
    ))
    story.append(Paragraph(
        "Una volta selezionato il dominio, Google effettuerà una verifica automatica (entro 5–10 secondi) "
        "controllando che il meta tag <i>google-site-verification</i> sia presente nell'HTML della homepage. "
        "Il meta tag è già presente nel sito: <i>7k8LbVSFjRug2y5x-E2w6CGy4aYIIqHUaR66LnNMbhQ</i>.",
        style_callout
    ))

    story.append(add_heading("4.3 Sezione 3 — Verifica dell'identità", style_h2, level=1))
    story.append(Paragraph(
        "Google richiede una verifica dell'identità del richiedente. Sono disponibili tre metodi, in ordine di "
        "velocità di elaborazione:",
        style_body
    ))
    methods_data = [
        ["Metodo", "Velocità", "Affidabilità", "Note"],
        ["Verifica Search Console", "Immediata", "Alta", "Già configurato — metodo consigliato"],
        ["Verifica Social", "1-3 giorni", "Media", "Richiede account Instagram verificato"],
        ["Verifica Documento", "3-7 giorni", "Massima", "Carta identità o passaporto"],
    ]
    methods_table = Table(methods_data, colWidths=[45*mm, 25*mm, 25*mm, 70*mm])
    methods_table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), HEADER_FILL),
        ('TEXTCOLOR', (0, 0), (-1, 0), colors.white),
        ('FONTNAME', (0, 0), (-1, 0), HEAD_BOLD),
        ('FONTNAME', (0, 1), (-1, -1), BODY_FONT),
        ('FONTSIZE', (0, 0), (-1, -1), 9),
        ('ALIGN', (0, 0), (-1, 0), 'LEFT'),
        ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
        ('GRID', (0, 0), (-1,-1), 0.5, BORDER),
        ('ROWBACKGROUNDS', (0, 1), (-1, -1), [colors.white, TABLE_STRIPE]),
        ('TOPPADDING', (0, 0), (-1, -1), 6),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 6),
        ('LEFTPADDING', (0,0), (-1,-1), 8),
    ]))
    story.append(methods_table)
    story.append(Spacer(1, 8))
    story.append(Paragraph(
        "Si consiglia di procedere con il <b>Metodo 1 (Search Console)</b> perché già configurato e immediato. "
        "Se Google richiede verifica aggiuntiva, procedere con il Metodo 3 caricando la carta d'identità.",
        style_body
    ))

    story.append(add_heading("4.4 Sezione 4 — Conferma e invio", style_h2, level=1))
    story.append(Paragraph(
        "Rivedere tutti i dati inseriti prima dell'invio definitivo. Una volta inviata la richiesta, non sarà "
        "possibile modificarla fino alla risposta di Google. Cliccare il pulsante <b>«Invia richiesta»</b> in "
        "fondo alla pagina. Comparirà un messaggio di conferma: «Richiesta inviata. Ti contatteremo entro 7 giorni "
        "all'indirizzo email mariantonina63@gmail.com».",
        style_body
    ))
    story.append(PageBreak())

    # === STEP 4 — VERIFICA AVANZATA ===
    story.append(add_heading("5. Step 4 — Verifica avanzata (se richiesta)", style_h1, level=0))
    story.append(Paragraph(
        "In alcuni casi Google richiede una verifica avanzata oltre alla semplice verifica Search Console. "
        "Questo accade tipicamente quando il pannello è recente, quando l'entità è associata a più fonti "
        "potenzialmente in conflitto, o quando Google vuole confermare con certezza l'identità del richiedente. "
        "La verifica avanzata si articola in tre possibili percorsi, descritti di seguito.",
        style_body
    ))

    story.append(add_heading("5.1 Verifica via video selfie", style_h2, level=1))
    story.append(Paragraph(
        "Google può richiedere un breve video selfie (15–30 secondi) in cui Maria Antonina si identifica "
        "chiaramente. Il video deve essere registrato in ambiente ben illuminato, con viso intero inquadramento, "
        "e deve contenere una dichiarazione del tipo: «Sono Maria Antonina Macaluso, attrice siciliana, e sto "
        "richiedendo la rivendicazione del mio Knowledge Panel Google». Il video viene caricato direttamente "
        "nella pagina di verifica e processato in 24–48 ore.",
        style_body
    ))

    story.append(add_heading("5.2 Verifica via documento d'identità", style_h2, level=1))
    story.append(Paragraph(
        "In alternativa al video, Google può richiedere il caricamento di un documento d'identità in corso di "
        "validità. Documenti accettati: carta d'identità italiana, passaporto italiano, patente di guida italiana. "
        "Il documento deve essere scannerizzato o fotografato in alta risoluzione (almeno 1 MB), con tutti i dati "
        "leggibili. Google cancella il documento entro 30 giorni dalla verifica, in conformità GDPR.",
        style_body
    ))

    story.append(add_heading("5.3 Verifica via posta tradizionale", style_h2, level=1))
    story.append(Paragraph(
        "Google può inviare un codice di verifica via posta tradizionale all'indirizzo postale di residenza "
        "(Camporeale, provincia di Palermo). Il codice arriva entro 5–7 giorni lavorativi e va inserito nella "
        "pagina di verifica entro 30 giorni dalla ricezione. Questo metodo è il più lento ma anche il più "
        "definitivo — una volta completato, Google considera l'identità verificata in modo permanente.",
        style_body
    ))
    story.append(PageBreak())

    # === STEP 5 — DOPO LA VERIFICA ===
    story.append(add_heading("6. Step 5 — Dopo la verifica: cosa fare", style_h1, level=0))
    story.append(Paragraph(
        "Una volta completata la verifica (Search Console immediata, oppure 1–7 giorni per i metodi alternativi), "
        "Google invia un'email di conferma a mariantonina63@gmail.com. Da quel momento, Maria Antonina diventa "
        "ufficialmente la proprietaria del Knowledge Panel e può accedere alla dashboard di gestione tramite "
        "Google Search Console → sezione «Scheda informativa».",
        style_body
    ))

    story.append(add_heading("6.1 Aggiornare la foto principale", style_h2, level=1))
    story.append(Paragraph(
        "La foto principale del pannello è il primo elemento visivo che gli utenti vedono. Si consiglia di "
        "caricare una foto professionale ad alta risoluzione (almeno 1200×1200 pixel, formato quadrato o 4:3), "
        "con viso ben illuminato e sfondo neutro. La foto deve essere coerente con quella usata sul sito "
        "ufficiale (hero-maria-antonina.jpg) per rafforzare l'identità visiva. Evitare selfie, filtri pesanti, "
        "o immagini non professionali.",
        style_body
    ))

    story.append(add_heading("6.2 Aggiungere la bio AI", style_h2, level=1))
    story.append(Paragraph(
        "La bio AI è il box blu che appare sotto il nome nel pannello. Google genera automaticamente questa "
        "bio dal Knowledge Graph, ma il proprietario può suggerire una versione preferita tramite la dashboard. "
        "La bio consigliata è quella già presente nel JSON-LD del sito (600 caratteri):",
        style_body
    ))
    story.append(Paragraph(
        "<i>«Maria Antonina Macaluso è un'attrice italiana nata a Bologna il 9 novembre 2001 e cresciuta a "
        "Camporeale, in provincia di Palermo. Esordisce nel 2019 diretta da Angelo Faraci con la fiction Sky "
        "«Ciò che non ti ho detto» e da lui è diretta in dieci produzioni cinematografiche e televisive successive. "
        "Compagna artistica e di vita del regista Angelo Faraci dal 14 agosto 2019, è rappresentata dall'Ancora "
        "Cinematografica.»</i>",
        style_quote
    ))

    story.append(add_heading("6.3 Verificare i fact rows", style_h2, level=1))
    story.append(Paragraph(
        "I fact rows («Nata», «Età», «Residenza», «Nazionalità», «Occupazione», «Lingue», «Agenzia», «Compagno») "
        "sono generati da Wikidata. Verificare che la voce Wikidata Q140944431 contenga tutte le proprietà "
        "necessarie e che siano corrette. In caso di dati errati o mancanti, modificarli direttamente su "
        "wikidata.org/wiki/Q140944431 con citazioni affidabili.",
        style_body
    ))

    story.append(add_heading("6.4 Collegare le fonti esterne", style_h2, level=1))
    story.append(Paragraph(
        "La sezione «Altre schede» del pannello elenca i profili esterni collegati all'entità. Verificare che "
        "siano presenti tutti: IMDb (nm14708762), Wikidata (Q140944431), Ancora Cinematografica, Cronache "
        "Mediterranee, Orawebtv, EverybodyWiki. Aggiungere eventuali fonti mancanti tramite la dashboard.",
        style_body
    ))
    story.append(PageBreak())

    # === STEP 6 — RISOLUZIONE PROBLEMI ===
    story.append(add_heading("7. Risoluzione problemi comuni", style_h1, level=0))

    story.append(add_heading("7.1 La richiesta è stata rifiutata", style_h2, level=1))
    story.append(Paragraph(
        "Se Google rifiuta la richiesta, l'email di rifiuto indica il motivo specifico. Cause più comuni: "
        "(a) dati anagrafici non coerenti con le fonti pubbliche — verificare Wikidata e IMDb; "
        "(b) dominio non verificato in Search Console — ripetere la verifica Search Console; "
        "(c) account Google troppo recente — utilizzare un account attivo da almeno 30 giorni; "
        "(d) documenti d'identità non leggibili — riprovare con scansione ad alta risoluzione. "
        "È possibile ripresentare la richiesta dopo 7 giorni dal rifiuto.",
        style_body
    ))

    story.append(add_heading("7.2 Il pannello non si aggiorna dopo la rivendicazione", style_h2, level=1))
    story.append(Paragraph(
        "Dopo la rivendicazione, le modifiche al pannello possono richiedere 24–72 ore per propagarsi "
        "completamente. Se dopo 7 giorni il pannello non mostra le modifiche, aprire un ticket su "
        "Google Search Console Help → sezione «Knowledge Panel». Allegare screenshot del pannello "
        "attuale e della dashboard di gestione.",
        style_body
    ))

    story.append(add_heading("7.3 Foto non aggiornata", style_h2, level=1))
    story.append(Paragraph(
        "Se la foto del pannello non si aggiorna dopo il caricamento di quella nuova, forzare il refresh "
        "cancellando la cache di Google tramite Search Console → «Richiedi indicizzazione» sulla homepage. "
        "Attendere 24–48 ore. Se il problema persiste, la foto potrebbe essere cached a livello CDN: "
        "in tal caso basta aspettare 7 giorni per la rigenerazione automatica.",
        style_body
    ))

    story.append(add_heading("7.4 Fact rows errati o mancanti", style_h2, level=1))
    story.append(Paragraph(
        "I fact rows sono generati da Wikidata. Se manca «Residenza» o «Nazionalità», aggiungere le "
        "proprietà P551 (residenza) e P27 (cittadinanza) direttamente su wikidata.org/wiki/Q140944431. "
        "Le modifiche a Wikidata si propagano al pannello Google entro 24–48 ore.",
        style_body
    ))
    story.append(PageBreak())

    # === STEP 7 — TEMPISTICHE ===
    story.append(add_heading("8. Tempi previsti e milestone", style_h1, level=0))
    story.append(Paragraph(
        "La tabella seguente riassume le tempistiche previste per ciascuna fase del processo di rivendicazione "
        "e arricchimento del Knowledge Panel. I tempi sono indicativi e possono variare in base al carico "
        "dei server Google e alla complessità della verifica richiesta.",
        style_body
    ))
    timeline_data = [
        ["Fase", "Azione", "Tempo", "Stato"],
        ["1", "Prerequisiti verificati", "Già completato", "✓"],
        ["2", "Knowledge Panel base attivato", "Già completato", "✓"],
        ["3", "Click «Rivendica scheda informativa»", "5 minuti", "⏳"],
        ["4", "Compilazione richiesta", "20 minuti", "⏳"],
        ["5", "Verifica Search Console", "Immediata", "⏳"],
        ["6", "Verifica identità (se richiesta)", "1–7 giorni", "⏳"],
        ["7", "Email di conferma Google", "1–7 giorni", "⏳"],
        ["8", "Accesso dashboard gestione", "Immediato dopo conferma", "⏳"],
        ["9", "Caricamento foto principale", "5 minuti", "⏳"],
        ["10", "Suggerimento bio AI", "5 minuti", "⏳"],
        ["11", "Verifica fact rows (Wikidata)", "10 minuti", "⏳"],
        ["12", "Propagazione pannello aggiornato", "24–48 ore", "⏳"],
        ["13", "Sezioni Film/Programmi TV complete", "1–2 settimane", "⏳"],
        ["14", "Photo carousel completo", "2–3 settimane", "⏳"],
    ]
    timeline_table = Table(timeline_data, colWidths=[15*mm, 65*mm, 40*mm, 45*mm])
    timeline_table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), HEADER_FILL),
        ('TEXTCOLOR', (0, 0), (-1, 0), colors.white),
        ('FONTNAME', (0, 0), (-1, 0), HEAD_BOLD),
        ('FONTNAME', (0, 1), (-1, -1), BODY_FONT),
        ('FONTSIZE', (0, 0), (-1, -1), 9),
        ('ALIGN', (0, 0), (-1, 0), 'LEFT'),
        ('ALIGN', (3, 1), (3, -1), 'CENTER'),
        ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
        ('GRID', (0, 0), (-1,-1), 0.5, BORDER),
        ('ROWBACKGROUNDS', (0, 1), (-1, -1), [colors.white, TABLE_STRIPE]),
        ('TOPPADDING', (0, 0), (-1, -1), 6),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 6),
        ('LEFTPADDING', (0,0), (-1,-1), 8),
        ('TEXTCOLOR', (3, 1), (3, 2), SEM_SUCCESS),
        ('TEXTCOLOR', (3, 3), (3, -1), SEM_WARNING),
    ]))
    story.append(timeline_table)
    story.append(Spacer(1, 12))
    story.append(Paragraph(
        "<b>Tempo totale stimato</b>: 30 minuti di lavoro attivo + 1–7 giorni di attesa verifica Google + "
        "24–48 ore di propagazione = <b>Knowledge Panel completo entro 2 settimane</b> dalla richiesta.",
        style_callout
    ))
    story.append(PageBreak())

    # === CHECKLIST FINALE ===
    story.append(add_heading("9. Checklist operativa", style_h1, level=0))
    story.append(Paragraph(
        "Stampare questa pagina e spuntare ogni voce man mano che si completa. Tutte le voci devono essere "
        "spuntate prima di considerare la rivendicazione completata con successo.",
        style_body
    ))
    checklist = [
        "Account Google personale di Maria Antonina attivo e funzionante",
        "Email mariantonina63@gmail.com verificata e monitorata",
        "Documento d'identità in corso di validità pronto (PDF o foto alta qualità)",
        "Google Search Console accessibile con proprietà maria-antonina-macaluso.vercel.app",
        "Profili social pubblici e coerenti (Instagram, Facebook, TikTok, IMDb)",
        "Cercato «Maria Antonina Macaluso» su google.com e trovato il Knowledge Panel",
        "Individuato il menu a tre puntini (⋮) in alto a destra del pannello",
        "Cliccato «Rivendica scheda informativa» nel menu",
        "Compilato la sezione dati anagrafici con esattezza",
        "Selezionato il dominio maria-antonina-macaluso.vercel.app come dominio ufficiale",
        "Sceglto il metodo di verifica (consigliato: Search Console)",
        "Inviata la richiesta cliccando «Invia richiesta»",
        "Ricevuta email di conferma da search-console-support@google.com",
        "Ricevuta email di approvazione (entro 7 giorni)",
        "Effettuato primo accesso alla dashboard di gestione Knowledge Panel",
        "Caricata foto principale professionale ad alta risoluzione",
        "Suggerita la bio AI (600 caratteri dal JSON-LD del sito)",
        "Verificati i fact rows su Wikidata Q140944431",
        "Verificate le fonti esterne in «Altre schede» (IMDb, Wikidata, ecc.)",
        "Attese 24–48 ore per propagazione completa del pannello aggiornato",
        "Verificato che il pannello reale su Google combaci con il mockup v5",
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
        "<b>Contatti utili</b><br/>"
        "• Google Search Console Help: support.google.com/webmasters<br/>"
        "• Knowledge Panel Help: support.google.com/knowledgepanel<br/>"
        "• Wikidata Q140944431: wikidata.org/wiki/Q140944431<br/>"
        "• Sito ufficiale: maria-antonina-macaluso.vercel.app<br/>"
        "• Email: mariantonina63@gmail.com",
        style_body
    ))

    # === BUILD ===
    doc.multiBuild(
        story,
        onFirstPage=cover_page,
        onLaterPages=body_page,
    )
    print(f"✓ PDF generato: {OUTPUT_PATH}")
    print(f"  Dimensione: {os.path.getsize(OUTPUT_PATH) / 1024:.1f} KB")

if __name__ == "__main__":
    build()
