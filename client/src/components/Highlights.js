import React from 'react';
import { useState, useEffect } from 'react';
import parse from 'html-react-parser';
import useFetch from '../hooks/useFetch';

const Highlights = () => {
    const [videos, setVideos] = useState([]);

    const { data } = useFetch('highlights');

    useEffect(() => {
        data && setVideos(data.filter(item => item.competition.name === 'ENGLAND: Premier League'));
    }, [data])
    
    return (  
        <div className='highlights-container'>
            {
                videos.length > 0 && 
                <h1 id='highlights'>
                    Highlights
                </h1>
            }
            <div className='highlights'>
                {videos.map((item, index) => (
                    <div key={index} className='highlight'> 
                        { parse(item.videos[0].embed.toString())} 
                        <h4>
                            {item.title}
                        </h4>  
                        <p className='poppins-semiBold-italic' style={{color: 'rgb(233,0,82)'}}>
                            { new Date(item.date).toString().slice(0, 15) }
                        </p> 
                    </div>
                ))}
            </div>
        </div>
    )
};

export default Highlights;