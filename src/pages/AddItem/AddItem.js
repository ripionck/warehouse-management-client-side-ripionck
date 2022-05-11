import React from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router';
import Register from '../Access/Register/Register';


const AddItem = () => {
 
    const { register, handleSubmit } = useForm();

    const navigate = useNavigate();
    const navigateToManageInventory = () => {
        navigate("/manageInventory");
    }

         
   /*  const onSubmit = data => {
       // console.log(data);
        const url = 'http://localhost:4000/manageInventory';
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=> res.json())
        .then(result =>{
            console.log(result);
        } )
    };  */


    return (
        <div className='w-50 mx-auto'>
            <h2>Please add a service</h2>
            <form className='d-flex flex-column addingForm' /* onSubmit={handleSubmit(onSubmit)} */>
                <input className='mb-2 rounded p-2' placeholder='Book Name' {...Register("book_name", { required: true, maxLength: 20 })} />
                <input className='mb-2 p-2' placeholder='URL' type="url" {...register("picture")} />
                <input className='mb-2 p-2' placeholder='Value' type="number" {...register("value")} />
                <input className='mb-2 p-2' placeholder='Quantity' type="number" {...register("quantity")} />
                <textarea className='mb-2 p-4 rounded' placeholder='Description' {...register("description")} />
                <input style={{fontFamily: 'Rockwell'}} className='w-50 mx-auto mt-2 py-2' type="submit" value="Add Item" />
            </form>
            <button onClick={navigateToManageInventory} >Go Back</button>
        </div>
      );
   };


export default AddItem;