import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useReservations from '../../hooks/useReservations';


const UpdateInfo = () => {
        const {updateId} = useParams();
       

        
        const updateInfo = useReservations(`https://aqueous-plains-79132.herokuapp.com/inventoryItems/${updateId}`)
        const quantity = updateInfo[0].quantity;
        console.log(quantity)
        console.log(updateInfo[0])
    
        const [reload, setReload] = useState(true)
       
        
        const handleDelivered = () => {
             const quantity = updateInfo[0].quantity;
             console.log(quantity)
             const updateQuantity = quantity - 1;
             const newQuantity = {quantity: updateQuantity};
             console.log(newQuantity);


            const url = `https://aqueous-plains-79132.herokuapp.com/inventoryItems/${updateId}`
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body:JSON.stringify(newQuantity),
            })
            .then(res=>res.json())
            .then(data=>{
                console.log('data are here',data);
               // alert('quantity-upload')
            })
            setReload(newQuantity) 
        }
 
        const handleRestock = (e) =>{
            e.preventDefault();

          const restock = e.target.number.value;
         console.log(restock)

        }

    return (
        <div className="d-flex justify-content-center mt-3">
             <div class="card" style={{width: "25rem"}}>
               <img style={{height: "20rem"}} src={updateInfo[0].picture} class="card-img-top" alt="..."/>
               <div class="card-body">
                 <h5 class="card-title">{updateInfo[0].book_name}</h5>
                 <p>In Stock: {reload}</p>
                 <p class="card-text">{updateInfo[0].description}</p>
                    <button onClick={handleDelivered} class="btn btn-primary">Delivered </button> 
                    <form onSubmit={handleRestock}> 
                        
                        <input type="submit" value="Restock" />
                    </form>
               </div>
             </div>
        </div>
    );
};

export default UpdateInfo;