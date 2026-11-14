// Thema 5 (havo 4, deel B): Regeling.
window.THEMAS = window.THEMAS || [];
THEMAS.push({
  id: 5,
  boek: "Havo 4 · deel B",
  titel: "Regeling",
  icoon: "🧠",
  bs: [
    {
      titel: "Homeostase en regelkringen",
      kern: [
        "Het inwendige milieu bestaat uit bloedplasma en weefselvloeistof. Homeostase is het min of meer constant houden van het inwendige milieu (temperatuur, glucosegehalte, pH, watergehalte): een dynamisch evenwicht.",
        "Een regelkring houdt een waarde rond de normwaarde: receptoren (sensoren) meten de waarde, een regelcentrum vergelijkt die met de norm en stuurt effectoren (spieren, klieren) aan.",
        "Negatieve terugkoppeling: een afwijking van de norm leidt tot een reactie die de afwijking tegengaat. Zo blijft de waarde stabiel.",
        "Positieve terugkoppeling: het effect versterkt zichzelf (bijv. oxytocine en weeën bij een bevalling). Dat zorgt niet voor stabiliteit.",
        "Twee regelsystemen: het zenuwstelsel (impulsen via zenuwen: snel, kort, heel gericht) en het hormoonstelsel (hormonen via het bloed: langzamer, langer werkzaam, bereikt alle doelwitcellen)."
      ],
      begrippen: [
        ["Inwendig milieu", "Bloedplasma en weefselvloeistof: de omgeving van de cellen in het lichaam."],
        ["Homeostase", "Het in stand houden van een dynamisch evenwicht in het inwendige milieu."],
        ["Regelkring", "Systeem van receptor, regelcentrum en effector dat een waarde rond de normwaarde houdt."],
        ["Normwaarde", "De waarde waarop een regelkring is ingesteld (bijv. 37 °C)."],
        ["Receptor (sensor)", "Cel of zintuig dat een verandering (prikkel) waarneemt."],
        ["Effector", "Spier of klier die reageert op een signaal van zenuwstelsel of hormoonstelsel."],
        ["Negatieve terugkoppeling", "Regeling waarbij een verandering een reactie oproept die die verandering tegengaat."],
        ["Positieve terugkoppeling", "Regeling waarbij een verandering een reactie oproept die die verandering versterkt."]
      ],
      vragen: [
        { q: "Wat is homeostase?", a: ["Het ongeveer constant houden van het inwendige milieu", "Het aanpassen van het lichaam aan de buitentemperatuur", "Het afgeven van hormonen aan het bloed", "Het doorgeven van impulsen door zenuwen"], u: "Homeostase = dynamisch evenwicht in het inwendige milieu, geregeld door regelkringen." },
        { q: "Je lichaamstemperatuur stijgt. Daardoor ga je zweten en daalt de temperatuur weer. Dit is een voorbeeld van …", a: ["negatieve terugkoppeling", "positieve terugkoppeling", "een reflexboog zonder regelcentrum", "actief transport"], u: "De reactie (zweten) gaat de afwijking (stijging) tegen: negatieve terugkoppeling." },
        { q: "Tijdens de bevalling zorgen weeën voor meer oxytocine en zorgt oxytocine voor sterkere weeën. Dit is …", a: ["positieve terugkoppeling", "negatieve terugkoppeling", "homeostase", "een normwaarde"], u: "Het effect versterkt zichzelf: positieve terugkoppeling." },
        { q: "Welke uitspraak over het zenuwstelsel en het hormoonstelsel is juist?", a: ["Het zenuwstelsel werkt snel en kort, het hormoonstelsel langzamer en langer", "Het hormoonstelsel werkt sneller dan het zenuwstelsel", "Hormonen worden via zenuwen vervoerd", "Het zenuwstelsel werkt via het bloed"], u: "Impulsen gaan snel via zenuwen naar één plek. Hormonen gaan via het bloed: trager, maar het effect houdt langer aan." },
        { q: "Wat is in een regelkring de taak van de effector?", a: ["De reactie uitvoeren die de waarde bijstuurt", "De waarde meten", "De gemeten waarde vergelijken met de norm", "De normwaarde bepalen"], u: "Receptor meet, regelcentrum vergelijkt, effector (spier of klier) voert de reactie uit." }
      ],
      open: { q: "Het is koud en je lichaamstemperatuur dreigt te dalen. Beschrijf de regelkring: wat doen receptor, regelcentrum en effectoren, en waarom is dit negatieve terugkoppeling?", a: "Temperatuurreceptoren (in de huid en in de hersenen) registreren de daling. Het regelcentrum in de hersenen (hypothalamus) vergelijkt de waarde met de norm (37 °C) en stuurt effectoren aan: spieren gaan rillen (extra warmte) en bloedvaten in de huid vernauwen (minder warmteverlies). De temperatuur stijgt weer richting de norm. De reactie gaat de afwijking tegen: negatieve terugkoppeling." }
    },
    {
      titel: "Het hormoonstelsel",
      kern: [
        "Hormoonklieren (endocriene klieren) geven hormonen direct af aan het bloed. Hormonen werken alleen op doelwitcellen: cellen met passende receptoren voor dat hormoon.",
        "De hypofyse (onder aan de hersenen, aangestuurd door de hypothalamus) regelt veel andere hormoonklieren, o.a. met TSH (schildklier), FSH en LH (geslachtsklieren); maakt ook groeihormoon en geeft ADH en oxytocine af.",
        "De schildklier maakt thyroxine: dat verhoogt de stofwisseling (verbranding) in cellen. Veel thyroxine remt de afgifte van TSH door de hypofyse: negatieve terugkoppeling.",
        "De eilandjes van Langerhans in de alvleesklier regelen het bloedglucosegehalte. Insuline verlaagt het: cellen nemen meer glucose op en lever en spieren zetten glucose om in glycogeen. Glucagon verhoogt het: de lever zet glycogeen om in glucose.",
        "Het bijniermerg maakt adrenaline (bij stress, schrik, inspanning): hartslag en ademhaling omhoog, glycogeen wordt omgezet in glucose, meer bloed naar de spieren.",
        "Diabetes type 1: de eilandjes maken (bijna) geen insuline. Diabetes type 2: de cellen zijn minder gevoelig voor insuline."
      ],
      begrippen: [
        ["Hormoon", "Signaalstof die door een hormoonklier aan het bloed wordt afgegeven en de werking van doelwitcellen beïnvloedt."],
        ["Hormoonklier (endocriene klier)", "Klier zonder afvoerbuis die hormonen direct aan het bloed afgeeft."],
        ["Doelwitcel", "Cel met receptoren waaraan een bepaald hormoon kan binden; alleen deze cellen reageren op het hormoon."],
        ["Hypofyse", "Hormoonklier onder aan de hersenen die o.a. andere hormoonklieren aanstuurt (TSH, FSH, LH) en groeihormoon maakt."],
        ["Thyroxine", "Hormoon van de schildklier dat de stofwisseling stimuleert."],
        ["TSH", "Hormoon van de hypofyse dat de schildklier aanzet tot het maken van thyroxine."],
        ["Insuline", "Hormoon uit de eilandjes van Langerhans dat het bloedglucosegehalte verlaagt (glucose → glycogeen, meer opname door cellen)."],
        ["Glucagon", "Hormoon uit de eilandjes van Langerhans dat het bloedglucosegehalte verhoogt (glycogeen → glucose in de lever)."],
        ["Glycogeen", "Opslagvorm van glucose in lever en spieren."],
        ["Adrenaline", "Hormoon van het bijniermerg dat het lichaam klaarmaakt voor actie (vechten of vluchten)."]
      ],
      vragen: [
        { q: "Je hebt net een grote maaltijd met veel koolhydraten gegeten. Wat gebeurt er?", a: ["Er wordt meer insuline afgegeven; glucose wordt omgezet in glycogeen", "Er wordt meer glucagon afgegeven; glycogeen wordt omgezet in glucose", "Er wordt meer insuline afgegeven; glycogeen wordt omgezet in glucose", "Er wordt meer adrenaline afgegeven; glucose wordt uitgeplast"], u: "Na een maaltijd stijgt het bloedglucosegehalte. Insuline verlaagt het: cellen nemen glucose op, lever en spieren slaan het op als glycogeen." },
        { q: "Waarom reageren alleen bepaalde cellen op een hormoon, terwijl het hormoon via het bloed overal komt?", a: ["Alleen doelwitcellen hebben de passende receptoren", "Het hormoon wordt alleen naar die cellen vervoerd", "Andere cellen breken het hormoon direct af", "Het bloed komt alleen bij doelwitcellen"], u: "Een hormoon past alleen op specifieke receptoren. Cellen zonder die receptoren reageren niet." },
        { q: "Welke klier maakt insuline en glucagon?", a: ["De alvleesklier (eilandjes van Langerhans)", "De schildklier", "De hypofyse", "De bijnieren"], u: "De eilandjes van Langerhans liggen verspreid in de alvleesklier." },
        { q: "Het thyroxinegehalte in het bloed is te hoog. Wat doet de hypofyse bij een gezond persoon?", a: ["Minder TSH afgeven", "Meer TSH afgeven", "Meer thyroxine afgeven", "Insuline afgeven"], u: "Negatieve terugkoppeling: veel thyroxine remt de afgifte van TSH, waardoor de schildklier minder thyroxine maakt." },
        { q: "Wat is een effect van adrenaline?", a: ["De hartslag gaat omhoog en glycogeen wordt omgezet in glucose", "De hartslag gaat omlaag en de vertering wordt gestimuleerd", "Het bloedglucosegehalte daalt", "De stofwisseling komt tot stilstand"], u: "Adrenaline maakt het lichaam klaar voor actie: meer glucose en zuurstof naar de spieren." },
        { q: "Wat is er aan de hand bij diabetes type 1?", a: ["De eilandjes van Langerhans maken (bijna) geen insuline", "De lever maakt te veel glycogeen", "De cellen maken te veel insulinereceptoren", "De schildklier maakt te weinig thyroxine"], u: "Bij type 1 ontbreekt insuline; bij type 2 zijn de cellen ongevoeliger voor insuline." }
      ],
      open: { q: "Iemand heeft 's ochtends niet ontbeten en gaat hardlopen. Leg uit hoe het bloedglucosegehalte toch op peil blijft. Noem het hormoon, de klier en het orgaan dat reageert.", a: "Door het verbruik daalt het bloedglucosegehalte. De eilandjes van Langerhans (alvleesklier) geven dan meer glucagon af. Glucagon zet de lever aan om glycogeen om te zetten in glucose, dat aan het bloed wordt afgegeven. (Ook adrenaline uit het bijniermerg heeft dit effect.) Zo stijgt het glucosegehalte weer: negatieve terugkoppeling." }
    },
    {
      titel: "Het zenuwstelsel",
      kern: [
        "Het centrale zenuwstelsel bestaat uit de hersenen en het ruggenmerg. Het perifere zenuwstelsel bestaat uit de zenuwen die het centrale zenuwstelsel verbinden met de rest van het lichaam.",
        "Een neuron (zenuwcel) heeft een cellichaam met uitlopers. Dendrieten geleiden impulsen naar het cellichaam toe, het axon geleidt impulsen van het cellichaam af.",
        "Sensorische neuronen geleiden impulsen van receptoren (zintuigen) naar het centrale zenuwstelsel. Motorische neuronen geleiden impulsen van het centrale zenuwstelsel naar effectoren (spieren en klieren). Schakelneuronen liggen in het centrale zenuwstelsel en verbinden neuronen.",
        "Een zenuw is een bundel uitlopers van neuronen, omgeven door bindweefsel.",
        "Grote hersenen: bewuste gewaarwording, bewuste bewegingen, denken en geheugen (in de hersenschors liggen centra). Kleine hersenen: coördinatie van bewegingen en evenwicht. Hersenstam: regelt o.a. ademhaling en hartslag en geeft impulsen door.",
        "In het ruggenmerg ligt de grijze stof (cellichamen) binnenin en de witte stof (uitlopers met myeline) aan de buitenkant. In de grote hersenen is dat andersom: de schors is grijs."
      ],
      begrippen: [
        ["Centraal zenuwstelsel", "Hersenen en ruggenmerg."],
        ["Perifeer zenuwstelsel", "De zenuwen buiten hersenen en ruggenmerg."],
        ["Neuron", "Zenuwcel: cellichaam met uitlopers (dendrieten en axon)."],
        ["Dendriet", "Uitloper die impulsen naar het cellichaam toe geleidt."],
        ["Axon", "Uitloper die impulsen van het cellichaam af geleidt."],
        ["Sensorisch neuron", "Neuron dat impulsen van een receptor naar het centrale zenuwstelsel geleidt."],
        ["Motorisch neuron", "Neuron dat impulsen van het centrale zenuwstelsel naar een spier of klier geleidt."],
        ["Schakelneuron", "Neuron in het centrale zenuwstelsel dat impulsen doorgeeft tussen andere neuronen."],
        ["Zenuw", "Bundel uitlopers van neuronen, omgeven door bindweefsel."],
        ["Grijze stof / witte stof", "Grijze stof bevat vooral cellichamen; witte stof bevat vooral uitlopers met myeline."]
      ],
      vragen: [
        { q: "Welke neuronen geleiden impulsen van het centrale zenuwstelsel naar spieren?", a: ["Motorische neuronen", "Sensorische neuronen", "Schakelneuronen", "Receptorcellen"], u: "Motorisch = naar de effector (spier of klier). Sensorisch = van receptor naar het centrale zenuwstelsel." },
        { q: "Welk deel van de hersenen coördineert bewegingen en regelt het evenwicht?", a: ["De kleine hersenen", "De grote hersenen", "De hersenstam", "De hypofyse"], u: "De kleine hersenen zorgen dat bewegingen vloeiend en op elkaar afgestemd verlopen." },
        { q: "Wat doet een dendriet?", a: ["Impulsen naar het cellichaam toe geleiden", "Impulsen van het cellichaam af geleiden", "Neurotransmitters afbreken", "Het axon isoleren"], u: "Dendriet → naar het cellichaam toe; axon → van het cellichaam af." },
        { q: "Waar liggen schakelneuronen?", a: ["In het centrale zenuwstelsel", "In de spieren", "In de zintuigen", "In de zenuwen van armen en benen"], u: "Schakelneuronen liggen helemaal in hersenen of ruggenmerg." },
        { q: "Iemand kan na een ongeluk niet meer bewust zijn hand bewegen, maar de hartslag en ademhaling zijn normaal. Welk hersendeel is waarschijnlijk beschadigd?", a: ["De grote hersenen", "De hersenstam", "De kleine hersenen", "De hypofyse"], u: "Bewuste bewegingen starten in de grote hersenen (hersenschors). De hersenstam regelt ademhaling en hartslag." },
        { q: "Wat is een zenuw?", a: ["Een bundel uitlopers van neuronen met bindweefsel eromheen", "Eén lang neuron", "Een groep cellichamen in de hersenen", "Een verbinding tussen twee neuronen"], u: "Een verbinding tussen twee neuronen is een synaps; een zenuw is een bundel uitlopers." }
      ],
      open: { q: "Je ziet een bal aankomen en vangt hem. Beschrijf de weg van de impulsen. Gebruik: receptor, sensorisch neuron, grote hersenen, motorisch neuron, effector.", a: "Receptoren (zintuigcellen in het netvlies van het oog) zetten de prikkel (licht) om in impulsen. Sensorische neuronen geleiden de impulsen naar de grote hersenen. Daar vindt bewuste gewaarwording plaats en ontstaan impulsen voor de beweging (via schakelneuronen; de kleine hersenen coördineren). Motorische neuronen geleiden de impulsen via het ruggenmerg naar de effectoren: de arm- en handspieren, die samentrekken." }
    },
    {
      titel: "Reflexen en het autonome zenuwstelsel",
      kern: [
        "Een reflex is een vaste, snelle, onbewuste reactie op een prikkel. Reflexen beschermen het lichaam (terugtrekreflex, ooglidreflex) en regelen de houding.",
        "Reflexboog: receptor → sensorisch neuron → schakelneuron in ruggenmerg of hersenstam → motorisch neuron → effector. De grote hersenen doen niet mee aan de reactie; je wordt je er pas daarna van bewust.",
        "Het animale zenuwstelsel regelt bewuste reacties en de skeletspieren. Het autonome (vegetatieve) zenuwstelsel regelt onbewust de werking van inwendige organen (hart, darmen, klieren).",
        "Het autonome zenuwstelsel heeft twee delen met een tegengestelde (antagonistische) werking. Orthosympathisch: actie — hartslag en ademhaling omhoog, luchtwegen wijder, vertering geremd, glycogeen → glucose.",
        "Parasympathisch: rust en herstel — hartslag en ademhaling omlaag, vertering gestimuleerd. De meeste organen krijgen zenuwen van beide delen (dubbele innervatie)."
      ],
      begrippen: [
        ["Reflex", "Vaste, snelle, onbewuste reactie op een prikkel."],
        ["Reflexboog", "De weg die impulsen bij een reflex afleggen: receptor → sensorisch neuron → schakelneuron → motorisch neuron → effector."],
        ["Animaal zenuwstelsel", "Deel van het zenuwstelsel dat bewuste gewaarwordingen en bewegingen (skeletspieren) regelt."],
        ["Autonoom (vegetatief) zenuwstelsel", "Deel van het zenuwstelsel dat onbewust de werking van inwendige organen regelt."],
        ["Orthosympathisch deel", "Deel van het autonome zenuwstelsel dat het lichaam in staat van actie brengt."],
        ["Parasympathisch deel", "Deel van het autonome zenuwstelsel dat het lichaam in staat van rust en herstel brengt."],
        ["Dubbele innervatie", "Een orgaan krijgt zenuwen van zowel het orthosympathische als het parasympathische deel."],
        ["Antagonistische werking", "Tegengestelde werking, zoals van het ortho- en parasympathische deel."]
      ],
      vragen: [
        { q: "Je raakt een hete pan aan en trekt je hand terug voordat je pijn voelt. Waardoor gaat dit zo snel?", a: ["De impulsen gaan via het ruggenmerg direct naar de spier, niet eerst via de grote hersenen", "De impulsen gaan extra snel door de grote hersenen", "Bij een reflex zijn geen neuronen betrokken", "Hormonen zorgen voor de snelle reactie"], u: "De reflexboog loopt via schakelneuronen in het ruggenmerg. Tegelijk gaan impulsen naar de grote hersenen; daardoor voel je de pijn pas even later." },
        { q: "Wat is de juiste volgorde in een reflexboog?", a: ["receptor → sensorisch neuron → schakelneuron → motorisch neuron → effector", "receptor → motorisch neuron → schakelneuron → sensorisch neuron → effector", "effector → sensorisch neuron → schakelneuron → motorisch neuron → receptor", "receptor → schakelneuron → sensorisch neuron → effector → motorisch neuron"], u: "Sensorisch erin, schakelen in het centrale zenuwstelsel, motorisch eruit naar de effector." },
        { q: "Je staat op het punt een spannende wedstrijd te beginnen. Welk deel van het zenuwstelsel is nu extra actief en wat is een gevolg?", a: ["Orthosympathisch: de hartslag gaat omhoog", "Parasympathisch: de hartslag gaat omhoog", "Orthosympathisch: de vertering wordt gestimuleerd", "Parasympathisch: de luchtwegen worden wijder"], u: "Orthosympathisch = actie: hartslag en ademhaling omhoog, vertering geremd." },
        { q: "Na het eten zit je rustig op de bank. Wat doet het parasympathische deel?", a: ["De vertering stimuleren en de hartslag verlagen", "De vertering remmen en de hartslag verhogen", "De skeletspieren aanspannen", "Adrenaline afgeven"], u: "Parasympathisch = rust en herstel: vertering aan, hartslag omlaag." },
        { q: "Welke uitspraak over het autonome zenuwstelsel is juist?", a: ["Het regelt onbewust de werking van inwendige organen", "Het regelt bewuste bewegingen van skeletspieren", "Het bestaat alleen uit de grote hersenen", "Het werkt alleen tijdens de slaap"], u: "Autonoom = onbewust, voor organen als hart, darmen en klieren. Animaal = bewust, skeletspieren." }
      ],
      open: { q: "Leg uit wat het voordeel is van dubbele innervatie van het hart door het orthosympathische en het parasympathische deel.", a: "Beide delen werken tegengesteld: orthosympathisch versnelt de hartslag, parasympathisch vertraagt die. Doordat het hart van beide impulsen krijgt, kan de hartslag snel en nauwkeurig worden aangepast aan wat het lichaam nodig heeft (inspanning of rust)." }
    },
    {
      titel: "Impulsgeleiding",
      kern: [
        "In rust is de binnenkant van een neuron negatief geladen ten opzichte van de buitenkant: de rustpotentiaal (ongeveer −70 mV). De natrium-kaliumpomp houdt de ionenverdeling in stand: veel Na⁺ buiten, veel K⁺ binnen (kost ATP).",
        "Als een prikkel sterk genoeg is (boven de prikkeldrempel/drempelwaarde) ontstaat een actiepotentiaal: Na⁺-poorten gaan open en Na⁺ stroomt de cel in (depolarisatie: binnenkant wordt positief). Daarna stroomt K⁺ de cel uit (repolarisatie) en herstelt de rustpotentiaal zich.",
        "Een impuls is een actiepotentiaal die zich over het axon verplaatst. Alles-of-nietsprincipe: een impuls ontstaat wel of niet en is altijd even sterk. Een sterkere prikkel geeft een hogere impulsfrequentie (meer impulsen per seconde).",
        "Veel axonen hebben een myelineschede (isolerende laag van cellen van Schwann) met insnoeringen. De impuls 'springt' van insnoering naar insnoering: sprongsgewijze geleiding, veel sneller.",
        "Een synaps is de verbinding tussen een neuron en een volgende cel. Bij aankomst van een impuls komen neurotransmitters vrij uit blaasjes (exocytose), die door de synaptische spleet diffunderen en binden aan receptoren in het postsynaptische membraan.",
        "Een neurotransmitter kan de volgende cel stimuleren (exciterend) of remmen (inhiberend). Daarna wordt de neurotransmitter afgebroken door enzymen of weer opgenomen. Doordat alleen het presynaptische uiteinde neurotransmitter afgeeft, gaat de impuls maar in één richting."
      ],
      begrippen: [
        ["Rustpotentiaal", "Spanningsverschil over het membraan van een neuron in rust (ca. −70 mV; binnenkant negatief)."],
        ["Actiepotentiaal", "Korte omkering van de lading over het membraan: de binnenkant wordt even positief."],
        ["Depolarisatie", "Fase waarin Na⁺ de cel in stroomt en de binnenkant positief wordt."],
        ["Repolarisatie", "Fase waarin K⁺ de cel uit stroomt en de rustpotentiaal zich herstelt."],
        ["Prikkeldrempel (drempelwaarde)", "De kleinste prikkelsterkte waarbij een actiepotentiaal ontstaat."],
        ["Impulsfrequentie", "Het aantal impulsen per seconde; hoe sterker de prikkel, hoe hoger."],
        ["Myelineschede", "Isolerende laag rond een axon, gevormd door cellen van Schwann; maakt de geleiding sneller."],
        ["Sprongsgewijze geleiding", "Impulsgeleiding waarbij de impuls van insnoering naar insnoering springt."],
        ["Synaps", "Plaats waar een neuron impulsen overdraagt op een volgende cel (neuron, spiercel of kliercel)."],
        ["Neurotransmitter", "Stof die in een synaps vrijkomt en de impuls overdraagt op de volgende cel."]
      ],
      vragen: [
        { q: "Wat gebeurt er tijdens de depolarisatie?", a: ["Na⁺-ionen stromen het neuron in", "K⁺-ionen stromen het neuron in", "Na⁺-ionen stromen het neuron uit", "Neurotransmitters stromen het axon in"], u: "Na⁺-poorten openen; Na⁺ stroomt naar binnen en de binnenkant wordt positief. Bij repolarisatie stroomt K⁺ naar buiten." },
        { q: "Hoe 'weet' het zenuwstelsel dat een prikkel sterker is?", a: ["Door een hogere impulsfrequentie", "Doordat elke impuls sterker is", "Doordat impulsen sneller gaan", "Doordat de rustpotentiaal hoger wordt"], u: "Alles-of-niets: elke impuls is even sterk. Een sterkere prikkel geeft meer impulsen per seconde (en er doen meer neuronen mee)." },
        { q: "Wat is het effect van een myelineschede?", a: ["De impulsgeleiding gaat sneller", "De impulsen worden sterker", "De impuls kan beide kanten op", "Er zijn geen neurotransmitters meer nodig"], u: "Door de isolatie springt de impuls van insnoering naar insnoering (sprongsgewijze geleiding)." },
        { q: "Hoe wordt een impuls in een synaps overgedragen?", a: ["Neurotransmitters diffunderen door de synaptische spleet en binden aan receptoren", "De elektrische impuls springt over de spleet", "Na⁺-ionen worden door het axon naar de volgende cel gepompt", "Hormonen worden via het bloed naar de volgende cel gebracht"], u: "De overdracht in de synaps is chemisch: via neurotransmitters." },
        { q: "Waarom gaat een impuls in een synaps maar in één richting?", a: ["Alleen het presynaptische uiteinde geeft neurotransmitter af en alleen het postsynaptische membraan heeft de receptoren", "Omdat de myelineschede de terugweg blokkeert", "Omdat K⁺ alleen naar buiten kan", "Omdat dendrieten geen membraan hebben"], u: "Blaasjes met neurotransmitter zitten alleen aan de presynaptische kant; de receptoren aan de postsynaptische kant." },
        { q: "Een prikkel blijft onder de prikkeldrempel. Wat gebeurt er?", a: ["Er ontstaat geen impuls", "Er ontstaat een zwakke impuls", "Er ontstaat een trage impuls", "Er ontstaat een impuls met lage frequentie"], u: "Alles-of-niets: onder de drempelwaarde ontstaat geen actiepotentiaal." },
        { q: "Waarom moet de neurotransmitter na de overdracht worden afgebroken of weer opgenomen?", a: ["Anders blijft de volgende cel voortdurend geprikkeld", "Anders kan er geen Na⁺ meer de cel in", "Anders verdwijnt de myelineschede", "Anders stopt de natrium-kaliumpomp"], u: "Zolang de neurotransmitter aan de receptoren gebonden blijft, houdt het effect aan. Opruimen maakt de synaps klaar voor een nieuw signaal." }
      ],
      open: { q: "Bij multiple sclerose (MS) wordt de myelineschede rond axonen afgebroken. Leg uit waardoor patiënten moeite krijgen met bewegen.", a: "Door de myelineschede verloopt de impulsgeleiding sprongsgewijs en dus snel. Als de myeline is aangetast, verloopt de geleiding veel langzamer of valt die uit. Impulsen van de hersenen bereiken de spieren (via motorische neuronen) dan te laat, verzwakt of niet, waardoor spieren niet goed worden aangestuurd." }
    },
    {
      titel: "Spieren en beweging",
      kern: [
        "Drie soorten spierweefsel: dwarsgestreept spierweefsel (skeletspieren: bewust, snel, snel vermoeid), glad spierweefsel (in wanden van organen en bloedvaten: onbewust, langzaam, niet snel vermoeid) en hartspierweefsel (onbewust, nooit vermoeid).",
        "Bouw van een skeletspier: spier → spierbundels → spiervezels (lange cellen met veel kernen) → spierfibrillen → eiwitdraden: actine- en myosinefilamenten.",
        "Bij samentrekken schuiven de actine- en myosinefilamenten tussen elkaar in. De filamenten zelf worden niet korter; de spier als geheel wordt korter en dikker. Dit kost ATP.",
        "Spieren kunnen alleen trekken, niet duwen. Daarom werken ze in paren: antagonisten hebben een tegengestelde werking (biceps buigt de arm, triceps strekt hem). Pezen verbinden spieren met botten.",
        "Een motorisch neuron met alle spiervezels die het aanstuurt heet een motorische eenheid. De synaps tussen motorisch neuron en spiervezel is het motorisch eindplaatje. Meer kracht = meer motorische eenheden actief (en hogere impulsfrequentie)."
      ],
      begrippen: [
        ["Dwarsgestreept spierweefsel", "Spierweefsel van skeletspieren; staat onder invloed van de wil."],
        ["Glad spierweefsel", "Spierweefsel in wanden van organen en bloedvaten; werkt onbewust en langzaam."],
        ["Spiervezel", "Lange spiercel met veel kernen, opgebouwd uit spierfibrillen."],
        ["Spierfibril", "Draadvormige structuur in een spiervezel, opgebouwd uit actine- en myosinefilamenten."],
        ["Actine en myosine", "Eiwitdraden (filamenten) in spierfibrillen die bij samentrekking tussen elkaar in schuiven."],
        ["Antagonisten", "Spieren met een tegengestelde werking, zoals biceps en triceps."],
        ["Pees", "Stevig bindweefsel waarmee een spier aan een bot vastzit."],
        ["Motorische eenheid", "Eén motorisch neuron met alle spiervezels die het aanstuurt."],
        ["Motorisch eindplaatje", "Synaps tussen een motorisch neuron en een spiervezel."]
      ],
      vragen: [
        { q: "Wat gebeurt er in een spierfibril als een spier samentrekt?", a: ["Actine- en myosinefilamenten schuiven tussen elkaar in", "Actine- en myosinefilamenten worden korter", "Myosinefilamenten worden afgebroken", "De spiervezels delen zich"], u: "De filamenten houden hun lengte maar schuiven in elkaar; daardoor wordt de spier korter." },
        { q: "Waarom werken skeletspieren in paren van antagonisten?", a: ["Een spier kan zich alleen samentrekken, niet zelf weer uitrekken", "Eén spier is niet sterk genoeg", "Anders raken de pezen beschadigd", "Omdat elke spier maar één motorische eenheid heeft"], u: "Een spier kan alleen trekken. De antagonist trekt het bot de andere kant op en rekt daarbij de eerste spier weer uit." },
        { q: "Welk spierweefsel zit in de wand van de darm?", a: ["Glad spierweefsel", "Dwarsgestreept spierweefsel", "Hartspierweefsel", "Peesweefsel"], u: "Organen en bloedvaten hebben glad spierweefsel: onbewust, langzaam en niet snel vermoeid." },
        { q: "Hoe kan een spier met meer kracht samentrekken?", a: ["Er worden meer motorische eenheden tegelijk actief", "Elke impuls wordt sterker", "De actinefilamenten worden langer", "De spier maakt meer neurotransmitterreceptoren aan"], u: "Impulsen zijn altijd even sterk (alles-of-niets). Meer kracht komt door meer actieve motorische eenheden en een hogere impulsfrequentie." },
        { q: "Je buigt je arm. Wat doen de biceps en de triceps?", a: ["De biceps trekt samen, de triceps ontspant", "De biceps ontspant, de triceps trekt samen", "Beide trekken samen", "Beide ontspannen"], u: "De biceps is de buiger van de arm, de triceps de strekker." },
        { q: "Wat is de juiste volgorde van groot naar klein?", a: ["spier → spierbundel → spiervezel → spierfibril → filamenten", "spier → spiervezel → spierbundel → filamenten → spierfibril", "spierbundel → spier → spierfibril → spiervezel → filamenten", "spier → spierfibril → spierbundel → spiervezel → filamenten"], u: "Een spier bestaat uit bundels van spiervezels (cellen); elke vezel bevat fibrillen met actine en myosine." }
      ],
      open: { q: "Spiervezels van skeletspieren bevatten erg veel mitochondriën. Leg uit waarom, en noem het verband met de filamenten.", a: "Voor het in elkaar schuiven van de actine- en myosinefilamenten is veel energie in de vorm van ATP nodig. ATP wordt vooral gemaakt in de mitochondriën, bij de (aerobe) dissimilatie van glucose. Veel mitochondriën betekent dus dat er veel ATP beschikbaar is voor samentrekking." }
    }
  ]
});
