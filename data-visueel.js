// Koppelt figuren (figs.js) aan basisstoffen en voegt vragen toe waarbij je een figuur afleest.
// Sleutel = "thema-basisstof" (basisstof telt vanaf 0). Laden ná de data-bestanden.
// De figuurvragen worden achteraan toegevoegd, zodat bestaande voortgang blijft kloppen.
(function () {
  "use strict";
  const KOPPEL = {
    "1-0": { fig: ["niveaus"] },
    "1-2": {
      fig: ["cel"],
      vragen: [
        { fig: "cel", q: "Welk nummer geeft de celwand aan?", a: ["1", "2", "3", "5"], u: "De celwand (1) is de stevige buitenste laag van de plantencel. Nummer 2 is het celmembraan, 3 de vacuole en 5 een chloroplast." },
        { fig: "cel", q: "Welk onderdeel is nummer 3?", a: ["De vacuole", "De celkern", "Een chloroplast", "Het cytoplasma"], u: "De grote, met vocht gevulde ruimte midden in de plantencel is de centrale vacuole." },
        { fig: "cel", q: "Waaraan zie je dat cel A een plantencel is?", a: ["Aan de celwand (1), de grote vacuole (3) en de chloroplasten (5)", "Aan de celkern (4) en het celmembraan (2)", "Aan de mitochondriën (6)", "Aan de ronde vorm"], u: "Celwand, grote centrale vacuole en chloroplasten komen niet voor bij dierlijke cellen. Kern, celmembraan en mitochondriën hebben beide." }
      ]
    },
    "1-4": {
      fig: ["osmose"],
      vragen: [
        { fig: "osmose", q: "De pijlen geven de netto verplaatsing van water aan. Welke cel ligt in een hypertone oplossing (bijv. zout water)?", a: ["Cel B: het water gaat de cel uit en het celmembraan laat los van de celwand", "Cel A: het water gaat de cel in", "Cel A: de cel is helemaal gevuld", "Beide cellen"], u: "In een hypertone oplossing verliest de cel water door osmose. De inhoud krimpt en het celmembraan laat los van de celwand: plasmolyse (cel B). Cel A is turgescent." }
      ]
    },
    "5-0": { fig: ["regelkring"] },
    "5-1": { fig: ["glucose"] },
    "5-2": {
      fig: ["neuron"],
      vragen: [
        { fig: "neuron", q: "Welk nummer geeft een dendriet aan?", a: ["1", "3", "4", "5"], u: "Dendrieten (1) zijn de korte, vertakte uitlopers die impulsen naar het cellichaam (2) toe geleiden." },
        { fig: "neuron", q: "In welke richting loopt een impuls door dit neuron?", a: ["Van 1 via 2 en 3 naar 5", "Van 5 via 3 en 2 naar 1", "Van 2 naar 1 en naar 5 tegelijk", "Van 4 naar 2"], u: "Dendrieten (1) → cellichaam (2) → axon (3) → uiteinden van het axon (5), waar de synapsen zitten." },
        { fig: "neuron", q: "Wat is de functie van onderdeel 4?", a: ["Het axon isoleren, waardoor de impulsgeleiding sneller gaat", "Neurotransmitters maken", "Impulsen naar het cellichaam geleiden", "Het DNA van de cel bevatten"], u: "4 is de myelineschede. Door de isolatie springt de impuls van insnoering naar insnoering (sprongsgewijze geleiding)." }
      ]
    },
    "5-3": {
      fig: ["reflexboog"],
      vragen: [
        { fig: "reflexboog", q: "Welk nummer geeft het schakelneuron aan?", a: ["3", "2", "4", "5"], u: "Het schakelneuron (3) ligt in het ruggenmerg en verbindt het sensorische neuron (2) met het motorische neuron (4)." },
        { fig: "reflexboog", q: "Neuron 4 wordt doorgesneden. Wat is het gevolg bij een prikkel in de huid (1)?", a: ["De spier reageert niet, maar je voelt de prikkel wel", "Je voelt niets, maar de spier reageert wel", "Je voelt niets en de spier reageert niet", "Er verandert niets"], u: "4 is het motorische neuron naar de spier: de impuls bereikt de effector niet meer. Het sensorische neuron (2) is intact, dus impulsen bereiken nog wel het centrale zenuwstelsel en de hersenen." }
      ]
    },
    "5-4": {
      fig: ["actiepotentiaal"],
      vragen: [
        { fig: "actiepotentiaal", q: "In welk deel van de grafiek stromen Na⁺-ionen het neuron in?", a: ["Q", "P", "R", "S"], u: "Q is de depolarisatie: Na⁺-poorten staan open, Na⁺ stroomt naar binnen en de binnenkant wordt positief." },
        { fig: "actiepotentiaal", q: "Wat gebeurt er in deel R?", a: ["K⁺-ionen stromen het neuron uit (repolarisatie)", "Na⁺-ionen stromen het neuron in (depolarisatie)", "Het neuron is in rust", "Neurotransmitters komen vrij"], u: "In R daalt de potentiaal weer: K⁺ stroomt naar buiten. Dat is de repolarisatie." },
        { fig: "actiepotentiaal", q: "Wat stelt de stippellijn bij −50 mV voor?", a: ["De drempelwaarde: pas daarboven ontstaat een actiepotentiaal", "De rustpotentiaal", "De maximale waarde van de actiepotentiaal", "De impulsfrequentie"], u: "De rustpotentiaal ligt bij −70 mV (deel P). Komt de potentiaal boven de drempelwaarde, dan volgt altijd een volledige actiepotentiaal (alles-of-niets)." }
      ]
    },
    "5-5": {
      fig: ["spier"],
      vragen: [
        { fig: "spier", q: "De dunne lijnen zijn actinefilamenten, de dikke myosinefilamenten. Welke tekening hoort bij een samengetrokken spier?", a: ["B: de filamenten zijn verder in elkaar geschoven", "A: de filamenten zijn langer", "A: de filamenten liggen verder uit elkaar", "B: de filamenten zijn korter geworden"], u: "Bij samentrekking schuiven actine en myosine tussen elkaar in. De filamenten zelf blijven even lang; het geheel wordt korter." }
      ]
    },
    "8-0": { fig: ["atp"] },
    "8-1": {
      fig: ["enzym"],
      vragen: [
        { fig: "enzym", q: "Bij welk punt in de grafiek is het enzym gedenatureerd?", a: ["C", "A", "B", "Bij A en C"], u: "Boven het optimum (B) verandert de vorm van het enzym blijvend: bij C is het gedenatureerd. Bij A is het enzym intact, maar bewegen de moleculen langzaam." },
        { fig: "enzym", q: "Een enzymoplossing wordt van punt A opgewarmd naar punt B. Wat gebeurt er met de reactiesnelheid?", a: ["Die neemt toe: moleculen bewegen sneller en botsen vaker", "Die neemt af: het enzym denatureert", "Die blijft gelijk", "Die wordt nul"], u: "Tot aan het optimum (B) geldt: hogere temperatuur → meer en hardere botsingen tussen enzym en substraat → snellere reactie." }
      ]
    },
    "8-2": {
      fig: ["beperkend"],
      vragen: [
        { fig: "beperkend", q: "Welke factor is beperkend in deel P van de grafiek?", a: ["De lichtintensiteit", "De CO₂-concentratie", "De temperatuur", "De hoeveelheid water"], u: "In P stijgt de fotosynthese als de lichtintensiteit toeneemt: licht is daar dus de beperkende factor." },
        { fig: "beperkend", q: "Bij Q (onderste lijn) neemt de fotosynthese niet meer toe bij meer licht. Hoe kun je de fotosynthese daar wél verhogen?", a: ["Door de CO₂-concentratie te verhogen", "Door de lichtintensiteit nog verder te verhogen", "Door de plant minder water te geven", "Dat kan niet: het maximum is bereikt"], u: "Bij Q is licht niet meer beperkend. De bovenste lijn laat zien dat meer CO₂ wel tot meer fotosynthese leidt: CO₂ is daar de beperkende factor." }
      ]
    },
    "8-4": { fig: ["dissimilatie"] },
    "8-5": {
      fig: ["warmkoud"],
      vragen: [
        { fig: "warmkoud", q: "De grafiek toont het zuurstofverbruik in rust van een hagedis en een muis. Welke lijn hoort bij de hagedis?", a: ["Lijn 1: het zuurstofverbruik stijgt met de omgevingstemperatuur", "Lijn 2: het zuurstofverbruik daalt als het warmer wordt", "Lijn 2: de hagedis is warmbloedig", "Dat is niet te zeggen"], u: "Een hagedis is koudbloedig: de lichaamstemperatuur volgt de omgeving. Hoe warmer, hoe sneller de enzymen werken en hoe hoger de stofwisseling (lijn 1)." },
        { fig: "warmkoud", q: "Waarom is het zuurstofverbruik bij lijn 2 het hoogst bij een lage omgevingstemperatuur?", a: ["Het dier verbrandt extra om zijn lichaamstemperatuur constant te houden", "De enzymen werken sneller in de kou", "Het dier beweegt meer als het warm is", "Koude lucht bevat meer zuurstof"], u: "Lijn 2 is een warmbloedig dier. Bij kou verliest het meer warmte en moet het meer brandstof verbranden (meer zuurstof) om op temperatuur te blijven." }
      ]
    }
  };

  for (const t of THEMAS) {
    t.bs.forEach((b, i) => {
      const k = KOPPEL[`${t.id}-${i}`];
      if (!k) return;
      b.fig = k.fig || [];
      if (k.vragen) b.vragen.push(...k.vragen);
    });
  }
})();
