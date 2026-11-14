// Thema 1 (havo 4, deel A): Inleiding in de biologie.
// Eigen samenvattingen en vragen, geordend volgens de basisstoffen van het boek.
// Bij elke vraag is het EERSTE antwoord het goede; de app husselt de volgorde.
window.THEMAS = window.THEMAS || [];
THEMAS.push({
  id: 1,
  boek: "Havo 4 · deel A",
  titel: "Inleiding in de biologie",
  icoon: "🔬",
  bs: [
    {
      titel: "Biologie is overal",
      kern: [
        "Biologie gaat over organismen (levende wezens). Organismen vertonen levenskenmerken, zoals stofwisseling, groei, ontwikkeling, voortplanting en reageren op prikkels.",
        "Je kunt het leven bestuderen op verschillende organisatieniveaus: molecuul → organel → cel → weefsel → orgaan → orgaanstelsel → organisme → populatie → levensgemeenschap → ecosysteem → biosfeer.",
        "Op elk hoger niveau ontstaan nieuwe eigenschappen die de losse onderdelen niet hebben: emergente eigenschappen. Eén hartspiercel kan geen bloed rondpompen, een hart wel.",
        "Een populatie is een groep individuen van dezelfde soort in een bepaald gebied. Alle populaties samen in een gebied vormen de levensgemeenschap; samen met de abiotische factoren is dat een ecosysteem.",
        "In de biologie hangen vorm en functie samen: aan de bouw van een cel of orgaan kun je vaak de functie aflezen."
      ],
      begrippen: [
        ["Organisme", "Een levend wezen, bijvoorbeeld een plant, dier, schimmel of bacterie."],
        ["Levenskenmerken", "Kenmerken die alle organismen hebben, zoals stofwisseling, groei, ontwikkeling, voortplanting en reageren op prikkels."],
        ["Organisatieniveau", "Niveau waarop je het leven kunt bestuderen, van molecuul tot biosfeer."],
        ["Emergente eigenschap", "Eigenschap die pas op een hoger organisatieniveau ontstaat en die de losse onderdelen niet hebben."],
        ["Populatie", "Groep individuen van dezelfde soort die in een bepaald gebied leven en zich onderling voortplanten."],
        ["Levensgemeenschap", "Alle populaties van verschillende soorten samen in een gebied."],
        ["Ecosysteem", "Een levensgemeenschap samen met de abiotische (niet-levende) factoren in een gebied."],
        ["Biosfeer (systeem aarde)", "Het deel van de aarde waar leven voorkomt: alle ecosystemen samen."]
      ],
      vragen: [
        { q: "Wat is de juiste volgorde van klein naar groot?", a: ["cel → weefsel → orgaan → orgaanstelsel → organisme", "weefsel → cel → orgaan → organisme → orgaanstelsel", "cel → orgaan → weefsel → orgaanstelsel → organisme", "organel → weefsel → cel → orgaan → organisme"], u: "Cellen vormen weefsels, weefsels vormen organen, organen vormen orgaanstelsels en die vormen samen het organisme." },
        { q: "Alle merels in een stadspark vormen samen een …", a: ["populatie", "levensgemeenschap", "ecosysteem", "orgaanstelsel"], u: "Een populatie is een groep individuen van één soort in een bepaald gebied." },
        { q: "Een hart kan bloed rondpompen, maar één losse hartspiercel kan dat niet. Dit is een voorbeeld van …", a: ["een emergente eigenschap", "een levenskenmerk", "celdifferentiatie", "homeostase"], u: "Emergente eigenschappen ontstaan pas op een hoger organisatieniveau, door samenwerking van de onderdelen." },
        { q: "Wat is het verschil tussen een levensgemeenschap en een ecosysteem?", a: ["Bij een ecosysteem horen ook de abiotische factoren", "Een levensgemeenschap bestaat uit één soort", "Een ecosysteem bevat alleen planten", "Er is geen verschil"], u: "Levensgemeenschap = alle populaties samen. Ecosysteem = levensgemeenschap + abiotische factoren (licht, temperatuur, water, bodem)." },
        { q: "Welke hoort NIET bij de levenskenmerken?", a: ["Zich verplaatsen van de ene plek naar de andere", "Stofwisseling", "Voortplanting", "Reageren op prikkels"], u: "Niet alle organismen verplaatsen zich (denk aan planten). Stofwisseling, voortplanting en reageren op prikkels zijn wel levenskenmerken." }
      ],
      open: { q: "Een onderzoeker bestudeert hoe insuline aan een receptor op een levercel bindt. Een andere onderzoeker telt het aantal otters in de Weerribben. Op welk organisatieniveau werkt elk van hen?", a: "De eerste werkt op het niveau van moleculen (en de cel). De tweede werkt op het niveau van de populatie: alle otters (één soort) in één gebied." }
    },
    {
      titel: "Organen, weefsels en cellen",
      kern: [
        "Een orgaanstelsel is een groep organen die samen een functie vervullen (bijvoorbeeld het verteringsstelsel). Een orgaan bestaat uit verschillende weefsels.",
        "Een weefsel is een groep cellen met dezelfde bouw en dezelfde functie. Tussen de cellen kan tussencelstof zitten (bijvoorbeeld bij bot en kraakbeen).",
        "Cellen specialiseren zich: celdifferentiatie. Daarbij krijgt de cel een vorm die past bij de functie. Stamcellen zijn nog niet gespecialiseerd en kunnen zich blijven delen.",
        "Cellen bekijk je met een microscoop. Totale vergroting = vergroting oculair × vergroting objectief.",
        "Werkelijke grootte = grootte in beeld (of tekening) : vergroting. Let op eenheden: 1 mm = 1000 µm."
      ],
      begrippen: [
        ["Weefsel", "Groep cellen met dezelfde bouw en dezelfde functie."],
        ["Orgaan", "Deel van een organisme met een of meer functies, opgebouwd uit verschillende weefsels."],
        ["Orgaanstelsel", "Groep organen die samenwerken aan een bepaalde functie."],
        ["Tussencelstof", "Stof tussen de cellen van een weefsel, gemaakt door die cellen (bijv. in bot en kraakbeen)."],
        ["Celdifferentiatie (specialisatie)", "Het proces waarbij een cel een speciale bouw krijgt die past bij zijn functie."],
        ["Stamcel", "Ongespecialiseerde cel die zich kan delen en waaruit gespecialiseerde cellen kunnen ontstaan."],
        ["Totale vergroting", "Vergroting van het oculair × vergroting van het objectief."],
        ["Micrometer (µm)", "Eenduizendste millimeter: 1 mm = 1000 µm."]
      ],
      vragen: [
        { q: "Wat is een weefsel?", a: ["Een groep cellen met dezelfde bouw en functie", "Een groep organen die samenwerken", "Een groep cellen met elk een andere functie", "Een deel van een cel met een eigen functie"], u: "Weefsel = cellen met dezelfde bouw en functie. Een deel van een cel met een eigen functie is een organel." },
        { q: "Je gebruikt een oculair van 10× en een objectief van 40×. Wat is de totale vergroting?", a: ["400×", "50×", "30×", "4×"], u: "Totale vergroting = oculair × objectief = 10 × 40 = 400×." },
        { q: "Op een foto met vergroting 500× is een cel 20 mm lang. Hoe groot is de cel in werkelijkheid?", a: ["40 µm", "4 µm", "400 µm", "10 µm"], u: "20 mm : 500 = 0,04 mm = 40 µm." },
        { q: "Wat gebeurt er bij celdifferentiatie?", a: ["Een cel krijgt een bouw die past bij een speciale functie", "Een cel deelt zich in twee gelijke cellen", "Een cel neemt water op en zwelt", "Een cel verliest zijn celkern"], u: "Differentiatie = specialisatie: de bouw van de cel past zich aan de functie aan." },
        { q: "Waarom zijn stamcellen bijzonder?", a: ["Ze zijn nog niet gespecialiseerd en kunnen verschillende celtypen leveren", "Ze hebben geen DNA", "Ze kunnen zich niet meer delen", "Ze komen alleen bij planten voor"], u: "Stamcellen zijn ongespecialiseerd, blijven delen en hun dochtercellen kunnen zich specialiseren." }
      ],
      open: { q: "Rode bloedcellen van zoogdieren hebben geen celkern en zijn plat met een deuk aan beide kanten. Leg uit hoe deze bouw past bij de functie.", a: "Rode bloedcellen vervoeren zuurstof. Zonder kern is er meer ruimte voor hemoglobine. De platte, ingedeukte vorm geeft een groot oppervlak ten opzichte van de inhoud, zodat zuurstof snel in en uit de cel kan diffunderen. (Vorm past bij functie.)" }
    },
    {
      titel: "Plantaardige en dierlijke cellen",
      kern: [
        "Alle cellen hebben een celmembraan en cytoplasma. Het celmembraan regelt welke stoffen de cel in en uit gaan.",
        "Plantaardige cellen hebben daarnaast een celwand (stevigheid, van cellulose), vaak een grote centrale vacuole (gevuld met vocht) en plastiden. Dierlijke cellen hebben die niet.",
        "Plastiden: chloroplasten (bladgroenkorrels, fotosynthese), chromoplasten (kleurstofkorrels in bloemen en vruchten) en amyloplasten (zetmeelkorrels, opslag).",
        "Eukaryoten (planten, dieren, schimmels) hebben cellen met een celkern en organellen met een membraan. Prokaryoten (bacteriën) hebben geen celkern: het DNA ligt los in het cytoplasma.",
        "Schimmelcellen hebben wel een celwand en een kern, maar geen bladgroenkorrels. Bacteriën hebben een celwand, maar geen kern."
      ],
      begrippen: [
        ["Celmembraan", "Dun vlies om het cytoplasma dat regelt welke stoffen de cel in en uit gaan."],
        ["Cytoplasma", "De inhoud van de cel binnen het celmembraan: grondplasma (vloeistof) met daarin de organellen."],
        ["Celwand", "Stevige laag buiten het celmembraan bij planten, schimmels en bacteriën; geeft stevigheid."],
        ["Vacuole", "Blaasje gevuld met vocht (water met opgeloste stoffen); bij plantencellen vaak één grote centrale vacuole."],
        ["Chloroplast (bladgroenkorrel)", "Plastide met chlorofyl waarin fotosynthese plaatsvindt."],
        ["Chromoplast", "Plastide met kleurstof (geel, oranje, rood), o.a. in bloemen en vruchten."],
        ["Amyloplast (zetmeelkorrel)", "Kleurloze plastide waarin zetmeel is opgeslagen."],
        ["Prokaryoot", "Organisme zonder celkern; het DNA ligt los in het cytoplasma. Bacteriën zijn prokaryoten."],
        ["Eukaryoot", "Organisme met cellen die een celkern en organellen met membranen hebben (planten, dieren, schimmels)."]
      ],
      vragen: [
        { q: "Welk onderdeel hebben plantencellen wel, maar dierlijke cellen niet?", a: ["Celwand", "Celmembraan", "Celkern", "Mitochondriën"], u: "Dierlijke cellen hebben geen celwand, geen plastiden en geen grote centrale vacuole." },
        { q: "Wat is het belangrijkste verschil tussen een prokaryoot en een eukaryoot?", a: ["Een prokaryoot heeft geen celkern", "Een prokaryoot heeft geen DNA", "Een prokaryoot heeft geen celmembraan", "Een eukaryoot heeft geen ribosomen"], u: "Bij prokaryoten (bacteriën) ligt het DNA los in het cytoplasma. Ze hebben wél DNA, een celmembraan en ribosomen." },
        { q: "Een cel heeft een celwand en een celkern, maar geen bladgroenkorrels. De cel komt niet van een plant. Van welk organisme dan wel?", a: ["Een schimmel", "Een bacterie", "Een dier", "Een virus"], u: "Schimmels: wel celwand en kern, geen bladgroen. Bacteriën hebben geen kern, dieren geen celwand." },
        { q: "In welke plastiden vindt fotosynthese plaats?", a: ["Chloroplasten", "Chromoplasten", "Amyloplasten", "In alle plastiden"], u: "Alleen chloroplasten (bladgroenkorrels) bevatten chlorofyl." },
        { q: "Wat is de functie van het celmembraan?", a: ["Regelen welke stoffen de cel in en uit gaan", "Stevigheid geven aan de cel", "Eiwitten maken", "Energie vrijmaken uit glucose"], u: "Het celmembraan is de selectieve grens van de cel. Stevigheid komt van de celwand (bij planten)." }
      ],
      open: { q: "Een aardappelknol groeit onder de grond. De cellen bevatten veel amyloplasten maar geen chloroplasten. Verklaar dit.", a: "Onder de grond is geen licht, dus fotosynthese is daar niet mogelijk: chloroplasten hebben er geen nut. De knol is een opslagorgaan: de glucose die in de bladeren is gemaakt, wordt als zetmeel opgeslagen in amyloplasten." }
    },
    {
      titel: "Organellen",
      kern: [
        "De celkern bevat het DNA (de erfelijke informatie) en regelt wat er in de cel gebeurt. Het kernmembraan heeft kernporiën waardoor stoffen de kern in en uit kunnen.",
        "Ribosomen maken eiwitten. Ze liggen los in het cytoplasma of op het endoplasmatisch reticulum (ruw ER).",
        "Het endoplasmatisch reticulum (ER) is een netwerk van membranen voor transport van stoffen door de cel. Het golgisysteem bewerkt en verpakt eiwitten in blaasjes, bijvoorbeeld om ze uit te scheiden.",
        "Mitochondriën maken energie vrij uit glucose (verbranding/aerobe dissimilatie). Cellen die veel energie nodig hebben, zoals spiercellen, bevatten veel mitochondriën.",
        "Lysosomen bevatten enzymen die stoffen en versleten celonderdelen afbreken. Het cytoskelet (eiwitdraden) geeft de cel vorm en zorgt voor beweging en transport in de cel."
      ],
      begrippen: [
        ["Celkern", "Organel met het DNA; regelt de processen in de cel."],
        ["Kernporiën", "Openingen in het kernmembraan waardoor stoffen (zoals RNA) de kern in en uit gaan."],
        ["Ribosoom", "Organel waar eiwitten worden gemaakt (eiwitsynthese)."],
        ["Endoplasmatisch reticulum (ER)", "Netwerk van membranen in het cytoplasma voor transport van stoffen; ruw ER is bezet met ribosomen."],
        ["Golgisysteem", "Stapel platte blaasjes die eiwitten bewerkt, sorteert en verpakt in blaasjes."],
        ["Mitochondrium", "Organel waarin met zuurstof energie wordt vrijgemaakt uit glucose (aerobe dissimilatie)."],
        ["Lysosoom", "Blaasje met verteringsenzymen dat stoffen en versleten organellen afbreekt."],
        ["Cytoskelet", "Netwerk van eiwitdraden dat de cel vorm geeft en zorgt voor beweging en transport in de cel."]
      ],
      vragen: [
        { q: "In welk organel worden eiwitten gemaakt?", a: ["Ribosoom", "Lysosoom", "Mitochondrium", "Golgisysteem"], u: "Ribosomen koppelen aminozuren aan elkaar tot eiwitten. Het golgisysteem bewerkt en verpakt ze daarna." },
        { q: "Een kliercel maakt veel verteringsenzymen en scheidt die uit. Welke route volgt zo'n enzym?", a: ["ribosoom → ER → golgisysteem → blaasje → celmembraan", "golgisysteem → ribosoom → ER → celmembraan", "celkern → lysosoom → mitochondrium → celmembraan", "ER → ribosoom → lysosoom → celmembraan"], u: "Gemaakt op ribosomen van het ruw ER, vervoerd via het ER, bewerkt en verpakt door het golgisysteem, en via blaasjes naar het celmembraan gebracht." },
        { q: "Spiercellen bevatten erg veel mitochondriën. Waarom?", a: ["Spiercellen hebben veel energie nodig", "Spiercellen maken veel eiwitten voor export", "Spiercellen moeten veel afvalstoffen verteren", "Spiercellen doen aan fotosynthese"], u: "In mitochondriën komt bij de verbranding van glucose energie vrij. Samentrekken kost veel energie." },
        { q: "Wat is de functie van lysosomen?", a: ["Afbreken van stoffen en versleten celonderdelen", "Opslaan van zetmeel", "Maken van DNA", "Vervoeren van eiwitten naar de kern"], u: "Lysosomen bevatten enzymen voor de vertering binnen de cel." },
        { q: "Wat bevat de celkern?", a: ["DNA met de erfelijke informatie", "Chlorofyl", "Verteringsenzymen", "Celvocht met opgeloste suikers"], u: "In de kern ligt het DNA (in de chromosomen)." }
      ],
      open: { q: "Witte bloedcellen die bacteriën 'opeten' bevatten opvallend veel lysosomen. Leg uit waarom.", a: "De opgenomen bacteriën moeten in de cel worden afgebroken. Lysosomen bevatten de enzymen daarvoor: ze versmelten met het blaasje waarin de bacterie zit en verteren de bacterie." }
    },
    {
      titel: "Transport door membranen",
      kern: [
        "Diffusie: deeltjes verplaatsen zich netto van een plaats met een hoge concentratie naar een plaats met een lage concentratie (met de concentratiegradiënt mee). Dit kost de cel geen energie: passief transport.",
        "Osmose is diffusie van water door een selectief permeabel (semipermeabel) membraan: water gaat netto van de lage osmotische waarde (weinig opgeloste deeltjes) naar de hoge osmotische waarde (veel opgeloste deeltjes).",
        "Actief transport gaat tegen de concentratiegradiënt in, met transporteiwitten (pompen) in het membraan. Dit kost energie (ATP).",
        "Plantencel in een hypotone oplossing (bijv. kraanwater): de cel neemt water op, de celinhoud drukt tegen de celwand → turgor (stevigheid). In een hypertone oplossing (bijv. zout water) verliest de cel water; het celmembraan laat los van de celwand → plasmolyse.",
        "Dierlijke cellen hebben geen celwand: in een hypotone oplossing zwellen ze en kunnen ze barsten, in een hypertone oplossing krimpen ze. In een isotone oplossing verandert het volume niet.",
        "Grote deeltjes gaan via blaasjes: endocytose (de cel in) en exocytose (de cel uit)."
      ],
      begrippen: [
        ["Diffusie", "Netto verplaatsing van deeltjes van een hoge naar een lage concentratie; passief."],
        ["Concentratiegradiënt", "Het verschil in concentratie van een stof tussen twee plaatsen."],
        ["Osmose", "Diffusie van water door een selectief permeabel membraan, van lage naar hoge osmotische waarde."],
        ["Selectief permeabel (semipermeabel)", "Membraan dat sommige stoffen (zoals water) wel doorlaat en andere niet."],
        ["Osmotische waarde", "Maat voor de concentratie opgeloste deeltjes; hoe meer opgeloste deeltjes, hoe hoger."],
        ["Actief transport", "Transport door het membraan tegen de concentratiegradiënt in, via transporteiwitten; kost energie (ATP)."],
        ["Turgor", "Druk van de celinhoud op de celwand van een plantencel; geeft stevigheid."],
        ["Plasmolyse", "Het loslaten van het celmembraan van de celwand doordat een plantencel veel water verliest."],
        ["Hypertoon / hypotoon / isotoon", "Oplossing met een hogere / lagere / gelijke osmotische waarde vergeleken met een andere oplossing (bijv. de celinhoud)."],
        ["Endocytose / exocytose", "Opnemen / afgeven van (grote) deeltjes via blaasjes die ontstaan uit of versmelten met het celmembraan."]
      ],
      vragen: [
        { q: "Je legt rode bloedcellen in gedestilleerd water. Wat gebeurt er?", a: ["Ze nemen water op en barsten", "Ze verliezen water en krimpen", "Er gebeurt niets", "Er treedt plasmolyse op"], u: "Gedestilleerd water is hypotoon: water gaat door osmose de cel in. Zonder celwand barst de cel. Plasmolyse kan alleen bij cellen met een celwand." },
        { q: "Plantencellen liggen in een sterke zoutoplossing. Wat zie je onder de microscoop?", a: ["Het celmembraan laat los van de celwand", "De cellen barsten", "De cellen worden steviger", "De celwand krimpt sterk mee"], u: "De zoutoplossing is hypertoon: water gaat de cel uit, de inhoud krimpt en het celmembraan laat los van de celwand = plasmolyse." },
        { q: "Wat is een verschil tussen diffusie en actief transport?", a: ["Actief transport kost energie en gaat tegen de concentratiegradiënt in", "Diffusie kost energie, actief transport niet", "Diffusie gaat van lage naar hoge concentratie", "Actief transport heeft geen membraaneiwitten nodig"], u: "Diffusie is passief (hoog → laag). Actief transport gaat van laag → hoog via transporteiwitten en kost ATP." },
        { q: "Bij osmose verplaatst water zich netto …", a: ["van de lage naar de hoge osmotische waarde", "van de hoge naar de lage osmotische waarde", "alleen de cel in", "alleen met behulp van ATP"], u: "Water gaat naar de kant met de meeste opgeloste deeltjes (hoge osmotische waarde)." },
        { q: "Waardoor staat een goed bewaterde kamerplant stevig rechtop?", a: ["Door de turgor in de cellen", "Door plasmolyse in de cellen", "Door actief transport van water", "Doordat de celwanden water opnemen"], u: "De cellen zitten vol water en de celinhoud drukt tegen de celwand (turgor). Bij watertekort neemt de turgor af: de plant wordt slap." },
        { q: "Wortelcellen nemen mineralen op uit de bodem, terwijl de concentratie in de cel al hoger is dan in de bodem. Hoe heet dit transport?", a: ["Actief transport", "Diffusie", "Osmose", "Exocytose"], u: "Van lage naar hoge concentratie = tegen de gradiënt in = actief transport (kost ATP)." }
      ],
      open: { q: "Sla die je een tijd in een dressing met veel zout laat staan, wordt slap. Leg dit uit met de begrippen osmotische waarde, osmose en turgor.", a: "De dressing heeft een hogere osmotische waarde dan de inhoud van de slacellen (hypertoon). Door osmose gaat water de cellen uit. De celinhoud drukt daardoor minder hard tegen de celwand: de turgor neemt af en de sla wordt slap." }
    },
    {
      titel: "Natuurwetenschappelijk onderzoek",
      kern: [
        "Fasen van een onderzoek: waarneming → probleemstelling/onderzoeksvraag → hypothese (met verwachting) → experiment → resultaten → conclusie.",
        "Een hypothese is een voorlopig antwoord op de onderzoeksvraag dat je kunt toetsen. De conclusie zegt of de hypothese wordt aangenomen of verworpen.",
        "In een goed experiment verander je maar één factor (de onafhankelijke variabele). Alle andere omstandigheden houd je gelijk. Wat je meet is de afhankelijke variabele.",
        "Een controle-experiment (controlegroep) is gelijk aan de proef, behalve de onderzochte factor. Zo weet je dat het effect door die ene factor komt.",
        "Werk met grote aantallen proefpersonen of proefdieren en herhaal metingen: dan zijn de resultaten betrouwbaarder en speelt toeval een kleinere rol.",
        "Bij medicijnonderzoek krijgt de controlegroep een placebo (nepmiddel). Bij dubbelblind onderzoek weten proefpersoon én onderzoeker niet wie het echte middel krijgt."
      ],
      begrippen: [
        ["Onderzoeksvraag (probleemstelling)", "De vraag waarop het onderzoek antwoord moet geven."],
        ["Hypothese", "Een toetsbaar, voorlopig antwoord op de onderzoeksvraag."],
        ["Onafhankelijke variabele", "De factor die de onderzoeker zelf verandert."],
        ["Afhankelijke variabele", "De factor die gemeten wordt; het resultaat."],
        ["Controle-experiment", "Proef die gelijk is aan het experiment, behalve de onderzochte factor; dient ter vergelijking."],
        ["Betrouwbaarheid", "Mate waarin toeval is uitgesloten: bij herhaling krijg je dezelfde uitkomst. Neemt toe met grote aantallen en herhalingen."],
        ["Placebo", "Nepmiddel zonder werkzame stof, gegeven aan de controlegroep."],
        ["Dubbelblind onderzoek", "Onderzoek waarbij proefpersonen en onderzoekers niet weten wie het echte middel of de placebo krijgt."],
        ["Conclusie", "Het antwoord op de onderzoeksvraag op basis van de resultaten; de hypothese wordt aangenomen of verworpen."]
      ],
      vragen: [
        { q: "Een leerling onderzoekt of tuinkerszaden water nodig hebben om te kiemen. Wat is het juiste controle-experiment?", a: ["Hetzelfde bakje met zaden, maar zonder water", "Een bakje met andere zaden en water", "Een bakje met zaden en water in het donker", "Een leeg bakje met water"], u: "De controle verschilt maar in één factor (water) van de proef. Alle andere omstandigheden zijn gelijk." },
        { q: "Wat is een hypothese?", a: ["Een toetsbaar voorlopig antwoord op de onderzoeksvraag", "De uitkomst van het experiment", "Een beschrijving van de werkwijze", "Een samenvatting van de meetresultaten"], u: "De hypothese stel je vóór het experiment op; het experiment toetst hem." },
        { q: "Je onderzoekt het effect van temperatuur op de hartslag van watervlooien. Wat is de afhankelijke variabele?", a: ["De hartslag", "De temperatuur", "Het aantal watervlooien", "De soort watervlo"], u: "Afhankelijk = wat je meet (hartslag). Onafhankelijk = wat je zelf verandert (temperatuur)." },
        { q: "Waarom gebruikt een onderzoeker 100 planten per groep in plaats van 2?", a: ["Om de invloed van toeval kleiner te maken", "Om meer variabelen tegelijk te kunnen testen", "Omdat dan geen controlegroep nodig is", "Om de hypothese te kunnen veranderen"], u: "Grote aantallen maken de resultaten betrouwbaarder: individuele verschillen en toeval tellen minder zwaar." },
        { q: "Waarom krijgt de controlegroep bij medicijnonderzoek een placebo?", a: ["Om uit te sluiten dat het effect komt door de verwachting van de proefpersoon", "Omdat het echte medicijn te duur is", "Om bijwerkingen te voorkomen", "Zodat de groep kleiner kan zijn"], u: "Alleen al het idee een medicijn te krijgen kan effect hebben (placebo-effect). Met een placebo is de behandeling op de werkzame stof na gelijk." }
      ],
      open: { q: "Een leerling wil weten of planten sneller groeien met kunstmest. Hij zet plant A met kunstmest in de vensterbank en plant B zonder kunstmest in de kelder. Na twee weken is A groter. Noem twee fouten in de opzet.", a: "1) Er verschillen twee factoren: kunstmest én licht/temperatuur (vensterbank of kelder). Je weet dus niet waardoor het verschil komt; alleen kunstmest mag verschillen. 2) Hij gebruikt maar één plant per groep: het verschil kan toeval zijn. Gebruik grote aantallen (en planten van dezelfde soort en grootte)." }
    }
  ]
});
