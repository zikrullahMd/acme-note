import './App.scss'
import * as bootstrap from 'bootstrap';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Features from './Components/Features';

function App() {

  return (
    <div>
      <Navbar />
      <div className='main-container'>
        <Home />
        <Features/>
      </div>
    </div>
  )
}

export default App

