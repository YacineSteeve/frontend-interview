import { useCallback } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import type { SearchParams } from '@/types';

export function useSearchParamUpdate<T extends keyof SearchParams>(paramName: T): [SearchParams[T][], (value: SearchParams[T][]) =>void] {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    let currentValues = searchParams.getAll(paramName) as SearchParams[T][];

    if (currentValues.length === 1 && currentValues[0] === '') {
        currentValues = [];
    }

    const updateSearchParam = useCallback(async (value: SearchParams[T][]) => {
        const newParams = new URLSearchParams(searchParams);
        const stringValue = (value || []).toString();

        if (stringValue === '') {
            newParams.delete(paramName);
        } else {
            newParams.set(paramName, stringValue);
        }

        router.push(`${pathname}?${newParams.toString()}`);
    }, [paramName, router, pathname, searchParams]);

    return [currentValues, updateSearchParam];
}
