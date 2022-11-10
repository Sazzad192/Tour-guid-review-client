import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import img4 from '../../pic/Banner/4.jpg'

const Header = () => {
    const ref = useRef(null)

    useEffect(()=>{ 
        const typed = new Typed(ref.current, {
            strings: ["Tour Guide", "Tour Consultant", "Hotel and Car rent"],
            typeSpeed: 200,
            backSpeed:200,
            loop: true
          });
    } ,[])

    

    return (
        <div className="hero h-[700px]" style={{ backgroundImage: `url(${img4})` }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
            <div className="w-3/4">
                <h1 className="mb-5 text-2xl lg:text-5xl font-bold" > Hello, I am Working as a <br /> <span ref={ref}></span> </h1>
                <p className="mb-5 ">Try to provide best service from my side. You do just relax, I will reduce your pain. No rent tension in tour. Relax and enjoy the tour</p>
            </div>
        </div>
        </div>
    );
};

export default Header;