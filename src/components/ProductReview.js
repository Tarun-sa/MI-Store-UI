import React from 'react';
import ProductReviewCard from './ProductReviewCard';
import '../styles/ProductReview.css'

const ProductReview = ({ productReview }) => {
    return (
        <div className='ProductReview'>

            {productReview.map((item, index) => {
                return <ProductReviewCard key={item.image} img={item.image} review={item.review} name={item.name} price={item.price} index={index} />
            })}
        </div>
    )
};

export default ProductReview;
