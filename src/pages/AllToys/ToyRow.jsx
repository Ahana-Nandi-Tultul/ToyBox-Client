import React from 'react';

const ToyRow = ({toy}) => {
    const { sellerName, toyName, toyPrice, quantity, subCategory} = toy

    return (
        <tr>
            <td>{sellerName}</td>
            <td>{toyName}</td>
            <td>{subCategory}</td>
            <td>${toyPrice}</td>
            <td>{quantity}</td>
            <th>
            <button className="btn bg-[#f5b48e] text-dark btn-xs">details</button>
            </th>
        </tr>
    );
};

export default ToyRow;