import React from 'react';
import { Link } from 'react-router-dom';

const Inventory = ({reservations}) => {

    const {_id, picture, book_name, author_name, edition, description} = reservations;
    console.log(reservations)

    return (
        <div >
            <p>{book_name}</p>
            <div className="card shadow-sm p-3 mb-5 bg-body rounded">
                <div className="card-body">
                    <h5 className="card-title">Name: {book_name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted"> {author_name}</h6>
                    <p className='card-text'>{edition}</p>
                    <p className='card-text'>{description}</p>
                    <Link to={`/reservation/${_id}`} className="card-link">User Info</Link>
                </div>
            </div>
        </div>
    );
};

export default Inventory;