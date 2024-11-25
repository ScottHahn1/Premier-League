import React from 'react';
import { useState, useEffect } from 'react';
import RenderFixtures from '../components/RenderFixtures';
import '../styles/Fixtures.css';
import GetTeams from '../components/GetTeams';
import useFetch from '../hooks/useFetch';

const Fixtures = () => {
    const [teams, setTeams] = useState([]);
    const [loading, setLoading] = useState(true);

    const { data: fixtures } = useFetch(`games/fixtures`);

    useEffect(() => {
        if (fixtures) {
            setLoading(false);
        }
    }, [fixtures])

    return (
        <>
            <div className='fixtures-heading'>
                <h1>Fixtures</h1>
            </div> 
            
            <GetTeams setTeams={setTeams} />
            <RenderFixtures fixtures={fixtures} teams={teams} loading={loading} />
        </>
    )
};

export default Fixtures;