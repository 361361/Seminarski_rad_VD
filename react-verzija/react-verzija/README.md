# ProPVC proizvodnja - React demo (opcioni deo seminarskog rada)

Ovaj folder sadrži React verziju sajta, urađenu kao demonstracija primene
složenijeg JavaScript frameworka (opcioni deo, tačka 4.2.6 plana rada).

Obavezni deo seminarskog rada je urađen u čistom HTML/CSS/JavaScript-u
i nalazi se u glavnom folderu projekta (van ovog foldera).

## Sadržaj

- **2 stranice** povezane preko `react-router-dom` biblioteke:
  - `/` — Početna (sa slajderom baziranim na `useState`/`useEffect`)
  - `/proizvodi` — Proizvodi (lista kartica generisana mapiranjem niza
    podataka, sa uživo pretragom preko `useState`)
- Komponente: `Header`, `Footer`, `KarticaProizvoda` (ponovo iskorišćena
  komponenta za svaki proizvod, umesto ručnog ponavljanja HTML-a)

## Pokretanje (potreban Node.js)

U ovom folderu, u terminalu:

```bash
npm install
npm run dev
```

Otvara se na `http://localhost:5173` (adresa se ispisuje u terminalu).

## Build za predaju

```bash
npm run build
```

Rezultat ide u `dist/` folder — to su gotovi statični HTML/CSS/JS fajlovi
koji se mogu direktno otvoriti ili hostovati, bez potrebe za Node.js
serverom.

## Ključne React koncepte koje ova verzija demonstrira

- **Komponente** — `Header`, `Footer`, `KarticaProizvoda`
- **Props** — `KarticaProizvoda` prima `ikonica`, `naslov`, `opis`
- **State** (`useState`) — trenutni slajd, tekst pretrage
- **Effect** (`useEffect`) — tajmer za automatsku smenu slajdova
- **Ruter** (`react-router-dom`) — navigacija između 2 stranice bez
  ponovnog učitavanja cele stranice (Single Page Application princip)
