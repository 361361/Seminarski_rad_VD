// Validacija forme na kontakt.html
// Pravila:
//  - Ime i prezime: obavezno, minimum 2 karaktera
//  - Email: obavezno, mora odgovarati osnovnom email formatu
//  - Telefon: nije obavezan, ali ako je unet mora sadržati samo cifre, razmake, crtice i +
//  - Poruka: obavezno, minimum 10 karaktera

const REGEX_EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const REGEX_TELEFON = /^[0-9+\-\s\/]{6,20}$/;

function prikaziGresku(idPolja, poruka) {
    const elementGreske = document.getElementById(idPolja);
    if (elementGreske) {
        elementGreske.textContent = poruka;
    }
}

function ocisciGreske() {
    document.querySelectorAll(".poruka-greske").forEach(el => el.textContent = "");
    document.getElementById("poruka-uspeh").textContent = "";
}

function validirajFormu(dogadjaj) {
    dogadjaj.preventDefault();
    ocisciGreske();

    let formaJeIspravna = true;

    const ime = document.getElementById("ime").value.trim();
    const email = document.getElementById("email").value.trim();
    const telefon = document.getElementById("telefon").value.trim();
    const poruka = document.getElementById("poruka").value.trim();

    if (ime.length < 2) {
        prikaziGresku("greska-ime", "Unesite ime i prezime (minimum 2 karaktera).");
        formaJeIspravna = false;
    }

    if (!REGEX_EMAIL.test(email)) {
        prikaziGresku("greska-email", "Unesite ispravnu email adresu.");
        formaJeIspravna = false;
    }

    if (telefon.length > 0 && !REGEX_TELEFON.test(telefon)) {
        prikaziGresku("greska-telefon", "Unesite ispravan format telefona.");
        formaJeIspravna = false;
    }

    if (poruka.length < 10) {
        prikaziGresku("greska-poruka", "Poruka mora imati bar 10 karaktera.");
        formaJeIspravna = false;
    }

    if (formaJeIspravna) {
        document.getElementById("poruka-uspeh").textContent =
            "Hvala, " + ime + "! Vaša poruka je uspešno poslata.";
        document.getElementById("forma-kontakt").reset();
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const forma = document.getElementById("forma-kontakt");
    if (forma) {
        forma.addEventListener("submit", validirajFormu);
    }
});
