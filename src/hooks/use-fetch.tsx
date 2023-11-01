import type { SearchParams, ProgramListResult, ResultItem } from '@/types';

const uselessFields = ['collectionId', 'collectionName', 'created', 'updated', 'id'] as const;

const hasExpand = (item: ResultItem): item is ResultItem & { expand: Record<string, unknown> } => {
    return Object.keys(item).some((key) => key === 'expand');
};

export async function useFetch(params: SearchParams): Promise<ProgramListResult> {
    const response = await fetch(
        `http://localhost:3000/api/?${new URLSearchParams(params).toString()}`,
        { cache: 'no-cache' }
    );

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message);
    }

    data.items = data.items.map((item: ResultItem) => {
        uselessFields.forEach((field) => delete item[field]);

        if (hasExpand(item)) {
            Object.keys(item.expand).forEach((key) => {
                item[key] = item.expand[key];
            });

            item.expand = {};
        }

        return item;
    });

    return data;
}
