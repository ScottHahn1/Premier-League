import React from 'react'
import { useState, useEffect } from 'react'
import { useFetch } from '../hooks/useFetch';

const News = () => {
    const { data } = useFetch('/news', ['news']);

    if (!data?.articles?.length) {
        return null;
    }

    return (
        <div className='text-center md:text-left'>
            <h2 className='text-3xl font-bold my-5'>Latest News</h2>

            <div className='flex flex-col md:gap-2 md:flex-row md:flex-wrap lg:gap-8 xl:gap-4'>
                {data.articles.map(article => (
                    <div 
                        key={article.nowId} 
                        onClick={() => window.open(article.links.web.href)} 
                        className='my-1 h-full w-full md:w-[45%] lg:w-[30%]'
                    > 
                        <div>
                            <img className='w-full' src={article.images[0].url} alt='news story' /> 
                        </div>

                        <div className='h-15 md:h-20 flex flex-col overflow-hidden my-1'>
                            <span className='font-medium'>{article.headline}</span>
                            <hr className='mt-auto'></hr>
                        </div>

                        <div>
                            <p className='text-xs line-clamp-3'>{article.description}</p>
                        </div>
                    </div> 
                ))}
            </div>
        </div>
    )
};

export default News;