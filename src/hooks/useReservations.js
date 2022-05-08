import React, { useEffect, useState } from 'react';

const useReservations = () => {
    const [reservations, setReservations] = useState([]);

    useEffect(()=>{
        fetch('https://aqueous-plains-79132.herokuapp.com/')
        .then(res => res.json())
        .then(data => setReservations(data));
    },[]);

    return[reservations, setReservations]
};

export default useReservations;