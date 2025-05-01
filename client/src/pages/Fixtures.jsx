import React from 'react';
import { useState, useEffect } from 'react';
import RenderFixtures from '../components/RenderFixtures';
import '../styles/Fixtures.css';
import GetTeams from '../components/GetTeams';
import useFetch from '../hooks/useFetch';

const Fixtures = () => {
    const [teams, setTeams] = useState([]);

    const { data: fixtures, isLoading } = useFetch('/fixtures', 'fixtures');

    return (
        <>
            <div className='fixtures-heading'>
                <h1>Fixtures</h1>
            </div> 
            
            <GetTeams setTeams={setTeams} />
            <RenderFixtures fixtures={fixtures} teams={teams} loading={isLoading} />
        </>
    )
};

export default Fixtures;