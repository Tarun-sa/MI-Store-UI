import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css'


const Banner = ({ banner }) => {
    return (
        <div className='banner'>
            <Carousel >
                {
                    banner.map((item, index) => {
                        return (
                            <Carousel.Item key={item.image} id="banner" interval={2000} keyboard={true}>
                                <img
                                    className="d-block w-100"
                                    src={item.image}
                                    alt={`${index} slides`}
                                />
                                <Carousel.Caption>
                                    <h2>{item.name}</h2>
                                    <p>{item.description}</p>
                                    <p>{item.source}</p>
                                    <u>Read More...</u>
                                </Carousel.Caption>
                            </Carousel.Item>
                        )
                    })
                }
            </Carousel>
        </div>
    )
};

export default Banner;
