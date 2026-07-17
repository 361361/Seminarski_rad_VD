import { useState } from 'react'
import KarticaProizvoda from '../components/KarticaProizvoda.jsx'

// Podaci odvojeni od prikaza - isti princip kao u Pocetna.jsx.
// Svaki objekat u nizu postaje jedna <KarticaProizvoda> komponenta.
const sviProizvodi = [
  { id: 1, ikonica: '🧵', naslov: 'PVC cevi', opis: 'Vodovodne, kanalizacione i industrijske cevi različitih prečnika.', kategorija: 'cevi' },
  { id: 2, ikonica: '📐', naslov: 'PVC profili', opis: 'Profili za stolariju, građevinske spojeve i dogradnju objekata.', kategorija: 'profili' },
  { id: 3, ikonica: '🧱', naslov: 'PVC ploče', opis: 'Pune i talasaste ploče za reklamne panoe i pregrade.', kategorija: 'ploce' },
  { id: 4, ikonica: '🔩', naslov: 'Fitinzi i spojnice', opis: 'Kolena, T-komadi i spojnice za montažu cevovoda.', kategorija: 'ostalo' },
  { id: 5, ikonica: '⚙️', naslov: 'Poliamid (PA) i Poliacetal (POM)', opis: 'Tehnički polimeri za izradu mašinskih delova.', kategorija: 'ostalo' },
  { id: 6, ikonica: '🔥', naslov: 'Teflon (PTFE)', opis: 'Materijal otporan na visoke temperature i hemikalije.', kategorija: 'ostalo' },
  { id: 7, ikonica: '🧴', naslov: 'Polipropilen (PP) i Polietilen (PE)', opis: 'Laki materijali za ambalažu i hemijsku industriju.', kategorija: 'ostalo' },
  { id: 8, ikonica: '🧪', naslov: 'PEEK i PET', opis: 'Visokoperformansni polimeri za zahtevne primene.', kategorija: 'ostalo' },
]

function Proizvodi() {
  // Dodatni state koji vanilla verzija nema - polje za pretragu
  // koje uživo filtrira listu proizvoda dok kucaš (demonstracija
  // "controlled input"-a, čestog React obrasca).
  const [pretraga, setPretraga] = useState('')

  const filtriraniProizvodi = sviProizvodi.filter((proizvod) =>
    proizvod.naslov.toLowerCase().includes(pretraga.toLowerCase())
  )

  return (
    <>
      <div className="naslov-stranice">
        <h1>Naši proizvodi</h1>
        <p>Širok asortiman industrijske plastike za građevinarstvo, mašinstvo i svakodnevnu upotrebu.</p>
      </div>

      <div className="sekcija" style={{ paddingBottom: 0 }}>
        <input
          type="text"
          className="pretraga-proizvoda"
          placeholder="Pretraži proizvode uživo..."
          value={pretraga}
          onChange={(dogadjaj) => setPretraga(dogadjaj.target.value)}
        />
      </div>

      <div className="kartice">
        {filtriraniProizvodi.map((proizvod) => (
          <KarticaProizvoda
            key={proizvod.id}
            ikonica={proizvod.ikonica}
            naslov={proizvod.naslov}
            opis={proizvod.opis}
          />
        ))}

        {filtriraniProizvodi.length === 0 && (
          <p className="nema-rezultata">Nema proizvoda koji odgovaraju pretrazi "{pretraga}".</p>
        )}
      </div>
    </>
  )
}

export default Proizvodi
