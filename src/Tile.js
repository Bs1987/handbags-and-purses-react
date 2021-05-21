//Hoe maak je een component
// 1. Begin de HTML gewoon uit te schrijven (maak eerst wat je wil)
// 2. Als je tevreden bent met je pagina kun je een component refactoren/ opschonen
// - [x] Kopieer een component met alle data erin
// - [x] Zet het in een ander JavaScript bestandje
// - [x] Maak een component functie
// - [x] Die component functie returned JSX
// - [x] Optioneel: voeg een DIV toe als je component uit meerdere tags bestaat
// - [x] Exporteer je component functie (export default 'functienaam')
// - [x] Importeer je component functie in APP (of waar je hem wil gebruiken)
// - [x] Gebruik component functie met JSX syntax
// 3. Is je component af, maar "gehardcode", alles heeft altijd dezelfde waarde
//    Gebruik props om het component dynamisch te maken
// - [x] Voeg een attribuut toe in de JSX (Kies zelf een naam)
// - [x] Geef het attribuut een waarde
// - [x] In de component functie gebruik maken van de "prop" die is doorgegeven
//      - [x] Props toevoegen als parameter van de component functie
//      - [x] De juist component eruit halen en gebruiken in je component (subject)
// - [x] Interpoleren in JSX
function Tile(props) {
    console.log(props);
    return (
        <div>
            <section>The brand</section>
            <section>Image</section>
            <section>Our story</section>
            <section>Image</section>
        </div>
    );
}

export default Tile;