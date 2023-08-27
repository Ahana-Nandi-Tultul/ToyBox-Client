import React from 'react';
import about1 from '../../../assets/about1.jpg'
import about2 from '../../../assets/about2.jpg'
import about3 from '../../../assets/about3.jpg'

const About = () => {
    return (
        <div className='md:w-5/6 mx-auto my-32' data-aos="slide-up">
            <h2 className='text-center text-5xl font-bold mb-10'>About Us</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                <div className='md:flex justify-end items-center relative'>
                    <div>
                        <div className='h-64 md:w-64 border p-4 rounded-lg md:mb-20'>
                            <img src={about3} alt=""  className='h-full w-full rounded-lg'/>
                        </div>
                        <div className='h-64 md:w-64 border p-4 rounded-lg'>
                            <img src={about2} alt=""  className='h-full w-full rounded-lg'/>
                        </div>
                    </div>
                    <div className='h-64 md:w-64 border p-4 rounded-lg md:absolute md:left-20'>
                            <img src={about1} alt=""  className='h-full w-full rounded-lg'/>
                        </div>
                </div>
                <div className='space-y-6 px-4'>
                    <h2 className='text-3xl font-bold'>ToyBox</h2>
                    <p className='text-lg text-slate-600'>This is shop based on Miniature musical instruments.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Animi minima quidem ut nihil suscipit architecto inventore repudiandae placeat
                         illum enim.
                         Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti, temporibus.
                         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi doloremque voluptatem
                          a soluta molestiae animi, laborum quam unde quibusdam explicabo.</p>
                    <p className='text-lg text-slate-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, nemo cupiditate. 
                        Repellendus facilis minus quae?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus doloremque odit odio
                         corporis quas nam sed corrupti dolor accusantium, molestiae veniam atque, beatae numquam magni 
                         optio libero asperiores laboriosam natus?</p>
                </div>
            </div>
        </div>
    );
};

export default About;