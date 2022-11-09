import React from 'react';
import { CiEdit } from 'react-icons/ci';

const ReviewEdit = ({tableData}) => {

    const {UserImg, UserName, Time, reviewText} = tableData;
    
    return (
        <tr>
            <th>
                <label>
                <button className="btn btn-circle btn-sm btn-outline">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                        <img src={UserImg} alt="Avatar" />
                    </div>
                    </div>
                    <div>
                    <div className="font-bold">{UserName}</div>
                    </div>
                </div>
            </td>
            <td>
                {reviewText}
            </td>
            <td>{Time}</td>
            <th>
                <button className="btn btn-outline btn-sm">Edit <CiEdit/></button>
            </th>
        </tr>
    );
};

export default ReviewEdit;