import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import './OriginalNavbar.css'
const OriginalNavbar = () => {

    const [user, loading, error] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
    }

    if (loading) {
        return <Loading></Loading>
    }
    return (
        <div>
            {/* Navbar design  */}
            <div className="navbar mt-2 lg:mt-14 py-5  rounded-lg">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabindex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        {/* <ul className="menu menu-horizontal p-0">
                            <li><Link to={'/'}>Home</Link></li>
                            <li><Link to={'/aboutSuttle'}>AboutUS</Link></li>
                            <li><Link to={'/services'}>Services</Link></li>

                            <li tabindex="0">
                                <a>
                                    Our bus
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                                </a>
                                <ul className="p-2 bg-white">
                                    <li><a>Our bus</a></li>
                                    <li><a>Bus Details</a></li>
                                </ul>
                            </li>

                            <li tabindex="0">
                                <a>
                                    Pages
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                                </a>
                                <ul className="p-2 bg-white">
                                    <li><a>Our bus</a></li>
                                    <li><a>Bus Details</a></li>
                                </ul>
                            </li>
                            <li><a>Contact US</a></li>
                            <li><Link to='dashboard'>DashBoard</Link></li>
                            <li tabindex="0">
                                {
                                    user ?
                                        <li onClick={logout} className='btn btn-ghost'>Sign OUt</li> :

                                        <Link to='/login'>Login</Link>
                                }
                            </li>



                        </ul> */}
                    </div>
                    <img className='navbarImg' src="https://templatekit.jegtheme.com/shuttle/wp-content/uploads/sites/300/2022/06/logo-black-new.png" alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={'/aboutSuttle'}>AboutUS</Link></li>
                        <li><Link to={'/services'}>Services</Link></li>

                        <li tabindex="0">
                            <a>
                                Our bus
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                            </a>
                            <ul className="p-2 bg-white">
                                <li><a>Our bus</a></li>
                                <li><a>Bus Details</a></li>
                            </ul>
                        </li>

                        <li tabindex="0">
                            <a>
                                Pages
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                            </a>
                            <ul className="p-2 bg-white">
                                <li><a>Our bus</a></li>
                                <li><a>Bus Details</a></li>
                            </ul>
                        </li>
                        <li><a>Contact US</a></li>
                        <li><Link to='dashboard'>DashBoard</Link></li>
                        <li tabindex="0">
                            {
                                user ?
                                    <li onClick={logout} className='btn btn-ghost'>Sign OUt</li> :

                                    <Link to='/login'>Login</Link>
                            }
                        </li>



                    </ul>
                </div>
                <div className="navbar-end">



                    <label tabindex="0" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="https://placeimg.com/80/80/people" />
                        </div>
                    </label>

                    {/* dashboard toggle  */}
                    <div className="flex-none lg:hidden justify-end">
                        <label for="dashboard-sidebar" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default OriginalNavbar;