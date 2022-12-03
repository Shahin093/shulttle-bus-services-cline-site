import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h2 className='text-orange-600 font-bold text-xl'>Our News</h2>
            <div className='w-full grid grid-cols-1 lg:grid-cols-3  gap-4'>
                <div>
                    <h1 className='text-4xl font-bold'>Latest Articles & Blog</h1>
                </div>
                <div>

                </div>
                <div className='w-full items-end'>
                    <button class="bg-orange-700 text-white font-bold hover:bg-black hover:-translate-y-1 px-10 py-3 rounded-full rounded-lg"><span>Show All Blogs</span></button>
                </div>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-3 my-9 gap-3'>
                <div className="w-full rounded-lg shadow-md ">
                    <img
                        className="object-cover w-full h-48"
                        src="https://templatekit.jegtheme.com/shuttle/wp-content/uploads/sites/300/2022/06/portrait-of-smiling-bus-driver-1536x1024.jpg"
                        alt="image"
                    />
                    <div className="p-4">
                        <h4 className="text-xl font-semibold tracking-tight text-blue-600">
                            Calculate The Cost Of Rent A Bus
                        </h4>
                        <p className="mb-2 leading-normal">
                            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia there live the blind texts. Separated they live...
                        </p>
                        <button className="px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow">
                            Read more
                        </button>
                    </div>
                </div>

                <div className="w-full rounded-lg shadow-md ">
                    <img
                        className="object-cover w-full h-48"
                        src="https://templatekit.jegtheme.com/shuttle/wp-content/uploads/sites/300/2022/06/london-s-red-buses-in-station-bus-of-the-public-transport-1536x969.jpg"
                        alt="image"
                    />
                    <div className="p-4">
                        <h4 className="text-xl font-semibold tracking-tight text-blue-600">
                            Calculate The Cost Of Rent A Bus
                        </h4>
                        <p className="mb-2 leading-normal">
                            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia there live the blind texts. Separated they live...
                        </p>
                        <button className="px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow">
                            Read more
                        </button>
                    </div>
                </div>

                <div className="w-full rounded-lg shadow-md ">
                    <img
                        className="object-cover w-full h-48"
                        src="https://templatekit.jegtheme.com/shuttle/wp-content/uploads/sites/300/2022/06/happy-girl-passenger-holding-smartphone-under-tablet-of-young-female-bus-conductor-1536x1024.jpg"
                        alt="image"
                    />
                    <div className="p-4">
                        <h4 className="text-xl font-semibold tracking-tight text-blue-600">
                            Calculate The Cost Of Rent A Bus
                        </h4>
                        <p className="mb-2 leading-normal">
                            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia there live the blind texts. Separated they live...
                        </p>
                        <button className="px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow">
                            Read more
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;