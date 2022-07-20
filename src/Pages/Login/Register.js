import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import auth from '../../firebase.config';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useUpdateProfile } from 'react-firebase-hooks/auth';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading';
import { async } from '@firebase/util';

const Register = () => {
    const { register, formState: { errors }, handleSubmit,reset } = useForm();
    const onSubmit = async(data) => {
       await createUserWithEmailAndPassword(data.email, data.password);
       await updateProfile({displayName:data.name});
       alert('Profile updated!');
       navigate('/appoinment');
       console.log(data);  
        reset();   
    }
    

    const navigate = useNavigate();
    const handleRegisterBtn = () => {
        navigate('/login');
    }
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const [
        signInWithGoogle,
        user,
        loading,
        error
    ] = useSignInWithGoogle(auth);
    const [
        createUserWithEmailAndPassword,
        user1,
        loading1,
        error1,
      ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});

    const handleGoogleSignin = () => {
        signInWithGoogle();
    }
    if (loading || loading1 || updating) {
        return <Loading></Loading>
    }
    let signInError;
    if (error || error1 || updateError) {
        signInError = <p className='text-red-500 mb-2'><small>{error?.message || error1?.message || updateError?.message}</small></p>
    }
    if (user || user1) {
        console.log(user || user1);
    }

    return (
        <div class="card w-96 bg-base-100 shadow-xl mx-auto">
            <div class="card-body">
                <h2 class="text-center text-xl text-secondary mt-5 font-bold">Sign Up</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Name</span>

                        </label>
                        <input
                            type="text"
                            placeholder="Your Name"
                            class="input input-bordered w-full max-w-xs"
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: 'Please type your name.'
                                }
                            })}
                        />
                        <label class="label">
                            {errors.name?.type === 'required' && <span class="label-text-alt text-red-500">{errors.name.message}</span>}
                           
                        </label>
                        <label class="label">
                            <span class="label-text">Email</span>

                        </label>
                        <input
                            type="email"
                            placeholder="Your Email"
                            class="input input-bordered w-full max-w-xs"
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: 'Please type email.'
                                },
                                pattern: {
                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    message: 'Please provide valid email'
                                }
                            })}
                        />
                        <label class="label">
                            {errors.email?.type === 'required' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
                            {errors.email?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
                        </label>
                        <label class="label">
                            <span class="label-text">Password</span>
                        </label>
                        <input
                            type="password"
                            placeholder="Your Password"
                            class="input input-bordered w-full max-w-xs"
                            {...register("password", {
                                required: {
                                    value: true,
                                    message: 'Please type Password.'
                                },
                                pattern: {
                                    value: /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
                                    message: 'Password min 8 letter password, with at least a symbol, upper and lower case letters and a number.'
                                }
                            })}
                        />
                        
                        <label class="label">
                            {errors.password?.type === 'required' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
                            {errors.password?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
                        </label>
                    </div>
                    {signInError}

                    <input className='w-full max-w-xs btn text-white' value="Sign Up" type="submit" />
                </form>



                <p className='my-2 text-center'><small>Already have an account? <span><button onClick={handleRegisterBtn} className='text-secondary' >Please login.</button></span></small> </p>
                <div class="flex flex-col w-full border-opacity-50">

                    <div class="divider">OR</div>

                </div>
                <button
                    onClick={handleGoogleSignin}
                    className='border hover:btn-secondary hover:text-white btn bg-white text-black '>Continue with google</button>
            </div>
        </div>
    );
};

export default Register;