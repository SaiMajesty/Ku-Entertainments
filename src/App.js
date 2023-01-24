import './App.css';
import About from './components/About/About';
import Companies from './components/Copmanies/Companies';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import Services from './components/Services/Services';
import TestMonials from './components/TestMonials/TestMonials';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className=''>
      <Header />
      <Banner />
      <Companies />
      <About />
      <Services />
      <TestMonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
