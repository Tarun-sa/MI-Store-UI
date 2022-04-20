import React, { useEffect, useState } from 'react';
import NavCard from './NavCard';
import '../styles/NavOption.css';

const NavOption = ({ miPhones, redmiPhones, tv, laptop, fitnessAndLifeStyle, home, audio, accessories }) => {

    const [miPhonestoggle, setmiPhones] = useState(false);
    const [redmiPhonestoggle, setRedmiPhones] = useState(false);
    const [tvtoggle, setTv] = useState(false);
    const [laptoptoggle, setLaptop] = useState(false);
    const [fitnessAndLifeStyleTogle, setFitnessAndLifeStyle] = useState(false);
    const [homeToggle, setHome] = useState(false);
    const [audioToggle, setAudio] = useState(false);
    const [accessoriesToggle, setAccessories] = useState(false);


    useEffect(() => {
        if (window.location.pathname === '/miphones')
            setmiPhones(true)

        if (window.location.pathname === '/redmiphones')
            return setRedmiPhones(true)
        if (window.location.pathname === '/tv')
            return setTv(true)
        if (window.location.pathname === '/laptops')
            return setLaptop(true)
        if (window.location.pathname === '/audio')
            return setAudio(true)
        if (window.location.pathname === '/accessories')
            return setAccessories(true)
        if (window.location.pathname === '/fitness')
            return setFitnessAndLifeStyle(true)
        if (window.location.pathname === '/home')
            return setHome(true)

    }, []);


    return (
        <div className='navOption'>
            {miPhonestoggle && miPhones.map((item) => {
                return <NavCard key={item.image} image={item.image} price={item.price} name={item.name} />
            })}
            {redmiPhonestoggle && redmiPhones.map((item) => {
                return <NavCard key={item.image} image={item.image} price={item.price} name={item.name} />
            })}
            {tvtoggle && tv.map((item) => {
                return <NavCard key={item.image} image={item.image} price={item.price} name={item.name} />
            })}
            {laptoptoggle && laptop.map((item) => {
                return <NavCard key={item.image} image={item.image} price={item.price} name={item.name} />
            })}
            {fitnessAndLifeStyleTogle && fitnessAndLifeStyle.map((item) => {
                return <NavCard key={item.image} image={item.image} price={item.price} name={item.name} />
            })}
            {homeToggle && home.map((item) => {
                return <NavCard key={item.image} image={item.image} price={item.price} name={item.name} />
            })}
            {audioToggle && audio.map((item) => {
                return <NavCard key={item.image} image={item.image} price={item.price} name={item.name} />
            })}
            {accessoriesToggle && accessories.map((item) => {
                return <NavCard key={item.image} image={item.image} price={item.price} name={item.name} />
            })}
        </div>)
};

export default NavOption;
