// jQuery demonstracija (opcioni deo seminarskog rada, tačka 4.2.4).
// Dugme "Nazad na vrh" - pojavljuje se kad korisnik skroluje nadole,
// klik glatko vraća stranicu na vrh. Namerno odvojeno od ostalih
// .js fajlova (koji su čist vanilla JS) da jasno pokaže razliku
// u pisanju istog tipa logike sa i bez jQuery-ja.

$(document).ready(function () {
    // Dinamicki ubacujemo dugme u telo stranice
    $("body").append('<button id="nazadNaVrh" title="Nazad na vrh">↑</button>');

    // Prati skrolovanje - dugme se prikazuje tek posle 400px
    $(window).scroll(function () {
        if ($(this).scrollTop() > 400) {
            $("#nazadNaVrh").fadeIn(300);
        } else {
            $("#nazadNaVrh").fadeOut(300);
        }
    });

    // Klik na dugme - animirano skrolovanje na vrh (umesto trenutnog skoka)
    $("#nazadNaVrh").click(function () {
        $("html, body").animate({ scrollTop: 0 }, 500);
    });
});