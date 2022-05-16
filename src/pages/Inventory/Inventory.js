import React from 'react';
import { Link } from 'react-router-dom';

const Inventory = ({reservations}) => {
    
    const {_id, picture, book_name,value, quantity, author_name, edition, description} = reservations;
    //console.log(reservations)

    return (
        <div className='col-lg-4 col-md-6 gy-4'>
        <div className="card shadow-sm p-3 mb-4 bg-body rounded">
            <div className="card-body">
                <img className="img-fluid" src={picture} alt="" />
                <h4 className="card-title mt-2" style={{fontFamily: "Rockwell"}}>{book_name}</h4>
                <h5 className="card-title">by <i>{author_name}</i></h5>
                <p className="card-title text-primary">{edition}</p>
                <h6 className="card-subtitle mb-2 text-muted">Price: {value}</h6>
                <p className='card-text'>Quantity: {quantity}</p>
                <p className='card-text'>{description}</p>
                <Link to={`/updateInfo/${_id}`} className="card-link" style={{fontFamily: "Rockwell"}}>Update Info</Link>
            </div>
        </div>
    </div>
    );
};

export default Inventory;