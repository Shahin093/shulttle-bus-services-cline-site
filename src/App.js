import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';
import {
  Route,

  Routes,
} from "react-router-dom";
import HomePage from './Components/HomePage/HomePage';
import Navbar from './Components/Navbar/Navbar';
import AboutSuttle from './Components/AboutSuttle/AboutSuttle';
import OurServices from './Components/OurSerivces/OurServices';
import BusCollectionService from './Components/BusCollectionService/BusCollectionService';
import { useEffect } from 'react';
import SignUp from './Components/SignUp/SignUp';
import Login from './Components/SignUp/Login';
import RequiredAuth from './Components/SignUp/RequiredAuth';
import OriginalNavbar from './Components/OriginalNavber/OriginalNavbar';
import Sidebar from './Components/DashBoard/Sidebar';
import DashBoard from './Components/DashBoard/DashBoard';
import Chart from './Components/DashBoard/Chart/Chart';
import MyBooking from './Components/DashBoard/MyBooking/MyBooking';
import FeaturedInfo from './Components/DashBoard/FeaturedInfo/FeaturedInfo';
import PresengerList from './Components/DashBoard/PresengerList/PresengerList';

function App() {
  const userData = [
    {
      name: "Jan",
      "Active User": 4000,
    },
    {
      name: "Feb",
      "Active User": 3000,
    },
    {
      name: "Feb",
      "Active User": 3000,
    },
    {
      name: "Feb",
      "Active User": 3000,
    },
    {
      name: "Feb",
      "Active User": 3000,
    },
    {
      name: "Feb",
      "Active User": 3000,
    },
    {
      name: "Feb",
      "Active User": 3000,
    },
    {
      name: "Feb",
      "Active User": 3000,
    },
    {
      name: "Feb",
      "Active User": 3000,
    },
    {
      name: "Feb",
      "Active User": 3000,
    },
    {
      name: "Feb",
      "Active User": 3000,
    },
    {
      name: "Feb",
      "Active User": 3000,
    },
  ];


  useEffect(() => {
    fetch('http://localhost:5000/api/v1/busBooking')
      .then(res => res.json())
      .then(data => console.log(data))
  }, [])

  AOS.init();
  return (
    <div className='bg-grey-lighter'>
      {/* <Navbar></Navbar> */}

      <OriginalNavbar></OriginalNavbar>
      <Routes>
        {/* <Route path="/" element={<HomePage />} /> */}
        <Route path="/aboutSuttle" element={
          <RequiredAuth>
            <AboutSuttle />
          </RequiredAuth>
        } />
        <Route path="/services" element={<BusCollectionService />} />
        <Route path='/signup' element={<SignUp></SignUp>} />
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/dashboard' element={
          <RequiredAuth>
            <DashBoard></DashBoard>
          </RequiredAuth>
        }>

          <Route path='/dashboard/mybooking' element={<MyBooking></MyBooking>}></Route>

          <Route path='/dashboard/featuresinfo' element={<FeaturedInfo></FeaturedInfo>}></Route>

          <Route path='/dashboard/presenger' element={<PresengerList></PresengerList>}></Route>

          <Route path='/dashboard//chart' element={<Chart data={userData} title="User Analytics" grid dataKey="Active User"></Chart>}></Route>
        </Route>

      </Routes>





    </div>
  );
}

export default App;
