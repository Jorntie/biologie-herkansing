// Thema 8 (havo 5, deel A): Stofwisseling in de cel.
window.THEMAS = window.THEMAS || [];
THEMAS.push({
  id: 8,
  boek: "Havo 5 · deel A",
  titel: "Stofwisseling in de cel",
  icoon: "🌱",
  bs: [
    {
      titel: "Chemie in cellen",
      kern: [
        "Organische stoffen zijn (meestal grote) moleculen met koolstof (C) en waterstof (H), afkomstig van organismen: koolhydraten, vetten, eiwitten en DNA. Ze zijn energierijk. Anorganische stoffen zijn bijvoorbeeld water, koolstofdioxide, zuurstof en zouten (mineralen).",
        "Koolhydraten: monosachariden (glucose, fructose), disachariden (sacharose, maltose, lactose) en polysachariden (zetmeel, glycogeen, cellulose). Functie: vooral brandstof en reservestof; cellulose is bouwstof van de celwand.",
        "Vetten bestaan uit glycerol met drie vetzuren. Functie: brandstof, reservestof, isolatie. Fosfolipiden zijn de bouwstenen van membranen.",
        "Eiwitten zijn ketens van aminozuren (20 soorten). De volgorde van de aminozuren bepaalt de ruimtelijke vorm, en die bepaalt de functie. Functies: bouwstof, enzym, transporteiwit, receptor, hormoon, antistof.",
        "Stofwisseling (metabolisme) = alle chemische omzettingen in een cel. Assimilatie: opbouw van organische moleculen uit kleinere moleculen; kost energie. Dissimilatie: afbraak van organische moleculen; daarbij komt energie vrij.",
        "ATP is de energiedrager van de cel. Bij dissimilatie wordt ATP gevormd uit ADP + P. Bij ATP → ADP + P komt energie vrij voor processen als beweging, actief transport en assimilatie.",
        "Autotrofe organismen (planten, algen) maken zelf organische stoffen uit anorganische stoffen. Heterotrofe organismen (dieren, schimmels) moeten organische stoffen opnemen met hun voedsel."
      ],
      begrippen: [
        ["Organische stof", "Stof met moleculen die koolstof en waterstof bevatten, afkomstig van organismen; energierijk (bijv. glucose, vet, eiwit)."],
        ["Anorganische stof", "Stof die geen organische stof is, zoals water, CO₂, O₂ en zouten; meestal kleine, energiearme moleculen."],
        ["Monosacharide", "Enkelvoudige suiker, zoals glucose en fructose."],
        ["Polysacharide", "Koolhydraat van lange ketens monosachariden, zoals zetmeel, glycogeen en cellulose."],
        ["Aminozuur", "Bouwsteen van eiwitten; er zijn 20 soorten."],
        ["Stofwisseling (metabolisme)", "Alle chemische omzettingen in de cellen van een organisme."],
        ["Assimilatie", "Opbouw van organische moleculen uit kleinere moleculen; kost energie."],
        ["Dissimilatie", "Afbraak van organische moleculen tot kleinere moleculen; hierbij komt energie vrij."],
        ["ATP", "Energiedrager van de cel; bij omzetting in ADP + P komt energie vrij."],
        ["Autotroof", "Organisme dat organische stoffen maakt uit anorganische stoffen (bijv. planten)."],
        ["Heterotroof", "Organisme dat organische stoffen van andere organismen nodig heeft als voedsel (dieren, schimmels)."]
      ],
      vragen: [
        { q: "Welke stof is een anorganische stof?", a: ["Koolstofdioxide (CO₂)", "Glucose", "Zetmeel", "Eiwit"], u: "CO₂ bevat wel koolstof, maar geen waterstof en is energiearm: anorganisch. Glucose, zetmeel en eiwit zijn organische stoffen." },
        { q: "Wat is assimilatie?", a: ["Opbouw van organische moleculen; dit kost energie", "Afbraak van organische moleculen; dit kost energie", "Opbouw van organische moleculen; hierbij komt energie vrij", "Afbraak van organische moleculen; hierbij komt energie vrij"], u: "Assimilatie = opbouw (kost energie). Dissimilatie = afbraak (levert energie)." },
        { q: "Wat bepaalt de functie van een eiwit?", a: ["De ruimtelijke vorm, die volgt uit de volgorde van de aminozuren", "Alleen het aantal aminozuren", "Het aantal vetzuren", "De hoeveelheid ATP in het eiwit"], u: "Aminozuurvolgorde → vouwing/vorm → functie." },
        { q: "Welke uitspraak over ATP is juist?", a: ["Bij de omzetting van ATP in ADP + P komt energie vrij", "Bij de omzetting van ADP + P in ATP komt energie vrij", "ATP is een reservestof die in de lever wordt opgeslagen", "ATP is een enzym dat glucose afbreekt"], u: "ATP is de 'oplaadbare batterij' van de cel: opladen (ADP + P → ATP) kost energie uit de dissimilatie; ontladen levert energie." },
        { q: "Een schimmel leeft van dood hout. Is een schimmel autotroof of heterotroof?", a: ["Heterotroof: hij neemt organische stoffen op", "Autotroof: hij maakt zelf organische stoffen uit CO₂", "Autotroof: hij heeft een celwand", "Heterotroof: hij doet aan fotosynthese"], u: "Schimmels hebben geen bladgroen en kunnen geen organische stoffen maken uit anorganische: heterotroof." },
        { q: "Uit welke bouwstenen bestaat een vetmolecuul?", a: ["Glycerol en drie vetzuren", "Aminozuren", "Glucosemoleculen", "Glycerol en drie aminozuren"], u: "Vet = glycerol + 3 vetzuren. Eiwit = aminozuren. Zetmeel = glucose." },
        { q: "Welke koolhydraten zijn polysachariden?", a: ["Zetmeel, glycogeen en cellulose", "Glucose en fructose", "Sacharose, maltose en lactose", "Glycerol en vetzuren"], u: "Mono: glucose, fructose. Di: sacharose, maltose, lactose. Poly: zetmeel, glycogeen, cellulose." }
      ],
      open: { q: "Een spiercel maakt eiwitten voor nieuwe spierfibrillen. Leg uit dat hierbij zowel assimilatie als dissimilatie een rol speelt.", a: "Het aan elkaar koppelen van aminozuren tot eiwitten is opbouw van grote organische moleculen: assimilatie. Dat kost energie. Die energie wordt geleverd door ATP, en ATP wordt gevormd bij de dissimilatie (afbraak) van glucose. Assimilatie is dus afhankelijk van dissimilatie." }
    },
    {
      titel: "Enzymen",
      kern: [
        "Enzymen zijn eiwitten die een chemische reactie versnellen (katalysatoren). Ze worden bij de reactie niet verbruikt en kunnen steeds opnieuw worden gebruikt.",
        "Enzymen zijn specifiek: het substraat past precies in het actieve centrum van het enzym (sleutel-slotprincipe). Enzym + substraat → enzym-substraatcomplex → enzym + product(en).",
        "Temperatuur: bij lage temperatuur bewegen moleculen langzaam → lage enzymactiviteit (enzym is niet kapot). Tot de optimumtemperatuur neemt de activiteit toe. Daarboven verandert de vorm van het enzym blijvend: denaturatie. Het substraat past niet meer.",
        "Elk enzym heeft een optimum-pH. Pepsine (maag) werkt het best bij ongeveer pH 2; enzymen in de dunne darm rond pH 8. Een sterk afwijkende pH verandert de vorm van het enzym.",
        "De reactiesnelheid hangt ook af van de concentraties. Bij voldoende substraat geldt: meer enzym → snellere reactie. Bij een vaste hoeveelheid enzym stijgt de snelheid met de substraatconcentratie tot alle enzymmoleculen bezet zijn (verzadiging).",
        "Namen van enzymen eindigen vaak op -ase: amylase breekt zetmeel (amylum) af, lipase vetten, lactase lactose."
      ],
      begrippen: [
        ["Enzym", "Eiwit dat een bepaalde chemische reactie versnelt zonder zelf te worden verbruikt."],
        ["Katalysator", "Stof die een reactie versnelt zonder zelf verbruikt te worden."],
        ["Substraat", "De stof waarop een enzym inwerkt."],
        ["Actief centrum", "Het deel van een enzym waar het substraat bindt en de reactie plaatsvindt."],
        ["Enzym-substraatcomplex", "Tijdelijke verbinding van een enzym met zijn substraat."],
        ["Specifiek", "Een enzym werkt maar op één (soort) substraat, omdat alleen dat in het actieve centrum past."],
        ["Optimumtemperatuur", "De temperatuur waarbij een enzym het snelst werkt."],
        ["Denaturatie", "Blijvende verandering van de ruimtelijke vorm van een eiwit (bijv. door hoge temperatuur), waardoor het niet meer werkt."],
        ["Optimum-pH", "De zuurgraad waarbij een enzym het snelst werkt."]
      ],
      vragen: [
        { q: "Waarom werkt een enzym maar op één bepaald substraat?", a: ["Alleen dat substraat past in het actieve centrum", "Het enzym wordt na één reactie verbruikt", "Andere substraten zijn te koud", "Het enzym kiest het substraat met de meeste energie"], u: "Enzymen zijn specifiek door de vorm van het actieve centrum (sleutel-slot)." },
        { q: "Een enzym uit het menselijk lichaam wordt verwarmd tot 70 °C en daarna afgekoeld tot 37 °C. Wat gebeurt er met de enzymactiviteit?", a: ["Die blijft (bijna) nul: het enzym is gedenatureerd", "Die wordt weer normaal", "Die is hoger dan voor het verwarmen", "Die is precies de helft"], u: "Denaturatie door hoge temperatuur is blijvend: de vorm van het actieve centrum herstelt niet." },
        { q: "Een enzym wordt bewaard bij 2 °C en daarna opgewarmd tot 37 °C. Wat gebeurt er?", a: ["Het enzym werkt weer goed; kou beschadigt het enzym niet", "Het enzym werkt niet meer; het is gedenatureerd", "Het enzym is verbruikt", "Het enzym werkt alleen nog bij 2 °C"], u: "Bij lage temperatuur is de activiteit laag doordat moleculen langzaam bewegen, maar de vorm blijft intact." },
        { q: "Pepsine uit de maag komt in de dunne darm (pH 8). Wat gebeurt er met de werking?", a: ["Pepsine werkt niet meer, want de pH ligt ver van het optimum", "Pepsine werkt sneller", "Pepsine werkt even goed", "Pepsine verandert in amylase"], u: "Pepsine heeft een optimum-pH van ongeveer 2. Bij pH 8 past het substraat niet meer goed in het actieve centrum." },
        { q: "Bij een vaste hoeveelheid enzym verhoog je de substraatconcentratie steeds verder. Wat gebeurt er met de reactiesnelheid?", a: ["Die stijgt eerst en blijft daarna constant", "Die blijft altijd stijgen", "Die daalt direct", "Die verandert niet"], u: "Als alle enzymmoleculen bezet zijn (verzadigd), kan de reactie niet sneller: de hoeveelheid enzym is dan de beperkende factor." },
        { q: "Wat gebeurt er met een enzym na afloop van de reactie?", a: ["Het komt onveranderd vrij en kan opnieuw worden gebruikt", "Het is omgezet in product", "Het is gedenatureerd", "Het is opgenomen in het substraat"], u: "Een enzym is een katalysator: het wordt niet verbruikt." },
        { q: "Welk enzym breekt zetmeel af?", a: ["Amylase", "Lipase", "Lactase", "Pepsine"], u: "Amylase → zetmeel (amylum). Lipase → vetten. Lactase → lactose. Pepsine → eiwitten." }
      ],
      open: { q: "Bij koorts boven 42 °C raakt een mens in levensgevaar. Leg dit uit met je kennis van enzymen.", a: "Enzymen zijn eiwitten met een optimumtemperatuur rond 37 °C. Bij temperaturen ruim daarboven verandert hun ruimtelijke vorm blijvend (denaturatie). Het substraat past dan niet meer in het actieve centrum, waardoor reacties van de stofwisseling niet meer (snel genoeg) verlopen. Zonder die reacties kunnen cellen niet functioneren." }
    },
    {
      titel: "Fotosynthese",
      kern: [
        "Fotosynthese (koolstofassimilatie): 6 CO₂ + 6 H₂O + lichtenergie → C₆H₁₂O₆ + 6 O₂. Uit anorganische stoffen wordt de organische stof glucose gemaakt; lichtenergie wordt vastgelegd als chemische energie.",
        "Fotosynthese vindt plaats in de chloroplasten (bladgroenkorrels). Chlorofyl (bladgroen) absorbeert vooral blauw en rood licht; groen licht wordt weerkaatst of doorgelaten. Daardoor zien bladeren er groen uit.",
        "Twee stappen. Lichtreacties: met lichtenergie wordt water gesplitst; hierbij komt zuurstof vrij en worden energie (ATP) en waterstof vastgelegd. Donkerreacties: met die energie en waterstof wordt CO₂ omgezet in glucose. De zuurstof die vrijkomt, is dus afkomstig van water.",
        "CO₂ komt het blad in via de huidmondjes; water komt via de houtvaten uit de wortels.",
        "Beperkende factor: de factor die het minst gunstig is, bepaalt de snelheid van de fotosynthese. Mogelijke beperkende factoren: lichtintensiteit, CO₂-concentratie, temperatuur (enzymen!) en water.",
        "In kassen verhoogt men daarom de CO₂-concentratie, de lichtintensiteit en de temperatuur voor een hogere opbrengst."
      ],
      begrippen: [
        ["Fotosynthese", "Proces waarbij met lichtenergie uit CO₂ en water glucose en zuurstof worden gemaakt."],
        ["Koolstofassimilatie", "Ander woord voor fotosynthese: het vastleggen van koolstof uit CO₂ in organische stoffen."],
        ["Chloroplast", "Organel (bladgroenkorrel) waarin de fotosynthese plaatsvindt."],
        ["Chlorofyl", "Groene kleurstof (bladgroen) die lichtenergie absorbeert, vooral blauw en rood licht."],
        ["Lichtreacties", "Eerste deel van de fotosynthese: met lichtenergie wordt water gesplitst; zuurstof komt vrij."],
        ["Donkerreacties", "Tweede deel van de fotosynthese: CO₂ wordt met waterstof en energie uit de lichtreacties omgezet in glucose."],
        ["Beperkende factor", "De factor die het minst gunstig is en daardoor de snelheid van een proces bepaalt."],
        ["Huidmondje", "Opening in (vooral de onderkant van) het blad waardoor CO₂, O₂ en waterdamp in en uit kunnen."]
      ],
      vragen: [
        { q: "Wat is de juiste reactievergelijking van de fotosynthese?", a: ["6 CO₂ + 6 H₂O + lichtenergie → C₆H₁₂O₆ + 6 O₂", "C₆H₁₂O₆ + 6 O₂ → 6 CO₂ + 6 H₂O + energie", "6 CO₂ + 6 O₂ + lichtenergie → C₆H₁₂O₆ + 6 H₂O", "C₆H₁₂O₆ + 6 CO₂ → 6 O₂ + 6 H₂O + energie"], u: "Koolstofdioxide + water + licht → glucose + zuurstof. De omgekeerde reactie is de aerobe dissimilatie." },
        { q: "Een plant staat in fel licht bij 25 °C, maar de CO₂-concentratie is erg laag. Je verhoogt de lichtintensiteit nog verder. Wat gebeurt er met de fotosynthese?", a: ["Die neemt (bijna) niet toe, want CO₂ is de beperkende factor", "Die verdubbelt", "Die stopt", "Die neemt toe, want licht is altijd de beperkende factor"], u: "Alleen het verbeteren van de beperkende factor (hier CO₂) verhoogt de snelheid." },
        { q: "Waarom zijn bladeren groen?", a: ["Chlorofyl weerkaatst groen licht en absorbeert vooral blauw en rood licht", "Chlorofyl absorbeert vooral groen licht", "Groen licht bevat de meeste energie voor fotosynthese", "De celwand is groen gekleurd"], u: "Het licht dat niet wordt geabsorbeerd (groen) wordt weerkaatst en zie je." },
        { q: "Waar komt de zuurstof vandaan die bij de fotosynthese vrijkomt?", a: ["Van het water dat wordt gesplitst", "Van de koolstofdioxide", "Van de glucose", "Uit het chlorofyl"], u: "In de lichtreacties wordt water gesplitst; daarbij komt O₂ vrij." },
        { q: "Waarom neemt de fotosynthese af als de temperatuur ver boven het optimum komt?", a: ["De enzymen van de fotosynthese denatureren", "Er is dan te veel licht", "Chlorofyl absorbeert dan groen licht", "Er ontstaat te veel glucose"], u: "Bij de fotosynthese zijn enzymen betrokken; die hebben een optimumtemperatuur." },
        { q: "Een tuinder brengt extra CO₂ in zijn kas. Waarom?", a: ["CO₂ is vaak de beperkende factor; meer CO₂ geeft meer fotosynthese en dus meer opbrengst", "CO₂ houdt insecten weg", "Planten gebruiken CO₂ voor hun verbranding", "CO₂ verlaagt de temperatuur"], u: "In een gesloten kas raakt CO₂ snel op. Extra CO₂ verhoogt de glucoseproductie." }
      ],
      open: { q: "Leg uit waarom de fotosynthese zowel assimilatie is als een proces waarbij energie wordt vastgelegd. Noem ook de energieomzetting.", a: "Bij fotosynthese worden uit kleine anorganische moleculen (CO₂ en H₂O) grotere organische moleculen (glucose) opgebouwd: dat is assimilatie en kost energie. Die energie komt van licht. Lichtenergie wordt omgezet in chemische energie, die is vastgelegd in glucose." }
    },
    {
      titel: "Voortgezette assimilatie",
      kern: [
        "Bij voortgezette assimilatie zet een organisme glucose (met andere stoffen) om in andere organische stoffen: koolhydraten, vetten, eiwitten, DNA. De energie hiervoor komt uit de dissimilatie (ATP).",
        "Planten maken uit glucose o.a. zetmeel (reservestof, in amyloplasten), cellulose (bouwstof celwand) en sacharose (transportvorm in de bastvaten).",
        "Voor eiwitten zijn naast glucose ook stikstof (N) en soms zwavel (S) nodig. Planten nemen die op als ionen uit de bodem: nitraat (NO₃⁻) en sulfaat (SO₄²⁻). Voor DNA en ATP is ook fosfaat nodig. Daarom hebben planten mineralen (mest) nodig.",
        "Planten zijn autotroof: ze maken alle organische stoffen zelf, uitgaande van glucose uit de fotosynthese en mineralen uit de bodem.",
        "Dieren zijn heterotroof: ze verteren organische stoffen uit voedsel tot bouwstenen (glucose, aminozuren, vetzuren, glycerol) en bouwen daarvan hun eigen, lichaamseigen stoffen op. Ook dat is voortgezette assimilatie.",
        "Essentiële aminozuren kan het lichaam niet zelf maken; ze moeten in het voedsel zitten. Glucose-overschot wordt bij dieren opgeslagen als glycogeen (lever, spieren) of omgezet in vet."
      ],
      begrippen: [
        ["Voortgezette assimilatie", "Vorming van andere organische stoffen (koolhydraten, vetten, eiwitten) uit glucose en andere stoffen."],
        ["Zetmeel", "Polysacharide; reservestof van planten, opgeslagen in amyloplasten."],
        ["Cellulose", "Polysacharide; bouwstof van de celwand van planten."],
        ["Sacharose", "Disacharide; de vorm waarin planten suiker vervoeren door de bastvaten."],
        ["Nitraat", "Stikstofhoudend ion (NO₃⁻) dat planten uit de bodem opnemen voor de vorming van aminozuren/eiwitten."],
        ["Mineralen (zouten)", "Anorganische stoffen uit de bodem die planten nodig hebben, zoals nitraat, sulfaat en fosfaat."],
        ["Essentiële aminozuren", "Aminozuren die het lichaam niet zelf kan maken en die dus in het voedsel moeten zitten."],
        ["Lichaamseigen stoffen", "Stoffen die een organisme zelf opbouwt en die kenmerkend zijn voor dat organisme, zoals eigen eiwitten."]
      ],
      vragen: [
        { q: "Welke stof heeft een plant, naast glucose, nodig om eiwitten te maken?", a: ["Nitraat", "Zuurstof", "Cellulose", "Chlorofyl"], u: "Eiwitten bevatten stikstof (N). Die neemt de plant op als nitraat uit de bodem." },
        { q: "In welke vorm slaat een plant glucose op als reservestof?", a: ["Zetmeel", "Glycogeen", "Cellulose", "Sacharose"], u: "Zetmeel = reservestof bij planten. Glycogeen = reservestof bij dieren. Cellulose = bouwstof. Sacharose = transport." },
        { q: "Waar komt de energie voor de voortgezette assimilatie vandaan?", a: ["Uit ATP, gevormd bij de dissimilatie", "Rechtstreeks uit zonlicht", "Uit de opname van water", "Uit nitraat"], u: "Alleen de fotosynthese gebruikt lichtenergie direct. Voortgezette assimilatie gebruikt ATP uit de dissimilatie en vindt ook plaats in cellen zonder bladgroen en in het donker." },
        { q: "Een plant groeit op een bodem zonder nitraat. Wat is het gevolg?", a: ["De plant kan weinig eiwitten maken en groeit slecht", "De plant kan geen glucose meer maken", "De plant kan geen water meer opnemen", "De plant maakt meer eiwitten uit glucose alleen"], u: "Zonder stikstof geen aminozuren, dus geen eiwitten (enzymen, bouwstoffen) → slechte groei." },
        { q: "Welke uitspraak over dieren is juist?", a: ["Dieren bouwen eigen eiwitten op uit aminozuren uit hun voedsel", "Dieren maken glucose uit CO₂ en water", "Dieren nemen eiwitten uit voedsel onveranderd op in hun cellen", "Bij dieren vindt geen assimilatie plaats"], u: "Eiwitten uit voedsel worden verteerd tot aminozuren; daaruit bouwt het dier lichaamseigen eiwitten (voortgezette assimilatie)." },
        { q: "Wat zijn essentiële aminozuren?", a: ["Aminozuren die het lichaam niet zelf kan maken", "Aminozuren die alleen in planten voorkomen", "Aminozuren die geen stikstof bevatten", "Aminozuren die als brandstof dienen"], u: "Ze moeten met het voedsel worden opgenomen." }
      ],
      open: { q: "Een wortelcel van een plant bevat geen chloroplasten, maar maakt toch cellulose en eiwitten. Leg uit hoe de wortelcel aan de grondstoffen en de energie komt.", a: "De bladeren maken glucose door fotosynthese. Die wordt als sacharose via de bastvaten naar de wortel vervoerd. De wortelcel zet glucose om in cellulose en, samen met nitraat (en sulfaat) uit de bodem, in aminozuren en eiwitten: voortgezette assimilatie. De benodigde energie (ATP) komt uit de dissimilatie van een deel van de glucose in de wortelcel zelf." }
    },
    {
      titel: "Dissimilatie",
      kern: [
        "Bij dissimilatie worden organische stoffen afgebroken; de vrijkomende energie wordt deels vastgelegd in ATP, de rest komt vrij als warmte. Dissimilatie vindt plaats in álle levende cellen, dag en nacht (dus ook in plantencellen).",
        "Aerobe dissimilatie (verbranding, met zuurstof): C₆H₁₂O₆ + 6 O₂ → 6 CO₂ + 6 H₂O + energie. Glucose wordt volledig afgebroken; levert veel ATP.",
        "De eerste stap is de glycolyse in het cytoplasma: glucose wordt gesplitst (in pyrodruivenzuur), wat een beetje ATP oplevert. De verdere afbraak met zuurstof vindt plaats in de mitochondriën en levert het meeste ATP.",
        "Anaerobe dissimilatie (gisting, zonder zuurstof) vindt plaats in het cytoplasma. Glucose wordt onvolledig afgebroken: het eindproduct is nog energierijk en er ontstaat maar weinig ATP.",
        "Melkzuurgisting: glucose → melkzuur + weinig energie (spiercellen bij zuurstoftekort, melkzuurbacteriën in yoghurt en zuurkool). Alcoholgisting: glucose → alcohol (ethanol) + CO₂ + weinig energie (gist; bij brood, bier en wijn).",
        "Behalve glucose kunnen ook vetten en eiwitten als brandstof dienen. Bij de afbraak van eiwitten (aminozuren) ontstaat stikstofhoudend afval, dat in de lever wordt omgezet in ureum."
      ],
      begrippen: [
        ["Aerobe dissimilatie", "Volledige afbraak van glucose met zuurstof tot CO₂ en water; levert veel ATP."],
        ["Anaerobe dissimilatie (gisting)", "Onvolledige afbraak van glucose zonder zuurstof; levert weinig ATP."],
        ["Glycolyse", "Eerste stap van de dissimilatie van glucose, in het cytoplasma; levert een beetje ATP."],
        ["Mitochondrium", "Organel waar de aerobe afbraak verder verloopt en het meeste ATP wordt gevormd."],
        ["Melkzuurgisting", "Anaerobe dissimilatie waarbij glucose wordt omgezet in melkzuur (spieren, melkzuurbacteriën)."],
        ["Alcoholgisting", "Anaerobe dissimilatie waarbij glucose wordt omgezet in alcohol (ethanol) en CO₂ (gist)."],
        ["Brandstof", "Organische stof die bij dissimilatie wordt afgebroken om energie vrij te maken (glucose, vetten, eiwitten)."],
        ["Ureum", "Stikstofhoudende afvalstof die de lever maakt bij de afbraak van aminozuren; uitgescheiden door de nieren."]
      ],
      vragen: [
        { q: "Wat is de juiste reactievergelijking van de aerobe dissimilatie van glucose?", a: ["C₆H₁₂O₆ + 6 O₂ → 6 CO₂ + 6 H₂O + energie", "6 CO₂ + 6 H₂O + energie → C₆H₁₂O₆ + 6 O₂", "C₆H₁₂O₆ → melkzuur + energie", "C₆H₁₂O₆ + 6 CO₂ → 6 O₂ + 6 H₂O + energie"], u: "Glucose + zuurstof → koolstofdioxide + water + energie (ATP en warmte)." },
        { q: "Waarom levert anaerobe dissimilatie veel minder ATP dan aerobe dissimilatie?", a: ["Glucose wordt onvolledig afgebroken; het eindproduct bevat nog veel energie", "Er wordt meer glucose verbruikt", "Er zijn geen enzymen bij betrokken", "Ze vindt plaats in de mitochondriën"], u: "Melkzuur en alcohol zijn nog energierijke organische stoffen. Bij aerobe dissimilatie is de afbraak volledig (tot CO₂ en H₂O)." },
        { q: "Je sprint 200 meter voluit. Je spieren krijgen te weinig zuurstof. Welke stof ontstaat dan extra in de spiercellen?", a: ["Melkzuur", "Alcohol", "Glycogeen", "Zetmeel"], u: "Spiercellen schakelen bij zuurstoftekort (deels) over op melkzuurgisting." },
        { q: "Bij het rijzen van brooddeeg gebruikt de bakker gist. Welke stof laat het deeg rijzen?", a: ["Koolstofdioxide uit de alcoholgisting", "Zuurstof uit de fotosynthese", "Melkzuur uit de melkzuurgisting", "Waterdamp uit de aerobe dissimilatie"], u: "Alcoholgisting: glucose → alcohol + CO₂. De CO₂-belletjes laten het deeg rijzen." },
        { q: "Waar in de cel vindt de glycolyse plaats?", a: ["In het cytoplasma", "In de mitochondriën", "In de celkern", "In de chloroplasten"], u: "Glycolyse: cytoplasma. De verdere aerobe afbraak: mitochondriën." },
        { q: "Vindt er in de bladcellen van een plant overdag dissimilatie plaats?", a: ["Ja, dissimilatie vindt altijd plaats in alle levende cellen", "Nee, overdag vindt alleen fotosynthese plaats", "Nee, planten doen niet aan dissimilatie", "Alleen als het donker is"], u: "Elke levende cel heeft voortdurend ATP nodig. Overdag vinden fotosynthese én dissimilatie plaats; 's nachts alleen dissimilatie." },
        { q: "Wat gebeurt er met de energie die vrijkomt bij dissimilatie?", a: ["Een deel wordt vastgelegd in ATP, de rest komt vrij als warmte", "Alles wordt vastgelegd in ATP", "Alles komt vrij als warmte", "Alles wordt vastgelegd in glucose"], u: "Niet alle energie komt in ATP terecht; een groot deel komt vrij als warmte (belangrijk voor de lichaamstemperatuur)." }
      ],
      open: { q: "Vergelijk aerobe dissimilatie en melkzuurgisting op vier punten: zuurstof nodig, plaats in de cel, eindproducten en ATP-opbrengst.", a: "Aeroob: zuurstof nodig; begint in het cytoplasma (glycolyse) en gaat verder in de mitochondriën; eindproducten CO₂ en H₂O; veel ATP. Melkzuurgisting: geen zuurstof nodig; alleen in het cytoplasma; eindproduct melkzuur (nog energierijk); weinig ATP." }
    },
    {
      titel: "Intensiteit van de stofwisseling",
      kern: [
        "De intensiteit van de stofwisseling kun je bepalen door het zuurstofverbruik, de koolstofdioxideproductie of de warmteproductie te meten (per tijdseenheid, vaak per kg lichaamsgewicht).",
        "Het basaal metabolisme (grondstofwisseling) is de stofwisseling in volledige rust: de energie die nodig is voor o.a. hartslag, ademhaling, hersenen en het op peil houden van de lichaamstemperatuur.",
        "De stofwisseling hangt af van o.a. activiteit (inspanning), leeftijd (hoger bij groei), geslacht, lichaamsgewicht en bouw, de omgevingstemperatuur en hormonen (thyroxine verhoogt de stofwisseling).",
        "Kleine dieren hebben een groot lichaamsoppervlak in verhouding tot hun inhoud. Ze verliezen relatief veel warmte en hebben daardoor per kg een hogere stofwisseling dan grote dieren.",
        "Warmbloedige dieren (vogels, zoogdieren) houden hun lichaamstemperatuur constant. Bij kou gaat hun stofwisseling omhoog (meer verbranding → meer warmte). Dat kost veel voedsel.",
        "Bij koudbloedige dieren (vissen, amfibieën, reptielen, insecten) volgt de lichaamstemperatuur de omgeving. Bij een lagere temperatuur werken hun enzymen trager en daalt de stofwisseling."
      ],
      begrippen: [
        ["Intensiteit van de stofwisseling", "De snelheid van de stofwisseling; te meten via zuurstofverbruik, CO₂-productie of warmteproductie."],
        ["Basaal metabolisme (grondstofwisseling)", "De stofwisseling van een organisme in volledige rust."],
        ["Zuurstofverbruik", "Hoeveelheid zuurstof die per tijdseenheid wordt opgenomen; maat voor de aerobe dissimilatie."],
        ["Warmbloedig", "Met een constante lichaamstemperatuur, onafhankelijk van de omgeving (vogels en zoogdieren)."],
        ["Koudbloedig", "Met een lichaamstemperatuur die afhangt van de omgevingstemperatuur (o.a. vissen, amfibieën, reptielen)."],
        ["Oppervlakte-inhoudverhouding", "Verhouding tussen lichaamsoppervlak en lichaamsinhoud; groter bij kleine dieren, die daardoor relatief meer warmte verliezen."],
        ["Thyroxine", "Schildklierhormoon dat de intensiteit van de stofwisseling verhoogt."]
      ],
      vragen: [
        { q: "Hoe kun je de intensiteit van de stofwisseling van een muis bepalen?", a: ["Door het zuurstofverbruik per uur te meten", "Door de lichaamslengte te meten", "Door het aantal rode bloedcellen te tellen", "Door de hoeveelheid chlorofyl te meten"], u: "Zuurstofverbruik, CO₂-productie en warmteproductie zijn maten voor de (aerobe) dissimilatie." },
        { q: "Een muis en een olifant: welke heeft per kg lichaamsgewicht de hoogste stofwisseling, en waarom?", a: ["De muis: relatief groot oppervlak, dus relatief veel warmteverlies", "De olifant: die is groter en heeft dus meer energie nodig per kg", "De olifant: die heeft een relatief groot oppervlak", "Ze zijn gelijk, want beide zijn zoogdieren"], u: "Kleine dieren hebben een grote oppervlakte-inhoudverhouding en moeten per kg meer warmte produceren." },
        { q: "De omgevingstemperatuur daalt van 20 °C naar 5 °C. Wat gebeurt er met het zuurstofverbruik van een hagedis en van een muis (beide in rust)?", a: ["Hagedis: daalt; muis: stijgt", "Hagedis: stijgt; muis: daalt", "Beide dalen", "Beide stijgen"], u: "Hagedis (koudbloedig): lichaam koelt af, enzymen werken trager → minder dissimilatie. Muis (warmbloedig): verbrandt meer om de temperatuur constant te houden." },
        { q: "Wat is het basaal metabolisme?", a: ["De stofwisseling in volledige rust", "De stofwisseling tijdens maximale inspanning", "De stofwisseling van alleen de spieren", "De totale stofwisseling per dag"], u: "Ook in rust is energie nodig, o.a. voor hart, ademhaling, hersenen en lichaamstemperatuur." },
        { q: "Iemand heeft een te snel werkende schildklier. Wat is een te verwachten gevolg?", a: ["Een hogere stofwisseling: afvallen en het snel warm hebben", "Een lagere stofwisseling: aankomen en het snel koud hebben", "Een lager zuurstofverbruik", "Een lagere hartslag"], u: "Meer thyroxine → intensievere stofwisseling → meer verbranding en warmteproductie." },
        { q: "Waarom heeft een warmbloedig dier meer voedsel nodig dan een even zwaar koudbloedig dier?", a: ["Het gebruikt veel energie om de lichaamstemperatuur constant te houden", "Het heeft minder enzymen", "Het kan geen vet opslaan", "Het doet niet aan anaerobe dissimilatie"], u: "Constante lichaamstemperatuur vraagt voortdurend warmteproductie, dus veel dissimilatie en veel brandstof." }
      ],
      open: { q: "Een egel houdt een winterslaap; zijn lichaamstemperatuur daalt dan sterk. Leg uit wat het voordeel hiervan is voor de egel in de winter.", a: "In de winter is er weinig voedsel. Door de lage lichaamstemperatuur werken enzymen trager en is de intensiteit van de stofwisseling veel lager. De egel hoeft bovendien geen energie te gebruiken om een hoge lichaamstemperatuur te handhaven. Hij verbruikt daardoor weinig brandstof en kan maanden op zijn vetreserve leven." }
    }
  ]
});
