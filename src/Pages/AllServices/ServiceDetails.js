import React, { useContext, useEffect, useState, useRef } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider/AuthProvider';
import { MdLocationPin,MdAvTimer } from 'react-icons/md';
import { FaUserAlt } from 'react-icons/fa';
import ReviewCard from '../Review/ReviewCard';

const ServiceDetails = () => {
    const serviceDetails = useLoaderData();
    const {_id,ServiceName,img,location,price, duration,ServiceDetails} = serviceDetails;

    const {user} = useContext(AuthContext);
    const [review, setReview] = useState([]);
    let today = new Date();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    useEffect(()=>{
        fetch(`https://review-server-sazzad192.vercel.app/review?ServiceId=${_id}`)
        .then(res => res.json())
        .then(data => setReview(data))
    },[])

    const handelSubmit = event =>{
        event.preventDefault()
        const form = event.target;
        const reviewText = form.review.value;

            const reviewData = {
                UserName: user?.displayName,
                UserImg: user?.photoURL,
                UserEmail: user?.email,
                Time: time,
                ServiceId: _id,
                reviewText
            }
            user?.uid ? 
            fetch('https://review-server-sazzad192.vercel.app/reviews',{
                method: 'POST',
                headers: {
                'Content-type': 'application/json',
                },
                body: JSON.stringify(reviewData)
            })
            .then(res => res.json())
            .then(data => {
                if(data.acknowledged){
                    alert('Review added successfully')
                    setReview([...review, reviewData])
                }
                else{
                    alert('Something went wrong! check again')
                }
            }): ref.current.click();
        }

        const ref = useRef(null)
        

    return (
        <div className='w-5/6 mx-auto my-10'>
            <div className="hero sm:w-4/5 lg:w-1/2 mx-auto h-[300px]" style={{ backgroundImage: `url(${img})` }}>
            </div>
            <h2 className='text-2xl text-center font-bold lg:text-4xl my-3'>{ServiceName}</h2>
            
            <div className='grid sm:grid-cols-1 lg:grid-cols-2'>
                <div className='border-2 p-5'>
                    <h2 className='text-xl lg:text-2xl my-3 flex justify-start items-center'> Price: {price} BDT</h2> <hr />
                    <h2 className='text-xl lg:text-2xl my-3 flex justify-start items-center'> Location: <MdLocationPin/> {location}</h2> <hr />
                    <h2 className='text-xl lg:text-2xl my-3 flex justify-start items-center'> Duration: <MdAvTimer/>  {duration} Days</h2>
                </div>
                <div className='border-2 p-5'>
                    <h2 className='text-xl lg:text-2xl my-3 flex justify-start items-center'> Details-</h2>
                    <p className='text-lg'>{ServiceDetails}</p>
                </div>
            </div>
            {/* 
            ----------------------------- Review form start ------------------------------------------------ 
            */}
            <div className='my-12 mx-auto bg-slate-300 rounded-lg sm:w-full lg:w-3/4 '>
                <form onSubmit={handelSubmit}  className="card-body border-r-2 rounded-lg sm:flex-col lg:flex-row items-center justify-start">

                    {/* The button to open modal */}
                        <label htmlFor="my-modal-3" ref={ref} className="btn hidden">open modal</label>
                        <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                        <div className="modal">
                            <div className="modal-box bg-red-300 text-black relative">
                                <label htmlFor="my-modal-3" className="btn btn-outline text-white btn-sm btn-circle outline-white absolute right-2 top-2">✕</label>
                                <h3 className="text-lg text-center font-bold">!!!!! Please Login first !!!!!</h3>
                                <p className="py-4">You've to login first. Click login button and I will redirect to login</p>
                                <div className="modal-action">
                                    <Link to={'/login'} className="btn btn-outline text-black">Login</Link>
                                </div>
                            </div>
                        </div>
                    {/* modal End  */}
                    
                    <div className='sm:w-1/5 lg:w-1/12'>
                        <div className="avatar online placeholder">
                            <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
                                {
                                    user?.photoURL ?
                                    <img src={user?.photoURL} alt="" /> :
                                    <FaUserAlt/>
                                }
                                
                            </div>
                        </div>
                    </div>
                    <input name='review' className="textarea textarea-info h-32 sm:w-full h-14 lg:w-1/2" placeholder="Bio"></input>
                    <div className=" sm:w-full mx-auto lg:w-1/4">
                        <button type='submit'  className="btn w-1/2 btn-secondary flex justify-center">Submit review</button>
                    </div>
                </form>
            </div> 
            

            {/* review cart  */}

            <div className="overflow-x-auto w-full mt-11">
                <table className="table mx-auto w-3/4">
                    <thead>
                        <tr>
                            <th>Picture</th>
                            <th>Name</th>
                            <th>Review-text</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            review.map(element => <ReviewCard
                            key={element._id}
                            data = {element}></ReviewCard>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ServiceDetails;