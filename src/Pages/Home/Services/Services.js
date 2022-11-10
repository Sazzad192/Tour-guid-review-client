import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCart from '../../Shared/ServiceCart/ServiceCart';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res=> res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div className='w-10/12 mx-auto my-28 text-right text-white'>
            <h2 className='text-4xl font-bold text-center'>Services</h2>
            <h2 className='text-lg mx-auto text-center mt-3 sm:w-10/12 lg:w-1/2'>
            Try to provide best service from my side. You do just relax, I will reduce your pain. No rent tension in tour. Relax and enjoy the tour. Here are the package for you.
            </h2>
            <div className='grid sm:grid-cols-1 lg:grid-cols-3 gap-4 mt-9'>
                {
                    services.map(element => <ServiceCart
                    key={element._id}
                    service = {element}></ServiceCart>)
                }
            </div>
            <div className='mt-5'>
                <Link to={'/services'} className="link link-primary ">show more</Link>
            </div>
        </div>
    );
};

export default Services;