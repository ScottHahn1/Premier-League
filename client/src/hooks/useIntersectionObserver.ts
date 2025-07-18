import { useEffect, useState, useCallback } from 'react';

const useIntersectionObserver = (fetchNextPage, hasNextPage, isFetchingNextPage) => {
    const [element, setElement] = useState(null);

    const callbackRef = useCallback((node) => {
        if (node) {
            setElement(node);
        }
    }, []);

    useEffect(() => {
        if (!element || !hasNextPage || isFetchingNextPage) return;

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    fetchNextPage();
                }
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 1,
            }
        );

        // Always observe the latest node
        observer.observe(element);

        return () => {
            observer.disconnect();
        };
    }, [element, hasNextPage, isFetchingNextPage, fetchNextPage]);

    return callbackRef;
};

export default useIntersectionObserver;