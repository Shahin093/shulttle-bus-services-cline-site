import React from 'react';

const DownLoadService = () => {
    const myStyle = {
        backgroundImage: `url(https://placeimg.com/1000/800/arch)`,
    }
    return (
        <div class="mt-10 hero min-h-screen" style={myStyle}>
            <div class="hero-overlay bg-opacity-60"></div>
            <div class="hero-content text-center text-neutral-content">

                <div class=" grid grid-cols-1 lg:grid-cols-2">

                    <div data-aos="fade-right">
                        <img src="https://templatekit.jegtheme.com/shuttle/wp-content/uploads/sites/300/2022/06/update-mockup.png" alt="" />
                    </div>

                    <div className='py-16 mt-20'>
                        <h2 className='mx-auto text-orange-600 font-bold text-2xl'>DownLoad Shuttle App</h2>
                        <h2 className='text-white text-5xl  font-bold mx-auto'>Find A <span className='underline decoration-pink-500 decoration-[10px]'>Bus Charter</span> Near You With Our App</h2>
                        <p className='mt-16'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi</p>

                        <div className='flex mt-20 gap-9 grid grid-cols-1 lg:grid-cols-2'>
                            <img className='text-1xl w-52' src="https://templatekit.jegtheme.com/pertaev/wp-content/uploads/sites/220/2021/12/app-store-1.png" alt="" />

                            <img className='w-52' src="https://templatekit.jegtheme.com/pertaev/wp-content/uploads/sites/220/2021/12/google-play-1.png" alt="" />
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default DownLoadService;