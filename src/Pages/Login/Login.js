import React from 'react';
import { useNavigate } from "react-router-dom";
import auth from '../../firebase.config';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = (data) => console.log(data);
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
    const handleEmailPasswordSignin = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        signInWithEmailAndPassword(email, password)
        console.log(email, password);
        event.target.reset();
    }
    if (user || user1) {
        console.log(user);
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
                                    value: /^[A-Za-z]+$/,
                                    message: 'Please provide valid password'
                                }
                            })}
                        />
                        <label class="label">
                            {errors.password?.type === 'required' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
                            {errors.password?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
                        </label>
                    </div>


                    <input className='w-full max-w-xs btn' value="Login" type="submit" />
                </form>



                <p className='my-2'>New to doctors portal? <span><button onClick={handleRegisterBtn} className='text-secondary' >Create new account.</button></span> </p>
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