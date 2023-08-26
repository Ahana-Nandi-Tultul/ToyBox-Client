import React from 'react';

const ToyRow = ({toy, handleNavigate}) => {
    const {_id, sellerName, toyName, toyPrice, quantity, subCategory} = toy

    return (
        <tr data-aos="fade-left">
            <td>{sellerName}</td>
            <td>{toyName}</td>
            <td>{subCategory}</td>
            <td>${toyPrice}</td>
            <td>{quantity}</td>
            <th>
            <button onClick={() => handleNavigate(_id)} className="btn bg-[#f5b48e] text-dark btn-xs">details</button>
            </th>
        </tr>
    );
};

export default ToyRow;