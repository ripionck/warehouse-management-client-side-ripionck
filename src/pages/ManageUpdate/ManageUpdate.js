import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const ManageUpdate = ({singleItem}) => {
      const {book_name, quantity,picture} = singleItem;
      const [itemQuantity, setItemQuantity] = useState(quantity);
    // delivery handler
    const handleDelivered = () => {
        if(itemQuantity === 0){
            alert("Stock out!!");
        }else if(itemQuantity > 0) {
            setItemQuantity(itemQuantity - 1);
        }
/* 
         const url = `https://aqueous-plains-79132.herokuapp.com/inventoryItems/${updateId}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body:JSON.stringify(itemQuantity),
        })
        .then(res=>res.json())
        .then(data=>{
            console.log('data are here',data);
           // alert('quantity-upload')
        })   */
    }

    //restock handler
    const restockHandler = e => {
        e.preventDefault();
        const restock = parseInt(e.target.restock.value);
        if(restock === 0 || restock <= 0){
            alert("Please input valid number!")
        } else{
            setItemQuantity(restock + itemQuantity)
        }

    }
    return (
        <div className="d-flex justify-content-center mt-3">
        <div class="card" style={{width: "25rem"}}>
          <img style={{height: "20rem"}} src={picture} class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title">{book_name}</h5>
            <p>In Stock: {itemQuantity}</p>
            <p class="card-text"></p>
               <button onClick={handleDelivered} class="btn btn-primary">Delivered </button> 
               <Form onSubmit={restockHandler}> 
                   <Form.Group className="mb-3" controlId="restock">
                       <Form.Control type="number" placeholder="Enter Number"></Form.Control>
                       <Button type="submit">Restock</Button>
                   </Form.Group>
               </Form>
          </div>
        </div>
   </div>
    );
};

export default ManageUpdate;