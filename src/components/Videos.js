import React from 'react';
import '../styles/videos.css'
import VideoCard from './VideoCard';

const Videos = ({ videos }) => {
    return (
        <div className='videos'>
            {videos.map((video, index) => {
                return (
                    <VideoCard key={video.image} image={video.image} name={video.name} index={index} />
                )
            })}
        </div>

    )
};

export default Videos;
