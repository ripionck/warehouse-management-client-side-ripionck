import React from 'react';
import { Link } from 'react-router-dom';

const ManageInventories = ({inventories}) => {

    const {_id, book_name, picture, quantity, value} =inventories;
    return (
        <div className='container'>
        <div className="card shadow-sm p-3 mb-5 bg-body rounded">
             {/* <img src={picture} alt="" /> */}
            <div className="card-body">
                <h5 className="card-title">Name: {book_name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">Price: {value}</h6>
                <p className='card-text'>Quantity: {quantity}</p>
                <Link to={`/user/${_id}`} className="card-link">Delete</Link>
            </div>
        </div>
    </div>
    );
};

export default ManageInventories;