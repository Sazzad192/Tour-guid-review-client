import React from 'react';
import img1 from '../../pic/Banner/0.jpg'
import img2 from '../../pic/Banner/1.png'
import img3 from '../../pic/Banner/3.png'
import img4 from '../../pic/Banner/4.jpg'
import Banner from './Banner/Banner';

const carouselDynamic = [
    {
        image: img1,
        pre:4,
        id:0,
        next:1
    },
    {
        image: img2,
        pre:0,
        id:1,
        next:3
    },
    {
        image: img3,
        pre:1,
        id:3,
        next:4
    },
    {
        image: img4,
        pre:3,
        id:4,
        next:0
    }
]

const Header = () => {

    return (
        // <div className="carousel w-full">
        //     {
        //         carouselDynamic.map(element => <Banner 
        //         key={element.id}
        //         control={element}></Banner>)
        //     }
            
        // </div>
        <div className="hero h-[700px]" style={{ backgroundImage: `url(${img4})` }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button className="btn btn-primary">Get Started</button>
            </div>
        </div>
        </div>
    );
};

export default Header;