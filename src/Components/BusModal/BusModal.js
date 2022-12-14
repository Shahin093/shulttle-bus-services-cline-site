import React from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import auth from '../../firebase.init';

const BusModal = ({ bookingBus, setBookingBus }) => {

    // user auth 
    const [user] = useAuthState(auth);

    // date 
    const [startDate, setStartDate] = useState(new Date());


    // react from 
    const { register, formState: { errors }, handleSubmit } = useForm();




    // option From 
    const optionsFrom = [
        { value: '', text: '--Choose an option--' },
        { value: 'Dhaka', text: 'Dhaka 🍏' },
        { value: 'Chittagong', text: 'Chittagong 🍌' },
        { value: 'Cumilla', text: 'Cumilla 🍌' },
        { value: 'Feni', text: 'Feni 🍌' }
    ];
    const [selectedFrom, setSelectedFrom] = useState(optionsFrom[0].value);
    const handleChangeFrom = event => {
        // console.log(event.target.value);
        setSelectedFrom(event.target.value);

    };
    // option TO 
    const optionsTo = [
        { value: '', text: '--Choose an option--' },
        { value: 'Dhaka', text: 'Dhaka 🍏' },
        { value: 'Chittagong', text: 'Chittagong 🍌' },
        { value: 'Cumilla', text: 'Cumilla 🍌' },
        { value: 'Feni', text: 'Feni 🍌' }
    ];
    const [selectedTo, setSelectedTo] = useState(optionsTo[0].value);
    const handleChangeTo = event => {
        // console.log(event.target.value);
        setSelectedTo(event.target.value);

    };

    // option slot 
    const optionsSlot = [
        // { value: '', text: '--Choose an option--' },
        { value: '8:00AM', text: '8:00AM' },
        { value: '9:00AM', text: '9:00AM' },
        { value: '10:00AM', text: '10:00AM' },
        { value: '11:00AM', text: '11:00AM' },
        { value: '12:00PM', text: '12:00pM' }
    ];
    const [selectedSlot, setSelectedSlot] = useState(optionsSlot[0].value);

    // console.log(selectedSlot, selectedFrom, selectedTo);
    const dates = new Date().toISOString().slice(0, 10);
    const [slotDataHandle, setSlotDataHandle] = useState([]);
    // console.log(slotDateH);
    const handleChangeSlot = event => {

        setSelectedSlot(event.target.value);


    };
    // console.log(selectedSlot);
    fetch(`http://localhost:5000/api/v1/busCollection/slots?slot=${selectedSlot}&from=${selectedFrom}&to=${selectedTo}&bus_name=${bookingBus?.bus_name}&&dates=${dates}`)
        .then(res => res.json())
        .then(data => console.log(data?.data))
    // console.log(slotDataHandle);
    // onsubmit 
    const onSubmit = async data => {
        const bus_name = bookingBus?.bus_name;
        const district_from = selectedFrom;
        const district_to = selectedTo;
        // const when = startDate;
        const customer_name = user?.name;
        const email = user?.email;
        const slot = selectedSlot;
        // console.log(district_from, district_to, slot);
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
        // console.log(databody);
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

    // console.log(slotDataHandle);




    // 
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

                                    <h2 className='mx-auto text-blue-600 text-3xl font-bold'>Welcome to <span className='underline decoration-pink-500 decoration-[10px] text-yellow-500'>{bookingBus?.bus_name}</span> Bus</h2>

                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
                                        {/* Where  */}
                                        <div className="form-control w-full">
                                            <label className="label">
                                                <span className="label-text">Where</span>
                                            </label>
                                            <select value={selectedFrom} onChange={handleChangeFrom} className="input input-bordered w-full max-w-xs" required  >


                                                {

                                                    optionsFrom.map(option => (
                                                        <option key={option.value} value={option.value}>
                                                            {option.text}
                                                        </option>
                                                    ))

                                                }

                                                {/* <option className='bg-orange-500 font-bold' value="">Select Destination</option> */}
                                                {/* {
                                                    bookingBus?.district_from.map(df => <option className='bg-orange-500 font-bold' value={df}>{df}</option>)
                                                } */}
                                            </select>
                                            <label className="label">
                                            </label>
                                        </div>

                                        {/* To  */}
                                        <div className="form-control w-full max-w-xs">
                                            <label className="label">
                                                <span className="label-text">To</span>
                                            </label>
                                            <select value={selectedTo} onChange={handleChangeTo} name="select" className="input input-bordered w-full max-w-xs" required

                                            // {...register("to", {
                                            //     required: {
                                            //         value: true,
                                            //     }
                                            // })}

                                            >
                                                <option className='bg-orange-500 font-bold' value="">Select Destination</option>
                                                {
                                                    bookingBus?.district_to.map(dt => <option className='bg-orange-500 font-bold' value={dt}>{dt}</option>)
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
                                        {/* <h2>{selects}</h2> */}
                                        {/* Time */}
                                        <div className="form-control w-full max-w-xs">
                                            <label className="label">
                                                <span className="label-text">Time</span>
                                            </label>
                                            {/* <select value={selectValue} onChange={onChange} name="select"

                                                className="input input-bordered w-full max-w-xs" required  {...register("time", {
                                                    required: {
                                                        // value: true,
                                                    }
                                                })
                                                }
                                            >
                                                <option defaultValue disabled className='bg-orange-500 font-bold' >Select Time</option >
                                                {
                                                    bookingBus?.slot.map(s =>
                                                        <option className='bg-orange-500  font-bold' key={s} value={s}>{s}</option>)
                                                }
                                            </select> */}
                                            <select value={selectedSlot} onChange={handleChangeSlot}>
                                                {optionsSlot.map(option => (
                                                    <option key={option.value} value={option.value}>
                                                        {option.text}
                                                    </option>
                                                ))}
                                            </select>

                                            <label className="label">
                                                {/* {selectValue && <h2 className="mt-3">{selectValue}</h2>} */}
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