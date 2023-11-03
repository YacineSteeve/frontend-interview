'use server';

import type { QueryParams, ProgramListResult, ResultItem, Program } from '@/types';
import { defaultSearchParams } from '@/utils/contants';
import databaseClient from '@/database/client';
import createSortString from '@/utils/create-sort-string';
import createFilterString from '@/utils/create-filter-string';

const uselessFields = ['collectionId', 'collectionName', 'created', 'updated', 'id'] as const;

type ProgramItem = ResultItem<Program>;

const hasExpand = (item: ProgramItem): item is ProgramItem & { expand: Record<string, unknown> } => {
    return Object.keys(item).some((key) => key === 'expand');
};

export async function fetchPrograms(queryParams: QueryParams): Promise<ProgramListResult> {
    const perPage = parseInt(queryParams.limit || defaultSearchParams.limit);
    const page = 1 + (parseInt(queryParams.offset || '0') / perPage);

    const data = await databaseClient.collection('programs').getList<ProgramItem>(page, perPage, {
        expand: 'fees,university',
        sort: createSortString(queryParams.ordering),
        filter: createFilterString(queryParams),
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
