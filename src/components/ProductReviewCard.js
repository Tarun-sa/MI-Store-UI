import React from 'react';
import '../styles/ProductReviewCard.css'

const ProductReviewCard = ({ img, price, name, index, review }) => {
    return (
        <div className='ProductReviewCard'>
            <img src={img} alt={'${index} image'} />
            <div>
                <h6>{review}</h6>
                <span>{name}</span>
                <b>{price}</b>

            </div>

        </div>
    )

};

export default ProductReviewCard;
