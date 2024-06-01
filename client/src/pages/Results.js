import React, { useEffect } from 'react'
import { useState } from 'react';
import GetResults from '../components/GetResults';
import RenderResults from '../components/RenderResults';
import '../styles/Results.css';

const Results = () => {
    const [results, setResults] = useState([]);
    const rounds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38];
    const [loading, setLoading] = useState(true);
    const [sortByTime, setSortByTime] = useState([]);
    const [gotAllData, setGotAllData] = useState(false);

    useEffect(() => {
        if (results.length > 0) {
            let groupResults = results.filter(result => result.date < new Date()).sort((a, b) => new Date(a.date) - new Date(b.date)).reduce(function (a, b) {
                a[b.date] = a[b.date] || [];
                a[b.date].push(b);
                return a;
            }, Object.create(null));
        
            let toArray = Object.values(groupResults);

            setSortByTime(toArray.length && toArray.map(item =>
                item.sort((a, b) => a.time.localeCompare(b.time)
            )).reverse());
        }
    }, [results])

    useEffect(() => {
        if (gotAllData && sortByTime.length) {
            setLoading(false);
        }
    }, [gotAllData])

    return (
        <div>
            <GetResults setResults={setResults} rounds={rounds} setGotAllData={setGotAllData} />

            <div className='results-heading'>
                <h1>Results</h1>
            </div>

            {
                !loading && sortByTime.length > 0 ? 
                <RenderResults sortByTime={sortByTime} />
                :
                <div className="loading-container">
                    <div className="loading"></div>
                </div>
            }
        </div>
    )
};

export default Results;