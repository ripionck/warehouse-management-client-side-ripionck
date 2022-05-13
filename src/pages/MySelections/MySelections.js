import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MySelections = () => {
    const [user] = useAuthState(auth);
    const [myItems, setMyItems] = useState([]);
    console.log(myItems)

     useEffect(()=>{
        const getMyItems = async()=>{
            const email = user?.email;
            const url = `https://aqueous-plains-79132.herokuapp.com/myItems?email=${email}`;
            axios.get(url)
            .then(res => setMyItems(res.data))
        }
        getMyItems();
     },[user])

    return (
        <div>
            <h2>My Items: {myItems.length}</h2>
            {
                myItems.map(items => <div key={items._id}>
                    <p>{items.email} : {items.book}</p>
                </div>)
            }
        </div>
    );
};

export default MySelections;