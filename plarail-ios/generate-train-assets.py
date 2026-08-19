#!/usr/bin/env python3
from pathlib import Path
from PIL import Image, ImageDraw, ImageFilter
import sys

if len(sys.argv) != 2:
    raise SystemExit('usage: generate-train-assets.py OUTPUT_DIR')

outdir = Path(sys.argv[1])
outdir.mkdir(parents=True, exist_ok=True)
W, H, S = 1800, 260, 2
w, h = W * S, H * S

def sc(v): return int(round(v * S))
def pts(seq): return [(sc(x), sc(y)) for x, y in seq]

def rounded(draw, box, radius, fill, outline=None, width=1):
    draw.rounded_rectangle(tuple(sc(v) for v in box), radius=sc(radius), fill=fill, outline=outline, width=sc(width))

def draw_bogie(draw, cx, y, scale=1.0):
    bw, bh = 140 * scale, 28 * scale
    rounded(draw, (cx-bw/2, y-bh/2, cx+bw/2, y+bh/2), 8, (55,58,60,255))
    for dx in (-45*scale, 45*scale):
        r = 24 * scale
        draw.ellipse((sc(cx+dx-r), sc(y-r), sc(cx+dx+r), sc(y+r)), fill=(28,30,31,255), outline=(90,94,96,255), width=sc(3))
        draw.ellipse((sc(cx+dx-r*0.45), sc(y-r*0.45), sc(cx+dx+r*0.45), sc(y+r*0.45)), fill=(96,100,102,255))

