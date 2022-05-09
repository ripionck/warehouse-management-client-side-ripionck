import React from 'react';

const Footer = () => {
    const getCurrentYear = ()=>{
return new Date().getFullYear();
    };

    return (
        <footer className="text-center mt-5">
            <p>All Rights Resreved&copy;{getCurrentYear()}</p>
        </footer>
    );
};

export default Footer;