import './Checkout.css';
import React from 'react'
import { useSelector } from 'react-redux';
import CheckourProduct from '../Products/CheckourProduct';
import { useHistory } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';


const stripePromise = loadStripe('pk_test_51JPPyrKBaFHmR4YyPVYF0EoZw1Vi2SzyIsMzGRRHkAUJuzk5K5lv5byAv77E8xN2uxX2tRFoOVoooZ3djjiGKPwI00GOOdYnj8');

const CheckOut = () => {

    const CheckItem = useSelector(state => state.basket)
    const total = CheckItem.reduce((total, item,) => (total + item.price), 0)
    const selectName = useSelector(state => state.users);
    const history = useHistory();

    // const createCheckoutSession = async (e) => {
    //     e.preventDefault();
    //     const stripe = await stripePromise;
    //     const checkoutSession = await axios.post('http://localhost:4000/create-checkout-session', {
    //         item: CheckItem,
    //         email: selectName.users.email,
    //     });
    //     const result = await stripe.redirectToCheckout({
    //         sessionId: checkoutSession.data.id
    //     })
    //     if (result.error) {
    //         alert(result.error.message);
    //     };
    // };

    return (
        <div className='checkout'>
            <div className='checkout-shopping'>
                <img className='checkout-banner'
                    src='https://hanaichi.vn/blog/wp-content/uploads/2019/11/Amazon_Banner_9x5PdaN.png' />
                <h4>{CheckItem.length === 0 ? 'Your Shopping Basket' : 'Shopping Basket'}</h4>
                {CheckItem.map((items) => (
                    <CheckourProduct
                        id={items.id}
                        {...items} />
                ))}
            </div>
            <div className='checkout-subtotal' onClick={selectName.users == null ? () => history.push('/signin') : () => history.push('/cart')}>
                <h4>Subtotal({CheckItem.length} items):${total}</h4>
                <button role="link" > {selectName.users == null ? "Sign in to Checkout" : "Proceed to Checkout"}</button>
            </div>
        </div >
    )
}

export default CheckOut
