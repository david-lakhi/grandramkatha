import Hero from './components/Hero';
import About from './components/About';
import MangalKalashYatra from './components/MangalKalashYatra';
import Highlights from './components/Highlights';
import Transformation from './components/Transformation';
import Schedule from './components/Schedule';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <About />
      <MangalKalashYatra />
      <Highlights />
      <Transformation />
      <Schedule />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
