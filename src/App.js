import './styles/header.css';
import './styles/hero.css';
import './styles/services.css';
import './styles/footer.css';
import Navbar from './components/Navbar';
import UpperHeader from './components/UpperHeader';
import Hero from './components/Hero';
import Services from './components/Services';
import Slider from './components/Slider';
import FOA from './components/FOA';
import Footer from './components/Footer';
import LowerFooter from './components/LowerFooter';

function App() {
  return (
    <div className="App">
      <UpperHeader/>
      <Navbar/>
      <Hero/>
      <Services/>
      <Slider/>
      <FOA/>
      <Footer/>
      <LowerFooter/>
    </div>
  );
}

export default App;
