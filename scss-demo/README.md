# SCSS/SASS demonstracija (opcioni deo seminarskog rada)

Ovaj folder pokazuje primenu SCSS-a (Sass) na deo postojećeg sajta
(kartice proizvoda), kao dodatak opciono delu plana rada (4.2.3).

## Fajlovi

- `_promenljive.scss` — SCSS promenljive (boje, razmaci)
- `_mesavine.scss` — mixin-i (blokovi stila sa parametrima)
- `style.scss` — glavni fajl, uvozi gornja dva preko `@use` i sadrži
  ugnježdene selektore (nesting)
- `style.css` — **kompajlirani** rezultat (ono što browser stvarno koristi)
- `demo.html` — mala stranica koja učitava `style.css` i prikazuje
  3 kartice proizvoda stilizovane preko SCSS-a

## Kako se kompajlira

Potreban je Sass kompajler (`npm install -g sass`, ili Dart Sass sa
zvaničnog sajta):

```bash
sass style.scss style.css
```

## Šta ovo demonstrira u odnosu na čist CSS

- **Promenljive** (`$akcenat`, `$tamna`...) — definišu se jednom,
  koriste se svuda (čist CSS ima `var()`, ali ne i sve ostalo ispod)
- **Ugnježdavanje (nesting)** — `.kartice-scss .kartica h3` piše se
  kao `h3` unutar `.kartica` unutar `.kartice-scss`, prateći HTML
  strukturu, umesto ponovnog ispisivanja celog selektora
- **Mixin-i** (`@include meka-tranzicija(...)`) — blokovi CSS koda
  sa parametrima, ponovo iskoristivi na više mesta