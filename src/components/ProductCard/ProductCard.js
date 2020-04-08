import React from 'react';
import './ProductCard.css';

const ProductCard = ({ title, price }) => (
    <div className="product-card">
        <div className="product-card__title">{title}</div>
        <div className="product-card__price">{price}</div>
    </div>
);

export default ProductCard;
