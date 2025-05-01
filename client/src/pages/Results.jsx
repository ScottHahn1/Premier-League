import React, { useEffect } from 'react'
import { useState } from 'react';
import RenderResults from '../components/RenderResults';
import '../styles/Results.css';
import useFetch from '../hooks/useFetch';

const Results = () => {
    const [loading, setLoading] = useState(true);
    const { data: results } = useFetch('/results', 'results');

    useEffect(() => {
        results && setLoading(false);
    }, [results])

    return (
        <div>
            <div className='results-heading'>
                <h1>Results</h1>
            </div>

            {
                !loading ? 
                <RenderResults results={results.reverse()} />
                :
                <div className="loading-container">
                    <div className="loading"></div>
                </div>
            }
        </div>
    )
};

export default Results;