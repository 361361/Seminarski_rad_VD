import { NavLink } from 'react-router-dom'

// NavLink (umesto obicnog <a>) automatski dodaje "aktivna" klasu
// na link koji odgovara trenutnoj ruti - u vanilla verziji smo
// isto postigli ručno pisanim JS kodom (oznaciAktivnuStranicu()).
function Header() {
  return (
    <header className="zaglavlje">
      <div className="gornja-traka">
        <span>📍 Lička 36, Inđija</span>
        <span>✉️ info@ProPVC.rs</span>
        <span>📞 062/ 207 - 736</span>
      </div>

      <div className="glavna-navigacija">
        <img src="/images/logo.png" alt="Logo ProPVC proizvodnja" className="logo-slika" />

        <nav>
          <NavLink to="/" end className={({ isActive }) => isActive ? "aktivan" : ""}>
            Početna
          </NavLink>
          <NavLink to="/proizvodi" className={({ isActive }) => isActive ? "aktivan" : ""}>
            Proizvodi
          </NavLink>
        </nav>

        <a className="dugme-kontakt" href="tel:+38162207736">Pozovite nas</a>
      </div>
    </header>
  )
}

export default Header
