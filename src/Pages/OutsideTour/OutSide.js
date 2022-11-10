import React from 'react';
import cox from '../../pic/tour/coxsbaza-development.jpg'
import kashmir from '../../pic/tour/Kashmir.jpg'
import ladakh from '../../pic/tour/Ladakh.jpg'
import { MdLocationPin } from 'react-icons/md';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const OutSide = () => {
    return (
        <div className='mb-11 '>
            <h2 className='text-4xl font-bold text-center'>My coverage spots</h2>
            <h2 className='text-lg mx-auto text-center mt-3 sm:w-10/12 lg:w-1/2'>Out site of the hill tracking is. I was working as a tou guide at Cox-Bazar, Kashmit, kolkata, Ladakh, Sikim and many more.</h2>

            <div className='grid w-11/12 mx-auto my-10 sm:grid-cols-1 lg:grid-cols-3 gap-7'>
                <div className="card bg-base-300 text-primary shadow-xl">
                    <PhotoProvider>
                        <PhotoView src={cox}>
                            <figure><img src={cox} alt="cox" /></figure>
                        </PhotoView>
                    </PhotoProvider>
                    
                    <div className="card-body">
                        <h2 className="card-title">Cox-Bazar</h2>
                    <p className='flex items-start'> <MdLocationPin className='text-xl'/> Bangladesh </p>
                    </div>
                </div>
                <div className="card bg-base-300 text-primary shadow-xl">
                    <PhotoProvider>
                        <PhotoView src={kashmir}>
                        <figure><img src={kashmir} alt="Shoes" /></figure>
                        </PhotoView>
                    </PhotoProvider>
                    <div className="card-body">
                        <h2 className="card-title">Kashmir</h2>
                    <p className='flex items-start'> <MdLocationPin className='text-xl'/> India </p>
                    </div>
                </div>
                <div className="card bg-base-300 text-primary shadow-xl">
                    <PhotoProvider>
                        <PhotoView src={ladakh}>
                            <figure><img src={ladakh} alt="Shoes" /></figure>
                        </PhotoView>
                    </PhotoProvider>
                    
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