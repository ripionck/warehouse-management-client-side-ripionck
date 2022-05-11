import React, { useEffect, useState } from 'react';

const useReservations = (url) => {
    const [reservations, setReservations] = useState([]);

    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data => setReservations(data));
    },[url]);

    return[reservations, setReservations]
};

export default useReservations;