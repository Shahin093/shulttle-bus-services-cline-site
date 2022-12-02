import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';
import AboutSuttle from './Components/AboutSuttle/AboutSuttle';
import BusCollection from './Components/BusCollection/BusCollection';
import Navbar from './Components/Navbar/Navbar';

function App() {
  AOS.init();
  return (
    <div className=''>
      <Navbar></Navbar>
      <BusCollection></BusCollection>
      <AboutSuttle></AboutSuttle>
    </div>
  );
}

export default App;
