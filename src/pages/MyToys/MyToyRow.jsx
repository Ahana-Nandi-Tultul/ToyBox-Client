import React from 'react';

const MyToyRow = ({toy}) => {
    const {toyName, toyPrice, quantity, subCategory, photo, ratting, description} = toy;
    return (
        <tr>
            <th>
            
                <button className="btn btn-circle btn-outline">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            
            </th>
            <th>
                <div className="avatar">
                    <div className="w-24 rounded-full border border-1 p-2">
                        <img src={photo}/>
                    </div>
                </div>
            </th>
            <td>{toyName}</td>
            <td>{subCategory}</td>
            <td>{toyPrice}</td>
            <td>{quantity}</td>
            <td>{ratting}</td>
            <td>{description}</td>
            <th>
            <button className="btn bg-[#f5b48e] text-dark">Update</button>
            </th>
        </tr>
    );
};

export default MyToyRow;