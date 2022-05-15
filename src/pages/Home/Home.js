import React from 'react';
import { Link } from 'react-router-dom';
import useReservations from '../../hooks/useReservations';
import Banner from '../Banner/Banner';
import Inventory from '../Inventory/Inventory';
import img1 from '../../images/perspectives.jpg'
import img2 from '../../images/booktoscreen.jpg'
import img3 from '../../images/profiles.jpg'

const Home = () => {

    const reservationsData = useReservations('https://aqueous-plains-79132.herokuapp.com/inventoryItems');

    if(reservationsData[0].length){
          reservationsData[0].length=6;
      }
    return (
        <div>
            <Banner></Banner>
            <h2 className="text-center mt-4" style={{fontFamily: "Rockwell"}}>Inventory Items</h2>
            <div className="container">
              <div className="row">
                {
                  reservationsData[0]?.map(reservations=><Inventory key={reservations.id} reservations={reservations}></Inventory>)
                }
              </div>
              <Link to="/inventories">Manage Inventories</Link>
            </div>
            <div className="container mt-5" style={{borderTop:"2px solid black"}}></div>
            <div className="container mt-5">
                <div class="row">
                    <div class="col-lg-4 col-sm-12" style={{borderRight:"1px solid black"}}>
                        <img src={img1} alt="" srcset="" />
                        <p>PERSPECTIVES</p>
                        <h2>What Makes a Book ‘Age Appropriate’?</h2>
                    </div>
                    <div class="col-lg-4 col-sm-12" style={{borderRight:"1px solid black"}}>
                        <img src={img2} alt="" srcset="" />
                        <p>BOOK TO SCREEN</p>
                        <h2>‘Shining Girls’: Time-Travel Thriller Disappoints</h2>
                    </div>
                    <div class="col-lg-4 col-sm-12">
                        <img src={img3} alt="" srcset="" />
                        <p>PROFILES</p>
                        <h2>Posing Pablo Neruda’s ‘Questions’ to Young Readers</h2>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-between mt-5 w-100 h-100" style={{background:"rgba(233, 232, 230, 0.651)"}}>
                <div className="mt-5 mb-5 ms-5">
                    <h5>Didn’t find what you were looking for? OK, how about some</h5>
                    <textarea name="" id="" placeholder="Write your ideas..." cols="45" rows="3"></textarea>
                </div>
                <div className="mt-5 mb-5 me-5">
                    <button className="border-0 px-5 py-3 rounded">DISCOVER BOOKS</button>
                </div>
            </div>
        </div>
    );
};

export default Home;