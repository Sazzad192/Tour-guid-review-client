import React from 'react';

const ReviewCard = ({data}) => {
    const {UserName, UserImg, reviewText,Time} = data;
    
    return (
        <tr>
            <td>
                <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                        <img src={UserImg} alt="Avatar" />
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