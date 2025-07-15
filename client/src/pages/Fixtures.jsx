import React from 'react';
import RenderFixtures from '../components/RenderFixtures';
import { useFetch } from '../hooks/useFetch';

const Fixtures = () => {
    const { data: round, isLoading } = useFetch('/fixtures', ['fixturesRound']);

    if (!round || isLoading) {
        return null;
    }

    return (
        <>
            <div className='bg-darkpurple mt-4 py-16 flex items-center text-4xl text-white pl-2'>
                <h1>Fixtures</h1>
            </div> 
            
            <RenderFixtures round={round} />
        </>
    );
};

export default Fixtures;