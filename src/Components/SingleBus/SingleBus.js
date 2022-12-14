import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { BiBus } from 'react-icons/bi';

const SingleBus = ({ b, setBookingBus }) => {
    // console.log(b);
    return (
        <div>
            <div>
                <img className='rounded-lg' src={b.img} alt="" />
            </div>

            <div data-aos="fade-up" className='w-full lg:w-5/6 bg-white rounded-lg mx-auto mt-[-50px] relative  z-50 shadow-lg p-10'>
                <h2 className='mx-auto  bg-white text-black text-2xl font-bold'>{b?.bus_name}</h2>
                <h1 className='mb-14'><span className='text-orange-600 text-2xl'>$250</span>/day</h1>
                <hr />

                <div className='flex gap-7 mt-5'>
                    <BiBus className='text-3xl font-bold text-orange-600 w-50'></BiBus>
                    <div className='text-black gap-5'>
                        <h2 className='items-center'><span className='font-serif font-bold text-1xl'>{b.seat}  Seat</span></h2>
                    </div>
                </div>

                <div className='flex gap-7 mt-5'>
                    <BiBus className='text-3xl font-bold text-orange-600 w-50'></BiBus>
                    <div className='text-black gap-5 font-serif font-bold text-1xl'>
                        <h2 className='items-center'><span className='  text-xl'>{b.driver_staff} Driver Staff</span></h2>
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
                        {/* <!-- The button to open modal --> */}
                        <label for="my-modal-6" onClick={() => setBookingBus(b)} className="px-6 py-3 bg-orange-700 hover:bg-black text-white text-1xl font-bold rounded-full">Booking Now</label>

                    </div>
                    <div className=' flex items-center text-black font-bold hover:text-orange-600'>
                        <p>View details</p>
                        <AiOutlineArrowRight></AiOutlineArrowRight>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SingleBus;