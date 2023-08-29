import React, { useEffect, useState } from 'react';

const Gallery = () => {
    const [toys, setToys] = useState([]);
    useEffect(() => {
        fetch(`https://toy-master-server.vercel.app/toys/gallery`)
        .then(res => res.json())
        .then(data =>setToys(data))
    },[])
    return (
        <div className='md:w-5/6 mx-auto mb-32' data-aos="slide-up">
            <h2 className='text-5xl font-bold text-center mb-10'>Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {
                    toys.map(toy => <div key={toy._id}>
                    <div className="avatar border border-1 rounded p-4 w-full h-full" data-aos="flip-right">
                    <figure className="p-4 border border-1 rounded-lg">
                        <img src={toy.photo} alt="Shoes" className="rounded-xl h-full w-full" />
                    </figure>
                    </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Gallery;