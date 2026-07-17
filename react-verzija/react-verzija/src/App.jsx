import { Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Pocetna from './pages/Pocetna.jsx'
import Proizvodi from './pages/Proizvodi.jsx'
import './App.css'

// Ova React verzija demonstrira primenu složenijeg JS frameworka
// (opcioni deo seminarskog rada) na istu temu - ProPVC proizvodnja.
// Sadrži 2 stranice povezane preko react-router-dom biblioteke,
// dok obavezni deo seminarskog rada ostaje urađen u čistom HTML/CSS/JS.
function App() {
  return (
    <div className="app-omotac">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Pocetna />} />
          <Route path="/proizvodi" element={<Proizvodi />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
