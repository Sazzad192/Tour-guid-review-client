import React from 'react';
import img1 from '../../pic/person/person.jpg'


const About = () => {
    return (
        <div className='w-4/5 mx-auto my-28 text-center text-white'>
            <h2 className='text-4xl font-bold'>About me</h2>
            <div className='grid sm:grid-cols-1 lg:grid-cols-2 gap-4 my-10'>
                <img className='max-h-80 sm:w-5/6 lg:max-w-5/6' src={img1} alt="" />
                <div className='text-left'>
                    <h2 className='text-4xl'>This is K.M. SAZZADUL ISLAM</h2>
                    <h5 className='text-xl'>(Working as tour guide and tour consultancy)</h5>
                    <div className='pt-5'>
                        <p>We make many package for you. Specialist at Hill site tourist spots</p>
                        <ul style={{listStyleType: ondrop}}>
                            <li># Hello</li>
                            <li># Hello</li>
                            <li># Hello</li>
                            <li># Hello</li>
                            <li># Hello</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;