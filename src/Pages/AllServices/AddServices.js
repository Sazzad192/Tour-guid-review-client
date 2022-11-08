import React from 'react';

const AddServices = () => {

    const handelSubmit= event =>{
        event.preventDefault()
        const form = event.target;
    }

    return (
        <div className='mx-auto w-9/12 my-11 bg-base-200'>
            <form onSubmit={handelSubmit} className="card-body">
                <div className='grid sm:grid-cols-1 lg:grid-cols-2 gap-4'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Service Name</span>
                        </label>
                        <input type="text" placeholder="Service Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Image Link</span>
                        </label>
                        <input type="text" placeholder="Image" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" placeholder="Enter Price" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Ratting</span>
                        </label>
                        <input type="text" placeholder="Ratting out of 5" className="input input-bordered" />
                    </div>
                </div>
                <textarea className="textarea textarea-info mt-6 h-32" placeholder="Bio"></textarea>
                <div className="form-control mt-6">
                <button type='submit' className="btn btn-secondary">Login</button>
                </div>
            </form>
        </div>
    );
};

export default AddServices;