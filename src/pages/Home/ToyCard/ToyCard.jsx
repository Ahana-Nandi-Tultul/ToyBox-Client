import React from 'react';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const ToyCard = ({content}) => {
    const { toyName, toyPrice, ratting, photo} = content

    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={photo} alt="Shoes" className="rounded-xl h-[300px]" />
            </figure>
            <div className="card-body ">
                <h2 className="card-title">{toyName}</h2>
                <p>Price: {toyPrice}</p>
                <div className="flex items-center w-full justify-between">
                    <div className='flex items-center '>
                        <Rating 
                    style={{ maxWidth: 100 }} 
                    value={Math.round(ratting)} 
                    readOnly />
                    <span className='mr-2'>{ratting}</span>
                    </div>
                
                <button className="btn bg-[#f5b48e] text-dark">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default ToyCard;