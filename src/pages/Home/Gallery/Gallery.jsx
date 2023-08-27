import React, { useEffect, useState } from 'react';

const Gallery = () => {
    const [toys, setToys] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:3000/toys`)
        .then(res => res.json())
        .then(data =>setToys(data))
    },[])
    return (
        <div className='md:w-5/6 mx-auto my-16' data-aos="slide-up">
            <h2 className='text-4xl font-bold text-center mb-10'>Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {
                    toys.map(toy => <div key={toy._id}>
                    <div className="avatar border border-1 rounded p-4" data-aos="flip-right">
                        <div className="rounded">
                            <img src={toy.photo} className='w-full h-full border border-1 rounded' />
                        </div>
                    </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Gallery;