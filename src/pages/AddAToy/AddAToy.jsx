import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import useTitle from '../../hooks/useTitle';

const AddAToy = () => {
    const {user} = useContext(AuthContext)
    // console.log(user);
    const subCategories = useLoaderData();
    useTitle('Add A Toy')
    const handleAddAToy = event => {
        event.preventDefault();
        const form = event.target;
        const sellerName = form.sellerName.value;
        const sellerEmail = form.sellerEmail.value;
        const toyName = form.toyName.value;
        const toyPrice = parseFloat(form.toyPrice.value);
        const quantity = form.quantity.value;
        const subCategory = form.subCategory.value;
        const ratting = form.ratting.value;
        const photo = form.photo.value;
        const description = form.description.value;

        // console.log(sellerName, sellerEmail, toyName, toyPrice, quantity, subCategory, ratting, photo, description)
       
        const toy = {
            sellerName, 
            sellerEmail, 
            toyName, 
            toyPrice,
            quantity, 
            subCategory, 
            ratting, 
            photo,
            description
        }

        Swal.fire({
            title: 'Are you sure?',
            text: "This toy will be added to your Toys.",
            icon: 'success',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, add it!'
          }).then((result) => {
            if (result.isConfirmed) {
            fetch('https://toy-master-server.vercel.app/toys', {
                method: 'POST',
                headers: {
                    "content-type" : "application/json",
                    authorization: `Bearer ${localStorage.getItem('toyBox-access-token')}`
                },
                body : JSON.stringify(toy)
            })
            .then(res => res.json())
            .then(data =>{
                // console.log(data)
                if(data.insertedId){
                    Swal.fire(
                        'Added!',
                        'This toy has been added.',
                        'success'
                      )
                    form.reset();
                }
            })
            .catch(error =>{
                Swal.fire({
                    title: 'Error!',
                    text: `${error.message}`,
                    icon: 'error',
                    confirmButtonText: 'Close'
                  })
            })
            }
          })
    
        
    }
    return (
        <div className='md:w-3/4 mx-auto my-8 border border-slate-800 p-10 rounded-lg' data-aos="fade-right"> 
            <h2 className='text-5xl text-center font-bold'> Add A toy !!!</h2>
            <form onSubmit={handleAddAToy} data-aos="fade-left">
                <div className='grid md:grid-cols-2 gap-4 my-4' >
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Seller Name</span>
                        </label>
                        <label className="input-group">
                            <span>Name</span>
                            <input type="text" defaultValue={user?.displayName || ''}  name='sellerName'
                            className="input input-bordered w-full" required/>
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Seller Email</span>
                        </label>
                        <label className="input-group">
                            <span>Email</span>
                            <input type="text" defaultValue={user?.email || ''} name='sellerEmail'
                            className="input input-bordered w-full"  required/>
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Toy Name</span>
                        </label>
                        <label className="input-group">
                            <span>Toy Name</span>
                            <input type="text" placeholder="toy name" name='toyName'
                            className="input input-bordered w-full"  required/>
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Toy Price</span>
                        </label>
                        <label className="input-group">
                            <span>Price</span>
                            <input type="text" placeholder="price" name='toyPrice'
                             className="input input-bordered w-full"  required/>
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Toy Quantity</span>
                        </label>
                        <label className="input-group">
                            <span>Quantity</span>
                            <input type="text" placeholder="quantity" name='quantity'
                            className="input input-bordered w-full"  required/>
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Sub Category</span>
                        </label>
                        <div className="input-group">
                        <span>Subcategory</span>
                            <select className="select select-bordered w-full" name='subCategory' required>
                            {
                                subCategories.map(sc =>  <option value={sc.name}
                                key={sc._id}
                                >{sc.name}</option>)
                            }
                            </select>
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Ratting</span>
                        </label>
                        <label className="input-group">
                            <span>Ratting</span>
                            <input type="text" placeholder="Ratting" name='ratting' 
                            className="input input-bordered w-full"  required/>
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Picture</span>
                        </label>
                        <label className="input-group">
                            <span>Picture</span>
                            <input type="text" placeholder="picture" name="photo" className="input input-bordered w-full"  required/>
                        </label>
                    </div>
                </div>
                <div className="form-control mb-8">
                        <label className="label">
                            <span className="label-text">Toy Description</span>
                        </label>
                        <textarea placeholder="description"  name="description"
                        className="textarea textarea-bordered textarea-lg w-full" ></textarea>
                </div>
                <input type="submit" value="Add" className='btn btn-block bg-[#f5b48e] text-dark' />
            </form>
        </div>
    );
};

export default AddAToy;