import React from 'react';
import Navbar from '../Navbar'

const PrivateLayout = ({ children }) => {
    return (
        <>
            <Navbar/>

            <div className="container my-5">
                {children}
            </div>
        </>
    )
}

export default PrivateLayout;