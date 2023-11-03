import { useEffect, useState } from 'react';
import { QueryParams, ProgramListResult } from '@/types';


export function useFetchPrograms(stringifiedQuery: string, fetcher: (queryParams: QueryParams) => Promise<ProgramListResult>): {
    paginatedPrograms: ProgramListResult;
    isLoading: boolean;
    errored: boolean;
    queryParams: QueryParams;
} {
    const queryParams: QueryParams = JSON.parse(stringifiedQuery);

    const [errored, setErrored] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [paginatedPrograms, setPaginatedPrograms] = useState<ProgramListResult>({
        page: 1,
        perPage: parseInt(queryParams.limit),
        totalPages: 1,
        totalItems: 0,
        items: [],
    });

    useEffect(() => {
        (async () => {
            try {
                setPaginatedPrograms(await fetcher(JSON.parse(stringifiedQuery)));
            } catch (error) {
                setErrored(true);
            } finally {
                setIsLoading(false);
            }
        })();
    }, [stringifiedQuery, fetcher]);

    return { paginatedPrograms, isLoading, errored, queryParams };
}
