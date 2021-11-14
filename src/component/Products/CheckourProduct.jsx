import React from 'react'
import { AiFillStar } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { addToBasket, removeToBaskets } from '../Slicer/CreateSlicer';
import './CheckourProduct.css';

const CheckourProduct = ({ id, rating, title, price, description, image }) => {

    const dispatch = useDispatch();

    const addItemToBasket = () => {
        const product = {
            id,
            title,
            price,
            rating,
            description,
            image
        }
        dispatch(addToBasket(product));
    };
    const removeToBasket = () => {
        const res = dispatch(removeToBaskets({ id }))
    }
    return (
        <div className='checkoutProducts'>
            <img src={image} />
            <div className='checkout-context'>
                <p>{title}</p>
                {Array(rating).fill().map((_, i) => (
                    <AiFillStar key={i} className='icons-star' />
                ))}
                <p>${price}</p>
                <span>{description}</span>
            </div>
            <div className='checkoutproduct'>
                <button className='basket-adds' onClick={addItemToBasket}>Add to Basket</button>
                <button className='basket-remove' onClick={removeToBasket}>Remove to Basket</button>
            </div>
        </div>
    )
}

export default CheckourProduct
