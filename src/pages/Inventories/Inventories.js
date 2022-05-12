
import { Link } from 'react-router-dom';
import useReservations from '../../hooks/useReservations';

const Inventories = () => {

    const allInventories = useReservations('https://aqueous-plains-79132.herokuapp.com/inventoryItems')
    //console.log(allInventories)
    const [inventoryItems, setInventoryItems] = allInventories;
    //console.log(inventories)
 
    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure to delete?');
        if(proceed){
            const url = `https://aqueous-plains-79132.herokuapp.com/inventoryItems/${id}`;
            fetch(url, {
                method: "DELETE"
            })
            .then(res => res.json())
            .then(data => {
               // console.log(data);
                const remaining = allInventories[0].filter(inventories => inventories._id !== id);
                setInventoryItems(remaining);
            })
        }
    } 

    return (
        <div className='container'>
            {
               inventoryItems?.map(inventories => <div key={inventories.id}>
                  <div className="d-flex mt-4">
                       <div>
                           <img style={{width:"60px", height:"100px"}} src={inventories.picture} alt="" />
                       </div>
                       <div className="ms-3">
                           <h6 className="fw-bold">{inventories.book_name}</h6>
                           <span>by <span style={{fontStyle:"italic"}}>{inventories.author_name}</span></span>
                           <br />
                           <span style={{fontStyle:"italic"}}>{inventories.edition}</span>
                           <br />
                           <span>price: {inventories.value}</span>
                       </div>
                   </div>
                    <div className="mt-4" style={{marginLeft:"15rem"}}>
                       <button   onClick={() => handleDelete(inventories._id)}   className="border-0 delete-btn"> <span className="ps-4 text-danger">Delete</span> <span className="hero-icon text-danger"><svg xmlns="http://www.w3.org/2000/svg"  width="75" height="20" viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
                         </svg></span></button>
                        <button className="ms-2 ps-4 border-0 add-btn text-success"><span>Add My Items</span><span className="hero-icon text-success"><svg xmlns="http://www.w3.org/2000/svg" width="75" height="20" viewBox="0 0 24 24" fill="currentColor">
                          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd" />
                          </svg></span></button>
                    </div>
                </div>)
            }
            <Link to={'/addItem'} className="card-link">Add Item</Link>
        </div>
    );
};

export default Inventories;