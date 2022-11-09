import React, { useContext, useEffect, useRef, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { AuthContext } from '../context/AuthProvider/AuthProvider';
import ReviewEdit from './ReviewEdit';
import 'react-toastify/dist/ReactToastify.css';

const Review = () => {
    const {user} = useContext(AuthContext);
    const [review, setReview] = useState([]);
    const [update, setUpdate] = useState({});
    let today = new Date();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

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
                    toast.error('Deleted successfully', {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                        });
                    const reamining = review.filter(element => element._id !== id);
                    setReview(reamining);
                }
            })
        }
    }

    const handelEdit = id =>{
        ref.current.click();
        fetch(`http://localhost:5000/review/${id}`)
        .then(res => res.json())
        .then(data => setUpdate(data))
    }
    const ref = useRef(null)

    const handelUpdate= event =>{
        event.preventDefault()
        const textReview = event.target.review.value;
        console.log(textReview)
    }

    return (
        <div className='mb-52'>
            {/* The button to open modal */}
            <label htmlFor="my-modal-3" ref={ref} className="btn hidden">open modal</label>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box text-black relative">
                    <label htmlFor="my-modal-3" className="btn btn-outline text-white btn-sm btn-circle outline-white absolute right-2 top-2">✕</label>
                    <h3 className="text-lg text-center text-white font-bold">--- Edit Your Review ---</h3>
                    <div className="py-4">
                        <form onClick={handelUpdate}  className="card-body rounded-lg ">
                            <input type="text" name='review' className="textarea textarea-info text-white w-full mb-3" defaultValue={update.reviewText} placeholder="Bio"></input>

                            <button type='submit' className="btn btn-outline w-1/5">Update</button>
                        </form>
                    </div>
                </div>
            </div>
            {/* modal End  */}

            {
            review.length === 0 ?
            <p className='text-center text-2xl font-bold text-red-300'>No reviews were added Yet</p> :
            <div>
                <p className='my-5 text-xl font-bold text-center'>My Review</p>
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
                                handelDelete={handelDelete}
                                handelEdit={handelEdit}></ReviewEdit> )
                            }
                        </tbody>
                        <ToastContainer />
                    </table>
                </div>
            </div>
            }
        </div>
    );
};

export default Review;