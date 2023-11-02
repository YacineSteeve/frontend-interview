'use client';

import { useEffect, useState, Fragment, Suspense } from 'react';
import type { FunctionComponent } from 'react';
import type { SearchParams, ProgramListResult } from '@/types';
import { fetchPrograms } from '../actions';
import { defaultSearchParams } from '@/utils/contants';
import Program from './Program';
import ProgramSkeleton from './ProgramSkeleton';
import Pagination from './Pagination';

interface ProgramsProps {
    paramsString: string;
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

const Programs: FunctionComponent<ProgramsProps> = ({ paramsString }) => {
    const params: SearchParams = JSON.parse(paramsString);

    const [paginatedPrograms, setPaginatedPrograms] = useState<ProgramListResult>({
        page: 1,
        perPage: parseInt(params.limit),
        totalPages: 1,
        totalItems: 0,
        items: [],
    });

    useEffect(() => {
        (async () => {
            setPaginatedPrograms(await fetchPrograms(JSON.parse(paramsString)));
        })();
    }, [paramsString]);

    const programs = paginatedPrograms.items;
    const totalNumberOfPrograms = paginatedPrograms.totalItems;

    return (
        <Fragment>
            <p className="absolute top-0 left-0 text-md">
                We found&nbsp;
                <Suspense fallback={<NumberOfProgramsSkeleton/>}>
                    {totalNumberOfPrograms} program{totalNumberOfPrograms > 1 && 's'}
                </Suspense>&nbsp;
                for you
            </p>
            <div className="flex flex-col gap-6 mt-6 animate-translate-to-left">
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
        </Fragment>
    );
};

export default Programs;
