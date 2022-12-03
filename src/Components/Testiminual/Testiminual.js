import React from 'react';
import './Testiminual.css';

import InfiniteCarousel from 'react-leaf-carousel';

const Testiminual = () => {
    const myStyle = {
        backgroundImage: `url(https://templatekit.jegtheme.com/shuttle/wp-content/uploads/sites/300/2022/06/image-7ccqBRt94dA-unsplash.jpg)`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };

    return (
        <div className=' mx-auto mt-12 my-12'>

            <div class="hero min-h-screen" style={myStyle}>
                <div class="hero-overlay bg-opacity-60"></div>
                <div class="hero-content text-center text-neutral-content">
                    <div class="max-w-md">
                        <h1 class="mb-5 text-5xl font-bold">Hello there</h1>
                        <p class="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button class="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>

            {/* Swiper  */}
            <div className='mt-[-100px] z-50'>
                <InfiniteCarousel className='bg-base-300'
                    breakpoints={[
                        {
                            breakpoint: 500,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1,
                            },
                        },
                        {
                            breakpoint: 768,
                            settings: {
                                slidesToShow: 3,
                                slidesToScroll: 3,
                            },
                        },
                    ]}
                    dots={true}
                    showSides={true}
                    sidesOpacity={.5}
                    sideSize={.1}
                    slidesToScroll={1}
                    slidesToShow={3}
                    scrollOnDevice={true}
                    autoCycle={true}
                    animationDuration={500}
                    slidesSpacing={10}
                    cycleInterval={5000}
                    pauseOnHover={true}
                >
                    <div className='bg-white slider-container p-10'>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis.

                        <div class="rating rating-lg rating-half">
                            <input type="radio" name="rating-10" class="rating-hidden" />
                            <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-1" />
                            <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-2" />
                            <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-1" checked />
                            <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-2" />
                            <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-1" />
                            <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-2" />
                            <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-1" />
                            <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-2" />
                            <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-1" />
                            <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-2" />
                        </div>

                        <div className='flex items-center justify-around mt-5'>
                            <div class="avatar">
                                <div class="w-20  rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src="https://templatekit.jegtheme.com/shuttle/wp-content/uploads/sites/300/2022/06/image-D2C59FF-150x150.jpg" />
                                </div>

                            </div>
                            <div>
                                <h2 className='font-bold'>Fred Rodriquez</h2>
                                <p>Project manager</p>
                            </div>
                        </div>
                    </div>

                    <div className='bg-white slider-container p-10'>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis.

                        <div class="rating rating-lg rating-half">
                            <input type="radio" name="rating-10" class="rating-hidden" />
                            <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-1" />
                            <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-2" />
                            <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-1" checked />
                            <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-2" />
                            <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-1" />
                            <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-2" />
                            <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-1" />
                            <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-2" />
                            <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-1" />
                            <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-2" />
                        </div>

                        <div className='flex items-center justify-around mt-5'>
                            <div class="avatar">
                                <div class="w-20  rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src="https://templatekit.jegtheme.com/shuttle/wp-content/uploads/sites/300/2022/06/image-D2C59FF-150x150.jpg" />
                                </div>

                            </div>
                            <div>
                                <h2 className='font-bold'>Fred Rodriquez</h2>
                                <p>Project manager</p>
                            </div>
                        </div>
                    </div>
                    <div className='bg-white slider-container p-10'>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis.

                        <div class="rating rating-lg rating-half">
                            <input type="radio" name="rating-10" class="rating-hidden" />
                            <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-1" />
                            <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-2" />
                            <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-1" checked />
                            <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-2" />
                            <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-1" />
                            <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-2" />
                            <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-1" />
                            <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-2" />
                            <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-1" />
                            <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-2" />
                        </div>

                        <div className='flex items-center justify-around mt-5'>
                            <div class="avatar">
                                <div class="w-20  rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src="https://templatekit.jegtheme.com/shuttle/wp-content/uploads/sites/300/2022/06/image-D2C59FF-150x150.jpg" />
                                </div>

                            </div>
                            <div>
                                <h2 className='font-bold'>Fred Rodriquez</h2>
                                <p>Project manager</p>
                            </div>
                        </div>
                    </div>
                    <div className='bg-white slider-container p-10'>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis.

                        <div class="rating rating-lg rating-half">
                            <input type="radio" name="rating-10" class="rating-hidden" />
                            <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-1" />
                            <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-2" />
                            <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-1" checked />
                            <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-2" />
                            <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-1" />
                            <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-2" />
                            <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-1" />
                            <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-2" />
                            <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-1" />
                            <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-2" />
                        </div>

                        <div className='flex items-center justify-around mt-5'>
                            <div class="avatar">
                                <div class="w-20  rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src="https://templatekit.jegtheme.com/shuttle/wp-content/uploads/sites/300/2022/06/image-D2C59FF-150x150.jpg" />
                                </div>

                            </div>
                            <div>
                                <h2 className='font-bold'>Fred Rodriquez</h2>
                                <p>Project manager</p>
                            </div>
                        </div>
                    </div>
                    <div className='bg-white slider-container p-10'>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis.

                        <div class="rating rating-lg rating-half">
                            <input type="radio" name="rating-10" class="rating-hidden" />
                            <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-1" />
                            <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-2" />
                            <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-1" checked />
                            <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-2" />
                            <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-1" />
                            <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-2" />
                            <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-1" />
                            <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-2" />
                            <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-1" />
                            <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-2" />
                        </div>

                        <div className='flex items-center justify-around mt-5'>
                            <div class="avatar">
                                <div class="w-20  rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src="https://templatekit.jegtheme.com/shuttle/wp-content/uploads/sites/300/2022/06/image-D2C59FF-150x150.jpg" />
                                </div>

                            </div>
                            <div>
                                <h2 className='font-bold'>Fred Rodriquez</h2>
                                <p>Project manager</p>
                            </div>
                        </div>
                    </div>
                    <div className='bg-white slider-container p-10'>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis.

                        <div class="rating rating-lg rating-half">
                            <input type="radio" name="rating-10" class="rating-hidden" />
                            <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-1" />
                            <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-2" />
                            <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-1" checked />
                            <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-2" />
                            <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-1" />
                            <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-2" />
                            <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-1" />
                            <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-2" />
                            <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-1" />
                            <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-2" />
                        </div>

                        <div className='flex items-center justify-around mt-5'>
                            <div class="avatar">
                                <div class="w-20  rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src="https://templatekit.jegtheme.com/shuttle/wp-content/uploads/sites/300/2022/06/image-D2C59FF-150x150.jpg" />
                                </div>

                            </div>
                            <div>
                                <h2 className='font-bold'>Fred Rodriquez</h2>
                                <p>Project manager</p>
                            </div>
                        </div>
                    </div>
                    <div className='bg-white slider-container p-10'>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis.

                        <div class="rating rating-lg rating-half">
                            <input type="radio" name="rating-10" class="rating-hidden" />
                            <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-1" />
                            <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-2" />
                            <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-1" checked />
                            <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-2" />
                            <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-1" />
                            <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-2" />
                            <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-1" />
                            <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-2" />
                            <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-1" />
                            <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-2" />
                        </div>

                        <div className='flex items-center justify-around mt-5'>
                            <div class="avatar">
                                <div class="w-20  rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src="https://templatekit.jegtheme.com/shuttle/wp-content/uploads/sites/300/2022/06/image-D2C59FF-150x150.jpg" />
                                </div>

                            </div>
                            <div>
                                <h2 className='font-bold'>Fred Rodriquez</h2>
                                <p>Project manager</p>
                            </div>
                        </div>
                    </div>
                    <div className='bg-white slider-container p-10'>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis.

                        <div class="rating rating-lg rating-half">
                            <input type="radio" name="rating-10" class="rating-hidden" />
                            <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-1" />
                            <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-2" />
                            <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-1" checked />
                            <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-2" />
                            <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-1" />
                            <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-2" />
                            <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-1" />
                            <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-2" />
                            <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-1" />
                            <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-2" />
                        </div>

                        <div className='flex items-center justify-around mt-5'>
                            <div class="avatar">
                                <div class="w-20  rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src="https://templatekit.jegtheme.com/shuttle/wp-content/uploads/sites/300/2022/06/image-D2C59FF-150x150.jpg" />
                                </div>

                            </div>
                            <div>
                                <h2 className='font-bold'>Fred Rodriquez</h2>
                                <p>Project manager</p>
                            </div>
                        </div>
                    </div>
                    <div className='bg-white slider-container p-10'>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis.

                        <div class="rating rating-lg rating-half">
                            <input type="radio" name="rating-10" class="rating-hidden" />
                            <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-1" />
                            <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-2" />
                            <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-1" checked />
                            <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-2" />
                            <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-1" />
                            <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-2" />
                            <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-1" />
                            <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-2" />
                            <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-1" />
                            <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-2" />
                        </div>

                        <div className='flex items-center justify-around mt-5'>
                            <div class="avatar">
                                <div class="w-20  rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src="https://templatekit.jegtheme.com/shuttle/wp-content/uploads/sites/300/2022/06/image-D2C59FF-150x150.jpg" />
                                </div>

                            </div>
                            <div>
                                <h2 className='font-bold'>Fred Rodriquez</h2>
                                <p>Project manager</p>
                            </div>
                        </div>
                    </div>
                    <div className='bg-white slider-container p-10'>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis.

                        <div class="rating rating-lg rating-half">
                            <input type="radio" name="rating-10" class="rating-hidden" />
                            <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-1" />
                            <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-2" />
                            <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-1" checked />
                            <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-2" />
                            <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-1" />
                            <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-2" />
                            <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-1" />
                            <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-2" />
                            <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-1" />
                            <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-2" />
                        </div>

                        <div className='flex items-center justify-around mt-5'>
                            <div class="avatar">
                                <div class="w-20  rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src="https://templatekit.jegtheme.com/shuttle/wp-content/uploads/sites/300/2022/06/image-D2C59FF-150x150.jpg" />
                                </div>

                            </div>
                            <div>
                                <h2 className='font-bold'>Fred Rodriquez</h2>
                                <p>Project manager</p>
                            </div>
                        </div>
                    </div>
                    <div className='bg-white slider-container p-10'>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis.

                        <div class="rating rating-lg rating-half">
                            <input type="radio" name="rating-10" class="rating-hidden" />
                            <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-1" />
                            <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-2" />
                            <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-1" checked />
                            <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-2" />
                            <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-1" />
                            <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-2" />
                            <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-1" />
                            <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-2" />
                            <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-1" />
                            <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-2" />
                        </div>

                        <div className='flex items-center justify-around mt-5'>
                            <div class="avatar">
                                <div class="w-20  rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src="https://templatekit.jegtheme.com/shuttle/wp-content/uploads/sites/300/2022/06/image-D2C59FF-150x150.jpg" />
                                </div>

                            </div>
                            <div>
                                <h2 className='font-bold'>Fred Rodriquez</h2>
                                <p>Project manager</p>
                            </div>
                        </div>
                    </div>
                    <div className='bg-white slider-container p-10'>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis.

                        <div class="rating rating-lg rating-half">
                            <input type="radio" name="rating-10" class="rating-hidden" />
                            <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-1" />
                            <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-2" />
                            <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-1" checked />
                            <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-2" />
                            <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-1" />
                            <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-2" />
                            <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-1" />
                            <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-2" />
                            <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-1" />
                            <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-2" />
                        </div>

                        <div className='flex items-center justify-around mt-5'>
                            <div class="avatar">
                                <div class="w-20  rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src="https://templatekit.jegtheme.com/shuttle/wp-content/uploads/sites/300/2022/06/image-D2C59FF-150x150.jpg" />
                                </div>

                            </div>
                            <div>
                                <h2 className='font-bold'>Fred Rodriquez</h2>
                                <p>Project manager</p>
                            </div>
                        </div>
                    </div>
                    <div className='bg-white slider-container p-10'>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis.

                        <div class="rating rating-lg rating-half">
                            <input type="radio" name="rating-10" class="rating-hidden" />
                            <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-1" />
                            <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-2" />
                            <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-1" checked />
                            <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-2" />
                            <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-1" />
                            <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-2" />
                            <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-1" />
                            <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-2" />
                            <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-1" />
                            <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-2" />
                        </div>

                        <div className='flex items-center justify-around mt-5'>
                            <div class="avatar">
                                <div class="w-20  rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src="https://templatekit.jegtheme.com/shuttle/wp-content/uploads/sites/300/2022/06/image-D2C59FF-150x150.jpg" />
                                </div>

                            </div>
                            <div>
                                <h2 className='font-bold'>Fred Rodriquez</h2>
                                <p>Project manager</p>
                            </div>
                        </div>
                    </div>


                </InfiniteCarousel>
            </div>





        </div>




    );
};

export default Testiminual;