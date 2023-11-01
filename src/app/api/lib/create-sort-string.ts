import type { SearchParams } from '@/types';

const createFilterString = (orderingParam: SearchParams['ordering'] | null): string => {
    if (!orderingParam) {
        return '';
    }

    return '';
};

export default createFilterString;
