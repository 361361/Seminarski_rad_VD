// Učitavanje zajedničkog header-a i footer-a na svakoj stranici,
// da se ne bi ručno kopirao isti kod na svaki HTML fajl.

function ucitajDeoStranice(fajl, idMesta, poslePunjenja) {
    const mesto = document.getElementById(idMesta);
    if (!mesto) return;

    fetch(fajl)
        .then(odgovor => odgovor.text())
        .then(sadrzaj => {
            mesto.innerHTML = sadrzaj;
            if (typeof poslePunjenja === "function") {
                poslePunjenja();
            }
        })
        .catch(greska => console.error("Greška pri učitavanju " + fajl + ":", greska));
}

// Označava aktivnu stavku menija (link koji odgovara trenutnoj stranici)
function oznaciAktivnuStranicu() {
    const trenutnaStranica = window.location.pathname.split("/").pop() || "index.html";
    const linkovi = document.querySelectorAll(".link-navigacija");

    linkovi.forEach(link => {
        const hrefStranice = link.getAttribute("href");
        if (hrefStranice === trenutnaStranica) {
            link.classList.add("aktivan-link");
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    ucitajDeoStranice("header.html", "header-placeholder", oznaciAktivnuStranicu);
    ucitajDeoStranice("footer.html", "footer-placeholder");
});
