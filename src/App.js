import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Router,
  Routes,
} from "react-router-dom";
import HomePage from './Components/HomePage/HomePage';
import Navbar from './Components/Navbar/Navbar';
import AboutSuttle from './Components/AboutSuttle/AboutSuttle';
import OurServices from './Components/OurSerivces/OurServices';
import BusCollectionService from './Components/BusCollectionService/BusCollectionService';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    fetch('http://localhost:5000/api/v1/busBooking')
      .then(res => res.json())
      .then(data => console.log(data))
  }, [])

  AOS.init();
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutSuttle" element={<AboutSuttle />} />
        <Route path="/services" element={<BusCollectionService />} />
      </Routes>





    </div>
  );
}

export default App;
