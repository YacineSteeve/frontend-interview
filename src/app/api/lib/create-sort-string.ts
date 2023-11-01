import type { SearchParams } from '@/types';

const orderingMap = {
    '-can_apply': '-partner',
    'rank': 'name',
    'discounted_price': 'fees.discounted',
    '-discounted_price': '-fees.discounted',
} as const;

type OrderingMapKey = keyof typeof orderingMap;

const createSortString = (orderingParam: SearchParams['ordering'] | null): string => {
    if (!orderingParam) {
        return '';
    }

    const fields: OrderingMapKey[] = orderingParam.split(',') as OrderingMapKey[];
    const sortIdentifier: string[] = [];

    fields.forEach((field) => {
        if (orderingMap[field]) {
            sortIdentifier.push(orderingMap[field]);
        }
    });

    return sortIdentifier.join(',');
};

export default createSortString;
