import React from 'react';
import { useState, useEffect } from 'react';
import GetTeams from './GetTeams';
import RenderHomeFixtures from './RenderHomeFixtures';
import useFetch from '../hooks/useFetch';

const HomeFixtures = () => {
    const [teams, setTeams] = useState([]);

    const { data: fixtures, isLoading } = useFetch('/fixtures', 'homeFixtures');

    return (
        <div className='home-fixtures-main'>
            {
                fixtures &&
                <>
                    <GetTeams setTeams={setTeams} />
                    <h2 style={{color: '#e90052'}}>
                        Upcoming Fixtures
                    </h2> 
                    <img 
                        src='https://www.logolynx.com/images/logolynx/c8/c84557602b44e25f665a6ec4bbf7691c.png' 
                        alt='Premier League' 
                        width='150px' 
                    />
                    <RenderHomeFixtures fixtures={fixtures} teams={teams} loading={isLoading}  />
                </>
            }
        </div>
    )
};

export default HomeFixtures;