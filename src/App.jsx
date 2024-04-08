import './App.scss'
import * as bootstrap from 'bootstrap';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Features from './Components/Features';
import Pricing from './Components/Pricing';
import Testimonials from './Components/Testimonials';
import Footer from './Components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <div className='main-container'>
        <Home />
        <Features/>
        <Pricing/>
        <Testimonials/>
      </div>
      <Footer />
    </div>
  )
}

export default App

