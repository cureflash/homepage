from reportlab.lib.pagesizes import A4
from reportlab import rl_config
rl_config.invariant = 1
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, PageBreak, Flowable, KeepTogether
from reportlab.lib import colors
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_CENTER
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.cidfonts import UnicodeCIDFont
from reportlab.lib.units import mm
from xml.sax.saxutils import escape
import re, os
from pathlib import Path

SRC='denken-shinkansen/06_shinkansen_power_2/topics/16_short_circuit/16_short_circuit_explanation.md'
OUT='denken-shinkansen/06_shinkansen_power_2/topics/16_short_circuit/16_short_circuit_explanation.pdf'

pdfmetrics.registerFont(UnicodeCIDFont('HeiseiKakuGo-W5'))
pdfmetrics.registerFont(UnicodeCIDFont('HeiseiMin-W3'))
FONT='HeiseiKakuGo-W5'
BODY='HeiseiMin-W3'

PAGE_W, PAGE_H = A4
M_LEFT=M_RIGHT=15*mm
M_TOP=12*mm
M_BOTTOM=11*mm
CONTENT_W=PAGE_W-M_LEFT-M_RIGHT

styles={
 'title': ParagraphStyle('title', fontName=FONT, fontSize=12.5, leading=15.5, spaceAfter=3, keepWithNext=True),
 'h2': ParagraphStyle('h2', fontName=FONT, fontSize=9.6, leading=11.7, spaceBefore=3.5, spaceAfter=1.8, keepWithNext=True),
 'h3': ParagraphStyle('h3', fontName=FONT, fontSize=8.4, leading=10.1, spaceBefore=2.5, spaceAfter=1.2, keepWithNext=True),
 'body': ParagraphStyle('body', fontName=BODY, fontSize=7.1, leading=8.9, spaceAfter=1.2, wordWrap='CJK', allowWidows=1, allowOrphans=1),
 'bullet': ParagraphStyle('bullet', fontName=BODY, fontSize=7.0, leading=8.7, leftIndent=8, firstLineIndent=-6, spaceAfter=0.6, wordWrap='CJK'),
 'num': ParagraphStyle('num', fontName=BODY, fontSize=7.0, leading=8.7, leftIndent=10, firstLineIndent=-8, spaceAfter=0.6, wordWrap='CJK'),
 'meta': ParagraphStyle('meta', fontName=BODY, fontSize=6.8, leading=8.4, spaceAfter=0.5, wordWrap='CJK'),
 'table': ParagraphStyle('table', fontName=BODY, fontSize=6.3, leading=7.7, wordWrap='CJK'),
 'small': ParagraphStyle('small', fontName=BODY, fontSize=6.3, leading=7.7, wordWrap='CJK'),
}

def clean_inline(s):
    s = s.replace('`','')
    return escape(s)

class WrappedCode(Flowable):
    def __init__(self, lines, max_width, font=FONT, font_size=6.7, leading=8.1, pad=3):
        Flowable.__init__(self)
        self.lines=lines; self.max_width=max_width; self.font=font; self.font_size=font_size; self.leading=leading; self.pad=pad
        self.wrapped=[]; self._prepare(); self.width=max_width; self.height=len(self.wrapped)*leading+2*pad
    def _char_width(self, ch):
        if ch == '≒': return self.font_size * 0.95
        return pdfmetrics.stringWidth(ch, self.font, self.font_size)
    def _split(self,line,avail):
        if line=='': return ['']
        out=[]; cur=''; width=0.0
        for ch in line:
            cw=self._char_width(ch)
            if width+cw <= avail: cur+=ch; width+=cw
            else:
                if cur: out.append(cur)
                cur=ch; width=cw
        if cur or not out: out.append(cur)
        return out
    def _prepare(self):
        avail=self.max_width-2*self.pad
        for ln in self.lines: self.wrapped.extend(self._split(ln,avail))
    def wrap(self,availWidth,availHeight): return min(self.width,availWidth), self.height
    def draw(self):
        c=self.canv; c.saveState(); c.setFillColor(colors.HexColor('#F5F5F5')); c.setStrokeColor(colors.HexColor('#D0D0D0'))
        c.roundRect(0,0,self.width,self.height,3,fill=1,stroke=1); c.setFillColor(colors.black); c.setFont(self.font,self.font_size)
        y=self.height-self.pad-self.font_size
        for ln in self.wrapped:
            x=self.pad; buf=''
            def flush(text, x0):
                if text:
                    c.setFont(self.font,self.font_size); c.drawString(x0,y,text)
                    return x0+pdfmetrics.stringWidth(text,self.font,self.font_size)
                return x0
            for ch in ln:
                if ch != '≒': buf += ch; continue
                x=flush(buf,x); buf=''; w=self._char_width(ch); c.setLineWidth(0.65); c.setStrokeColor(colors.black); y0=y+self.font_size*0.37
                c.bezier(x, y0+1.4, x+w*0.30, y0+2.2, x+w*0.70, y0+0.6, x+w, y0+1.4)
                c.bezier(x, y0-1.4, x+w*0.30, y0-0.6, x+w*0.70, y0-2.2, x+w, y0-1.4); x += w
            x=flush(buf,x); y-=self.leading
        c.restoreState()

