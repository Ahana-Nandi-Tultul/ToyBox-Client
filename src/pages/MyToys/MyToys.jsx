import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import MyToyRow from './MyToyRow';
import Swal from 'sweetalert2';

const MyToys = () => {
    const {user} = useContext(AuthContext);
    const [toys, setToys] = useState([])
    useEffect(() => {
        const url = `http://localhost:3000/myToys?email=${user?.email}`
        fetch(url)
        .then(res => res.json())
        .then(data => setToys(data))

    },[user])

    const handleDeleteToy = id => {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(`http://localhost:3000/toys/${id}?email=${user?.email}`, {
            method: "DELETE"
          })
          .then(res => res.json())
          .then(data => {
            if(data.deletedCount > 0){
              console.log(data)
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
              const remaining = toys.filter(toy => toy._id !== id)
              setToys(remaining)
            }
          })
        }
      })
    }

    return (
        <div className='my-16 md:w-5/6 px-4 mx-auto'>
            <h2 className='text-4xl font-bold text-center mb-10'>My Toys: {user?.displayName || 'User'}</h2>
            <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>
                   
                  </th>
                  <th></th>
                  <th>Toy Name</th>
                  <th>Sub-Category</th>
                  <th>Price</th>
                  <th>Available Quantity</th>
                  <th>Rating</th>
                  <th>Description</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {
                  toys.map(toy => <MyToyRow
                  key={toy._id}
                  toy={toy}
                  handleDeleteToy = {handleDeleteToy}
                  ></MyToyRow>)
                }
              </tbody>
            </table>
            </div>
        </div>
    );
};
export default MyToys;
