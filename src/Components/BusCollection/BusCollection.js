import React from 'react';

const BusCollection = () => {
    return (
        <div data-aos="fade-up" className='rounded-lg mx-auto mt-[-140px] relative  z-20 shadow-lg'>
            <form action="" method="POST" className='p-5 grid sm:grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-1 lg:gap-5 border-red-400 lg:mx-20 bg-gray-600'>
                <div class="mb-6">
                    <label for="name" class="block mb-2 text-sm text-gray-600"
                    >Full Name</label
                    >
                    <input
                        type="text"
                        name="name"
                        placeholder="John Doe"
                        required
                        class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                    />
                </div>
                <div class="mb-6">
                    <label for="email" class="block mb-2 text-sm text-gray-600"
                    >Email Address</label
                    >
                    <input
                        type="email"
                        name="email"
                        placeholder="you@email.com"
                        required
                        class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                    />
                </div>
                <div class="mb-6">
                    <label for="phone" class="text-sm text-gray-600">Phone Number</label>
                    <input
                        type="text"
                        name="phone"
                        placeholder="91 1234-567"
                        required
                        class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                    />
                </div>
                <div class="mb-6">
                    <label for="phone" class="text-sm text-gray-600">Phone Number</label>
                    <input
                        type="text"
                        name="phone"
                        placeholder="91 1234-567"
                        required
                        class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                    />
                </div>
                <div class="mb-6">
                    <label for="phone" class="text-sm text-gray-600">Phone Number</label>
                    <input
                        type="text"
                        name="phone"
                        placeholder="91 1234-567"
                        required
                        class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                    />
                </div>

                <div class="mb-6">
                    <button
                        type="submit"
                        class="w-full px-2 py-4 text-white bg-indigo-500 rounded-md  focus:bg-indigo-600 focus:outline-none"
                    >
                        Send Message
                    </button>
                </div>
            </form>
        </div>
    );
};

export default BusCollection;