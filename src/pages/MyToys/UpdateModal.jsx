import React from 'react';

const UpdateModal = ({isOpen, setIsOpen, oneToy, handleUpdateToy}) => {
    
    const {_id, toyName, toyPrice, quantity,  description} = oneToy;

    return (
        <div className={`fixed inset-0 z-50 ${isOpen ? 'block' : 'hidden'} `}>
        <div className="fixed inset-0 bg-black opacity-50"></div>
        <div className="fixed inset-0 flex justify-center items-center">
            <div className="bg-white p-6 rounded shadow-lg md:w-1/2 w-5/6">
                <h2 className='text-lg text-center font-semibold'>Update {toyName}</h2>
            <form onSubmit={() => handleUpdateToy(_id, event)}>
            <div className="form-control">
                        <label className="label">
                            <span className="label-text">Toy Price</span>
                        </label>
                        <label className="input-group">
                            <span>Price</span>
                            <input type="text" placeholder="price" name='toyPrice' defaultValue={toyPrice}
                             className="input input-bordered w-full"  required/>
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Toy Quantity</span>
                        </label>
                        <label className="input-group">
                            <span>Quantity</span>
                            <input type="text" placeholder="quantity" name='quantity' defaultValue={quantity}
                            className="input input-bordered w-full"  required/>
                        </label>
                </div>
                <div className="form-control mb-8">
                        <label className="label">
                            <span className="label-text">Toy Description</span>
                        </label>
                        <textarea placeholder="description"  name="description"
                        defaultValue={description}
                        className="textarea textarea-bordered textarea-lg w-full" ></textarea>
                </div>
                <div className='flex justify-between items-center'>
                    <input type='submit' className='btn bg-[#f5b48e] text-dark' value="Update"/>
                <button
                    className="btn btn-primary"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    Close
            </button>
                </div>
            </form>
           
            </div>
        </div>
    </div>
    );
};

export default UpdateModal;