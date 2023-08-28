import React, { useContext, useState } from 'react';
import logo from '../../../assets/logo.png';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';
import { Tooltip } from 'react-tooltip'

const Navber = () => {
    const {user, logout} = useContext(AuthContext);
    const [openNav, isOpenNav] = useState(false)
    // console.log(user);
    const handleLogout = () => {
        logout()
        .then(() => {
            localStorage.removeItem('toyBox-access-token')
        })
        .catch(error => console.log(error.message))

    }
    const navLink = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/allToys">All Toys</Link></li>
        {
            user && <>
             <li><Link to="/myToys">My Toys</Link></li>
            <li><Link to="/addAToy">Add A Toy</Link></li>
            </>
        }
        <li><Link to="/blog">Blog</Link></li>
    </>
    return (
        <div className="navbar bg-base-100 md:px-10">
            <div className="navbar-start flex">
                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden" onClick={() => isOpenNav(!openNav)} >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className={`menu menu-sm dropdown-content mt-3 z-[1] p-2 
                shadow bg-base-100 rounded-box w-52 flex lg:hidden ${openNav ? 'block' : 'hidden'}`}>
                    {navLink}
                    <div className="navbar-end menu menu-sm">
                    {
                    user ? <>
                    <div className="avatar mr-4 mb-2">
                        <div className="w-10 h-10 rounded-full ring ring-[#f5b48e] ring-offset-2">
                            {
                                user?.photoURL ? 
                                <img src={user?.photoURL} 
                                className='me-2 bg-dark text-white' 
                                data-tooltip-id="my-tooltip" data-tooltip-content={user?.displayName}/>
                                :<FaUserCircle data-tooltip-content={user?.displayName} className='h-full'/>
                            }
                            <Tooltip id="my-tooltip" className='bg-black text-white z-20' />

                        </div>
                    </div>
                    <button className='btn' onClick={handleLogout}>Logout</button>         
                    </> 
                    :<Link to="/login" className="btn">Login</Link>
                }
                
            </div>
                </ul>
                </div>
                <img src={logo} alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLink}
                </ul>
            </div>
            <div className="navbar-end hidden lg:flex">
                {
                    user ? <>
                    <div className="avatar mr-4">
                        <div className="w-10 h-10 rounded-full ring ring-[#f5b48e] ring-offset-2">
                            {
                                user?.photoURL ? 
                                <img src={user?.photoURL} 
                                className='me-2 bg-dark text-white' 
                                data-tooltip-id="my-tooltip" data-tooltip-content={user?.displayName}/>
                                :<FaUserCircle data-tooltip-content={user?.displayName}/>
                            }
                           <Tooltip id="my-tooltip" className='bg-black text-white z-20' />
                        </div>
                    </div>
                    <button className='btn' onClick={handleLogout}>Logout</button>         
                    </> 
                    :<Link to="/login" className="btn">Login</Link>
                }
                
            </div>
        </div>
    );
};

export default Navber;