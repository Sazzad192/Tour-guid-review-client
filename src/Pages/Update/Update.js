import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {

    const user = useLoaderData();
    
    const handelUpdate= event =>{
        event.preventDefault()
        const textReview = event.target.review.value;
        console.log(textReview)
    }

    return (
        <div>
            <p>please update </p>

            <form onClick={handelUpdate}  className="card-body rounded-lg ">
                <input type="text" name='review' className="textarea textarea-info text-white w-full mb-3" defaultValue={user.reviewText} placeholder="Bio"></input>

                <button type='submit' className="btn btn-outline w-1/5 text-white">Update</button>
            </form>
        </div>
    );
};

export default Update;