import React, { useContext } from 'react';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const ToyCard = ({content}) => {
    const {user, setOpen} = useContext(AuthContext);
    const {_id, toyName, toyPrice, ratting, photo} = content
    const notify = () => toast.error('You have to log in first to view details');
    const navigate = useNavigate();
    const location = useLocation()

    const handleNavigate = (_id) => {
        if(user){
            navigate(`/toy/${_id}`)
        }
        else{
            notify()
            console.log(location);
            setTimeout(() => navigate(`/toy/${_id}`), 1500);
        }
       
    }

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
                    <span className='ml-2'>{ratting}</span>
                    </div>
                
                
                <button onClick={() => handleNavigate(_id)} className="btn bg-[#f5b48e] text-dark">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default ToyCard;