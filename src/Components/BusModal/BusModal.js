import React from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import auth from '../../firebase.init';

const BusModal = ({ bookingBus, setBookingBus }) => {
    // console.log(bookingBus.slot[0])


    // seat sate creating 
    // const [seats, setSeats] = useState([]);
    // console.log(seats);
    // console.log(currentFruit);
    // const changeFruit = (st) => {
    // const [seats] = SeatHook(bookingBus?.bus_name, st)



    // }




    // console.log(new Date().toISOString().slice(0, 10));
    // console.log(bookingBus?.seat);
    // user auth 
    const [user] = useAuthState(auth);

    const [startDate, setStartDate] = useState(new Date());
    // console.log(startDate);
    // form hooks 
    const { register, formState: { errors }, handleSubmit } = useForm();
    // onsubmit 
    const onSubmit = async data => {
        const bus_name = bookingBus?.bus_name;
        const district_from = data.where;
        const district_to = data.to;
        // const when = startDate;
        const customer_name = user?.name;
        const email = user?.email;
        const slot = data.time;
        // console.log(slot);
        // setCurrentFruit(slot)
        // fetch(`http://localhost:5000/api/v1/busCollection/slots?bus_name=${bus_name}&&slot=${slot}`)
        //     .then(res => res.json())
        //     .then(data => setSeats(data))
        // console.log(seats);

        const status = 'active';
        const seat = data.seat;
        // const dates = data.when;
        const dates = new Date().toISOString().slice(0, 10);
        // console.log(dates);
        const amount = 400;
        const driver_staf = 2;






        const databody = {
            bus_name, district_from, district_to, customer_name, email, slot, seat, amount, status, dates, driver_staf
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
                // console.log(data);
                alert(data.message)
            });


    }

    return (
        <div>
            {/* <!-- Put this part before </body> tag-- > */}
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <div className='flex  justify-center items-center'>
                        <div className="card w-full bg-gray-200 shadow-xl">
                            <div className="card-body">
                                <form onSubmit={handleSubmit(onSubmit)}>

                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
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
                                                {
                                                    bookingBus?.district_from.map(df => <option value={df}>{df}</option>)
                                                }
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
                                                {
                                                    bookingBus?.district_to.map(dt => <option value={dt}>{dt}</option>)
                                                }
                                            </select>
                                            <label className="label">
                                            </label>
                                        </div>

                                        {/* when  */}
                                        <div className="form-control w-full max-w-xs">
                                            <label className="label">
                                                <span className="label-text">When</span>
                                            </label>
                                            <DatePicker
                                                {...register("when", {

                                                })}
                                                className="input input-bordered w-full max-w-xs" selected={startDate} onChange={(date) => setStartDate(date)} />

                                        </div>

                                        {/* Time */}
                                        <div className="form-control w-full max-w-xs">
                                            <label className="label">
                                                <span className="label-text">Time</span>
                                            </label>
                                            <select name="select"

                                                className="input input-bordered w-full max-w-xs" required  {...register("time", {
                                                    required: {
                                                        value: true,
                                                    }
                                                })
                                                }
                                            >
                                                <option value="Select Time">Select Time</option>
                                                {
                                                    bookingBus?.slot.map(s => <option value={s}>{s}</option>)
                                                }
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
                                                type="text"
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

                                        <div className='form-control w-full max-w-xs '>
                                            <label className="label">
                                                <span className="label-text"></span>
                                            </label>
                                            <input className='btn mt-5 bg-orange-500' type="submit" value="Booking Now" />
                                        </div>
                                    </div>



                                </form>

                            </div>
                        </div >
                    </div >

                    <div>
                        <p>seat Avaible</p>

                    </div>
                    <div className="modal-action">
                        <label for="my-modal-6" className="btn">Close</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default BusModal;