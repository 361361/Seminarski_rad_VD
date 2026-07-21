import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

// Isti podaci o slajdovima kao u vanilla verziji (index.html),
// ali ovde su predstavljeni kao niz objekata - podaci su odvojeni
// od prikaza, što je osnovna ideja React komponentnog pristupa.
const slajdovi = [
  {
    naslov: 'Najbolja ponuda',
    istaknuto: 'industrijske plastike',
    tekst: 'Više od tri decenije smo posvećeni najboljoj usluzi prema svim partnerima.',
    pozadina: 'linear-gradient(rgba(255,255,255,0.55), rgba(255,255,255,0.55)), url(/images/pozadina-cevi.png)',
    tamanTekst: false,
  },
  {
    naslov: 'Kvalitet koji',
    istaknuto: 'traje generacijama',
    tekst: 'Širok izbor boja i dimenzija PVC cevi za svaku vrstu instalacije.',
    pozadina: 'linear-gradient(rgba(28,28,43,0.6), rgba(28,28,43,0.6)), url(/images/pozadina-cevi.png)',
    tamanTekst: true,
  },
  {
    naslov: 'Brza isporuka',
    istaknuto: 'širom regiona',
    tekst: 'Proizvodi spremni za isporuku iz sopstvenog magacina u Inđiji.',
    pozadina: 'linear-gradient(rgba(43,58,85,0.65), rgba(43,58,85,0.65)), url(/images/pozadina-cevi.png)',
    tamanTekst: true,
  },
]

function Pocetna() {
  // trenutniIndeks je React "state" - kad se promeni, React sam
  // ponovo iscrtava samo delove koji zavise od njega (nema ručnog
  // classList.add/remove kao u slajder.js iz vanilla verzije).
  const [trenutniIndeks, setTrenutniIndeks] = useState(0)

  // useEffect sa setInterval - React ekvivalent tajmera iz slajder.js.
  // Funkcija koju effect vraća (return) se poziva pri "čišćenju",
  // da ne bismo imali više tajmera istovremeno.
  useEffect(() => {
    const tajmer = setInterval(() => {
      setTrenutniIndeks((prethodni) => (prethodni + 1) % slajdovi.length)
    }, 5000)

    return () => clearInterval(tajmer)
  }, [])

  const slajd = slajdovi[trenutniIndeks]

  return (
    <>
      <section className="hero-slajder" style={{ backgroundImage: slajd.pozadina }}>
        <div className={`hero-tekst ${slajd.tamanTekst ? 'hero-tekst-tamno' : ''}`}>
          <h1>{slajd.naslov}<br /><span>{slajd.istaknuto}</span></h1>
          <p>{slajd.tekst}</p>
          <Link className="dugme-istrazite" to="/proizvodi">Istražite</Link>
        </div>

        <button
          className="slajder-strelica strelica-levo"
          onClick={() => setTrenutniIndeks((trenutniIndeks - 1 + slajdovi.length) % slajdovi.length)}
          aria-label="Prethodni slajd"
        >
          ‹
        </button>
        <button
          className="slajder-strelica strelica-desno"
          onClick={() => setTrenutniIndeks((trenutniIndeks + 1) % slajdovi.length)}
          aria-label="Sledeći slajd"
        >
          ›
        </button>

        <div className="slajder-tacke">
          {slajdovi.map((_, indeks) => (
            <span
              key={indeks}
              className={`tacka ${indeks === trenutniIndeks ? 'aktivna-tacka' : ''}`}
              onClick={() => setTrenutniIndeks(indeks)}
            />
          ))}
        </div>
      </section>

      <div className="naslov-stranice">
        <h1>Ko smo mi</h1>
        <p>Kratak uvod u naš rad, viziju i iskustvo u proizvodnji PVC materijala.</p>
      </div>
      <div className="sekcija">
        <p>
          ProPVC proizvodnja je porodična firma iz Inđije koja se dugi niz godina bavi
          preradom i prodajom polivinil-hlorida (PVC) i drugih industrijskih plastičnih
          materijala. Ova stranica je React demonstracija - isti sadržaj kao vanilla
          verzija sajta, ali izgrađena kroz komponente i state umesto ručnog DOM pristupa.
        </p>
      </div>
    </>
  )
}

export default Pocetna
