import React from 'react';
import '../styles/HotAccessories.css';
import HotItemCard from './HotItemCard';


const HotAccessories = ({ music, musicCover, smartDevice, smartDeviceCover, home, homeCover, lifeStyle, lifeStyleCover, mobileAccessories, mobileAccessoriesCover }) => {
    return (
        <div className='HotAccessories'>
            <div >
                <img src={musicCover || smartDeviceCover || lifeStyleCover || homeCover || mobileAccessoriesCover} alt="Cover" />
            </div>
            {/* second div for items */}

            <div >
                {music && music.map((item, index) => {
                    return <HotItemCard key={item.image} img={item.image} price={item.price} name={item.name} index={index} />
                })}

                {smartDevice && smartDevice.map((item, index) => {
                    return <HotItemCard key={item.image} img={item.image} price={item.price} name={item.name} index={index} />
                })}
                {home && home.map((item, index) => {
                    return <HotItemCard key={item.image} img={item.image} price={item.price} name={item.name} index={index} />
                })}
                {lifeStyle && lifeStyle.map((item, index) => {
                    return <HotItemCard key={item.image} img={item.image} price={item.price} name={item.name} index={index} />
                })}
                {mobileAccessories && mobileAccessories.map((item, index) => {
                    return <HotItemCard key={item.image} img={item.image} price={item.price} name={item.name} index={index} />
                })}
                <HotItemCard img="https://i01.appmifile.com/webfile/globalimg/in/cms/593181BE-7DB8-15F5-E907-506427B8C9F4.jpg" />

            </div>
        </div>)
};

export default HotAccessories;
