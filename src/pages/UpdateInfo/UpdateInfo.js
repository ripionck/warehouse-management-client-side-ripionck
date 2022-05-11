import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import useReservations from '../../hooks/useReservations';


const UpdateInfo = () => {
        const {updateId} = useParams();
        
        const allInventories = useReservations(`https://aqueous-plains-79132.herokuapp.com/inventoryItems?id=${updateId}`)

       console.log(allInventories)
        /* const handleDelivered = () => {
            const updateQuantity = info.quantity - 1;
            const newQuantity = {quantity: updateQuantity, ...info.quantity};
            console.log(newQuantity);

            
          const url = `https://aqueous-plains-79132.herokuapp.com/${id}`
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
        }
 */
        const restockRef = useRef();
        const handleRestock = (e) =>{
            e.preventDefault();

           // const restock = e.target.number.value;

        }

    return (
        <div className="d-flex justify-content-center mt-3 bg-info">
             <div class="card" style={{width: "25rem"}}>
               <img style={{height: "20rem"}}  class="card-img-top" alt="..."/>
               <div class="card-body">
                 <h5 class="card-title">{}</h5>
                 <p>In Stock: {}</p>
                 <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <button class="btn btn-primary">Delivered </button> 
                    <form onSubmit={handleRestock}> 
                        <input ref={restockRef} type="number" name="restock" placeholder="number" id="" />
                        <input type="button" value="Restock" />
                    </form>
               </div>
             </div>
        </div>
    );
};

export default UpdateInfo;