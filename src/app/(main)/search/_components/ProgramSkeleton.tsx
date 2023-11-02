import type { FunctionComponent } from 'react';

const ProgramSkeleton: FunctionComponent = () => {
    return (
        <div className="flex p-5 w-full h-fit bg-white shadow-lg rounded-2xl border border-gray-300 flex-row gap-8">
            <div className="ml-3 w-auto h-auto min-w-[250px] min-h-[190px] rounded-2xl bg-gray-200 animate-pulse"></div>
            <div
                className="flex flex-col gap-2 flex-1 child:bg-gray-200 child:animate-pulse child:rounded-md child:h-7">
                <div className="w-3/4"></div>
                <div className="w-1/3"></div>
                <div className="w-1/2"></div>
                <div className="w-3/4"></div>
                <div className="w-1/5"></div>
            </div>
        </div>
    );
};

export default ProgramSkeleton;
