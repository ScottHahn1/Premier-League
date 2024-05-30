import React from 'react'
import { useState } from 'react';
import GetResults from '../components/GetResults';
import GetTeams from '../components/GetTeams';
import RenderResults from '../components/RenderResults';
import '../styles/Results.css';

const Results = () => {
    const [results, setResults] = useState([]);
    const [teams, setTeams] = useState([]);
    const rounds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38];
    const [loading, setLoading] = useState(true);

    let groupResults = results.filter(result => result.date < new Date()).sort((a, b) => new Date(a.date) - new Date(b.date)).reduce(function (a, b) {
        a[b.date] = a[b.date] || [];
        a[b.date].push(b);
        return a;
    }, Object.create(null));

    let toArray = Object.values(groupResults);
    let sortByTime = toArray.length && toArray.map(item => item.sort((a, b) => a.time.localeCompare(b.time)));

    return (
        <div>
            <GetResults setResults={setResults} rounds={rounds} />
            <GetTeams setTeams={setTeams} />

            <div className='results-heading'>
                <h1>Results</h1>
            </div>

            <RenderResults sortByTime={sortByTime} teams={teams} loading={loading} setLoading={setLoading} />
        </div>
    )
};

export default Results;