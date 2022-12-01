import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';
import Navbar from './Components/Navbar/Navbar';

function App() {
  AOS.init();
  return (
    <div className=''>
      <Navbar></Navbar>
      <Navbar></Navbar>
      <Navbar></Navbar>

    </div>
  );
}

export default App;
