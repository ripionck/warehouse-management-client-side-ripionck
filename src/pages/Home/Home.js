import React from 'react';
import { Link } from 'react-router-dom';
import useReservations from '../../hooks/useReservations';
import Inventory from '../Inventory/Inventory';

const Home = () => {

    const reservationsData = useReservations('https://aqueous-plains-79132.herokuapp.com/inventoryItems')

    if(reservationsData.length){
        //console.log(reservationsData)
        reservationsData.length = 6;
    }
    return (
        <div className="container">
            <div className="row">
              {
               reservationsData?.map(reservations=><Inventory key={reservations.id} reservations={reservations}></Inventory>)
               }
            </div>
            <Link to="/inventories">Manage Inventories</Link>
        </div>
    );
};

export default Home;