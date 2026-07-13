// Pristupačnost: tamna/svetla tema + veličina fonta.
// Podešavanja se čuvaju u localStorage, tako da ostaju
// zapamćena i posle osvežavanja stranice ili odlaska na drugu stranicu.

const KLJUC_TEMA = "propvc-tema";
const KLJUC_FONT = "propvc-velicina-fonta";
const VELICINA_MIN = 14;
const VELICINA_MAX = 22;
const VELICINA_PODRAZUMEVANA = 16;
const KORAK_FONTA = 2;


// Deo koji se izvršava ODMAH (pre nego što se učita header/footer),
// da bi se tema i veličina fonta primenile pre nego što se stranica
// prikaže korisniku - bez "treperenja" pogrešne teme na trenutak.

(function primeniSacuvanaPodesavanja() {
    const sacuvanaTema = localStorage.getItem(KLJUC_TEMA);
    if (sacuvanaTema === "tamna") {
        document.documentElement.setAttribute("data-tema", "tamna");
    }

    const sacuvanaVelicina = localStorage.getItem(KLJUC_FONT);
    if (sacuvanaVelicina) {
        document.documentElement.style.fontSize = sacuvanaVelicina + "px";
    }
})();

function trenutnaVelicinaFonta() {
    const sacuvana = localStorage.getItem(KLJUC_FONT);
    return sacuvana ? parseInt(sacuvana, 10) : VELICINA_PODRAZUMEVANA;
}

function postaviVelicinuFonta(novaVelicina) {
    const ogranicenaVelicina = Math.min(VELICINA_MAX, Math.max(VELICINA_MIN, novaVelicina));
    document.documentElement.style.fontSize = ogranicenaVelicina + "px";
    localStorage.setItem(KLJUC_FONT, ogranicenaVelicina);
}

function promeniTemu() {
    const jeTrenutnoTamna = document.documentElement.getAttribute("data-tema") === "tamna";

    if (jeTrenutnoTamna) {
        document.documentElement.removeAttribute("data-tema");
        localStorage.setItem(KLJUC_TEMA, "svetla");
    } else {
        document.documentElement.setAttribute("data-tema", "tamna");
        localStorage.setItem(KLJUC_TEMA, "tamna");
    }

    azurirajIkonicuTeme();
}

function azurirajIkonicuTeme() {
    const dugmeTema = document.getElementById("dugme-tema");
    if (!dugmeTema) return;

    const jeTamna = document.documentElement.getAttribute("data-tema") === "tamna";
    dugmeTema.textContent = jeTamna ? "☀️" : "🌙";
}

// Ova funkcija se poziva iz script.js, nakon što se header.html
// učita i dugmad zaista postoje u DOM-u (jer se header ubacuje dinamički).
function podesiKontroleTemeIFonta() {
    const dugmeTema = document.getElementById("dugme-tema");
    const dugmeFontManje = document.getElementById("font-manje");
    const dugmeFontVise = document.getElementById("font-vise");

    if (dugmeTema) {
        dugmeTema.addEventListener("click", promeniTemu);
        azurirajIkonicuTeme();
    }

    if (dugmeFontManje) {
        dugmeFontManje.addEventListener("click", () => {
            postaviVelicinuFonta(trenutnaVelicinaFonta() - KORAK_FONTA);
        });
    }

    if (dugmeFontVise) {
        dugmeFontVise.addEventListener("click", () => {
            postaviVelicinuFonta(trenutnaVelicinaFonta() + KORAK_FONTA);
        });
    }
}