import React from 'react';
import './BusCollectionService.css';
import { BiBus } from 'react-icons/bi';
import { AiOutlineArrowRight } from 'react-icons/ai';


const BusCollectionService = () => {
    return (
        <div className='mt-20 mx-14'>
            <h2 className='text-orange-600 font-bold'>Our Bus</h2>
            <div className='w-full grid grid-cols-1 lg:grid-cols-3 serviceDecription gap-4'>
                <div>
                    <h1 className='text-3xl font-bold'>Our Bus Collection</h1>
                </div>
                <div>
                    <p className='w-full'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                </div>
                <div className='w-full items-end lg:ml-28'>
                    <button class="button px-6 py-3 rounded-full rounded-lg"><span>All Vehicle</span></button>
                </div>
            </div>


            {/* gari booking */}
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 mt-20'>

                <div>
                    <div className=''>
                        <img className='rounded-lg' src="https://templatekit.jegtheme.com/shuttle/wp-content/uploads/sites/300/2022/06/bus-image4-800x540.jpg" alt="" />
                    </div>

                    <div data-aos="fade-up" className='w-5/6 bg-white rounded-lg mx-auto mt-[-50px] relative  z-50 shadow-lg p-10'>
                        <h2 className='mx-auto  bg-white text-black text-2xl font-bold'>Volto 403</h2>
                        <h1 className='mb-14'><span className='text-orange-600 text-2xl'>$250</span>/day</h1>
                        <hr />

                        <div className='flex gap-7 mt-5'>
                            <BiBus className='text-3xl font-bold text-orange-600 w-50'></BiBus>
                            <div className='text-black gap-5'>
                                <h2 className='items-center'><span className='font-serif font-bold text-1xl'>60 Seat</span></h2>
                            </div>
                        </div>

                        <div className='flex gap-7 mt-5'>
                            <BiBus className='text-3xl font-bold text-orange-600 w-50'></BiBus>
                            <div className='text-black gap-5 font-serif font-bold text-1xl'>
                                <h2 className='items-center'><span className='  text-xl'>2 Driver Staff</span></h2>
                            </div>
                        </div>

                        <div className='flex gap-7 mt-5 '>
                            <BiBus className='text-3xl font-bold text-orange-600 w-50'></BiBus>
                            <div className='text-black gap-5 font-serif font-bold text-1xl'>
                                <h2 className='items-center'><span className='  text-xl'>Manual</span></h2>
                            </div>
                        </div>

                        <div className='flex gap-7 mt-5'>
                            <BiBus className='text-3xl font-bold text-orange-600 w-50'></BiBus>
                            <div className='text-black gap-5 font-serif font-bold text-1xl'>
                                <h2 className='items-center'><span className=''>Fully Insured
                                </span></h2>
                            </div>
                        </div>


                        <div className='flex max-w-full gap-0'>
                            <div className='w-full mt-3 '>
                                <button class=" px-6 py-3 bg-orange-700 hover:bg-black text-white text-1xl font-bold rounded-full"><span>Book Now</span></button>
                            </div>
                            <div className=' flex items-center text-black font-bold hover:text-orange-600'>
                                <p>View details</p>
                                <AiOutlineArrowRight></AiOutlineArrowRight>
                            </div>
                        </div>

                    </div>
                </div>
                <div>
                    <div className=''>
                        <img className='rounded-lg' src="https://templatekit.jegtheme.com/shuttle/wp-content/uploads/sites/300/2022/06/bus-image4-800x540.jpg" alt="" />
                    </div>

                    <div data-aos="fade-up" className='w-5/6 bg-white rounded-lg mx-auto mt-[-50px] relative  z-50 shadow-lg p-10'>
                        <h2 className='mx-auto  bg-white text-black text-2xl font-bold'>Volto 403</h2>
                        <h1 className='mb-14'><span className='text-orange-600 text-2xl'>$250</span>/day</h1>
                        <hr />

                        <div className='flex gap-7 mt-5'>
                            <BiBus className='text-3xl font-bold text-orange-600 w-50'></BiBus>
                            <div className='text-black gap-5'>
                                <h2 className='items-center'><span className='font-serif font-bold text-1xl'>60 Seat</span></h2>
                            </div>
                        </div>

                        <div className='flex gap-7 mt-5'>
                            <BiBus className='text-3xl font-bold text-orange-600 w-50'></BiBus>
                            <div className='text-black gap-5 font-serif font-bold text-1xl'>
                                <h2 className='items-center'><span className='  text-xl'>2 Driver Staff</span></h2>
                            </div>
                        </div>

                        <div className='flex gap-7 mt-5 '>
                            <BiBus className='text-3xl font-bold text-orange-600 w-50'></BiBus>
                            <div className='text-black gap-5 font-serif font-bold text-1xl'>
                                <h2 className='items-center'><span className='  text-xl'>Manual</span></h2>
                            </div>
                        </div>

                        <div className='flex gap-7 mt-5'>
                            <BiBus className='text-3xl font-bold text-orange-600 w-50'></BiBus>
                            <div className='text-black gap-5 font-serif font-bold text-1xl'>
                                <h2 className='items-center'><span className=''>Fully Insured
                                </span></h2>
                            </div>
                        </div>


                        <div className='flex max-w-full gap-0'>
                            <div className='w-full mt-3 '>
                                <button class=" px-6 py-3 bg-orange-700 hover:bg-black text-white text-1xl font-bold rounded-full"><span>Book Now</span></button>
                            </div>
                            <div className=' flex items-center text-black font-bold hover:text-orange-600'>
                                <p>View details</p>
                                <AiOutlineArrowRight></AiOutlineArrowRight>
                            </div>
                        </div>

                    </div>
                </div>
                <div>
                    <div className=''>
                        <img className='rounded-lg' src="https://templatekit.jegtheme.com/shuttle/wp-content/uploads/sites/300/2022/06/bus-image4-800x540.jpg" alt="" />
                    </div>

                    <div data-aos="fade-up" className='w-5/6 bg-white rounded-lg mx-auto mt-[-50px] relative  z-50 shadow-lg p-10'>
                        <h2 className='mx-auto  bg-white text-black text-2xl font-bold'>Volto 403</h2>
                        <h1 className='mb-14'><span className='text-orange-600 text-2xl'>$250</span>/day</h1>
                        <hr />

                        <div className='flex gap-7 mt-5'>
                            <BiBus className='text-3xl font-bold text-orange-600 w-50'></BiBus>
                            <div className='text-black gap-5'>
                                <h2 className='items-center'><span className='font-serif font-bold text-1xl'>60 Seat</span></h2>
                            </div>
                        </div>

                        <div className='flex gap-7 mt-5'>
                            <BiBus className='text-3xl font-bold text-orange-600 w-50'></BiBus>
                            <div className='text-black gap-5 font-serif font-bold text-1xl'>
                                <h2 className='items-center'><span className='  text-xl'>2 Driver Staff</span></h2>
                            </div>
                        </div>

                        <div className='flex gap-7 mt-5 '>
                            <BiBus className='text-3xl font-bold text-orange-600 w-50'></BiBus>
                            <div className='text-black gap-5 font-serif font-bold text-1xl'>
                                <h2 className='items-center'><span className='  text-xl'>Manual</span></h2>
                            </div>
                        </div>

                        <div className='flex gap-7 mt-5'>
                            <BiBus className='text-3xl font-bold text-orange-600 w-50'></BiBus>
                            <div className='text-black gap-5 font-serif font-bold text-1xl'>
                                <h2 className='items-center'><span className=''>Fully Insured
                                </span></h2>
                            </div>
                        </div>


                        <div className='flex max-w-full gap-0'>
                            <div className='w-full mt-3 '>
                                <button class=" px-6 py-3 bg-orange-700 hover:bg-black text-white text-1xl font-bold rounded-full"><span>Book Now</span></button>
                            </div>
                            <div className=' flex items-center text-black font-bold hover:text-orange-600'>
                                <p>View details</p>
                                <AiOutlineArrowRight></AiOutlineArrowRight>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default BusCollectionService;