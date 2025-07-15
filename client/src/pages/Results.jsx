import React from 'react'
import RenderResults from '../components/RenderResults';
import { useFetch } from '../hooks/useFetch';

const Results = () => {
     const { data: round, isLoading } = useFetch('/results', ['resultsRound']);

    if (!round || isLoading) {
        return null;
    }

    return (
        <>
            <div className='bg-darkpurple mt-4 py-16 flex items-center text-4xl text-white pl-2'>
                <h1>Results</h1>
            </div> 
            
            <RenderResults round={round} />
        </>
    );
};

export default Results;