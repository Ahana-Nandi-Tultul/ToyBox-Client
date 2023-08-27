import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import MyToyRow from './MyToyRow';
import Swal from 'sweetalert2';
import UpdateModal from './UpdateModal';
import useTitle from '../../hooks/useTitle';

const MyToys = () => {
    const {user} = useContext(AuthContext);
    const [toys, setToys] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [oneToy, setOneToy] = useState({})
    useTitle('MyToys')
    useEffect(() => {
        const url = `http://localhost:3000/myToys?email=${user?.email}`
        fetch(url, {
          method: "GET",
          headers: {
            authorization: `Bearer ${localStorage.getItem('toyBox-access-token')}`
          }
        })
        .then(res => res.json())
        .then(data => setToys(data))

    },[user, toys])

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
            method: "DELETE",
            headers: {
              authorization: `Bearer ${localStorage.getItem('toyBox-access-token')}`
            }

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

    const handleUpdateModalFetch = id => {
      setIsOpen(!isOpen)
      const toy = toys.find(toy => toy._id === id)
      setOneToy(toy)

    }

    const handleUpdateToy = (id, event) => {
      event.preventDefault();
      
      const form = event.target;
      const toyPrice = form.toyPrice.value;
      const quantity = form.quantity.value;
      const description = form.description.value;

      console.log(toyPrice, quantity, description);
      const updateToy = {toyPrice, quantity, description};
      fetch(`http://localhost:3000/toys/${id}?email=${user?.email}`, {
        method: "PATCH",
        headers: {
          "content-type" : "application/json",
          authorization: `Bearer ${localStorage.getItem('toyBox-access-token')}`
        },
        body: JSON.stringify(updateToy)
      })
      .then(res => res.json())
      .then(data => {
        if(data.modifiedCount > 0){
          // console.log(data)
          Swal.fire({
            title: 'Success!',
            text: 'Your Toy-info is updated',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
          
          const remaining = toys.filter(toy => toy._id !== id)
          const updated = toys.find(toy => toy._id === id);
          updated.toyPrice = toyPrice;
          updated.quantity = quantity;
          updateToy.description = description;
          const newToys = [updated, ...remaining]
          setToys(newToys)
          form.reset();
          setIsOpen(!isOpen);
        }
      })
    }
    // console.log(toys)
    return (
        <div className='my-16 md:w-5/6 px-4 mx-auto' data-aos="fade-right">
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
                  handleUpdateModalFetch = {handleUpdateModalFetch}
                  ></MyToyRow>)
                }
              </tbody>
            </table>
            <UpdateModal 
            isOpen ={isOpen}
            setIsOpen = {setIsOpen}
            oneToy = {oneToy}
            handleUpdateToy = {handleUpdateToy}
            ></UpdateModal>
            </div>
        </div>
    );
};
export default MyToys;
