import axios from 'axios';
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddItems = () => {
    const [user] = useAuthState(auth);
    //console.log(user)
    const email = user.email;
    const handleAddItem = e =>{
        e.preventDefault();
        const picture = e.target.picture.value;
        const book_name = e.target.book_name.value;
        const author_name = e.target.author_name.value;
        const quantity = e.target.quantity.value;
        const value = e.target.value.value;
        e.target.reset();
       // console.log(picture, book_name, author_name, quantity, value)
       const url = `https://aqueous-plains-79132.herokuapp.com/inventoryItems`;
       axios.post(url, {
           picture,
           book_name,
           author_name,
           quantity,
           value,
           email,
       })
       .then(res => console.log("post data: ", res))
       .catch(err => console.log(err));
       toast("Item Added Successfully!");
    };

    return (
        <div className="container w-50">
            <h2 className="text-center mt-5" style={{fontFamily: "Rockwell"}} >Add Item</h2>
            <Form onSubmit={handleAddItem}>
              <Form.Group className="mb-3" controlId="picture">
                 <Form.Label>Image URL</Form.Label>
                 <Form.Control type="url" required/>
               </Form.Group>
               <Form.Group className="mb-3" controlId="book_name">
                 <Form.Label>Book Name</Form.Label>
                 <Form.Control type="text" required/>
               </Form.Group>
               <Form.Group className="mb-3" controlId="author_name">
                 <Form.Label>Author Name</Form.Label>
                 <Form.Control type="text" required />
               </Form.Group>
               <Form.Group className="mb-3" controlId="quantity">
                 <Form.Label>Quantity</Form.Label>
                 <Form.Control type="number" required />
               </Form.Group>
               <Form.Group className="mb-3" controlId="value">
                 <Form.Label>Price</Form.Label>
                 <Form.Control type="number" required />
               </Form.Group>
               <div className="d-flex justify-content-center">
               <Button className="w-50" variant="primary" type="submit">Add Item</Button>
               </div>
            </Form>
        </div>
    );
};

export default AddItems;