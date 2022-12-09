import React from 'react';
import { useForm } from 'react-hook-form';
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

// http://localhost:5000/api/v1/busCollection?email=sishahin093@gamil.com

const BusCollection = () => {
    const [user, loading, error] = useAuthState(auth);

    const [startDate, setStartDate] = useState(new Date());
    console.log(startDate);
    // form hooks 
    const { register, formState: { errors }, handleSubmit } = useForm();
    // onsubmit 
    const onSubmit = async data => {
        const bus_name = "ANA";
        const district_from = data.where;
        const district_to = data.to;
        // const when = startDate;
        const customer_name = user?.name;
        const email = user?.email;
        console.log(user);
        const slot = data.time;
        const status = 'active';
        const seat = data.seat;
        const amount = 400;
        const driver_staf = 2
        const databody = {
            bus_name, district_from, district_to, customer_name, email, slot, seat, amount, status, driver_staf
        }
        fetch('http://localhost:5000/api/v1/busCollection', {
            method: 'POST',
            body: JSON.stringify(databody),
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                alert(data.message)
            });


    }
    // set up details for ReactHookForm
    // const { register, control, formState, handleSubmit, errors } = useForm();

    return (
        <div data-aos="fade-up" className='rounded-lg mx-auto mt-[-140px] relative  z-20 shadow-lg'>
            <div className='flex  justify-center items-center'>
                <div className="card w-9/12 bg-gray-200 shadow-xl">
                    <div className="card-body">
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
                                {/* Where  */}
                                <div class="form-control w-full">
                                    <label class="label">
                                        <span class="label-text">Where</span>
                                    </label>
                                    <select name="select" className="input input-bordered w-full max-w-xs" required  {...register("where", {
                                        required: {
                                            value: true,
                                        }
                                    })}>
                                        <option value="">Select Destination</option>
                                        <option value="Dhaka">Dhaka</option>
                                        <option value="Chittagong">Chittagong</option>
                                        <option value="Feni">Feni</option>
                                    </select>
                                    <label class="label">
                                    </label>
                                </div>

                                {/* To  */}
                                <div class="form-control w-full max-w-xs">
                                    <label class="label">
                                        <span class="label-text">To</span>
                                    </label>
                                    <select name="select" className="input input-bordered w-full max-w-xs" required  {...register("to", {
                                        required: {
                                            value: true,
                                        }
                                    })}>
                                        <option value="">Select Destination</option>
                                        <option value="Dhaka">Dhaka</option>
                                        <option value="Chittagong">Chittagong</option>
                                        <option value="Feni">Feni</option>
                                    </select>
                                    <label class="label">
                                    </label>
                                </div>

                                {/* when  */}
                                <div class="form-control w-full max-w-xs">
                                    <label class="label">
                                        <span class="label-text">When</span>
                                    </label>
                                    <DatePicker placeholder="Your Last Name" className="input input-bordered w-full max-w-xs" selected={startDate} onChange={(date) => setStartDate(date)} />

                                </div>

                                {/* Time */}
                                <div class="form-control w-full max-w-xs">
                                    <label class="label">
                                        <span class="label-text">Time</span>
                                    </label>
                                    <select name="select" className="input input-bordered w-full max-w-xs" required  {...register("time", {
                                        required: {
                                            value: true,
                                        }
                                    })
                                    }
                                    >
                                        <option value="Select Time">Select Time</option>
                                        <option value="8:00 AM">8:00 AM</option>
                                        <option value="10:00">10:00 AM</option>
                                        <option value="1:00 PM">1:00 PM</option>
                                        <option value="3:00 PM">3:00 PM</option>
                                        <option value="4:00 PM">4:00 PM</option>
                                        <option value="5:00 PM">5:00 PM</option>
                                        <option value="6:00 PM">6:00 PM</option>
                                    </select>
                                    <label class="label">
                                    </label>
                                </div>
                                {/*seat*/}
                                <div class="form-control w-full max-w-xs">
                                    <label class="label">
                                        <span class="label-text">Seat</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Enter the Seat Number"
                                        class="input input-bordered w-full max-w-xs"
                                        {...register("seat", {
                                            required: {
                                                value: true,
                                                message: 'Seat  is Required'
                                            }
                                        })}
                                    />
                                    <label class="label">
                                        {errors.seat?.type === 'required' && <span class="label-text-alt text-red-500">{errors.seat.message}</span>}
                                    </label>
                                </div>

                                <div className='form-control w-full max-w-xs '>
                                    <label class="label">
                                        <span class="label-text"></span>
                                    </label>
                                    <input className='btn mt-5' type="submit" value="Sign Up" />
                                </div>
                            </div>



                        </form>

                    </div>
                </div >
            </div >
        </div >
    );
};

export default BusCollection;