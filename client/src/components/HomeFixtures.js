import React from 'react';
import { useState, useEffect } from 'react';
import GetFixtures from './GetFixtures';
import GetTeams from './GetTeams';
import RenderHomeFixtures from './RenderHomeFixtures';

const HomeFixtures = () => {
    const [fixtures, setFixtures] = useState([]);
    const [startingRound, setStartingRound] = useState([]);
    const [teams, setTeams] = useState([]);
    const [rounds, setRounds] = useState([
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38
    ]);
    const [sortByTime, setSortByTime] = useState([]);
    const [loading, setLoading] = useState(true);

    let groupFixtures = fixtures.filter(fixture => fixture.date > new Date()).sort((a, b) => a.date - b.date).reduce(function (a, b) {
        a[b.date] = a[b.date] || [];
        a[b.date].push(b);
        return a;
    }, Object.create(null));

    useEffect(() => {
        setSortByTime(Object.values(groupFixtures).map(item => item.sort((a, b) => a.time.localeCompare(b.time))));
        sortByTime.length && setStartingRound(prev => [...prev, sortByTime.filter(item => item.filter(i => i.date >= new Date()).map(item => item.round))[0][0].round]);
    }, [fixtures]);

    return (
        <div className='home-fixtures-main'>
            <GetFixtures setFixtures={setFixtures} rounds={rounds} />
            <GetTeams setTeams={setTeams} />

            { loading === false && <h2 style={{color: '#e90052'}}>Matchweek {startingRound[startingRound.length - 1]}</h2> }
            <img src='https://www.logolynx.com/images/logolynx/c8/c84557602b44e25f665a6ec4bbf7691c.png' width='150px' />

            <RenderHomeFixtures sortByTime={sortByTime} teams={teams} startingRound={startingRound} loading={loading} setLoading={setLoading} />
        </div>
    )
};

export default HomeFixtures;