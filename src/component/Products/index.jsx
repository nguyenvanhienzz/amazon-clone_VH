import './Product.css';
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ProductsData from './ProductsData';
import './Product.css';

const Products = () => {
    const [product, setProduct] = useState([]);
    useEffect(() => {
        async function getSevierSide() {
            const products = await axios.get("https://fakestoreapi.com/products")
                .then(res => setProduct(res.data))
        }
        getSevierSide();
    }, []);

    return (
        <div className='product'>
            {product.slice(0, 8).map((item) => (
                <ProductsData key={item.id} {...item} />
            ))}
            <div className='banner-pruduct' >
                <img src='https://www.intelligencenode.com/blog/wp-content/uploads/2019/06/Prime-day.jpg' />
            </div>

            {product.slice(8, product.length).map((item) => (
                <ProductsData key={item.id} {...item} />
            ))}
        </div>


    )

}

export default Products
