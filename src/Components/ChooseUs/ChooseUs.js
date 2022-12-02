import React from 'react';
import './ChooseUs.css';
import { BiBus } from 'react-icons/bi';
import { FaHandshake } from 'react-icons/fa';
import { SlLike } from 'react-icons/sl';
import { AiOutlineArrowRight } from 'react-icons/ai';

const ChooseUs = () => {
    const myStyle = {
        backgroundImage: `url(https://templatekit.jegtheme.com/shuttle/wp-content/uploads/sites/300/2022/06/woman-holding-digital-camera-and-looking-away-with-mixed-race-man-holding-map-near-travel-bus.jpg)`,
        backgroundColor: "Black",
        zIndex: 15,
        fontSize: '20px',
        paddingLeft: '40px',
        paddingRight: '40px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2'>
            <div className='banner' style={myStyle}>
                <div>
                </div>

            </div>

            <div data-aos="fade-left" className='bg-black banner2 h-50'>
                <div data-aos="fade-right" className="banner-content lg:pt-14 p-6 lg:p-16">
                    <div className='demo-title mb-5'><h2>Why Choose US</h2></div>
                    <div className='mb-5'>
                        <h2 className='text-4xl mb-7 text-2xl lg:text-5xl text-white font-bold'>We Are Experts In <br /> <span className='underline decoration-pink-500 decoration-[10px]'>Bus Charter</span> Service Company Since 1997</h2>
                    </div>
                    <div className='mb-5'>
                        <p className='text-white mb-7'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
                    </div>


                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-10'>
                        <div className='flex gap-7'>
                            <BiBus className='text-6xl font-bold text-orange-600 w-50'></BiBus>
                            <div className='text-white gap-5'>
                                <h2 className='items-center'><span className=' font-bold text-4xl'>25</span><span className='text-orange-600 ml-3 font-bold text-3xl'>+</span></h2>
                                <p>Buses Ready</p>
                            </div>
                        </div>
                        <div className='flex gap-7'>
                            <FaHandshake className='text-6xl font-bold text-orange-600 w-50'></FaHandshake>
                            <div className='text-white gap-5'>
                                <h2 className='items-center'><span className=' font-bold text-4xl'>2,640</span><span className='text-orange-600 ml-3 font-bold text-3xl'>+</span></h2>
                                <p>Satisfied Customer</p>
                            </div>
                        </div>
                        <div className='flex gap-7'>
                            <SlLike className='text-6xl font-bold text-orange-600 w-50'></SlLike>
                            <div className='text-white gap-5'>
                                <h2 className='items-center'><span className=' font-bold text-4xl'>2,836</span><span className='text-orange-600 ml-3 font-bold text-3xl'>+</span></h2>
                                <p>Booking Done</p>
                            </div>
                        </div>
                        <div className='flex gap-7'>
                            <BiBus className='text-6xl font-bold text-orange-600 w-50'></BiBus>
                            <div className='text-white gap-5'>
                                <h2 className='items-center'><span className=' font-bold text-4xl'>25</span><span className='text-orange-600 ml-3 font-bold text-3xl'>+</span></h2>
                                <p>Buses Ready</p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
            <div data-aos="fade-right" className='hidden lg:block p-6 bg-red-500 lg:w-7/12 mt-[-170px] relative  z-50 rounded-lg lg:h-52 ml-5'>
                <h2 className='text-2xl font-bold   text-white'>We Provide Best Bus For You</h2>
                <p className='text-white mt-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>

                <div className='mt-5 flex gap-2 items-center text-white font-bold hover:text-black'>
                    <p>View Projects</p>
                    <AiOutlineArrowRight></AiOutlineArrowRight>
                </div>
            </div>
        </div >
    );
};

export default ChooseUs;