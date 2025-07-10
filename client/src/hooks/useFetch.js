import { useQuery } from '@tanstack/react-query';

const useFetch = (endpointPath, queryKey, enabled = true, staleTime) => {
    const apiUrl = `http://localhost:8500${endpointPath}`;

    const fetchData = async () => {
        const res = await fetch(apiUrl);

        if (!res.ok) {
            throw new Error(`Fetch failed: ${res.status} ${res.statusText}`);
        };

        const data = await res.json();
        return data;
    };
// console.log('queryKey passed to useQuery:', queryKey);

    const { data, isLoading, isError, error, refetch } = useQuery({
        queryKey,
        queryFn: fetchData,
        enabled,
        cacheTime: 900000,
        staleTime: staleTime
    });

    return { data, isLoading, isError, error, refetch };
};

const useFetchInfinite = (endpointPath, queryKey, initialPage, getNextPage) => {
    const fetchData = async ({ pageParam }) => {
        const apiUrl = `http://localhost:8500${endpointPath}/${pageParam}`;

        const res = await fetch(apiUrl);

        if (!res.ok) {
            throw new Error('Failed to fetch');
        }

        const data = await res.json();

        return data;
    };

    const { 
        data, 
        isLoading,
        fetchNextPage, 
        hasNextPage, 
        isFetchingNextPage 
    } = useInfiniteQuery({
        queryKey,
        queryFn: fetchData,
        enabled: !!initialPage,
        initialPageParam: initialPage,
        getNextPageParam: (lastPage) => {
            if (lastPage?.length > 0) { 
                return getNextPage(lastPage);
            } 
            return undefined;
        },
    });

    return { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage};
};

export { useFetch, useFetchInfinite };