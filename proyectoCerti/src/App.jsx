
import imagen1 from './images/tour-1.jpeg'
import imagen2 from './images/tour-2.jpeg'
import imagen3 from './images/tour-3.jpeg'
import imagen4 from './images/tour-4.jpeg'
import './App.css'
import { NavBar } from './componentes/Navbar.jsx'
import { Footer } from './componentes/Footer'
import Hero from './componentes/Hero'
import About from './componentes/About.jsx'
import Services from './componentes/Services'
import Tours from './componentes/Tours'
function App() {

  return (
    <>
    <NavBar />
    <Hero/>
    <About/>
    <Services/>
    <Tours/>
    <Footer />
    </>
  );
}
export default App