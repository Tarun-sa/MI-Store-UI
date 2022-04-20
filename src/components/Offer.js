import React from 'react';

const Offer = ({ img, link, index }) => {
    return (
        <a href={link} target="_blank" rel="noreferrer">
            <img src={img} alt={`offer ${index}`} />
        </a>
    )
};

export default Offer;
