import React from 'react';
import './BusCollectionService.css'
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

                    <div className='w-5/6 bg-white rounded-lg mx-auto mt-[-50px] relative  z-50 shadow-lg p-10'>
                        <h2 className='mx-auto bg-white text-black text-2xl font-bold'>Volto 403</h2>
                        <h1 ><span className='text-orange-600 text-2xl'>$250</span>/day</h1>

                    </div>
                </div>
                <div>
                    <div className=''>
                        <img className='rounded-lg' src="https://templatekit.jegtheme.com/shuttle/wp-content/uploads/sites/300/2022/06/bus-image2-800x540.jpg" alt="" />
                    </div>

                    <div className='w-5/6 bg-white rounded-lg mx-auto mt-[-50px] relative  z-50 shadow-lg p-10'>
                        <h2 className='mx-auto bg-white text-black text-2xl font-bold'>Volto 403</h2>
                        <h1 ><span className='text-orange-600 text-2xl'>$250</span>/day</h1>

                    </div>
                </div>
                <div>
                    <div className=''>
                        <img className='rounded-lg' src="https://templatekit.jegtheme.com/shuttle/wp-content/uploads/sites/300/2022/06/bus-image1-800x540.jpg" alt="" />
                    </div>

                    <div className='w-5/6 bg-white rounded-lg mx-auto mt-[-50px] relative  z-50 shadow-lg p-10'>
                        <h2 className='mx-auto bg-white text-black text-2xl font-bold'>Volto 403</h2>
                        <h1 ><span className='text-orange-600 text-2xl'>$250</span>/day</h1>

                    </div>
                </div>


            </div>


        </div>
    );
};

export default BusCollectionService;