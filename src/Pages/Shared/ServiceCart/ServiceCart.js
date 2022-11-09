import React from 'react';
import { MdLocationPin,MdAvTimer } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';


const ServiceCart = ({service}) => {
    const {_id,ServiceName,img,location,price, duration,ServiceDetails} = service;
    
    return (
        <div>
            <div className="card  lg:card-side h-72 bg-secondary-focus shadow-xl">
                <PhotoProvider>
                    <PhotoView src={img}>
                        <figure className='sm:max-w-none lg:max-w-xs'><img className='sm:min-h-16 lg:h-72' src={img} alt="Album"/></figure>
                    </PhotoView>
                </PhotoProvider>
                
                <div className="card-body p-3 text-left">
                    <h2 className="card-title">{ServiceName}</h2>
                    <p className='text-lg '>Price: {price} BDT</p>
                    <p className='flex items-start text-justify'>{ServiceDetails.slice(0, 40)}... </p>

                    <p className='flex items-start'> <MdLocationPin className='text-xl'/> {location} </p>
                    <p className='flex items-center'> <MdAvTimer className='text-lg'/> {duration} days</p>
                    
                    <div className="card-actions justify-end">
                        <Link to={`/services/${_id}`} className="btn btn-sm btn-outline">Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCart;