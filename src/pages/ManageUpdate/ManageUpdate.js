import axios from 'axios';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useParams } from 'react-router';

const ManageUpdate = ({singleItem}) => {
     const {updateId} = useParams();
     //console.log(updateId)
      const {book_name, quantity,picture} = singleItem;
      const [itemQuantity, setItemQuantity] = useState(quantity);
    // delivery handler
    const handleDelivered = () => {
        if(itemQuantity === 0){
            alert("Stock out!!");
        }else if(itemQuantity > 0) {
            setItemQuantity(itemQuantity - 1);
        }

         const url = `http://localhost:4000/inventoryItems/${updateId}`
        axios.put(url,{
            quantity: itemQuantity -1
        }).then(res => console.log(res))
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
        const url = `http://localhost:4000/inventoryItems/${updateId}`
        axios.put(url,{
            quantity: itemQuantity + restock
        }).then(res => console.log(res))

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
                   <Form.Group className="mt-3" controlId="restock">
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