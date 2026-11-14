// Figuren (inline SVG). FIG(naam, quiz): bij quiz = true worden de bijschriften
// weggelaten, zodat de figuur het antwoord niet verklapt.
(function () {
  "use strict";
  const svg = (w, h, label, body) =>
    `<svg class="fig" viewBox="0 0 ${w} ${h}" role="img" aria-label="${label}"><defs><marker id="pijl" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>${body}</svg>`;
  const t = (x, y, s, a = "middle", c = "") => `<text x="${x}" y="${y}" text-anchor="${a}" class="${c}">${s}</text>`;
  const lijn = (x1, y1, x2, y2, c = "s") => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" class="${c}"/>`;
  const pijl = (x1, y1, x2, y2, c = "") => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" class="s ${c}" marker-end="url(#pijl)"/>`;
  const boog = (d, c = "") => `<path d="${d}" class="s ${c}" marker-end="url(#pijl)"/>`;
  function blok(x, y, w, h, s, c = "fa") {
    const regels = Array.isArray(s) ? s : [s];
    const start = y + h / 2 + 4 - (regels.length - 1) * 7;
    return `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="8" class="${c}"/>` +
      regels.map((r, i) => t(x + w / 2, start + i * 14, r, "middle", i ? "k" : "")).join("");
  }
  const num = (x, y, n) => `<circle cx="${x}" cy="${y}" r="9" class="nb"/><text x="${x}" y="${y + 4}" text-anchor="middle" class="nt">${n}</text>`;
  const cap = (y, regels) => regels.map((r, i) => t(8, y + i * 16, r, "start", "k")).join("");
  const assen = (xt, yt) =>
    lijn(45, 160, 325, 160) + lijn(45, 160, 45, 12) +
    t(185, 192, xt + " →", "middle", "k") +
    `<text transform="translate(14,88) rotate(-90)" text-anchor="middle" class="k">${yt} →</text>`;

  const F = {
    niveaus() {
      const rij = (y, items, verder) => {
        let x = 5, out = "";
        items.forEach(([s, w], i) => {
          out += blok(x, y, w, 30, s);
          if (i < items.length - 1 || verder) out += pijl(x + w + 2, y + 15, x + w + 13, y + 15);
          x += w + 15;
        });
        return out;
      };
      return svg(340, 190, "Organisatieniveaus van klein naar groot",
        rij(5, [["molecuul", 70], ["organel", 66], ["cel", 50], ["weefsel", 70]], true) +
        rij(52, [["orgaan", 66], ["orgaanstelsel", 104], ["organisme", 84]], true) +
        rij(99, [["populatie", 80], ["levensgemeenschap", 136]], true) +
        rij(146, [["ecosysteem", 90], ["biosfeer", 76]], false));
    },

    cel(quiz) {
      const body =
        // plantencel
        `<rect x="10" y="24" width="150" height="116" rx="6" class="wand"/>` +
        `<rect x="16" y="30" width="138" height="104" rx="4" class="fa"/>` +
        `<ellipse cx="85" cy="85" rx="42" ry="30" class="vac"/>` +
        `<circle cx="38" cy="52" r="12" class="kern"/>` +
        `<ellipse cx="130" cy="48" rx="9" ry="5" class="chl"/><ellipse cx="134" cy="118" rx="9" ry="5" class="chl"/><ellipse cx="42" cy="120" rx="9" ry="5" class="chl"/>` +
        `<ellipse cx="141" cy="82" rx="8" ry="4.5" class="mit"/>` +
        // dierlijke cel
        `<ellipse cx="255" cy="82" rx="65" ry="52" class="fa"/>` +
        `<circle cx="245" cy="78" r="15" class="kern"/>` +
        `<ellipse cx="287" cy="60" rx="8" ry="4.5" class="mit"/><ellipse cx="222" cy="108" rx="8" ry="4.5" class="mit"/>` +
        // nummers
        lijn(60, 19, 60, 24) + num(60, 11, 1) +
        lijn(322, 44, 306, 52) + num(328, 38, 2) +
        num(85, 85, 3) + num(245, 78, 4) +
        lijn(113, 46, 121, 47) + num(105, 45, 5) +
        lijn(206, 128, 217, 112) + num(202, 135, 6) +
        t(85, 158, quiz ? "A" : "A · plantencel", "middle", "b") + t(255, 158, quiz ? "B" : "B · dierlijke cel", "middle", "b") +
        (quiz ? "" : cap(180, ["1 celwand · 2 celmembraan · 3 vacuole", "4 celkern · 5 chloroplast · 6 mitochondrium"]));
      return svg(340, quiz ? 166 : 204, "Plantencel en dierlijke cel met genummerde onderdelen", body);
    },

    osmose(quiz) {
      const cel = (x) => `<rect x="${x}" y="30" width="130" height="100" rx="6" class="wand"/>`;
      const body =
        cel(20) + `<rect x="25" y="35" width="120" height="90" rx="4" class="fa"/><ellipse cx="85" cy="80" rx="45" ry="32" class="vac"/>` +
        cel(190) + `<rect x="212" y="50" width="86" height="60" rx="24" class="fa"/><ellipse cx="255" cy="80" rx="24" ry="14" class="vac"/>` +
        pijl(85, 6, 85, 27, "w") + pijl(8, 80, 19, 80, "w") + pijl(162, 80, 151, 80, "w") +
        pijl(255, 27, 255, 6, "w") + pijl(190, 80, 178, 80, "w") + pijl(320, 80, 332, 80, "w") +
        t(85, 148, "A", "middle", "b") + t(255, 148, "B", "middle", "b") +
        (quiz ? "" : t(85, 164, "in water (hypotoon)", "middle", "k") + t(85, 179, "water erin → turgor", "middle", "k") +
          t(255, 164, "in zout water (hypertoon)", "middle", "k") + t(255, 179, "water eruit → plasmolyse", "middle", "k"));
      return svg(340, quiz ? 156 : 186, "Twee plantencellen: de pijlen geven de netto verplaatsing van water aan", body);
    },

    regelkring() {
      return svg(340, 180, "Regelkring met negatieve terugkoppeling",
        blok(15, 15, 130, 42, ["Receptor", "meet de waarde"]) +
        blok(195, 15, 130, 42, ["Regelcentrum", "vergelijkt met de norm"]) +
        blok(195, 123, 130, 42, ["Effector", "spier of klier reageert"]) +
        blok(15, 123, 130, 42, ["Waarde", "gaat terug naar de norm"], "fl") +
        pijl(147, 36, 193, 36) + pijl(260, 59, 260, 121) + pijl(193, 144, 147, 144) + pijl(80, 121, 80, 59) +
        t(170, 86, "negatieve", "middle", "b") + t(170, 102, "terugkoppeling", "middle", "b"));
    },

    glucose() {
      const kolom = (x, regels, c) =>
        regels.map((r, i) => blok(x, 6 + i * 50, 156, 38, r, i === 0 ? c : i === 3 ? "fl" : "fa") + (i < 3 ? pijl(x + 78, 45 + i * 50, x + 78, 55 + i * 50) : "")).join("");
      return svg(340, 202, "Regeling van het bloedglucosegehalte door insuline en glucagon",
        kolom(6, [["Bloedglucose te hoog", "bijv. na een maaltijd"], ["Alvleesklier", "geeft insuline af"], ["Lever en spieren", "glucose → glycogeen"], ["Bloedglucose daalt"]], "fb") +
        kolom(178, [["Bloedglucose te laag", "bijv. bij inspanning"], ["Alvleesklier", "geeft glucagon af"], ["Lever", "glycogeen → glucose"], ["Bloedglucose stijgt"]], "fb"));
    },

    neuron(quiz) {
      const d = [[42, 57, 15, 35], [40, 70, 8, 70], [42, 83, 15, 108], [55, 49, 48, 20], [55, 91, 48, 122]];
      const body =
        d.map((p) => lijn(...p)).join("") +
        lijn(82, 70, 292, 70) +
        [100, 148, 196, 244].map((x) => `<rect x="${x}" y="63" width="40" height="14" rx="7" class="mye"/>`).join("") +
        `<circle cx="60" cy="70" r="22" class="fa"/><circle cx="60" cy="70" r="7" class="kern"/>` +
        [[320, 50], [324, 70], [320, 90]].map(([x, y]) => lijn(292, 70, x, y) + `<circle cx="${x}" cy="${y}" r="3.5" class="dot"/>`).join("") +
        lijn(18, 27, 24, 41) + num(14, 18, 1) +
        lijn(84, 46, 74, 56) + num(89, 39, 2) +
        lijn(91, 92, 91, 74) + num(91, 101, 3) +
        lijn(168, 49, 168, 62) + num(168, 40, 4) +
        lijn(326, 34, 322, 46) + num(327, 25, 5) +
        (quiz ? "" : pijl(130, 112, 250, 112) + t(190, 128, "richting van de impuls", "middle", "k") +
          cap(152, ["1 dendriet · 2 cellichaam · 3 axon", "4 myelineschede · 5 uiteinde van het axon (synaps)"]));
      return svg(340, quiz ? 132 : 176, "Neuron met genummerde onderdelen", body);
    },

    reflexboog(quiz) {
      const body =
        `<ellipse cx="258" cy="80" rx="58" ry="54" class="fl"/><ellipse cx="258" cy="80" rx="30" ry="26" class="grijs"/>` +
        t(258, 150, "ruggenmerg", "middle", "k") +
        `<rect x="10" y="26" width="40" height="20" rx="5" class="fa"/>` +
        `<ellipse cx="30" cy="140" rx="22" ry="11" class="fb"/>` +
        boog("M50 36 C 120 28, 180 38, 244 60", "acc") +
        boog("M246 62 L246 98") +
        boog("M244 100 C 180 126, 120 140, 54 140", "rood") +
        num(30, 13, 1) + num(140, 22, 2) + num(266, 80, 3) + num(140, 143, 4) + num(30, 165, 5) +
        (quiz ? "" : cap(190, ["1 receptor (in de huid) · 2 sensorisch neuron", "3 schakelneuron · 4 motorisch neuron · 5 effector (spier)"]));
      return svg(340, quiz ? 178 : 214, "Reflexboog met genummerde onderdelen", body);
    },

    actiepotentiaal(quiz) {
      const body =
        lijn(50, 170, 325, 170) + lijn(50, 170, 50, 12) +
        t(44, 34, "+30", "end", "k") + t(44, 67, "0", "end", "k") + t(44, 122, "−50", "end", "k") + t(44, 144, "−70", "end", "k") +
        t(26, 14, "mV", "middle", "k") + t(300, 186, "tijd →", "middle", "k") +
        lijn(50, 118, 325, 118, "stip") +
        `<path d="M50 140 H120 Q134 139 140 118 L158 32 Q162 26 166 32 L186 140 Q194 152 210 148 Q225 142 240 140 H320" class="s curve"/>` +
        t(85, 132, "P", "middle", "b") + t(138, 78, "Q", "middle", "b") + t(190, 80, "R", "middle", "b") + t(208, 164, "S", "middle", "b") +
        (quiz ? "" : cap(208, ["P rustpotentiaal · Q depolarisatie: Na⁺ stroomt de cel in", "R repolarisatie: K⁺ stroomt de cel uit · S herstel", "stippellijn = drempelwaarde (prikkeldrempel)"]));
      return svg(340, quiz ? 194 : 248, "Grafiek van de membraanpotentiaal tijdens een actiepotentiaal", body);
    },

    spier(quiz) {
      const sarc = (z1, z2, y) =>
        lijn(z1, y, z1, y + 44, "s dik2") + lijn(z2, y, z2, y + 44, "s dik2") +
        [8, 22, 36].map((dy) => lijn(z1, y + dy, z1 + 90, y + dy, "s act") + lijn(z2, y + dy, z2 - 90, y + dy, "s act")).join("") +
        [15, 29].map((dy) => lijn(100, y + dy, 240, y + dy, "myo")).join("");
      const body =
        t(14, 34, "A", "middle", "b") + sarc(40, 300, 8) +
        t(14, 104, "B", "middle", "b") + sarc(80, 260, 78) +
        (quiz ? "" : cap(142, ["A ontspannen · B samengetrokken", "dun = actine · dik = myosine", "De filamenten schuiven in elkaar; ze worden zelf niet korter."]));
      return svg(340, quiz ? 130 : 182, "Actine- en myosinefilamenten in twee toestanden van een spier", body);
    },

    atp() {
      return svg(340, 150, "ATP-kringloop",
        blok(40, 52, 80, 44, "ATP") + blok(220, 52, 80, 44, "ADP + P", "fl") +
        boog("M122 58 C 150 34, 190 34, 218 58") + boog("M218 90 C 190 114, 150 114, 122 90") +
        t(170, 14, "energie komt vrij voor beweging,", "middle", "k") + t(170, 28, "actief transport en assimilatie", "middle", "k") +
        t(170, 130, "energie uit dissimilatie", "middle", "k") + t(170, 144, "wordt vastgelegd", "middle", "k"));
    },

    enzym(quiz) {
      const body = assen("temperatuur", "enzymactiviteit") +
        `<path d="M55 150 C 120 140, 170 90, 200 35 C 212 20, 222 60, 235 150" class="s curve"/>` +
        lijn(203, 160, 203, 165) + t(203, 176, "optimum", "middle", "k") +
        `<circle cx="101" cy="136" r="4" class="dot"/><circle cx="203" cy="31" r="4" class="dot"/><circle cx="235" cy="150" r="4" class="dot"/>` +
        t(101, 124, "A", "middle", "b") + t(203, 20, "B", "middle", "b") + t(250, 146, "C", "middle", "b") +
        (quiz ? "" : cap(212, ["A lage temperatuur: weinig activiteit, enzym is nog intact", "B optimumtemperatuur: enzym werkt het snelst", "C te heet: enzym is gedenatureerd (blijvend)"]));
      return svg(340, quiz ? 198 : 252, "Grafiek van enzymactiviteit tegen temperatuur", body);
    },

    beperkend(quiz) {
      const body = assen("lichtintensiteit", "fotosynthese") +
        `<path d="M45 160 C 100 90, 150 45, 220 40 H315" class="s curve"/>` +
        `<path d="M45 160 C 90 110, 120 100, 170 98 H315" class="s curve2"/>` +
        t(318, 32, "veel CO₂", "end", "k") + t(318, 90, "weinig CO₂", "end", "k") +
        t(60, 118, "P", "middle", "b") + t(250, 114, "Q", "middle", "b") +
        (quiz ? "" : cap(212, ["P: meer licht → meer fotosynthese; licht is beperkend", "Q: meer licht helpt niet meer; hier is CO₂ beperkend"]));
      return svg(340, quiz ? 198 : 236, "Grafiek van fotosynthese tegen lichtintensiteit bij veel en weinig koolstofdioxide", body);
    },

    dissimilatie() {
      return svg(340, 184, "Schema van aerobe en anaerobe dissimilatie van glucose",
        blok(120, 4, 100, 28, "glucose", "fl") + pijl(170, 34, 170, 50) +
        blok(80, 52, 180, 40, ["glycolyse in het cytoplasma", "levert een beetje ATP"]) +
        pijl(130, 94, 90, 124) + pijl(210, 94, 250, 124) +
        blok(4, 126, 162, 54, ["met O₂ (aeroob)", "in de mitochondriën", "CO₂ + H₂O · veel ATP"]) +
        blok(174, 126, 162, 54, ["zonder O₂ (gisting)", "melkzuur, of alcohol + CO₂", "weinig ATP"], "fb"));
    },

    warmkoud(quiz) {
      const body = assen("omgevingstemperatuur", "zuurstofverbruik") +
        lijn(60, 140, 300, 55, "s curve") + lijn(60, 50, 300, 118, "s curve2") +
        t(312, 56, "1", "middle", "b") + t(312, 124, "2", "middle", "b") +
        (quiz ? "" : cap(212, ["1 koudbloedig dier (bijv. hagedis)", "2 warmbloedig dier (bijv. muis), in rust"]));
      return svg(340, quiz ? 198 : 236, "Grafiek van zuurstofverbruik tegen omgevingstemperatuur voor twee dieren", body);
    }
  };

  window.FIG = (naam, quiz) => (F[naam] ? F[naam](!!quiz) : "");
})();
