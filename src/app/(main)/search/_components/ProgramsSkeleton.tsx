import { Fragment } from 'react';
import type { FunctionComponent } from 'react';
import { defaultSearchParams } from '@/utils/contants';
import ProgramSkeleton from './ProgramSkeleton';


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

export default ProgramsSkeleton;
