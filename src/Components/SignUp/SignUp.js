import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Loading from '../Shared/Loading';


const SignUp = () => {

    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    // google login
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

    // email and password login
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    // form hooks 
    const { register, formState: { errors }, handleSubmit } = useForm();


    // use location 
    const us = (user || gUser);
    useEffect(() => {
        if (us) {
            navigate(from, { replace: true });
        }
    },
        [from, navigate, us]
    );

    // loading 
    if (gLoading || loading) {
        return <Loading></Loading>
    }

    // sign IN Error 
    let signInError;
    if (gError || error) {
        signInError = <p className='text-red-500'><small>{gError?.message || error?.message}</small></p>
    };



    // onsubmit 
    const onSubmit = async data => {
        // console.log(data.email);

        const bus_name = "ANA";
        const email = data.email;
        const firstName = data.firstName;
        const lastName = data.lastName;
        const password = data.password;
        const confirmPassword = data.confirm_password;
        const databody = {
            bus_name, email, firstName, lastName, password, confirmPassword
        };

        fetch('http://localhost:5000/api/v1/user/signup', {
            method: 'POST',
            body: JSON.stringify(databody),
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(res => res.json())
            .then(data => console.log(data));
        // console.log(data);
        // 
        // await updateProfile({ displayName: data.name });
        // console.log('update done');
        // navigate('/appointment');
        await createUserWithEmailAndPassword(data.email, data.password);

    }


    return (
        <div className='flex  justify-center items-center'>
            <div className="card w-9/12 bg-gray-200 shadow-xl">
                <div className="card-body">
                    <h2 className="text-2xl font-bold">Sign Up</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
                            {/* first name  */}
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Your First Name</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="First Name"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("firstName", {
                                        required: {
                                            value: true,
                                            message: 'First name is Required'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.firstName?.type === 'required' && <span className="label-text-alt text-red-500">{errors.firstName.message}</span>}
                                </label>
                            </div>
                            {/* last name */}
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Last Name</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Your Last Name"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("lastName", {
                                        required: {
                                            value: true,
                                            message: 'Last name is Required'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.lastName?.type === 'required' && <span className="label-text-alt text-red-500">{errors.lastName.message}</span>}
                                </label>
                            </div>
                            {/* Email  */}
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
                                            message: 'name is Required'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                </label>
                            </div>
                            {/* ROle  */}
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Role</span>
                                </label>

                                <select name="select" className="input input-bordered w-full max-w-xs" required>
                                    <option value="">None</option>
                                    <option value="user">user</option>
                                    <option value="admin">admin</option>
                                    <option value="store-manager">store-manager</option>
                                </select>

                                <label className="label">

                                </label>
                            </div>
                            {/* password  */}
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
                            {/* confirm Password  */}
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input
                                    type="Cpassword"
                                    placeholder="confirm password"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("confirm_password", {
                                        required: {
                                            value: true,
                                            message: 'password is Required'
                                        },
                                        minLength: {
                                            value: 6,
                                            message: 'Provide a valid confirm  Password'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.confirm_password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.confirm_password.message}</span>}
                                    {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.confirm_password.message}</span>}
                                </label>
                            </div>

                        </div>

                        {signInError}

                        <input className=' btn  w-full max-w-xs' type="submit" value="Sign Up" />
                    </form>
                    <p><small>Already have an account<Link className='text-secondary' to='/login'>Please Login</Link></small></p>

                    <div className="divider">OR</div>
                    <button onClick={() => signInWithGoogle()} className="btn btn-outline lg:w-5/12">Continue with Google</button>
                </div>
            </div >
        </div >
    );
};

export default SignUp;