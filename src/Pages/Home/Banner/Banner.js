import React from 'react';

const Banner = ({control}) => {

    const {image,pre,id,next} = control;

    console.log(control)

    return (
        <div id={`#slide${id}`} className="carousel-item relative w-full">

            <img src={image} className="w-full h-96" />

            <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                <button className="btn btn-primary">Get Started</button>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href={`#slide${pre}`} className="btn btn-circle">❮</a> 
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>
        </div> 
    );
};

export default Banner;