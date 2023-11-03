import type { QueryParams } from '@/types';

const orderingMap = {
    '-can_apply': '-partner',
    'rank': 'name',
    'discounted_price': 'fees.real',
    '-discounted_price': '-fees.real',
} as const;

type OrderingMapKey = keyof typeof orderingMap;

const createSortString = (orderingParam: QueryParams['ordering'] | null): string => {
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
