import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './User.css';
import axios from 'axios';
import URL from '../URL/URL'

export default function Signup() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const onSubmit = data => {
        sessionStorage.setItem('user', data.username);
        sessionStorage.setItem('pass', data.password);
        sessionStorage.setItem('mail', data.email);
        const signUpData = {
            userName: data.username,
            password: data.password,
            email: data.email
        };
        axios.post(URL+`/user/save`,signUpData).then((response)=>{
            console.log(response.data)
        })
        navigate('/home');
    };
    const password = watch('password');

    return (
        <div className='signup container'>
            <div className="container mt-5 d-flex justify-content-center">
            <form onSubmit={handleSubmit(onSubmit)} className="signup">
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">UserName</label>
                        <input 
                            type="text" 
                            className="form-control custom-input" 
                            id="username" 
                            {...register('username', { required: true, minLength: 6 })} 
                        />
                        {errors.username && <span className="text-danger">Username must be at least 6 characters long</span>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input 
                            type="password" 
                            className="form-control custom-input" 
                            id="password" 
                            {...register('password', { required: true, minLength: 8 })} 
                        />
                        {errors.password && <span className="text-danger">Password must be at least 8 characters long</span>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="confirmpass" className="form-label">Confirm Password</label>
                        <input 
                            type="password" 
                            className="form-control custom-input" 
                            id="confirmpass" 
                            {...register('confirmpass', {
                                validate: value => value === password || "Passwords do not match"
                            })} 
                        />
                        {errors.confirmpass && <span className="text-danger">{errors.confirmpass.message}</span>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input 
                            type="email" 
                            className="form-control custom-input" 
                            id="email" 
                            {...register('email', { required: true, pattern: /^\S+@\S+$/i })} 
                        />
                        {errors.email && <span className="text-danger">Invalid email address</span>}
                    </div>
                    <div className="mb-3 text-center">
                        <button type="submit" className="btn btn-primary w-100">Submit</button>
                    </div>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
}
