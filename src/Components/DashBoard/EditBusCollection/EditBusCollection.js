import React from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../../firebase.init';
import DatePicker from "react-datepicker";
import { useEffect } from 'react';


const EditBusCollection = () => {

    // const [user] = useAuthState(auth);

    const [startDate, setStartDate] = useState(new Date());
    console.log(startDate);
    // form hooks 
    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = async data => {
        const bus_name = "ANA";
        // const district_from = data.where;
        // const district_to = data.to;
        // // const when = startDate;
        // const customer_name = user?.name;
        // const email = user?.email;
        // console.log(user);
        const slot = data.time;
        // const status = 'active';
        // const seat = data.seat;
        // const date = new Date().toISOString().slice(0, 10);
        // const amount = 400;

        // const updateData = { bus_name, slot }

        // Simple PUT request with a JSON body using axios
        // const article = { title: 'React PUT Request Example' };
        // axios.put('https://reqres.in/api/articles/1', article)
        //     .then(response => this.setState({ updatedAt: response.data.updatedAt }));

    }
    // const us = (user || gUser);
    // useEffect(() => {
    //     // if (user || gUser) {
    //     //     navigate(from, { replace: true });
    //     // }

    //     if (us) {
    //         navigate(from, { replace: true });
    //     }

    // }, [from, navigate, us])

    return (
        <div className='rounded-lg mx-auto  relative   shadow-lg'>
            <div className='flex  justify-center items-center'>
                <div className="card w-9/12 bg-gray-200 shadow-xl">
                    <div className="card-body">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">

                                {/* Where  */}
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Where</span>
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
                                    <label className="label">
                                    </label>
                                </div>

                                {/* To  */}
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">To</span>
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
                                    <label className="label">
                                    </label>
                                </div>

                                {/* when  */}
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">When</span>
                                    </label>
                                    <DatePicker placeholder="Your Last Name" className="input input-bordered w-full max-w-xs" selected={startDate} onChange={(date) => setStartDate(date)} />

                                </div>

                                {/* Time */}
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Time</span>
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
                                    <label className="label">
                                    </label>
                                </div>

                                {/*seat*/}
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Seat</span>
                                    </label>
                                    <input
                                        type="number"
                                        placeholder="Enter the Seat Number"
                                        className="input input-bordered w-full max-w-xs"
                                        {...register("seat", {
                                            required: {
                                                value: true,
                                                message: 'Seat  is Required'
                                            }
                                        })}
                                    />
                                    <label className="label">
                                        {errors.seat?.type === 'required' && <span className="label-text-alt text-red-500">{errors.seat.message}</span>}
                                    </label>
                                </div>

                                {/* submit button  */}
                                <div className='form-control w-full max-w-xs '>
                                    <label className="label">
                                        <span className="label-text"></span>
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

export default EditBusCollection;