import React from 'react';
import banner1 from '../../../assets/banners/banner1.png'
import banner2 from '../../../assets/banners/banner2.png'
import banner3 from '../../../assets/banners/banner3.png'
import banner4 from '../../../assets/banners/banner4.png'

const Banner = () => {
    return (
        <div className="carousel w-full h-[700px]">
            <div id="slide1" className="carousel-item relative w-full" >
                    <img src={banner1} className="w-full" />
                    <div className='absolute bg-black-rgba w-full h-full text-white 
                    flex justify-center items-center p-4'>
                        <div className='md:w-1/2'>
                            <h2 className='md:text-6xl text-4xl font-extrabold mb-2'>Welcom to ToyBox Delights</h2>
                            <p>Get your favourite miniature musical instrument in ToyBox.
                                There you will find out Lorem ipsum dolor sit amet consectetur.
                                Your most of the avourite musical instruments you will find here in the miniature form.
                            </p>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 md:top-1/2 top-3/4">
                        <a href="#slide4" className="btn btn-circle mr-2">❮</a> 
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
            </div> 
            <div id="slide2" className="carousel-item relative w-full">
                <img src={banner2} className="w-full" />
                <div className='absolute bg-black-rgba w-full h-full text-white 
                    flex justify-center items-center p-4'>
                        <div className='md:w-1/2'>
                            <h2 className='md:text-6xl text-4xl font-extrabold mb-2'>Welcom to ToyBox Delights</h2>
                            <p>Get your favourite miniature musical instrument in ToyBox.
                                There you will find out Lorem ipsum dolor sit amet consectetur.
                                Your most of the avourite musical instruments you will find here in the miniature form.
                            </p>
                        </div>
                    </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5  md:top-1/2 top-3/4">
                <a href="#slide1" className="btn btn-circle mr-2">❮</a> 
                <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div> 
            <div id="slide3" className="carousel-item relative w-full">
                <img src={banner3} className="w-full" />
                <div className='absolute bg-black-rgba w-full h-full text-white 
                    flex justify-center items-center p-4'>
                        <div className='md:w-1/2'>
                            <h2 className='md:text-6xl text-4xl font-extrabold mb-2'>Welcom to ToyBox Delights</h2>
                            <p>Get your favourite miniature musical instrument in ToyBox.
                                There you will find out Lorem ipsum dolor sit amet consectetur.
                                Your most of the avourite musical instruments you will find here in the miniature form.
                            </p>
                        </div>
                    </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5  md:top-1/2 top-3/4">
                <a href="#slide2" className="btn btn-circle mr-2">❮</a> 
                <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div> 
            <div id="slide4" className="carousel-item relative w-full">
                <img src={banner4} className="w-full" />
                <div className='absolute bg-black-rgba w-full h-full text-white 
                    flex justify-center items-center p-4'>
                        <div className='md:w-1/2'>
                            <h2 className='md:text-6xl text-4xl font-extrabold mb-2'>Welcom to ToyBox Delights</h2>
                            <p>Get your favourite miniature musical instrument in ToyBox.
                                There you will find out Lorem ipsum dolor sit amet consectetur.
                                Your most of the avourite musical instruments you will find here in the miniature form.
                            </p>
                        </div>
                    </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5  md:top-1/2 top-3/4">
                <a href="#slide3" className="btn btn-circle mr-2">❮</a> 
                <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;