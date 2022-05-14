import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../../images/advertisement1.jpg';
import img2 from '../../images/advertisement2.jpg';
import img3 from '../../images/advertisement3.jpg';


const Banner = () => {
    return (
        <div>
            <Carousel>
             <Carousel.Item interval={1000}>
               <img
                 className="d-block w-100"
                 src={img1}
                 alt="First slide"
    />
             </Carousel.Item>
             <Carousel.Item interval={500}>
               <img
                 className="d-block w-100 h-100"
                 src={img2}
                 alt="Second slide"
    />
             </Carousel.Item>
             <Carousel.Item>
               <img
                 className="d-block w-100"
                 src={img3}
                 alt="Third slide"
    />
             </Carousel.Item>
           </Carousel>
        </div>
    );
};

export default Banner;