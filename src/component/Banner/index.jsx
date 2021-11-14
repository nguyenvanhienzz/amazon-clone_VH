import React, { useEffect, useState, useRef } from 'react';
import './Banner.css';
import BannerData from '../../Data/BannerData';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
const Banner = ({ slides }) => {
    const [banner, setBanner] = useState(0);
    const length = slides.length;
    const timeout = useRef(null);
    useEffect(() => {
        const nextSlide = () => {
            setBanner(banner === length - 1 ? 0 : banner + 1)
        };
        timeout.current = setTimeout(nextSlide, 3000);
        return () => {
            if (timeout.current) {
                clearTimeout(timeout.current)
            }
        }
    }, [banner, length]);

    const prevSlide = () => {
        setBanner(banner === 0 ? length - 1 : banner - 1);
    };
    const nextSlide = () => {
        setBanner(banner === length - 1 ? 0 : banner + 1)
    };

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    };
    return (
        <div className='banner-container'>
            {BannerData.map((item, index) => {
                return (
                    <div className={index === banner ? 'slide active' : 'slide'}
                        key={index}>
                        {index === banner && (
                            <img src={item.image} alt="" className='banner-img' />
                        )}
                    </div>
                )
            })}
            <MdKeyboardArrowLeft onClick={prevSlide} className='left-arrow' />
            <MdKeyboardArrowRight onClick={nextSlide} className='right-arrow' />
        </div>
    )
}

export default Banner
