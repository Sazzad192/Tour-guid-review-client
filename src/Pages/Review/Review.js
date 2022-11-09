import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthProvider/AuthProvider';
import ReviewEdit from './ReviewEdit';

const Review = () => {
    const {user} = useContext(AuthContext);
    const [review, setReview] = useState([]);

    useEffect(()=>{
        fetch(`http://localhost:5000/reviews?UserEmail=${user?.email}`)
        .then(res => res.json())
        .then(data => setReview(data))
    } ,[user?.email])

    const handelDelete= id =>{
        const proceed = window.confirm('Are you sure, You want to delete this review');
        if(proceed){
            fetch(`http://localhost:5000/review/${id}`,{
                method:'DELETE'
            })
            .then(res=> res.json())
            .then(data => {
                if(data.deletedCount > 0){
                    alert('delete successfully');
                    const reamining = review.filter(element => element._id !== id);
                    setReview(reamining);
                }
            })
        }
    }

    return (
        <div>
            <p className='my-5 text-xl font-bold text-center'>My Review which I gave</p>

            <div className="overflow-x-auto w-5/6 mx-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th> Delete </th>
                            <th>Your Identity</th>
                            <th>Review</th>
                            <th>Time</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            review.map(element => <ReviewEdit
                            key={element._id}
                            tableData = {element}
                            handelDelete={handelDelete}></ReviewEdit> )
                        }
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Review;