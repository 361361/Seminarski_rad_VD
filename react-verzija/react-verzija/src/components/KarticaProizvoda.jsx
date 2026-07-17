// Komponenta koja prima podatke preko "props" (ikonica, naslov, opis)
// i prikazuje jednu karticu. Umesto da se 8 kartica ručno piše u JSX-u
// (kao 8 <div> blokova u proizvodi.html), ovde se ista komponenta
// ponovo koristi 8 puta sa različitim podacima - ključna prednost
// komponentnog pristupa u React-u.
function KarticaProizvoda({ ikonica, naslov, opis }) {
  return (
    <div className="kartica">
      <div className="kartica-ikonica">{ikonica}</div>
      <h3>{naslov}</h3>
      <p>{opis}</p>
    </div>
  )
}

export default KarticaProizvoda
