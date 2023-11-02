import { Fragment, Suspense } from 'react';
import type { FunctionComponent } from 'react';
import type { SearchParams, ProgramListResult } from '@/types';
import { defaultSearchParams } from '@/utils/contants';
import SortBy from './SortBy';
import SearchBar from './SearchBar';
import Program from './Program';
import ProgramSkeleton from './ProgramSkeleton';
import Pagination from './Pagination';

interface ProgramsProps {
    params: SearchParams;
    paginatedPrograms: ProgramListResult;
}

const NumberOfProgramsSkeleton: FunctionComponent = () => <Fragment>O program</Fragment>;

const ProgramsSkeleton: FunctionComponent = () => {
    return (
        <Fragment>
            {
                Array.from(Array(parseInt(defaultSearchParams.limit)).keys()).map((_, index) => (
                    <ProgramSkeleton key={index}/>
                ))
            }
        </Fragment>
    );
};

const Programs: FunctionComponent<ProgramsProps> = ({ params, paginatedPrograms }) => {
    const programs = paginatedPrograms.items;
    const totalNumberOfPrograms = paginatedPrograms.totalItems;

    return (
        <section className="flex flex-col w-3/4">
            <div className="flex justify-between items-start h-14">
                <p className="text-md">
                    We found&nbsp;
                    <Suspense fallback={<NumberOfProgramsSkeleton/>}>
                        {totalNumberOfPrograms} program{totalNumberOfPrograms > 1 && 's'}
                    </Suspense>&nbsp;
                    for you
                </p>
                <SortBy initialOrder={params.ordering}/>
            </div>
            <div className="flex flex-col gap-6 animate-translate-to-left">
                <SearchBar initialQuery={params.query}/>
                <Suspense fallback={<ProgramsSkeleton/>}>
                    {
                        programs.length > 0 &&
                        programs.map((program, index) => (
                            <Program key={index} program={program}/>
                        ))
                    }
                </Suspense>
                <Pagination
                    currentPage={params.offset ? 1 + Math.ceil(parseInt(params.offset) / parseInt(params.limit)) : 1}
                    totalPages={Math.ceil(totalNumberOfPrograms / parseInt(params.limit))}
                    step={parseInt(params.limit || defaultSearchParams.limit)}
                />
            </div>
        </section>
    );
};

export default Programs;
