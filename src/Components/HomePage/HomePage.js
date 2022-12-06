import React from 'react';
import AboutSuttle from '../AboutSuttle/AboutSuttle';
import Blogs from '../Blogs/Blogs';
import BusCollection from '../BusCollection/BusCollection';
import BusCollectionService from '../BusCollectionService/BusCollectionService';
import DownLoadService from '../DownLoadService/DownloadService';
import Navbar from '../Navbar/Navbar';
import OurServices from '../OurSerivces/OurServices';
import Testiminual from '../Testiminual/Testiminual';

const HomePage = () => {
    return (
        <div>
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
};

export default HomePage;