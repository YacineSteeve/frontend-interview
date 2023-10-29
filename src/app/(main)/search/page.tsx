import { Fragment } from 'react';
import type { NextPage } from 'next';
import type { SearchParams } from '@/types';
import Filters from '@components/Filters';
import Programs from '@components/Programs';

type SearchPageProps = {
    searchParams: SearchParams
};

const SearchPage: NextPage<SearchPageProps> = ({ searchParams }) => {
    return (
        <Fragment>
            <div className="flex flex-col mb-10 text-lightblack text-5xl">
                Find Your Dream Programs
            </div>
            <div className="flex gap-6 w-full">
                <Filters/>
                <Programs filters={searchParams}/>
            </div>
        </Fragment>
    );
};

export default SearchPage;
