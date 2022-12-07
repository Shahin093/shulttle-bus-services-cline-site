import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { AiFillHome } from 'react-icons/ai';
import { FaUserAlt } from 'react-icons/fa';
import { HiOutlineChartPie } from 'react-icons/hi';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';

const DashBoard = () => {
    const [user] = useAuthState(auth);

    return (
        <div class="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />

            <div class="drawer-content">
                {/* Page content here  */}
                <h2 className='text-3xl font-bold text-purple-500 mx-auto'>Welcome to your Dashboard</h2>
                <Outlet></Outlet>

            </div>
            <div class="drawer-side">
                <label for="dashboard-sidebar" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                    {/* Sidebar content here  */}
                    <li><Link to='/dashboard/mybooking'> <AiFillHome /> My Booking</Link></li>
                    <li><Link to='/dashboard/featuresinfo'> <FaUserAlt />FeatureInfo</Link></li>
                    <li><Link to='/dashboard/presenger'> <FaUserAlt />Presenger</Link></li>
                    <li><Link to='/dashboard/chart'> <HiOutlineChartPie />Chart</Link></li>
                    <li><Link to='/dashboard/review'>My Review</Link></li>
                    {/* {admin &&
                        <>
                            <li><Link to='/dashboard/users'>All Users</Link></li>
                            <li>
                                <Link to='/dashboard/addDoctor'>Add a Doctor</Link>
                            </li>
                            <li>
                                <Link to='/dashboard/manageDoctor'>Manage Doctor</Link>
                            </li>


                        </>} */}
                </ul>
            </div>
        </div>
    );
};

export default DashBoard;