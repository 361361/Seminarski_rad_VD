// Validacija forme na Bootstrap verziji kontakt.html.
// Iste logičke provere kao u forma.js (za vanilla verziju), ali je
// prikaz greške prilagođen Bootstrap-ovoj is-invalid / invalid-feedback šemi.

const REGEX_EMAIL_BS = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const REGEX_TELEFON_BS = /^[0-9+\-\s\/]{6,20}$/;

function oznaciPolje(polje, jeIspravno) {
    polje.classList.remove("is-valid", "is-invalid");
    polje.classList.add(jeIspravno ? "is-valid" : "is-invalid");
}

function validirajFormuBs(dogadjaj) {
    dogadjaj.preventDefault();

    const ime = document.getElementById("bsIme");
    const email = document.getElementById("bsEmail");
    const telefon = document.getElementById("bsTelefon");
    const poruka = document.getElementById("bsPoruka");
    const porukaUspeh = document.getElementById("bsPorukaUspeh");

    porukaUspeh.textContent = "";

    const imeValidno = ime.value.trim().length >= 2;
    oznaciPolje(ime, imeValidno);

    const emailValidan = REGEX_EMAIL_BS.test(email.value.trim());
    oznaciPolje(email, emailValidan);

    const telefonUnet = telefon.value.trim().length > 0;
    const telefonValidan = !telefonUnet || REGEX_TELEFON_BS.test(telefon.value.trim());
    oznaciPolje(telefon, telefonValidan);

    const porukaValidna = poruka.value.trim().length >= 10;
    oznaciPolje(poruka, porukaValidna);

    if (imeValidno && emailValidan && telefonValidan && porukaValidna) {
        porukaUspeh.textContent = "Hvala, " + ime.value.trim() + "! Vaša poruka je uspešno poslata.";
        document.getElementById("formaKontaktBs").reset();
        [ime, email, telefon, poruka].forEach(polje => polje.classList.remove("is-valid", "is-invalid"));
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const forma = document.getElementById("formaKontaktBs");
    if (forma) {
        forma.addEventListener("submit", validirajFormuBs);
    }
});