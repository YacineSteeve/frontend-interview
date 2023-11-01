import { Fragment } from 'react';
import type { NextPage } from 'next';
import { redirect } from 'next/navigation';
import { fetchPrograms } from './actions';
import type { SearchParams } from '@/types';
import Filters from '@components/Filters';
import Programs from '@components/Programs';

interface SearchPageProps {
    searchParams: SearchParams
}

const SearchPage: NextPage<SearchPageProps> = async ({ searchParams }) => {
    const defaultSearchParams: SearchParams = {
        limit: '10',
        ordering: '-can_apply,rank',
    };

    if (!searchParams.limit || !searchParams.ordering) {
        redirect('/search/?' + new URLSearchParams(defaultSearchParams).toString());
    }

    const programs = await fetchPrograms(searchParams);

    return (
        <Fragment>
            <div className="flex flex-col mb-10 text-lightblack text-5xl">
                Find Your Dream Programs
            </div>
            <div className="flex gap-6 w-full">
                <Filters params={searchParams}/>
                <Programs params={searchParams} paginatedPrograms={programs}/>
            </div>
        </Fragment>
    );
};

export default SearchPage;
