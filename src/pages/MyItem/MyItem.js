import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router';
import auth from '../../firebase.init';
import useReservations from '../../hooks/useReservations';


const MyItem = () => {
    const {updateId} = useParams();
    //console.log(updateId)
    const item = useReservations(`https://aqueous-plains-79132.herokuapp.com/inventoryItems/${updateId}`)
    console.log(item)

    const [user] = useAuthState(auth);

    const handleMyItem = e => {
        e.preventDefault();
        const itemInfo = {
            email: user.email,
            book:item[0].book_name,
            updateId: updateId,
            address: e.target.address.value,
            phone: e.target.phone.value 
        }
        axios.post('https://aqueous-plains-79132.herokuapp.com/myItem',itemInfo)
        .then(res =>{
            const {data} = res;
            if(data.insertedId){
                alert('Added to my items!!')
                e.target.reset();
            }
        })
    }
    
   
    return (
        <div className="w-50 mx-auto">
            <h3>My Item: {item[0].book_name}</h3>
            <form onSubmit={handleMyItem} className="w-50 mx-auto mt-5">
                <input className='w-100 mb-2 py-2' type="text" value={user?.displayName} name="name" placeholder='name' required readOnly disabled/>
                <br />
                <input className='w-100 mb-2 py-2' type="email" value={user?.email} name="email" placeholder='email' required readOnly disabled />
                <br />
                <input className='w-100 mb-2 py-2' type="text"  value={item[0].book_name}  name="book" placeholder='book' required readOnly />
                <br />
                <input className='w-100 mb-2 py-2' type="text" name="address" placeholder='address' autoComplete='off' required />
                <br />
                <input className='w-100 mb-2 py-2' type="text" name="phone" placeholder='phone' required />
                <br />
                <input className="btn btn-primary w-50 ms-5" type="submit" value="Confirm" />
            </form>
        </div>
    );
};

export default MyItem;