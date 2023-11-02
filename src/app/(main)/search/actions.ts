'use server';

import type { SearchParams, ProgramListResult, ResultItem, Program } from '@/types';
import { defaultSearchParams } from '@/utils/contants';
import databaseClient from '@/database/client';
import createSortString from '@/utils/create-sort-string';
import createFilterString from '@/utils/create-filter-string';

const uselessFields = ['collectionId', 'collectionName', 'created', 'updated', 'id'] as const;

type ProgramItem = ResultItem<Program>;

const hasExpand = (item: ProgramItem): item is ProgramItem & { expand: Record<string, unknown> } => {
    return Object.keys(item).some((key) => key === 'expand');
};

export async function fetchPrograms(params: SearchParams): Promise<ProgramListResult> {
    console.log('fetchPrograms', params);
    const perPage = parseInt(params.limit || defaultSearchParams.limit);
    const page = 1 + (parseInt(params.offset || '0') / perPage);

    const data = await databaseClient.collection('programs').getList<ProgramItem>(page, perPage, {
        expand: 'fees,university',
        sort: createSortString(params.ordering),
        filter: createFilterString(params),
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
