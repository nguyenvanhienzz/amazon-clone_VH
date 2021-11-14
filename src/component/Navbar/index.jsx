import React from 'react'
import './Navbar.css';
import { GoSearch } from 'react-icons/go'
import { IoMdArrowDropdown } from 'react-icons/io'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { LognOut } from '../Slicer/UserSlice';
import { useState } from 'react';




const NavBar = () => {
    const selectItem = useSelector(state => state.basket)
    const selectName = useSelector(state => state.users);
    const history = useHistory();
    const dispatch = useDispatch();
    const [state, setState] = useState(false);
    const logOut = () => {
        setState(true)
        dispatch(LognOut())
    }
    return (
        <div className='Navbar' >
            <div className='nav-left' >
                <img className='navbar-logo' onClick={() => history.push('/')} src='https://www.pinclipart.com/picdir/big/358-3584545_amazon-web-services-logo-png-transparent-svg-vector.png' />
                <div className='nav-location'>
                    <span>Deliver to</span>
                    <div className='location-content'>
                        <HiOutlineLocationMarker className='icon-location' />
                        <h4>Vietnam</h4>
                    </div>
                </div>
            </div>
            <div className='navbar-search'>
                <input type='text' placeholder='Search...' />
                <div className='nav-icon'>
                    <GoSearch className='icons-search ' />
                </div>
            </div>

            <div className='navbar-right'>
                <div className='nav-singin' onClick={() => history.push('/signin')} >
                    <span>Hello,{selectName.users == null ? "Login" : selectName.users.name} </span>
                    <div className='nav-arrow'>
                        <h4>Accout & Lists <IoMdArrowDropdown className='icon-io' /></h4>

                    </div>

                </div>
                <div className='nav-orders'>
                    <span>Returns</span>
                    <h4>& Orders</h4>
                </div>
                <div className='nav-carts' onClick={() => history.push('/cart')} >
                    <div className='nav-numbercart' >
                        <span>{selectItem.length}</span>
                        <img className='nav-logoimg' src='https://www.pngkey.com/png/full/307-3071593_accessories-shopping-cart-icon-white.png' />
                    </div>
                    <h4>Cart</h4>
                </div>
            </div>
        </div>
    )
}

export default NavBar
