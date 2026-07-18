// Dvojezička podrška (srpski/engleski) - opcioni deo seminarskog rada, tačka 4.2.2.
// Prevodi se učitavaju iz JSON fajlova (prevodi/sr.json, prevodi/en.json)
// i primenjuju na sve elemente koji imaju data-prevod atribut.
// Izabrani jezik se čuva u localStorage, isto kao tema i veličina fonta.

const KLJUC_JEZIK = "propvc-jezik";
let ucitaniPrevodi = {};

function trenutniJezik() {
    return localStorage.getItem(KLJUC_JEZIK) || "sr";
}

function ucitajPrevode(jezik) {
    return fetch(`prevodi/${jezik}.json`)
        .then(odgovor => odgovor.json())
        .then(prevodi => {
            ucitaniPrevodi = prevodi;
            primeniPrevode();
        })
        .catch(greska => console.error("Greška pri učitavanju prevoda:", greska));
}

// Prolazi kroz sve elemente sa data-prevod / data-prevod-placeholder
// atributom i menja njihov tekst prema učitanom rečniku.
function primeniPrevode() {
    document.querySelectorAll("[data-prevod]").forEach(element => {
        const kljuc = element.dataset.prevod;
        if (ucitaniPrevodi[kljuc]) {
            element.textContent = ucitaniPrevodi[kljuc];
        }
    });

    document.querySelectorAll("[data-prevod-placeholder]").forEach(element => {
        const kljuc = element.dataset.prevodPlaceholder;
        if (ucitaniPrevodi[kljuc]) {
            element.setAttribute("placeholder", ucitaniPrevodi[kljuc]);
        }
    });

    document.documentElement.lang = trenutniJezik() === "en" ? "en" : "sr-RS";
    azurirajDugmeJezika();
}

function azurirajDugmeJezika() {
    const dugme = document.getElementById("dugme-jezik");
    if (!dugme) return;
    // Dugme prikazuje jezik NA KOJI se prebacuje, ne trenutni jezik
    dugme.textContent = trenutniJezik() === "en" ? "SR" : "EN";
}

function promeniJezik() {
    const noviJezik = trenutniJezik() === "en" ? "sr" : "en";
    localStorage.setItem(KLJUC_JEZIK, noviJezik);
    ucitajPrevode(noviJezik);
}

// Poziva se iz script.js nakon što se header.html učita
// (dugme za promenu jezika je deo dinamički učitanog header-a).
function podesiPrekidacJezika() {
    const dugme = document.getElementById("dugme-jezik");
    if (dugme) {
        dugme.addEventListener("click", promeniJezik);
    }
    // Ponovo primenjujemo prevode nakon što je header učitan,
    // jer header sadrži dosta elemenata sa data-prevod atributom.
    primeniPrevode();
}

document.addEventListener("DOMContentLoaded", () => {
    ucitajPrevode(trenutniJezik());
});