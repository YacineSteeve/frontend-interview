import { Fragment } from 'react';
import type { NextPage } from 'next';
import { redirect } from 'next/navigation';
import type { SearchParams } from '@/types';
import Filters from '@components/Filters';
import Programs from '@components/Programs';

type SearchPageProps = {
    searchParams: SearchParams
};

const SearchPage: NextPage<SearchPageProps> = ({ searchParams }) => {
    const defaultSearchParams: SearchParams = {
        limit: '10',
        ordering: '-can_apply,rank',
    };

    if (!searchParams.limit || !searchParams.ordering) {
        redirect('/search?' + new URLSearchParams(defaultSearchParams).toString());
    }

    return (
        <Fragment>
            <div className="flex flex-col mb-10 text-lightblack text-5xl">
                Find Your Dream Programs
            </div>
            <div className="flex gap-6 w-full">
                <Filters/>
                <Programs />
            </div>
        </Fragment>
    );
};

export default SearchPage;
