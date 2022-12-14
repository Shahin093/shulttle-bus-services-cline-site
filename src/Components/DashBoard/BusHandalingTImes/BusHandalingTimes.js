import React from 'react';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import { useForm } from 'react-hook-form';
import './BusHandalingTimes.css';

import doneIcon from '../../../assets/icons/done.svg';
import CancelIcon from '../../../assets/icons/cancel.svg';
const BusHandalingTimes = () => {

    const slotFromData = {
        bus_name: ['CDM', 'ANA', 'STAR_LINE'],
        district_from: ['Dhaka', 'Cumilla', 'Chittagong', 'Feni'],
        district_to: ['Dhaka', 'Cumilla', 'Chittagong', 'Feni'],
        slot: ['8:00AM', '9:00AM', '10:00AM', '11:00AM', '12:00PM', '1:00PM', '2:00PM', '3:00PM', '4:00PM', '5:00PM', '6:00PM', '7:00PM', '8:00PM', '9:00PM', '10:00PM'],

    };

    // const result = slotFromData?.district_from;
    // const result1 = slotFromData?.district_to;
    // console.log(result, result1);


    // console.log(slotFromData?.bus_name);
    // slotFromData?.bus_name.map(b => console.log(b))

    // const [user] = useAuthState(auth);
    const [slotDataHandle, setSlotDataHandle] = useState([]);

    var seat = 0;
    slotDataHandle?.map(sl =>
        seat = seat + sl.seat
    )

    const [startDate, setStartDate] = useState(new Date());
    // form hooks 
    const { register, formState: { errors }, handleSubmit } = useForm();
    // onsubmit 
    const onSubmit = async data => {
        const bus_name = data.bus_name;
        const district_from = data.where;
        const district_to = data.to;
        const slot = data.time;
        const dates = new Date().toISOString().slice(0, 10);
        // console.log(bus_name, district_from, district_to, slot, dates);



        fetch(`http://localhost:5000/api/v1/busCollection/slots?slot=${slot}&from=${district_from}&to=${district_to}&bus_name=${bus_name}&&dates=${dates}`)
            .then(res => res.json())
            .then(data => setSlotDataHandle(data?.data))


    }


    // http://localhost:5000/api/v1/busCollection/slots?slot=12:00PM&from=Cumilla&to=Feni&bus_name=ANA&&dates=2022-12-12


    // console.log(slotDataHandle);

    return (
        <div className='dashboard-content-container'>
            <div className='dashboard-content-header'>
                {/* filtering from   */}
                <div className='flex  justify-center items-center'>
                    <div className="card w-full bg-gray-200 shadow-xl">
                        <div className="card-body">
                            <form onSubmit={handleSubmit(onSubmit)}>

                                <div className="grid grid-cols-1 lg:grid-cols-6 gap-2">
                                    {/* Bus_name  */}
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text">Bus Name</span>
                                        </label>
                                        <select name="select" className="input input-bordered w-full max-w-xs" required  {...register("bus_name", {
                                            required: {
                                                value: true,
                                            }
                                        })}>
                                            <option value="">Select Bus</option>
                                            {
                                                slotFromData?.bus_name.map((bus) =>
                                                    <option value={bus}>{bus}</option>
                                                )

                                            }

                                        </select>
                                        <label className="label">
                                        </label>
                                    </div>
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
                                                slotFromData?.district_from?.map(from =>
                                                    <option value={from}>{from}</option>
                                                )
                                            }
                                            {/* <option value="Dhaka">Dhaka</option>
                                            <option value="Cumilla">Cumilla</option>
                                            <option value="Chittagong">Chittagong</option>
                                            <option value="Feni">Feni</option> */}
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
                                                slotFromData?.district_to?.map(to =>
                                                    <option value={to}>{to}</option>
                                                )
                                            }
                                            {/* <option value="Dhaka">Dhaka</option>
                                            <option value="Cumilla">Cumilla</option>
                                            <option value="Chittagong">Chittagong</option>
                                            <option value="Feni">Feni</option> */}
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
                                        <select name="select" className="input input-bordered w-full max-w-xs" required  {...register("time", {
                                            required: {
                                                value: true,
                                            }
                                        })
                                        }
                                        >
                                            <option value="Select Time">Select Time</option>
                                            {
                                                slotFromData?.slot?.map(sl =>
                                                    <option value={sl}>{sl}</option>
                                                )
                                            }


                                            {/* <option value="9:00AM">8:00 AM</option>
                                            <option value="10:00AM">10:00 AM</option>
                                            <option value="11:00AM">11:00 AM</option>
                                            <option value="12:00PM">12:00 PM</option>
                                            <option value="1:00PM">4:00 PM</option>
                                            <option value="2:00PM">2:00 PM</option>
                                            <option value="3:00PM">3:00 PM</option>
                                            <option value="4:00PM">4:00 PM</option>
                                            <option value="5:00PM">5:00 PM</option>
                                            <option value="6:00PM">6:00 PM</option>
                                            <option value="7:00PM">7:00 PM</option>
                                            <option value="8:00PM">8:00 PM</option>
                                            <option value="9:00PM">9:00 PM</option>
                                            <option value="10:00PM">10:00 PM</option> */}
                                        </select>
                                        <label className="label">
                                        </label>
                                    </div>
                                    {/* okay input button  */}
                                    <div className='form-control w-full max-w-xs '>
                                        <label className="label">
                                            <span className="label-text"></span>
                                        </label>
                                        <input className='btn mt-5 bg-orange-400' type="submit" value="OK" />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div >
                </div >

            </div>

            {
                slotDataHandle ?
                    <table>
                        <thead>
                            <th>BUS</th>
                            <th>FROM-TO</th>
                            <th>STATUS</th>
                            <th>SLOT</th>
                            <th>SEAT</th>
                            <th>AMOUNT</th>
                            <th>TOTAL AMOUNT</th>
                        </thead>

                        {
                            slotDataHandle?.map(order => <tbody>

                                <tr >
                                    <td>
                                        <div>
                                            <img
                                                src={order.img}
                                                className='dashboard-content-avatar'
                                                alt='/' />
                                            <span>{order.bus_name}</span>
                                            {/* <span>CDM</span> */}
                                        </div>
                                    </td>

                                    <td><span>{order.district_from}-{order.district_to}</span></td>

                                    <td>
                                        {
                                            seat >= 50 ?
                                                <div>
                                                    <img
                                                        src={CancelIcon}
                                                        alt='canceled-icon'
                                                        className='dashboard-content-icon' />
                                                    <span> inactive</span>
                                                </div>
                                                :
                                                <div>
                                                    <img
                                                        src={doneIcon}
                                                        alt='paid-icon'
                                                        className='dashboard-content-icon' />
                                                    <span>active</span>
                                                </div>


                                        }
                                        {/* <div disabled={order.status === 'cancel'}>
                                    {order?.status === 'active' ?
                                        <img
                                            src={doneIcon}
                                            alt='paid-icon'
                                            className='dashboard-content-icon' />
                                        : order.status === 'cancel' ?
                                            <img
                                                src={CancelIcon}
                                                alt='canceled-icon'
                                                className='dashboard-content-icon' />

                                            : null}
                                    <span>{order.status}</span>
                                </div> */}
                                    </td>


                                    <td><span>{order.slot}</span></td>

                                    <td><span>{order.seat}</span></td>

                                    <td><span>{order.amount}</span></td>


                                    <td><span>${
                                        order.amount * order.seat
                                    }</span></td>


                                </tr>



                            </tbody>)
                        }

                    </table>
                    :
                    <p>Data Destibution Please</p>
            }


            <div>

                <span>{50 - seat} Available space</span>

            </div>

        </div>
    );
};

export default BusHandalingTimes;