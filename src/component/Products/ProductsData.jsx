import React, { useState } from 'react';
import './ProductData.css';
import { AiFillStar } from 'react-icons/ai'
import { useDispatch } from 'react-redux';
import { addToBasket } from '../Slicer/CreateSlicer';
const MAX = 5;
const MIN = 1;
const ProductsData = ({ id, title, price, description, image }) => {
    const dispatch = useDispatch();
    const [rating] = useState(
        Math.floor(Math.random() * (MAX - MIN + 1)) + MIN
    );

    const addItemToBasket = () => {
        const product = {
            id,
            title,
            rating,
            price,
            description,
            image
        }
        const res = dispatch(addToBasket(product));
    };

    return (
        <div className='productdata'>
            <img className='product-image' src={image} />
            <h4>{title}</h4>
            <div className='flex'>
                {Array(rating).fill().map((_, i) => (
                    <AiFillStar key={i} className='icons-star' />
                ))}
            </div>
            <h4>${price}</h4>
            <span>{description}</span>
            <button className='basket-add' onClick={addItemToBasket}>Add to Basket</button>
        </div>
    )
}

export default ProductsData
