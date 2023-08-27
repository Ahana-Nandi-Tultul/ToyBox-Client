import React from 'react';
import { FaCloudDownloadAlt, FaPhoneAlt, FaTruck } from "react-icons/fa";

const Services = () => {
    return (
        <div  className='container px-4 mx-auto py-10 bg-[#da895a] text-white rounded-lg my-20' data-aos="slide-up">
            <h2 className='text-center text-5xl font-bold mb-16'>Our Services</h2>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
                <div className='flex md:justify-center items-center gap-2 border-r-2'>
                    <div>
                        <FaTruck className='w-20 h-20'/>
                    </div>
                    <div>
                        <p className='text-lg font-semibold mb-0'>FAST SHIPPING</p>
                        <p className='mt-0'>Fast Shipping</p>
                    </div>
                </div>
                <div className='flex md:justify-center items-center gap-2 border-r-2'>
                    <div>
                        <FaCloudDownloadAlt className='w-20 h-20'/>
                    </div>
                    <div>
                        <p className='text-lg font-semibold  mb-0'>ONLINE PAYMENT</p>
                        <p className='mt-0'>Payment Method</p>
                    </div>
                </div>
                <div className='flex md:justify-center items-center gap-2 border-r-2'>
                    <div>
                        <FaPhoneAlt className='w-20 h-20'/>
                    </div>
                    <div>
                        <p className='text-lg font-semibold  mb-0'>24/7 SUPPORT</p>
                        <p className='mt-0'>Unlimited help desk.</p>
                    </div>
                </div>
                <div className='flex md:justify-center items-center gap-2 '>
                    <div>
                        <FaTruck className='w-20 h-20'/>
                    </div>
                    <div>
                        <p className='text-lg font-semibold  mb-0'>ON TIME DELIVERY</p>
                        <p className='mt-0'>On time Delivery.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;