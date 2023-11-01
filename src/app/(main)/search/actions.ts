'use server';

import type { SearchParams, ProgramListResult, ResultItem, Program } from '@/types';
import databaseClient from '@/database/client';
import createSortString from '@/lib/create-sort-string';
//import createFilterString from './lib/create-filter-string';

const uselessFields = ['collectionId', 'collectionName', 'created', 'updated', 'id'] as const;

type ProgramItem = ResultItem<Program>;

const hasExpand = (item: ProgramItem): item is ProgramItem & { expand: Record<string, unknown> } => {
    return Object.keys(item).some((key) => key === 'expand');
};

export async function fetchPrograms(params: SearchParams): Promise<ProgramListResult> {
    const perPage = parseInt(params.limit || '10');

    const data = await databaseClient.collection('programs').getList<ProgramItem>(1, perPage, {
        expand: 'fees,university',
        sort: createSortString(params.ordering),
        //filter: createFilterString(searchParams),
    });

    data.items = data.items.map((item: ProgramItem) => {
        uselessFields.forEach((field) => delete item[field]);

        if (hasExpand(item)) {
            Object.keys(item.expand).forEach((key) => {
                item[key] = item.expand[key];
            });

            item.expand = {};
        }

        delete item.expand;

        return item;
    });

    return data as ProgramListResult;
}
