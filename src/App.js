import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';
import AboutSuttle from './Components/AboutSuttle/AboutSuttle';
import Blogs from './Components/Blogs/Blogs';
import BusCollection from './Components/BusCollection/BusCollection';
import BusCollectionService from './Components/BusCollectionService/BusCollectionService';
import ChooseUs from './Components/ChooseUs/ChooseUs';
import DownLoadService from './Components/DownLoadService/DownloadService';
import Navbar from './Components/Navbar/Navbar';
import OurServices from './Components/OurSerivces/OurServices';
import Testiminual from './Components/Testiminual/Testiminual';

function App() {
  AOS.init();
  return (
    <div className=''>
      <Navbar></Navbar>
      <BusCollection></BusCollection>
      <AboutSuttle></AboutSuttle>
      {/* <ChooseUs></ChooseUs> */}
      <OurServices></OurServices>
      <DownLoadService></DownLoadService>
      <BusCollectionService></BusCollectionService>
      <Testiminual></Testiminual>
      <Blogs></Blogs>
    </div>
  );
}

export default App;
