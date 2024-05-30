import React from 'react';
import { useState, useEffect } from 'react';
import parse from 'html-react-parser';

const Highlights = () => {
    const [videos, setVideos] = useState([]);

    // useEffect(() => {
    //     fetch('http://localhost:8500/highlights')
    //     .then(response => response.json())
    //     .then(data => {
    //         setVideos(data.filter(item => item.competition.name === 'ENGLAND: Premier League'));
    //     })
    // }, []);
    
    return (  
        <div className='highlights-container'>
            {/* {videos.length > 0 && <h1 id='highlights'>Highlights</h1>}
            <div className='highlights'>
                {videos.map((item, index) => (
                    <div key={index}> 
                        { parse(item.videos[0].embed.toString())} 
                        <h4>{item.title}</h4>  
                        <hr></hr>
                        <strong> 
                            <p style={{color: 'rgb(233,0,82)'}}>
                                { new Date(item.date).toString().slice(0, 15) }
                            </p> 
                        </strong>
                    </div>
                ))}
            </div> */}
        </div>
    )
};

export default Highlights;