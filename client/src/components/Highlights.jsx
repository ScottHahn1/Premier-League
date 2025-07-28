import React from 'react';
import parse from 'html-react-parser';
import { useFetch } from '../hooks/useFetch';

const Highlights = () => {
    const { data: highlights } = useFetch('/highlights', ['highlights']);

    if (!highlights?.length) {
        return null;
    }

    return (  
        <div className='text-center md:text-left'>
            <h2 className='text-4xl font-bold my-5'>
                Highlights
            </h2>

            <div className='my-2 flex flex-col items-center md:gap-2 md:flex-row md:flex-wrap xl:gap-4'>
                {highlights.map((highlight, index) => (
                    <div key={`${highlight.title}-${index}`} className='my-2 w-full md:w-[30%]'>  
                        <div className='w-full '>
                            { parse(highlight.videos[0].embed.toString())} 
                        </div>

                        <span className='line-clamp-1 lg:w-[95%]'>
                            {highlight.title}
                        </span>  
                        <p className='poppins-semiBold-italic text-hotpink'>
                            { new Date(highlight.date).toString().slice(0, 15) }
                        </p> 
                    </div>
                ))}
            </div>
        </div>
    )
};

export default Highlights;