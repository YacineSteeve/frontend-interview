import { Fragment } from 'react';
import type { NextPage, Metadata } from 'next';
import { redirect } from 'next/navigation';
import { defaultSearchParams } from '@/utils/contants';
import type { QueryParams } from '@/types';
import { FiltersWrapper, SearchBar, Programs } from './_components';

export function generateMetadata(): Metadata {
    return {
        title: 'Askuni | Find Your Dream Programs',
        description: 'Find your dream programs for better future.',
    };
}

interface SearchPageProps {
    searchParams: QueryParams
}

const SearchPage: NextPage<SearchPageProps> = ({ searchParams }) => {
    if (!searchParams.limit || !searchParams.ordering) {
        redirect('/search/?' + new URLSearchParams(defaultSearchParams).toString());
    }

    return (
        <Fragment>
            <div className="flex flex-col mb-12 text-lightblack text-4xl text-center w-full md:text-5xl">
                Find Your Dream Programs
            </div>
            <div className="relative flex flex-wrap w-full">
                <FiltersWrapper initialQueryParams={searchParams}/>
                <section className="flex flex-col flex-1 px-3 lg:px-0 lg:ml-6">
                    <SearchBar initialQuery={searchParams.query}/>
                    <Programs queriesString={JSON.stringify(searchParams)}/>
                </section>
            </div>
        </Fragment>
    );
};

export default SearchPage;
