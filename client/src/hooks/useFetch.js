import { useQuery } from '@tanstack/react-query';

const useFetch = (endpointPath, queryKey, staleTime) => {
    const apiUrl = `https://premier-league-backend.vercel.app${endpointPath}`;

    const fetchData = async () => {
        const res = await fetch(apiUrl);
        const data = await res.json();
        return data;
    };

    const { data, isLoading, isError, error } = useQuery({
        queryKey: [queryKey],
        queryFn: fetchData,
        cacheTime: 900000,
        staleTime: staleTime && staleTime
    });

    return { data, isLoading, isError, error };
}

export default useFetch;