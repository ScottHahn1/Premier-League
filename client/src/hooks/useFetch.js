import { useEffect, useState } from "react";

const useFetch = (restOfUrl, params) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const queryString = params ? `?${new URLSearchParams(params).toString()}` : '';
    const apiUrl = process.env.NODE_ENV === 'production' ? 
    `https://premier-league-backend.vercel.app/${restOfUrl}${queryString}` : `http://localhost:8500/${restOfUrl}${queryString}`

    useEffect(() => {
        fetch(apiUrl)
        .then(res => res.json())
        .then(data => setData(data))
        .catch(err => setError(err.message))
    }, [apiUrl])

    return { data, error };
}

export default useFetch;