import React from 'react';
import './Order.css';
import CancelIcon from '../../../assets/icons/cancel.svg';
import doneIcon from '../../../assets/icons/done.svg'
const Order = ({ order }) => {
    console.log(order);
    return (
        <div className='dashboard-content'>
            {/* <DashboardHeader
                btnText="New Order" /> */}

            <div className='dashboard-content-container'>
                <div className='dashboard-content-header'>
                    <h2>Orders List</h2>
                    <div className='dashboard-content-search'>

                    </div>
                </div>

                <table>
                    <thead>
                        <th>Bus</th>
                        <th>From-to</th>
                        <th>STATUS</th>
                        <th>COSTUMER</th>
                        <th>PRODUCT</th>
                        <th>REVENUE</th>
                    </thead>

                    {
                        // orders.length !== 0 ?
                        <tbody>
                            {/* {orders.map((order, index) => ( */}
                            <tr >
                                <td><span>{order.bus_name}</span></td>
                                <td><span>{order.district_from}-{order.district_to}</span></td>
                                <td>
                                    <div>
                                        {order?.status === 'active' ?
                                            <img
                                                src={doneIcon}
                                                alt='paid-icon'
                                                className='dashboard-content-icon' />
                                            : order.status === 'Canceled' ?
                                                <img
                                                    src={CancelIcon}
                                                    alt='canceled-icon'
                                                    className='dashboard-content-icon' />
                                                : order.status === 'Refunded' ?
                                                    <img
                                                        src=''
                                                        alt='refunded-icon'
                                                        className='dashboard-content-icon' />
                                                    : null}
                                        <span>{order.status}</span>
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        <img
                                            src='{order.avatar}'
                                            className='dashboard-content-avatar'
                                            alt='/' />
                                        <span>Name hobe</span>
                                    </div>
                                </td>
                                <td><span>bus name  hobe</span></td>
                                <td><span>${order.amount}</span></td>
                            </tr>
                            {/* // )) */}
                            {/* } */}
                        </tbody>
                        // : null
                    }
                </table>


            </div>
        </div>
    );
};

export default Order;