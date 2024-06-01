import React from 'react';
import { useState, useEffect } from 'react';
import GetFixtures from '../components/GetFixtures';
import RenderFixtures from '../components/RenderFixtures';
import '../styles/Fixtures.css';

const Fixtures = () => {
    const [fixtures, setFixtures] = useState([]);
    const rounds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38];
    const [loading, setLoading] = useState(true);
    const [gotAllData, setGotAllData] = useState(false);

    let groupFixtures = fixtures.filter(fixture => fixture.date > new Date()).sort((a, b) => a.date - b.date).reduce(function (a, b) {
        a[b.date] = a[b.date] || [];
        a[b.date].push(b);
        return a;
    }, Object.create(null));

    let toArray = Object.values(groupFixtures);
    let sortByTime = toArray.length && toArray.map(item => item.sort((a, b) => a.time.localeCompare(b.time)));

    useEffect(() => {
        if (gotAllData) {
            setLoading(false);
        }
    }, [gotAllData])

    return (
        <>
            <div className='fixtures-heading'>
                <h1>Fixtures</h1>
            </div> 
            
            <GetFixtures setFixtures={setFixtures} rounds={rounds} setGotAllData={setGotAllData} />
            <RenderFixtures sortByTime={sortByTime} loading={loading} />
        </>
    )
};

export default Fixtures;