import { NextRequest, NextResponse } from 'next/server';
import type { Program } from '@/types';
import repository from './lib/repository';
import createSortString from './lib/create-sort-string';
//import createFilterString from './lib/create-filter-string';

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const perPage = parseInt(searchParams.get('limit') || '10');

    const response = await repository.collection('programs').getList<Program>(1, perPage, {
        expand: 'fees,university',
        sort: createSortString(searchParams.get('ordering')),
        //filter: createFilterString(searchParams),
    });

    return NextResponse.json(response);
}
