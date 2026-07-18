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

// Otvara/zatvara mobilni meni na klik na hamburger dugme
function podesiHamburgerMeni() {
    const dugme = document.getElementById("hamburger-dugme");
    const navigacija = document.getElementById("glavna-navigacija");
    if (!dugme || !navigacija) return;

    dugme.addEventListener("click", () => {
        const jeOtvoren = navigacija.classList.toggle("meni-otvoren");
        dugme.classList.toggle("hamburger-aktivan", jeOtvoren);
        dugme.setAttribute("aria-expanded", jeOtvoren);
    });

    // Zatvara meni kad korisnik klikne na neki od linkova (npr. na telefonu),
    // uključujući i linkove unutar mega menija (kategorije proizvoda)
    navigacija.querySelectorAll(".link-navigacija, .mega-meni a").forEach(link => {
        link.addEventListener("click", () => {
            navigacija.classList.remove("meni-otvoren");
            dugme.classList.remove("hamburger-aktivan");
            dugme.setAttribute("aria-expanded", "false");
        });
    });
}

function poslePunjenjaHeadera() {
    oznaciAktivnuStranicu();
    podesiHamburgerMeni();
    if (typeof podesiKontroleTemeIFonta === "function") {
        podesiKontroleTemeIFonta();
    }
    if (typeof podesiPrekidacJezika === "function") {
        podesiPrekidacJezika();
    }
}

function poslePunjenjaFootera() {
    if (typeof primeniPrevode === "function") {
        primeniPrevode();
    }
}

document.addEventListener("DOMContentLoaded", () => {
    ucitajDeoStranice("header.html", "header-placeholder", poslePunjenjaHeadera);
    ucitajDeoStranice("footer.html", "footer-placeholder", poslePunjenjaFootera);
});