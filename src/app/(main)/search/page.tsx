import { Fragment } from 'react';
import type { NextPage, Metadata } from 'next';
import { redirect } from 'next/navigation';
import { fetchPrograms } from './actions';
import { defaultSearchParams } from '@/utils/contants';
import type { SearchParams } from '@/types';
import { Filters, Programs } from './_components';

export function generateMetadata(): Metadata {
    return {
        title: 'Askuni | Find Your Dream Programs',
        description: 'Find your dream programs for better future.',
    };
}

interface SearchPageProps {
    searchParams: SearchParams
}

const SearchPage: NextPage<SearchPageProps> = async ({ searchParams }) => {
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