def parse_table(lines):
    rows=[]
    for ln in lines: rows.append([c.strip() for c in ln.strip().strip('|').split('|')])
    if len(rows)>=2 and all(re.fullmatch(r':?-{3,}:?', c.replace(' ','')) for c in rows[1]): rows.pop(1)
    n=max(len(r) for r in rows)
    for r in rows: r.extend(['']*(n-len(r)))
    data=[]
    for r in rows: data.append([Paragraph(clean_inline(c),styles['table']) for c in r])
    if n==2: widths=[CONTENT_W*0.56, CONTENT_W*0.44]
    elif n==3: widths=[CONTENT_W*0.42, CONTENT_W*0.16, CONTENT_W*0.42]
    else: widths=[CONTENT_W/n]*n
    t=Table(data,colWidths=widths,repeatRows=1,hAlign='LEFT')
    t.setStyle(TableStyle([('FONTNAME',(0,0),(-1,-1),BODY),('BACKGROUND',(0,0),(-1,0),colors.HexColor('#EAEAEA')),('GRID',(0,0),(-1,-1),0.35,colors.HexColor('#A0A0A0')),('VALIGN',(0,0),(-1,-1),'TOP'),('LEFTPADDING',(0,0),(-1,-1),3),('RIGHTPADDING',(0,0),(-1,-1),3),('TOPPADDING',(0,0),(-1,-1),3),('BOTTOMPADDING',(0,0),(-1,-1),3)]))
    return t

with open(SRC,encoding='utf-8') as f: lines=f.read().splitlines()
story=[]; i=0
while i<len(lines):
    ln=lines[i]
    if ln.startswith('```'):
        code=[]; i+=1
        while i<len(lines) and not lines[i].startswith('```'): code.append(lines[i]); i+=1
        story.append(WrappedCode(code, CONTENT_W)); story.append(Spacer(1,1.5)); i+=1; continue
    if ln.startswith('|') and i+1<len(lines) and lines[i+1].startswith('|'):
        tbl=[]
        while i<len(lines) and lines[i].startswith('|'): tbl.append(lines[i]); i+=1
        story.append(parse_table(tbl)); story.append(Spacer(1,2)); continue
    if ln.startswith('# '): story.append(Paragraph(clean_inline(ln[2:]), styles['title'])); i+=1; continue
    if ln.startswith('## '): story.append(Paragraph(clean_inline(ln[3:]), styles['h2'])); i+=1; continue
    if ln.startswith('### '): story.append(Paragraph(clean_inline(ln[4:]), styles['h3'])); i+=1; continue
    if re.match(r'^\s*-\s+',ln):
        indent=len(ln)-len(ln.lstrip()); txt=re.sub(r'^\s*-\s+','',ln); st=ParagraphStyle('bx', parent=styles['bullet'], leftIndent=8+indent*2)
        story.append(Paragraph('・'+clean_inline(txt), st)); i+=1; continue
    m=re.match(r'^(\d+)\.\s+(.*)$',ln)
    if m: story.append(Paragraph(clean_inline(m.group(1)+'. '+m.group(2)), styles['num'])); i+=1; continue
    if ln.strip()=='': story.append(Spacer(1,0.8)); i+=1; continue
    if i<8 and (':' in ln): story.append(Paragraph(clean_inline(ln),styles['meta'])); i+=1; continue
    story.append(Paragraph(clean_inline(ln), styles['body'])); i+=1

def footer(canvas,doc):
    canvas.saveState(); canvas.setFont(BODY,6.2); canvas.setFillColor(colors.HexColor('#555555'))
    canvas.drawString(M_LEFT,5.5*mm,'電験二種 電力 - Topic 16 短絡計算・対称座標法'); canvas.drawRightString(PAGE_W-M_RIGHT,5.5*mm,f'{doc.page}'); canvas.restoreState()

doc=SimpleDocTemplate(OUT,pagesize=A4,rightMargin=M_RIGHT,leftMargin=M_LEFT,topMargin=M_TOP,bottomMargin=M_BOTTOM,title='Topic 16 25kV架線が短絡したら何kA流れる？', author='cureflash/homepage')
doc.build(story,onFirstPage=footer,onLaterPages=footer)
b=Path(OUT).read_bytes().replace(b'%\x93\x8c\x8b\x9e', b'%ASCI', 1)
Path(OUT).write_bytes(b)
import hashlib
print(OUT, len(b), hashlib.sha256(b).hexdigest(), hashlib.sha1(b'blob '+str(len(b)).encode()+b'\0'+b).hexdigest())
