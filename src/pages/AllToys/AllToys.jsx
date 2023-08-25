import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ToyRow from './ToyRow';
import { FaSearch } from "react-icons/fa";

const AllToys = () => {
    const allToys = useLoaderData()
    const [toys, setToys] = useState(allToys)

    const handleSearch = event => {
        event.preventDefault()
        const form = event.target;
        const search = form.search.value;

            fetch(`http://localhost:3000/toys?search=${search}`)
            .then(res => res.json())
            .then(data => setToys(data))
        
    }

    
    return (
        <div className='my-16 md:w-5/6 px-4 mx-auto'>
            <h2 className='text-4xl font-bold text-center mb-6'>All Toys: {toys.length}</h2>
            <div className="form-control mb-6">
                <form onSubmit={handleSearch}>
                    <div className="input-group">
                        <input type="text" name="search" placeholder="Toy Name" className="input input-bordered" />
                        <input className="btn" type="submit" value="Search" />
                    </div>
                </form>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                    <tr>
                        <th>Seller</th>
                        <th>Toy Name</th>
                        <th>Sub-Category</th>
                        <th>Price</th>
                        <th>Available Quantity</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {/* row 1 */}
                    {
                        toys.map(toy => <ToyRow key={toy._id}
                        toy={toy}
                        ></ToyRow>)
                    }
                    </tbody>
                    
                </table>
            </div>
        </div>
    );
};

export default AllToys;