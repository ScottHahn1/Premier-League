import React from 'react';
import { useState, useEffect } from 'react';
import GetTeams from './GetTeams';
import RenderHomeFixtures from './RenderHomeFixtures';
import useFetch from '../hooks/useFetch';

const HomeFixtures = () => {
    const [teams, setTeams] = useState([]);
    const [loading, setLoading] = useState(true);

    const { data: fixtures } = useFetch(`games/fixtures`);

    useEffect(() => {
        fixtures && setLoading(false);
    }, [fixtures])

    return (
        <div className='home-fixtures-main'>
            <GetTeams setTeams={setTeams} />
            {/* { loading === false && <h2 style={{color: '#e90052'}}>Matchweek {startingRound[startingRound.length - 1]}</h2> } */}
            <img src='https://www.logolynx.com/images/logolynx/c8/c84557602b44e25f665a6ec4bbf7691c.png' alt='Premier League' width='150px' />
            <RenderHomeFixtures fixtures={fixtures} teams={teams} loading={loading}  />
        </div>
    )
};

export default HomeFixtures;