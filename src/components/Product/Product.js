import React from 'react';
import './Product.css';

const Product = () => {
    const handleContactSeller = () => {};
    return (
        <div className="product">
            <div className="product-photo">
                <img src="" alt="" />
            </div>
            <div className="product-tools">
                <button onClick={handleContactSeller}>contact</button>
            </div>
        </div>
    );
};

export default Product;
