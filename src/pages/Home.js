import React, { useEffect, useState } from 'react';
import '../styles/Home.css';
import News from '../components/News';
import Highlights from '../components/Highlights';
import HomeTable from '../components/HomeTable';
import HomeFixtures from '../components/HomeFixtures';

const Home = () => {
    const [article, setArticle] = useState([]);
    const [randomTeam, setRandomTeam] = useState('');
    const teams = ['Arsenal', 'Chelsea', 'Liverpool', 'Manchester City', 'Manchester United', 'Tottenham'];

    useEffect(() => {
        setRandomTeam(teams[Math.floor(Math.random() * teams.length)]);
    }, []);

    useEffect(() => {
        randomTeam !== '' &&
        fetch(`https://gnews.io/api/v4/top-headlines?lang=en&q=${randomTeam}&token=2f867f8e9ffd6c133b2f527baec2de7b`)
        .then(response => response.json())
        .then(data => {
            setArticle({ image: data.articles[0].image, title: data.articles[0].title, description: data.articles[0].description, link: data.articles[0].url, source: data.articles[0].source.name })
        });
    }, [randomTeam]);

    return (
        <section className='home'>
            <div className='home-main-container'>
                {article.image !== null && <img id='headline-img' src={article.image} onClick={() => window.open(article.link)} alt='' />}

                <div className='home-main'>
                    <h4 style={{color: 'rgb(4,245,255)'}}>Top Story</h4>
                    <h2>{article.title}</h2>
                    <p>{article.description}</p>
                    <h4>Source - {article.source}</h4>
                </div>

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