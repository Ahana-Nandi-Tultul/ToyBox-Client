import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import { useNavigate, useParams } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating';

const ViewToy = () => {
    const {open, setOpen} = useContext(AuthContext);
    const [toy, setToy] = useState({});
    const idObj = useParams();
    const id = idObj.id;
    useEffect(() => {
        fetch(`http://localhost:3000/toy/${id}`)
        .then(res => res.json())
        .then(data => setToy(data[0]))
    },[])
    const navigate = useNavigate()
    const handleClose = () => {
        navigate(-1);
        setOpen(!open)
    }

    const {sellerName, sellerEmail, toyName, toyPrice, quantity, subCategory, ratting, photo, description} = toy;

    
    return (
        <div className={`fixed inset-0 z-50 ${open ? 'block' : 'hidden'} `}>
        <div className="fixed inset-0 bg-black opacity-50"></div>
        <div className="fixed inset-0 flex justify-center items-center">
            <div className="bg-white p-6 rounded shadow-lg w-5/6">
                <div className="card card-side flex flex-col md:flex-row bg-base-100 shadow-xl">
                    <figure><img src={photo} alt="Movie"/></figure>
                    <div className="card-body">
                        <h2 className="card-title">{toyName}</h2>
                        <p>Seller Name: {sellerName}</p>
                        <p>Seller Email: {sellerEmail}</p>
                        <hr />
                        <p>Price: {toyPrice}</p>
                        <p>Available Qunatity: {quantity}</p>
                        <p>Sub-Category: {subCategory}</p>
                        <p>Description: {description}</p>
                        <div className="card-actions md:flex justify-between">
                        <div className='flex items-center '>
                        <Rating
                            style={{ maxWidth: 100 }} 
                            value={Math.round(ratting)} 
                            readOnly />
                            <span className='ml-4'>{ratting}</span>
                            </div>
                            <button className="btn btn-primary" onClick={handleClose}> Close </button >
                        </div>
                    </div>
                </div>
           
            </div>
        </div>
    </div>
    );
};

export default ViewToy;