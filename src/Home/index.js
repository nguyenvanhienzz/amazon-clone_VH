import React from 'react'
import Banner from '../component/Banner'
import NavBar from '../component/Navbar'
import Products from '../component/Products'
import BannerData from '../Data/BannerData'
import './Home.css'
const Home = () => {
    return (
        <div className='home'>
            <NavBar />
            <Banner slides={BannerData} />
            <Products />
        </div>
    )
}

export default Home
