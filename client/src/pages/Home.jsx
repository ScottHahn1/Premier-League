import React, { useEffect, useState } from 'react';
import '../styles/Home.css';
import News from '../components/News';
import Highlights from '../components/Highlights';
import HomeTable from '../components/HomeTable';
import HomeFixtures from '../components/HomeFixtures';

const Home = () => {
    const [article, setArticle] = useState();

    useEffect(() => {
        fetch('https://premier-league-backend.vercel.app/news/article')
        .then(response => response.json())
        .then(data => {
            setArticle(data.articles[Math.floor(Math.random() * data.articles.length)]);
        })
    }, []);

    return (
        <section className='home'>
            <div className='home-main-container'>
                {
                    article && (
                    <>
                        {
                            article.image !== null && 
                            <img 
                                id='headline-img' 
                                src={article.image} 
                                onClick={() => window.open(article.url)} alt='Headline article thumbnail' 
                            />
                        }

                        <div className='home-main'>
                            <h4 style={{color: 'rgb(4,245,255)'}}>Top Story</h4>
                            <h2>{article.title}</h2>
                            <p>{article.description}</p>
                            <h4>Source - {article.source.name}</h4>
                        </div>
                    </>
                    )
                }

            </div>
            
            <div className='home-content'>
                <div className='fixtures-table'>
                    <HomeFixtures />
                    <HomeTable />
                </div>

                <div className='highlights-news'>
                    <Highlights /> &nbsp;
                    <News />
                </div>
            </div>
        </section>
    )
};

export default Home;