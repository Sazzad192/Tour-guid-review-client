import React from 'react';
import cox from '../../pic/tour/coxsbaza-development.jpg'
import kashmir from '../../pic/tour/Kashmir.jpg'
import ladakh from '../../pic/tour/Ladakh.jpg'
import { MdLocationPin,MdAvTimer } from 'react-icons/md';

const OutSide = () => {
    return (
        <div className='mb-11'>
            <h2 className='text-4xl font-bold text-center'>My coverage spots</h2>
            <h2 className='text-lg w-1/2 mx-auto text-center mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut placeat culpa quaerat dolor assumenda nihil vitae illo rerum, praesentium doloribus! Veritatis, sequi necessitatibus? Iste fuga, doloremque dolore voluptatem sit quaerat!</h2>

            <div className='grid w-11/12 mx-auto my-10 sm:grid-cols-1 lg:grid-cols-3 gap-4'>
                <div className="card w-10/12 bg-base-300 text-primary shadow-xl">
                    <figure><img src={cox} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Cox-Bazar</h2>
                    <p className='flex items-start'> <MdLocationPin className='text-xl'/> Bangladesh </p>
                    </div>
                </div>
                <div className="card w-10/12 bg-base-300 text-primary shadow-xl">
                    <figure><img src={kashmir} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Kashmir</h2>
                    <p className='flex items-start'> <MdLocationPin className='text-xl'/> India </p>
                    </div>
                </div>
                <div className="card w-10/12 bg-base-300 text-primary shadow-xl">
                    <figure><img src={ladakh} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">ladakh</h2>
                    <p className='flex items-start'> <MdLocationPin className='text-xl'/> India </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OutSide;