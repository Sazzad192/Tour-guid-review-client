import React from 'react';
import { MdLocationPin,MdAvTimer } from 'react-icons/md';


const ServiceCart = ({service}) => {
    const {_id,ServiceName,img,location,price, duration,ratting} = service;

    return (
        <div>
            <div className="card  lg:card-side h-72 bg-secondary-focus shadow-xl">
                <figure className='sm:max-w-none lg:max-w-xs'><img className='sm:min-h-16 lg:h-72' src={img} alt="Album"/></figure>
                <div className="card-body p-3 text-left">
                    <h2 className="card-title">{ServiceName}</h2>
                    <p className='text-lg '>Price: {price} BDT</p>
                    <p className='flex items-start'> <MdLocationPin className='text-xl'/> {location} </p>
                    <p className='flex items-center'> <MdAvTimer className='text-lg'/> {duration} days</p>
                    
                    <div className="card-actions justify-end">
                        <button className="btn btn-sm btn-outline">Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCart;