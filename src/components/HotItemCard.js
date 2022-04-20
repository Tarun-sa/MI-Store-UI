import React from 'react';
import '../styles/HotItemCard.css';

const HotItemCard = ({ img, name, price, index }) => {
    return (
        <div className='HotItemCard'>
            <img src={img} alt={`${index} image`} />
            <p>{name}</p>
            <span>{price}</span>
        </div>)
};

export default HotItemCard;
