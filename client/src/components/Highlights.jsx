import React from 'react';
import parse from 'html-react-parser';
import { useFetch } from '../hooks/useFetch';

const Highlights = () => {
    const { data: videos } = useFetch('/highlights', ['highlights']);

    if (!videos?.length) {
        return null;
    }

    return (  
        <div>
            <h2 className='text-3xl font-semibold my-2'>
                Highlights
            </h2>

            <div className='bg-pink-800 my-2 flex flex-col items-center md:flex-row md:flex-wrap'>
                {videos.map((item, index) => (
                    <div key={index} className='my-4 w-full md:w-1/2 lg:w-1/3 bg-yellow-500'>  
                        <div className='w-full md:w-[95%]'>
                            { parse(item.videos[0].embed.toString())} 
                        </div>

                        <span className='line-clamp-1 lg:w-[95%]'>
                            {item.title}
                        </span>  
                        <p className='poppins-semiBold-italic text-pink'>
                            { new Date(item.date).toString().slice(0, 15) }
                        </p> 
                    </div>
                ))}
            </div>
        </div>
    )
};

export default Highlights;