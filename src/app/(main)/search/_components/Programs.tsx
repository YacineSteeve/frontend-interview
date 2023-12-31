'use client';

import { Fragment, Suspense } from 'react';
import type { FunctionComponent } from 'react';
import { useFetchPrograms } from '@/hooks';
import { fetchPrograms } from '../actions';
import { defaultSearchParams } from '@/utils/contants';
import Program from './Program';
import ProgramsSkeleton from './ProgramsSkeleton';
import ProgramsError from './ProgramsError';
import Pagination from './Pagination';

interface ProgramsProps {
    queriesString: string;
}

const Programs: FunctionComponent<ProgramsProps> = ({ queriesString }) => {
    const { paginatedPrograms, isLoading, errored, queryParams } = useFetchPrograms(queriesString, fetchPrograms);

    const programs = paginatedPrograms.items;
    const totalNumberOfPrograms = paginatedPrograms.totalItems;

    return (
        <Fragment>
            <p className="absolute bottom-full md:top-0 md:bottom-auto text-md">
                We found&nbsp;
                <Suspense fallback={<Fragment>O program</Fragment>}>
                    {totalNumberOfPrograms} program{totalNumberOfPrograms > 1 && 's'}
                </Suspense>
                &nbsp;for you
            </p>
            <div className="flex flex-col gap-6 mt-6 animate-translate-to-left">
                {
                    isLoading
                        ? <ProgramsSkeleton/>
                        : errored
                            ? <ProgramsError />
                            : programs.length > 0 &&
                                programs.map((program, index) => (
                                    <Program key={index} program={program}/>
                                ))
                }
                <Pagination
                    currentPage={queryParams.offset ? 1 + Math.ceil(parseInt(queryParams.offset) / parseInt(queryParams.limit)) : 1}
                    totalPages={Math.ceil(totalNumberOfPrograms / parseInt(queryParams.limit))}
                    step={parseInt(queryParams.limit || defaultSearchParams.limit)}
                />
            </div>
        </Fragment>
    );
};

export default Programs;
