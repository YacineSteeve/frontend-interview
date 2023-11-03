import { useCallback } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import type { QueryParams } from '@/types';

export function useUpdateQueryParam<T extends keyof QueryParams>(paramName: T): (newValue: QueryParams[T][]) => void {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    return useCallback((newValue: QueryParams[T][]) => {
        const newParams = new URLSearchParams(searchParams);
        const stringValue = (newValue || []).toString();

        if (stringValue === '') {
            newParams.delete(paramName);
        } else {
            newParams.set(paramName, stringValue);
        }

        router.push(`${pathname}?${newParams.toString()}`);
    }, [searchParams, router, pathname, paramName]);
}
