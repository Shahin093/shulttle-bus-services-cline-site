import React from 'react';
import './OurServices.css'
const OurServices = () => {
    return (
        <div className='mt-12'>
            <div className='mx-auto servicedec'>
                <h2 className='mx-auto text-orange-600 font-bold text-2xl'>Our Services</h2>
                <h2 className='text-black text-5xl  font-bold mx-auto'>We Provide <span className='underline decoration-pink-500 decoration-[10px]'>Bus Charter</span> For You</h2>
                <p className='mt-5 w-7/12 mx-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
            </div>


            <div className='grid grid-cols-1 lg:grid-cols-3'>
                <div className="testimotionals bg-white p-5">
                    <div class="card">
                        <div class="layer">

                        </div>
                        <div class="content">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam iusto ea tenetur quas facere minima obcaecati mollitia sed ipsum quod, eius repellat nihil quos. Saepe ipsa veritatis magni voluptates voluptatumsed ipsum quod, eius repellat nihil quos. Saepe ipsa veritatis magni voluptates voluptatum..</p>
                            <div class="image">
                                <img width="100px" src="data:image/jpeg;base64,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" alt="" />

                            </div>
                            <div class="details">
                                <h2> Someone famous <br /> <span>Backend developer</span></h2>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="testimotionals">
                    <div class="card">
                        <div class="layer">

                        </div>
                        <div class="content">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam iusto ea tenetur quas facere minima obcaecati mollitia sed ipsum quod, eius repellat nihil quos. Saepe ipsa veritatis magni voluptates voluptatumsed ipsum quod, eius repellat nihil quos. Saepe ipsa veritatis magni voluptates voluptatum..</p>
                            <div class="image">
                                <img width="100px" src="data:image/jpeg;base64,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" alt="" />

                            </div>
                            <div class="details">
                                <h2> Someone famous <br /> <span>Backend developer</span></h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="testimotionals">
                    <div class="card">
                        <div class="layer">

                        </div>
                        <div class="content">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam iusto ea tenetur quas facere minima obcaecati mollitia sed ipsum quod, eius repellat nihil quos. Saepe ipsa veritatis magni voluptates voluptatum.</p>
                            <div class="image">
                                <img width="100px" src="data:image/png;base64,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" alt="" />

                            </div>
                            <div class="details">
                                <h2> Someone famous <br /> <span>Backend developer</span></h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="testimotionals">
                    <div class="card">
                        <div class="layer">

                        </div>
                        <div class="content">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam iusto ea tenetur quas facere minima obcaecati mollitia sed ipsum quod, eius repellat nihil quos. Saepe ipsa veritatis magni voluptates voluptatum. mollitia sed ipsum quod, eius repellat nihil quos. Saepe ipsa veritatis magni voluptates voluptatum</p>
                            <div class="image">
                                <img width="100px" src="https://vignette.wikia.nocookie.net/supernatural-diaries/images/b/b2/Cara-delevingne-profile.jpg/revision/latest?cb=20140217060511" alt="" />

                            </div>
                            <div class="details">
                                <h2> Someone famous <br /> <span>Backend developer</span></h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="testimotionals">
                    <div class="card">
                        <div class="layer">

                        </div>
                        <div class="content">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam iusto ea tenetur quas facere minima obcaecati mollitia sed ipsum quod, eius repellat nihil quos. Saepe ipsa veritatis magni voluptates voluptatum.</p>
                            <div class="image">
                                <img width="100px" src="https://vignette.wikia.nocookie.net/supernatural-diaries/images/b/b2/Cara-delevingne-profile.jpg/revision/latest?cb=20140217060511" alt="" />

                            </div>
                            <div class="details">
                                <h2> Someone famous <br /> <span>Backend developer</span></h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="testimotionals">
                    <div class="card">
                        <div class="layer">

                        </div>
                        <div class="content">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam iusto ea tenetur quas facere minima obcaecati mollitia sed ipsum quod, eius repellat nihil quos. Saepe ipsa veritatis magni voluptates voluptatum.</p>
                            <div class="image">
                                <img width="100px" src="https://vignette.wikia.nocookie.net/supernatural-diaries/images/b/b2/Cara-delevingne-profile.jpg/revision/latest?cb=20140217060511" alt="" />

                            </div>
                            <div class="details">
                                <h2> Someone famous <br /> <span>Backend developer</span></h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default OurServices;