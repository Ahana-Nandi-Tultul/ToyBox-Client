import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import errorImg from '../../../assets/error.jpg';

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);
    return (
        <div id="error-page" className='text-center flex justify-center'>
            <div>

            <h1 className='text-5xl'>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <img src={errorImg} className=''/>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
            <Link to='/'><button className='btn bg-[#f5b48e] text-dark'>Return Home</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;