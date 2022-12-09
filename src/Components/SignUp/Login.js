import React, { useEffect, useState } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const Login = () => {





    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);



    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = (data) => {
        const databody = {
            email: data.email,
            password: data.password
        };
        console.log(data);
        fetch('http://localhost:5000/api/v1/user/login', {
            method: 'POST',
            body: JSON.stringify(databody),
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(res => res.json())
            .then(data => {
                console.log(data?.data?.token);
                localStorage.setItem('accessToken', data?.data?.token)
            });
        console.log(data?.data?.token);

        signInWithEmailAndPassword(data.email, data.password);

    }

    let signInError;

    // const [token] = useToken(user || gUser);
    useEffect(() => {
        // if (user || gUser) {
        //     navigate(from, { replace: true });
        // }
        if (user || gUser) {
            navigate(from, { replace: true });
        }

    }, [user || gUser, from, navigate])

    if (gLoading || loading) {
        return <Loading></Loading>
    }
    if (gError || error) {
        signInError = <p className='text-red-500'><small>{gError?.message || error?.message}</small></p>
    }


    return (

        <div class="bg-gray-300 min-h-screen flex flex-col ">
            <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div class="bg-white px-6 py-8 rounded-lg shadow-md text-black w-full ">
                    <h1 class="mb-8 text-3xl text-center">Sign up</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is Required'
                                    },
                                    pattern: {
                                        // value: /[a-z0-9]+@[a-z]+\.[a-z]{2, 3}/,
                                        message: 'Provide a vilid Email'
                                    }
                                })
                                }
                            />
                            < label className="label" >
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label >
                        </div >
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="password"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'password is Required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Provide a vilid Password'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            </label>
                        </div>

                        {signInError}

                        <input className='btn btn-outline w-full  bg-primary text-center py-3 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1' type="submit" value="Login" />




                    </form >
                    <p><small>New to Doctors Portal <Link className='text-secondary' to='/signup'>Create New Account</Link></small></p>

                    <div className="divider">OR</div>
                    <button onClick={() => signInWithGoogle()} className="btn btn-outline w-full  bg-primary text-center py-3 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1">Continue with Google</button>
                </div >
            </div >
        </div >



        // <div className='flex h-screen justify-center items-center'>
        //     <div className="card w-96 bg-base-100 shadow-xl">
        //         <div className="card-body">
        //             <h2 className="text-2xl font-bold">Login</h2>
        //             <form onSubmit={handleSubmit(onSubmit)}>
        //                 <div className="form-control w-full max-w-xs">
        //                     <label className="label">
        //                         <span className="label-text">Email</span>
        //                     </label>
        //                     <input
        //                         type="email"
        //                         placeholder="Your Email"
        //                         className="input input-bordered w-full max-w-xs"
        //                         {...register("email", {
        //                             required: {
        //                                 value: true,
        //                                 message: 'Email is Required'
        //                             },
        //                             pattern: {
        //                                 // value: /[a-z0-9]+@[a-z]+\.[a-z]{2, 3}/,
        //                                 message: 'Provide a vilid Email'
        //                             }
        //                         })}
        //                     />
        //                     <label className="label">
        //                         {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
        //                         {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
        //                     </label>
        //                 </div>
        //                 <div className="form-control w-full max-w-xs">
        //                     <label className="label">
        //                         <span className="label-text">Password</span>
        //                     </label>
        //                     <input
        //                         type="password"
        //                         placeholder="password"
        //                         className="input input-bordered w-full max-w-xs"
        //                         {...register("password", {
        //                             required: {
        //                                 value: true,
        //                                 message: 'password is Required'
        //                             },
        //                             minLength: {
        //                                 value: 6,
        //                                 message: 'Provide a vilid Password'
        //                             }
        //                         })}
        //                     />
        //                     <label className="label">
        //                         {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
        //                         {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
        //                     </label>
        //                 </div>

        //                 {signInError}

        //                 <input className=' btn  w-full max-w-xs' type="submit" value="LOgin" />
        //             </form>
        //             <p><small>New to Doctors Portal <Link className='text-secondary' to='/signup'>Create New Account</Link></small></p>

        //             <div className="divider">OR</div>
        //             <button onClick={() => signInWithGoogle()} className="btn btn-outline">Continue with Google</button>
        //         </div>
        //     </div>
        // </div>
    );
};

export default Login;