import React from 'react';
import { Link } from 'react-router-dom';
import useReservations from '../../hooks/useReservations';
import ManageInventories from '../ManageInventories/ManageInventories';

const Inventories = () => {

    const allInventories = useReservations('https://aqueous-plains-79132.herokuapp.com/inventoryItems')

    return (
        <div className='container'>
            {
               allInventories[0]?.map(inventories => <ManageInventories key={inventories.id} inventories={inventories}></ManageInventories>)
            }
            <Link to={'/addItem'} className="card-link">Add Item</Link>
        </div>
    );
};

export default Inventories;