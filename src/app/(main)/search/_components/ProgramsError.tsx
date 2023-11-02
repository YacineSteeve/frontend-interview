import type { FunctionComponent } from 'react';

const ProgramsError: FunctionComponent = () => {
    return (
        <div className="flex justify-center items-center h-fit my-10">
            <p className="text-lightblack">
                Something went wrong. Please try again later.
            </p>
        </div>
    );
};

export default ProgramsError;
