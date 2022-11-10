import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import useTitle from '../../hook/useTitle';

const AddServices = () => {
    useTitle('Add-services')

    const handelSubmit= event =>{
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const img = form.image.value;
        const price = form.price.value;
        const ratting = form.ratting.value;
        const details = form.details.value;
        const location = form.location.value;
        const duration = form.duration.value;

        const services ={
            ServiceName: name,
            img,
            price,
            location,
            duration,
            ratting,
            ServiceDetails: details
        }

        fetch(`http://localhost:5000/services`, {
            method: 'POST',
            headers: {
            'Content-type': 'application/json',
            },
            body: JSON.stringify(services)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                toast.success('Added Successfully', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    });
                    form.reset()
            }
            else{
                alert('Something went wrong! check again')
            }
        })
    }

    return (
        <div className='mx-auto w-9/12 my-11 bg-base-200'>
            <form onSubmit={handelSubmit} className="card-body">
                <div className='grid sm:grid-cols-1 lg:grid-cols-2 gap-4'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Service Name</span>
                        </label>
                        <input type="text" name='name' placeholder="Service Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Image Link</span>
                        </label>
                        <input type="text" name='image' placeholder="Image" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" name='price' placeholder="Enter Price" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Location</span>
                        </label>
                        <input type="text" name='location' placeholder="Location" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Duration</span>
                        </label>
                        <input type="text" name='duration' placeholder="Tour Duration" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Ratting</span>
                        </label>
                        <input type="text" name='ratting' placeholder="Ratting out of 5" className="input input-bordered" />
                    </div>
                </div>
                <textarea name='details' className="textarea textarea-info mt-6 h-32" placeholder="Bio"></textarea>
                <div className="form-control mt-6">
                    <button type='submit' className="btn btn-secondary">Add service</button>
                </div>
            </form>
            <ToastContainer />
        </div>
    );
};

export default AddServices;