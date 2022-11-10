import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../hook/useTitle';
import ServiceCart from '../Shared/ServiceCart/ServiceCart';

const ServicesAll = () => {
    const services = useLoaderData();
    useTitle('Services')
    return (
        <div className='w-10/12 mx-auto my-28 text-right'>
            <h2 className='text-4xl font-bold text-center'>Services</h2>
            
            <div className='grid sm:grid-cols-1 lg:grid-cols-2 gap-4 mt-9'>
            {
                services.map(element => <ServiceCart
                key={element._id}
                service={element}></ServiceCart>)
            }
            </div>
        </div>
    );
};

export default ServicesAll;