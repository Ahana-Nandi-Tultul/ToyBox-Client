import React from 'react';
import { FaGoogle } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Login = () => {
    
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center">
                <h1 className="text-5xl font-bold">Please Login!!!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 p-4">
                    <form>
                        <div className="card-body">
                            <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" name='email' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name='password' className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                            <button className="btn bg-[#f5b48e] text-dark">Login</button>
                            </div>
                        <label className="label">
                        <p href="#" className="label-text-alt">New to ToyBox? Please 
                        <Link to="/register" className='text-primary link link-hover'> Sign Up</Link></p>
                    </label>
                        </div>
                    </form>
                    <div className="divider">OR</div>
                    <div className="flex justify-center">
                        <button className="btn btn-circle btn-outline">
                            <FaGoogle/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;