// Slajder na Početnoj stranici - automatska smena slajdova (tajmer)
// + ručna navigacija preko strelica i tačaka.

const VREME_SLAJDA_MS = 5000;

let trenutniIndeks = 0;
let slajdovi = [];
let tacke = [];
let tajmerSlajdera = null;

function prikaziSlajd(indeks) {
    slajdovi.forEach(slajd => slajd.classList.remove("aktivan-slajd"));
    tacke.forEach(tacka => tacka.classList.remove("aktivna-tacka"));

    // Omogućava kruženje - posle poslednjeg slajda vraća se na prvi, i obrnuto
    trenutniIndeks = (indeks + slajdovi.length) % slajdovi.length;

    slajdovi[trenutniIndeks].classList.add("aktivan-slajd");
    tacke[trenutniIndeks].classList.add("aktivna-tacka");
}

function sledeciSlajd() {
    prikaziSlajd(trenutniIndeks + 1);
}

function prethodniSlajd() {
    prikaziSlajd(trenutniIndeks - 1);
}

function pokreniTajmer() {
    tajmerSlajdera = setInterval(sledeciSlajd, VREME_SLAJDA_MS);
}

function restartujTajmer() {
    clearInterval(tajmerSlajdera);
    pokreniTajmer();
}

document.addEventListener("DOMContentLoaded", () => {
    const kontejnerSlajdera = document.getElementById("hero-slajder");
    if (!kontejnerSlajdera) return; // ova skripta se koristi samo na Početnoj

    slajdovi = Array.from(kontejnerSlajdera.querySelectorAll(".slajd"));
    tacke = Array.from(document.querySelectorAll("#slajder-tacke .tacka"));

    document.getElementById("strelica-desno").addEventListener("click", () => {
        sledeciSlajd();
        restartujTajmer();
    });

    document.getElementById("strelica-levo").addEventListener("click", () => {
        prethodniSlajd();
        restartujTajmer();
    });

    tacke.forEach(tacka => {
        tacka.addEventListener("click", () => {
            prikaziSlajd(parseInt(tacka.dataset.indeks, 10));
            restartujTajmer();
        });
    });

    pokreniTajmer();
});
