import React, { useState, useEffect } from 'react';
import api from '../../services/api';

const Main = () => {
    const [ products, setProducts ] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            const response = await api.get("/products");
            setProducts(response.data.docs);
        }
        
        getProducts();
    }, [])

    return (
        <div className="container">
            <div className="py-5">
                {
                    products.map(product => (
                        <div key={product._id} className="card my-5">
                            <div className="card-content">
                                <p className="title">{product.title}</p>
                                <p className="subtitle">{product.description}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Main;