import React from 'react';
import './MyBooking.css'
import { RiDeleteBin6Fill } from 'react-icons/ri';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useState } from 'react';
import { useEffect } from 'react';
import doneIcon from '../../../assets/icons/done.svg';
import CancelIcon from '../../../assets/icons/cancel.svg';


const MyBooking = () => {
    const [user] = useAuthState(auth);
    console.log(user.email);
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/api/v1/busCollection?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setOrders(data?.data))
    }, []);

    // console.log(orders);
    return (
        // <div className='chart'>
        //     {
        //         orders?.map(order => <Order key={order._id} order={order}></Order>)
        //     }
        // </div>


        <div className='dashboard-content-container'>
            <div className='dashboard-content-header'>
                <h2>Orders List</h2>
                <div className='dashboard-content-search'>

                </div>
            </div>

            <table>
                <thead>
                    <th>BUS</th>
                    <th>FROM-TO</th>
                    <th>STATUS</th>
                    <th>SLOT</th>
                    <th>SEAT</th>
                    <th>AMOUNT</th>
                    <th>TOTAL AMOUNT</th>
                    <th>PAYMENT</th>
                    <th>RE-ASSIGN</th>
                </thead>
                {
                    orders?.map(order => <tbody>

                        <tr >
                            <td>
                                <div>
                                    <img
                                        src={order.img}
                                        className='dashboard-content-avatar'
                                        alt='/' />
                                    <span>{order.bus_name}</span>
                                </div>
                            </td>

                            <td><span>{order.district_from}-{order.district_to}</span></td>

                            <td>
                                <div disabled={order.status === 'cancel'}>
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
                                </div>
                            </td>


                            <td><span>{order.slot}</span></td>

                            <td><span>{order.seat}</span></td>

                            <td><span>{order.amount}</span></td>


                            <td><span>${
                                order.amount * order.seat
                            }</span></td>
                            <td><span disabled={order.status === 'cancel'} className='btn bg-primary'>PAY</span></td>

                            <td><span className="btn bg-green-600">Edit</span></td>
                            <td><span className='text-5xl bg-red-500 text-red-500'><RiDeleteBin6Fill /></span></td>

                        </tr>



                    </tbody>)
                }

            </table>


        </div>

    );
};

export default MyBooking;