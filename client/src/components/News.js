import React from 'react'
import { useState, useEffect } from 'react'
import useFetch from '../hooks/useFetch';

const News = () => {
    const [news, setNews] = useState([]);

    const { data } = useFetch('news');

    useEffect(() => {
        if (data) {
            console.log(data);
            const newsData =  data.articles.map(item => ({
                image: item.images[0].url, 
                title: item.headline, 
                description: item.description, 
                link: item.links.web.href
            }))

            setNews(newsData);
        }
    }, [data]);

    return (
        <div className='news-container'>
            <h1 id='latest-news'>Latest News</h1>
            <div className='news'>
                {news.map((item, index) => (
                    <div key={index} onClick={() => window.open(item.link)} className='news-items'> 
                        <div key={`${index} ${index ++}`}>
                            <img key={`${index} ${index += 2}`} id='news-image' src={item.image} alt='' /> 
                        </div>

                        <div key={`${index} ${index += 3}`} id='news-titles'>
                            <p key={`${index} ${index += 4}`}> {item.title} </p>
                            <hr></hr>
                        </div>

                        <div key={`${index} ${index += 5}`}>
                            <p key={`${index} ${index += 6}`} id='news-description'>{item.description}</p>
                            <br></br>
                        </div>
                    </div> 
                ))}
            </div>
        </div>
    )
};

export default News;