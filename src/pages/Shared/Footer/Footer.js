import React from 'react';
import fb from '../../../images/fb.png';
import twitter from '../../../images/twitter.png';
import instagram from '../../../images/instagram.png';

const Footer = () => {
    const getCurrentYear = ()=>{
return new Date().getFullYear();
    };

    return (
        <footer className="text-center mt-5 mb-3" style={{fontFamily: "Rockwell"}}>
            <p >Copyright&copy;{getCurrentYear()} Genius 
            Book Keeper. All Rights Reserved. </p>
            <h4 className="fw-bold">FOLLOW US</h4>
            <div>
                <img height="40px" width="40px" src={fb} alt="" />
                <img height="30px" width="40px" src={twitter} alt="" />
                <img height="30px" width="30px" src={instagram} alt="" />
            </div>
        </footer>
    );
};

export default Footer;