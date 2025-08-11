import React, { useEffect, useState } from 'react';
import News from '../components/News';
import Highlights from '../components/Highlights';
import HomeTable from '../components/HomeTable';
import HomeFixtures from '../components/HomeFixtures';
import { useFetch } from '../hooks/useFetch';

const Home = () => {
    const { data: article, isLoading } = useFetch('/news/article', ['mainArticle']);

    if (!article || isLoading) {
        return null;
    }

    return (
        <section>
            <div className='mt-4 bg-[linear-gradient(270deg,_rgb(255,40,130)_30%,_rgb(255,105,0))] flex justify-end'>
                    <div className='flex gap-1 justify-center'>
                        <img 
                            className='h-96'
                            src={article.image} 
                            onClick={() => article.image !== null && window.open(article.url)} 
                            alt='Headline article' 
                        />

                        <div className='px-2 w-2/6 text-white flex flex-col justify-around bg-[rgba(56,0,60)] bg-[url("https://www.premierleague.com/resources/prod/v6.101.4-4472/i/bg-elements/heading-bg-desktop.svg")]'>
                            <span className='text-cyan-600 font-bold'>Top Story</span>
                            <h1 className='text-xl font-medium'>{article.title}</h1>
                            <p>{article.description}</p>
                            <span>Source - {article.source.name}</span>
                        </div>
                    </div>
            </div>
            
            <div className='md:flex md:gap-4 md:w-full'>
                <div className='hidden lg:block xl:w-[20%]'>
                    <HomeFixtures /> 
                    <HomeTable /> 
                </div>

                <div className='w-full md:ml-10 lg:ml-0 lg:w-[75%] xl:w-[80%]'>
                    <Highlights />
                    <News /> 
                </div>
            </div>
        </section>
    )
};

export default Home;