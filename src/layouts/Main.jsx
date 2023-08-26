import React from 'react';
import { Outlet } from 'react-router-dom';
import Navber from '../pages/shared/Navbar/Navber';
import Footer from '../pages/shared/Footer/Footer';
import { Toaster } from 'react-hot-toast';

const Main = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
            <Toaster />
        </div>
    );
};

export default Main;