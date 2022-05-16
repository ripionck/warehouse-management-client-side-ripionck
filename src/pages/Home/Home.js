import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Inventory from '../Inventory/Inventory';
import img1 from '../../images/perspectives.jpg'
import img2 from '../../images/booktoscreen.jpg';
import img3 from '../../images/profiles.jpg';
import Kirkus_Review from '../../images/Kirkus_Review.jpg';
import star from '../../images/star.png';
import prize from '../../images/prize.png';
 import axios from 'axios';
import * as ReactBootStrap from 'react-bootstrap'; 

const Home = () => {
     const [reservationsData, setReservationsData] = useState(null);
    const [loading, setLoading] = useState(false);
   


    useEffect(()=>{
        setLoading(true);
       axios.get('http://localhost:4000/inventoryItems')
       .then(res => setReservationsData(res.data))

       setTimeout(()=>{
           setLoading(false)
       },5000)
    },[]); 

    return (
        <div>
            <Banner></Banner>
            <h2 className="text-center mt-4" style={{fontFamily: "Rockwell"}}>Inventory Items</h2>
            {
                loading ? <ReactBootStrap.Spinner className="d-block mx-auto my-3" style={{color: "yellow"}} animation = "border"/> : 
                <div className="container">
              <div className="row">
                {
                  reservationsData?.slice(0, 6).map(reservations=><Inventory key={reservations.id} reservations={reservations}></Inventory>)
                }
              </div>
              <span className="d-flex justify-content-center bg-primary py-1">
              <Link to="/inventories" className="text-white text-decoration-none" style={{fontFamily: "Rockwell"}}>Manage Inventories</Link>
              </span>
            </div>
            }
            <div className="container mt-5" style={{borderTop:"2px solid black"}}></div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-4 col-sm-12" style={{borderRight:"1px solid black"}}>
                        <img className="img-fluid" src={img1} alt="" srcset="" />
                        <p>PERSPECTIVES</p>
                        <h2 style={{fontFamily: "Rockwell"}}>What Makes a Book ‘Age Appropriate’?</h2>
                    </div>
                    <div className="col-lg-4 col-sm-12" style={{borderRight:"1px solid black"}}>
                        <img className="img-fluid" src={img2} alt="" srcset="" />
                        <p>BOOK TO SCREEN</p>
                        <h2 style={{fontFamily: "Rockwell"}}>‘Shining Girls’: Time-Travel Thriller Disappoints</h2>
                    </div>
                    <div className="col-lg-4 col-sm-12">
                        <img className="img-fluid" src={img3} alt="" srcset="" />
                        <p>PROFILES</p>
                        <h2 style={{fontFamily: "Rockwell"}}>Posing Pablo Neruda’s ‘Questions’ to Young Readers</h2>
                    </div>
                </div>
            </div>
            <div className="container mt-5" style={{borderTop:"2px solid black"}}></div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-3 col-sm-12 mb-4">
                        <img className="img-fluid shadow-lg" src={Kirkus_Review} alt="" srcset="" />
                    </div>
                    <div className="col-lg-5 col-sm-12 d-flex align-items-center mb-4" style={{borderRight:"1px solid black"}}>
                            <div>
                                <h4 className="text-center mb-3" style={{fontFamily: "Rockwell"}}>The Magazine: Kirkus  Reviews</h4>
                                <p>Featuring 299 industry-first reviews of fiction, nonfiction, children's and YA books; also in this special diversity issue: interviews with Kasim Ali, Julissa Arce, Pyae Moe Thet War, Tyus D. Williams, Mayra Cuevas & Marie Marquardt</p>
                                <span className="d-flex justify-content-center mt-4"><button className="border-0 bg-primary text-white px-5 py-2" style={{borderRadius:"20px",fontFamily: "Rockwell"}} >Subscribe</button></span>
                            </div>
                    </div>
                    <div className="col-lg-4 col-sm-12">
                        <div className="d-flex">
                            <div className="d-flex align-items-center me-3">
                               <img height="75px" width="75px" src={star} alt="" srcset="" />
                            </div>
                           <div className="mt-3">
                              <h4 style={{fontFamily: "Rockwell"}}>The Kirkus Star</h4>
                              <p>One of the most coveted designations in the book industry, the Kirkus Star marks books of exceptional merit.</p>
                           </div>
                        </div>
                        <div style={{borderBottom:"1px solid black"}}></div>
                        <div className="d-flex">
                            <div className="d-flex align-items-center me-3">
                                 <img width="80px" height="80px" src={prize} alt="" srcset="" />
                            </div>
                            <div className="mt-3">
                                 <h4 style={{fontFamily: "Rockwell"}}>The Kirkus Prize</h4>
                                 <p>The Kirkus Prize is among the richest literary awards in America, awarding $50,000 in three categories annually. See the 2020 winners.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Home;