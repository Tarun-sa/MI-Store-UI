import React from 'react';
import '../styles/NavCard.css';

const NavCard = ({ image, name, price }) => {
    return (
        <div className='NavCard'>
            <img src={image} alt={`imagge`} />
            <p>{name}</p>
            <span>{price}</span>
        </div>)
};

export default NavCard;