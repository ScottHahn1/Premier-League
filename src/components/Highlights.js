import React from 'react';
import { useState, useEffect } from 'react';
import parse from 'html-react-parser';

const Highlights = () => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'ead11d69acmsh1705e43a9fa2f97p1c4389jsn945fedb1ff12',
                'X-RapidAPI-Host': 'free-football-soccer-videos.p.rapidapi.com'
            }
        };
        
        fetch('https://free-football-soccer-videos.p.rapidapi.com/', options)
        .then(response => response.json())
        .then(data => data.map(item => {
            item.competition.name === "ENGLAND: Premier League" && 
            setVideos(prev => [...prev,
                { 
                    title: item.title, 
                    vid: item.videos[0].embed, 
                    date: new Date(item.date) 
                }])
        }));
    }, []);

    return (  
        <div className='highlights-container'>
                <h1 id='highlights'>Highlights</h1>
                <div className='highlights'>
                    {videos.map((item, index) => (
                        <div key={index}> 
                          { parse(item.vid.toString())} 
                          <h4 key={`${index} ${index++}`}>{item.title}</h4>  
                          <hr></hr>
                          <strong> 
                            <p key={`${index} ${index +=2}`} style={{color: 'rgb(233,0,82)'}}>
                                { item.date.toString().slice(0, 15) }
                            </p> 
                          </strong>
                        </div>
                    ))}
                </div>
        </div>
    )
};

export default Highlights;