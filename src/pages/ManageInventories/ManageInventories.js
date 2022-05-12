import React from 'react';
import { Link } from 'react-router-dom';
import useReservations from '../../hooks/useReservations';

const ManageInventories = ({inventories}) => {

    const {_id, book_name, picture, quantity, value} =inventories;

   /*  const [items, setItems] = useReservations('https://aqueous-plains-79132.herokuapp.com/inventoryItems');
    
    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure to delete?');
        if(proceed){
            const url = `https://aqueous-plains-79132.herokuapp.com/${id}`;
            fetch(url, {
                method: "DELETE"
            })
            .then(res => res.json())
            .then(data => {
               // console.log(data);
                const remaining = items.filter(item => item._id !== id);
                setItems(remaining);
            })
        }
    } */
    return (
        <div className='container'>
        <div className="card shadow-sm p-3 mb-5 bg-body rounded">
             {/* <img src={picture} alt="" /> */}
            <div className="card-body">
                <h5 className="card-title">Name: {book_name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">Price: {value}</h6>
                <p className='card-text'>Quantity: {quantity}</p>
                <Link className="card-link" /* onClick={() => handleDelete(item._id)} */>Delete</Link>
            </div>
        </div>
    </div>
    );
};

export default ManageInventories;