import React from 'react';
import { FaUserAlt } from 'react-icons/fa';

const ReviewCard = ({data}) => {
    const {UserName, UserImg, reviewText,Time} = data;
    
    return (
        <tr>
            <td>
                <div className="avatar">
                    <div className="mask mask-squircle max-w-sm max-h-12">
                        {
                            UserImg ?
                            <img src={UserImg} alt="Avatar" /> :
                            <FaUserAlt/>
                        }
                    </div>
                </div>
            </td>
            <td>  
                <div className="font-bold">{UserName}</div>
            </td>
            <td>
                {reviewText}
            </td>
            <td>
                {Time}
            </td>  
        </tr>
    );
};

export default ReviewCard;