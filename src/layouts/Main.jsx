import React from 'react';
import { Outlet } from 'react-router-dom';
import Navber from '../pages/shared/Navbar/Navber';
import Footer from '../pages/shared/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;