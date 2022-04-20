import React from "react";
import Offer from './Offer';
import '../styles/offerSection.css'

const Offers = ({ offers }) => {
    return (

        <div className="offerSection ">
            {offers.map((offer, index) => {
                return <Offer key={index} index={index} img={offer.image} link={offer.url} />
            })}
        </div>)
};

export default Offers;
