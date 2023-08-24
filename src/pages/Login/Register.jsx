import React, { useContext, useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';

const Register = () => {
    useTitle('Sign Up');
    const {createUser, updateUserInfo} = useContext(AuthContext);
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const navigate = useNavigate();
    const handleRegister = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photo, email, password);

        const userInfo = {
            displayName : name,
            photoURL : photo
        }

        setError('')
        setSuccess('')

        createUser(email, password)
        .then(result => {
            updateUserInfo(userInfo)
            .then(() =>{
            })
            .catch(error =>{
                console.log(error);
                setError(error.message);
            })
            Swal.fire({
                title: 'Success!',
                text: 'You have created an account',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
              .then(result => {
                if (result.isConfirmed) {
                    navigate('/');
                }
              })
            console.log(result.user);
            form.reset();

        })
        .catch(error => {
            Swal.fire({
                title: 'Error!',
                text: `${error.message}`,
                icon: 'error',
                confirmButtonText: 'Cool'
              })
        })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content md:w-3/4 flex-col">
                <div className="text-center">
                <h1 className="text-5xl font-bold">Please Sign up!!!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 p-4">
                    <form onSubmit={handleRegister}>
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="name" name='name' className="input input-bordered" required/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" placeholder="Url" name='photo' className="input input-bordered" required/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" name='email' className="input input-bordered" required/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name='password' 
                                className="input input-bordered" required/>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-[#f5b48e] text-dark">Sign up</button>
                            </div>
                        <label className="label">
                        <p className="label-text-alt">Already Have an Account? Please 
                        <Link to="/login" className='text-primary link link-hover'> Login</Link></p>
                    </label>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;