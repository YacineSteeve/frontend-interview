import type { FunctionComponent } from 'react';
import type { SearchParams } from '@/types';
import SortBy from '@components/SortBy';
import SearchBar from '@components/SearchBar';
import Program from '@components/Program';

type ProgramsProps = {
    filters: SearchParams;
};

const Programs: FunctionComponent<ProgramsProps> = ({ filters }) => {
    const programs = [1, 2, 3, 4, 5];
    console.log(filters);

    return (
        <section className="flex flex-col w-3/4">
            <div className="flex justify-between items-start h-14">
                <p className="text-md">
                    We found 6 programs for you
                </p>
                <SortBy/>
            </div>
            <div className="flex flex-col gap-6">
                <SearchBar />
                {
                    programs.map((program, index) => (
                        <Program key={index} id={program} />
                    ))
                }
            </div>
        </section>
    );
};

export default Programs;
