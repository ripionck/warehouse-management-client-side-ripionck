import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../../images/slide1.png';
import img2 from '../../images/slide2.png';
import img3 from '../../images/slide3.png';


const Banner = () => {
    return (
        <div>
            <Carousel>
             <Carousel.Item interval={1000}>
               <img style={{height:"475px"}}
                 className="d-block w-100"
                 src={img1}
                 alt="First slide"
    />
             </Carousel.Item>
             <Carousel.Item interval={500}>
               <img style={{height:"475px"}}
                 className="d-block w-100"
                 src={img2}
                 alt="Second slide"
    />
             </Carousel.Item>
             <Carousel.Item>
               <img style={{height:"475px"}}
                 className="d-block w-100"
                 src={img3}
                 alt="Third slide"
    />
             </Carousel.Item>
           </Carousel>
           <p className="mt-2 text-center"><i><q>When to use iterative development? You should use iterative development only on projects that you want to succeed.</q></i>– Martin Fowler</p>
        </div>
    );
};

export default Banner;