def make_train(filename, series, body, stripe, nose, stripe_y=150, stripe_h=11, railstar=False, t4=False):
    img = Image.new('RGBA', (w, h), (0,0,0,0))
    d = ImageDraw.Draw(img)
    shadow = Image.new('RGBA', (w, h), (0,0,0,0))
    sd = ImageDraw.Draw(shadow)
    sd.ellipse((sc(100),sc(220),sc(1740),sc(252)), fill=(0,0,0,85))
    img.alpha_composite(shadow.filter(ImageFilter.GaussianBlur(sc(6))))

    left, right = 22, 1770
    shapes = {
        '0': [(left,188),(left+8,144),(left+30,105),(left+72,78),(left+125,62),(left+185,58),(right,58),(right,207),(95,207),(58,199)],
        '100': [(left,192),(left+18,150),(left+56,112),(left+122,81),(left+210,63),(left+280,58),(right,58),(right,207),(100,207),(55,201)],
        '500': [(left,196),(left+10,176),(left+46,153),(left+110,130),(left+205,102),(left+330,77),(left+450,62),(left+560,58),(right,58),(right,207),(96,207),(45,204)],
        '700': [(left,195),(left+12,168),(left+40,143),(left+96,115),(left+188,92),(left+285,73),(left+360,63),(left+430,58),(right,58),(right,207),(94,207),(48,202)],
        'n700s': [(left,196),(left+12,175),(left+48,151),(left+118,129),(left+230,101),(left+365,78),(left+490,63),(left+575,58),(right,58),(right,207),(96,207),(48,204)],
    }
    d.polygon(pts(shapes[nose]), fill=body)
    d.polygon(pts([(78,186),(right,186),(right,207),(93,207),(52,201)]), fill=(208,211,212,255))
    d.line(pts([(80,185),(right,185)]), fill=(130,135,137,255), width=sc(2))
    d.line(pts([(210,64),(right-15,64)]), fill=(255,255,255,200), width=sc(3))

    windshields = {
        '0': [(82,88),(126,74),(171,68),(189,71),(184,94),(146,101),(105,100)],
        '100': [(116,89),(164,75),(216,68),(245,70),(240,95),(200,100),(151,99)],
        '500': [(280,96),(347,82),(414,72),(460,72),(446,98),(374,108),(315,108)],
        '700': [(238,92),(296,78),(356,70),(395,72),(386,99),(326,106),(268,104)],
        'n700s': [(350,92),(408,78),(468,70),(507,72),(498,99),(438,106),(380,104)],
    }
    d.polygon(pts(windshields[nose]), fill=(18,27,33,255))
    d.rounded_rectangle((sc(55 if nose in ('0','100') else 70),sc(164),sc(103 if nose in ('0','100') else 118),sc(172)), radius=sc(4), fill=(35,37,40,255))

    if railstar:
        d.rectangle((sc(380),sc(92),sc(right),sc(132)), fill=(53,58,61,255))
        d.rectangle((sc(180),sc(144),sc(right),sc(153)), fill=(238,178,35,255))
    else:
        d.rectangle((sc(180),sc(stripe_y),sc(right),sc(stripe_y+stripe_h)), fill=stripe)
        if series == 'N700S':
            d.rectangle((sc(180),sc(stripe_y+17),sc(right),sc(stripe_y+22)), fill=(65,114,180,255))

    startx = {'0':210,'100':260,'500':370,'700':300,'n700s':370}[nose]
    if railstar: startx = 420
    door_positions = [startx+40, right-150]
    for dp in door_positions:
        rounded(d, (dp,83,dp+44,171), 8, (236,239,240,255), outline=(70,76,79,255), width=2)
        rounded(d, (dp+12,101,dp+32,133), 5, (50,76,80,255))
    x = startx + 95
    while x < right - 195:
        if all(abs(x-dp) > 55 for dp in door_positions):
            rounded(d, (x,103,x+42,130), 6, (47,77,82,255), outline=(20,30,33,255), width=1)
            d.line(pts([(x+5,106),(x+36,106)]), fill=(130,160,164,160), width=sc(2))
        x += 66

    if nose == '0':
        d.rectangle((sc(130),sc(148),sc(170),sc(155)), fill=stripe)
    else:
        d.polygon(pts([(110,150),(185,137),(230,135),(230,141),(160,151)]), fill=(238,178,35,255) if railstar else stripe)

    if series in ('500','700','Rail Star','N700S','T4'):
        for rx in (760,1260):
            rounded(d,(rx,48,rx+68,59),5,(230,231,232,255),outline=(130,133,135,255),width=1)

    draw_bogie(d, 220 if nose == '0' else 300, 205, 0.95)
    draw_bogie(d, 1460, 205, 0.95)
    for bx in range(520,1320,180):
        rounded(d,(bx,188,bx+100,203),4,(126,130,132,255))
    for sx in (570,970,1370):
        d.line(pts([(sx,75),(sx,183)]), fill=(205,208,210,170), width=sc(2))

    if series == '0':
        d.ellipse((sc(85),sc(82),sc(135),sc(103)), fill=(20,28,32,255))
        d.ellipse((sc(142),sc(75),sc(188),sc(98)), fill=(20,28,32,255))
        d.ellipse((sc(48),sc(149),sc(65),sc(165)), fill=(230,230,218,255), outline=(80,80,80,255), width=sc(2))
    elif series == '100':
        for yy in (146,160):
            d.rounded_rectangle((sc(64),sc(yy),sc(97),sc(yy+7)), radius=sc(3), fill=(235,235,220,255))
    elif series == '500':
        d.polygon(pts([(50,186),(right,186),(right,207),(90,207)]), fill=(130,137,141,255))
        d.rectangle((sc(240),sc(140),sc(right),sc(153)), fill=(42,83,158,255))
        d.rectangle((sc(240),sc(157),sc(right),sc(163)), fill=(97,149,190,255))
    elif series == '700':
        d.rectangle((sc(220),sc(148),sc(right),sc(160)), fill=(38,81,155,255))
    elif series == 'Rail Star':
        for i in range(5):
            d.ellipse((sc(330+i*10),sc(148),sc(336+i*10),sc(154)), fill=(236,177,33,255))
    elif series == 'N700S':
        d.rectangle((sc(230),sc(145),sc(right),sc(155)), fill=(36,87,164,255))
        d.rectangle((sc(230),sc(160),sc(right),sc(165)), fill=(74,132,192,255))
    elif series == 'T4':
        for rx in (700,820,940,1080):
            rounded(d,(rx,45,rx+54,58),4,(245,205,48,255),outline=(90,90,80,255),width=1)

    img.resize((W,H), Image.Resampling.LANCZOS).save(outdir / filename)

make_train('train0.png', '0', (245,244,236,255), (41,82,153,255), '0', 142, 14)
make_train('train100.png', '100', (247,247,244,255), (36,79,151,255), '100', 145, 13)
make_train('train500.png', '500', (229,234,237,255), (39,84,161,255), '500', 141, 12)
make_train('train700.png', '700', (247,248,249,255), (39,83,158,255), '700', 148, 12)
make_train('trainRailStar.png', 'Rail Star', (236,239,239,255), (235,178,34,255), '700', railstar=True)
make_train('trainN700S.png', 'N700S', (249,250,250,255), (37,89,166,255), 'n700s', 145, 10)
make_train('trainT4.png', 'T4', (252,207,47,255), (38,77,146,255), '700', 146, 14, t4=True)
print('generated:', ', '.join(sorted(p.name for p in outdir.glob('train*.png'))))
