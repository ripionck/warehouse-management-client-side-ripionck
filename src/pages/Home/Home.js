import React from 'react';
import { Link } from 'react-router-dom';
import useReservations from '../../hooks/useReservations';
import Inventory from '../Inventory/Inventory';

const Home = () => {

    const reservationsData = useReservations('https://aqueous-plains-79132.herokuapp.com/inventoryItems');

    if(reservationsData[0].length){
          reservationsData[0].length=6;
      }
    return (
        <div className="container">
            <h2>total: {reservationsData[0].length}</h2>
            <div className="row">
              {
               reservationsData[0]?.map(reservations=><Inventory key={reservations.id} reservations={reservations}></Inventory>)
               }
            </div>
            <Link to="/inventories">Manage Inventories</Link>
        </div>
    );
};

export default Home;