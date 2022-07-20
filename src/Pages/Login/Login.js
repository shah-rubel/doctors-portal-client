import React from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import {useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import auth from '../../firebase.config';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading';

const Login = () => {
   
    const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(
        auth
    );
    const handleResetPassword = async () => {
        const email = getValues('email');
        if(email){
            await sendPasswordResetEmail(email);
            alert('Sent email');
        }
        else{
            alert('Pleas enter valid email.');
        }
        
    }
    const { register, formState: { errors }, handleSubmit, reset,getValues } = useForm();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const onSubmit = (data) => {
        signInWithEmailAndPassword(data.email, data.password);
        reset();
    }
    const navigate = useNavigate();
    const handleRegisterBtn = () => {
        navigate('/register');
    }
    const [
        signInWithGoogle,
        user,
        loading,
        error
    ] = useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword,
        user1,
        loading1,
        error1,
    ] = useSignInWithEmailAndPassword(auth);

    const handleGoogleSignin = () => {
        signInWithGoogle();
    }
    // const handleEmailPasswordSignin = event => {
    //     event.preventDefault();
    //     const email = event.target.email.value;
    //     const password = event.target.password.value;

    //     console.log(email, password);
    //     event.target.reset();
    // }
    if (loading || loading1 || sending) {
        return <Loading></Loading>
    }
    let signInError;
    if (error || error1 || resetError) {
        signInError = <p className='text-red-500 mb-2'><small>{error?.message || error1?.message || resetError?.message}</small></p>
    }
    if (user || user1) {
        navigate(from, { replace: true });
    }
    return (
        <div class="card w-96 bg-base-100 shadow-xl mx-auto">
            <div class="card-body">
                <h2 class="text-center text-xl text-secondary mt-5 font-bold">Login</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div class="form-control w-full max-w-xs">
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
                        <span><button onClick={handleResetPassword} className='text-secondary' >Forgot password?</button></span>
                        <label class="label">
                            {errors.password?.type === 'required' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
                            {errors.password?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
                        </label>
                    </div>
                    {signInError}

                    <input className='w-full max-w-xs btn text-white' value="Login" type="submit" />
                </form>



                <p className='my-2 text-center'><small>New to doctors portal? <span><button onClick={handleRegisterBtn} className='text-secondary' >Create new account.</button></span></small> </p>
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

export default Login;