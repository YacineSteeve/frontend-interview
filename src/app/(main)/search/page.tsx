import { Fragment } from 'react';
import type { NextPage, Metadata } from 'next';
import { redirect } from 'next/navigation';
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

const SearchPage: NextPage<SearchPageProps> = ({ searchParams }) => {
    if (!searchParams.limit || !searchParams.ordering) {
        redirect('/search/?' + new URLSearchParams(defaultSearchParams).toString());
    }

    return (
        <Fragment>
            <div className="flex flex-col mb-10 text-lightblack text-5xl">
                Find Your Dream Programs
            </div>
            <div className="flex gap-6 w-full">
                <Filters params={searchParams}/>
                <Programs paramsString={JSON.stringify(searchParams)}/>
            </div>
        </Fragment>
    );
};

export default SearchPage;
