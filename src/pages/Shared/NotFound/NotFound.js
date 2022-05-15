import React from 'react';
import img from '../../../images/404.png';

const NotFound = () => {
    return (
        <div className="d-flex justify-content-center mt-5">
            <img src={img} alt="" />
        </div>
    );
};

export default NotFound;