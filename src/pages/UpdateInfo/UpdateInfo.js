import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ManageUpdate from '../ManageUpdate/ManageUpdate';


const UpdateInfo = () => {
        const {updateId} = useParams();
        const [singleItem, setSingleItem] = useState([]);
        
         useEffect(()=>{
             const url = `http://localhost:4000/inventoryItems/${updateId}`;
             axios.get(url)
             .then(res => setSingleItem(res.data));
         },[])
        
    return (
        <div>
            <ManageUpdate key={singleItem._id} singleItem={singleItem}></ManageUpdate>
        </div>
    );
};

export default UpdateInfo;