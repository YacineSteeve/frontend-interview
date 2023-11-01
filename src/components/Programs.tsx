import type { FunctionComponent } from 'react';
import type { SearchParams } from '@/types';
import { useFetch } from '@/hooks';
import SortBy from '@components/SortBy';
import SearchBar from '@components/SearchBar';
import Program from '@components/Program';

type ProgramsProps = {
    params: SearchParams
};

const Programs: FunctionComponent<ProgramsProps> = async ({ params }) => {
    const paginatedPrograms = await useFetch(params);
    const programs = paginatedPrograms.items;

    return (
        <section className="flex flex-col w-3/4">
            <div className="flex justify-between items-start h-14">
                <p className="text-md">
                    We found {programs.length} program{programs.length > 1 && 's'} for you
                </p>
                <SortBy />
            </div>
            <div className="flex flex-col gap-6">
                <SearchBar />
                {
                    programs.length > 0 &&
                        programs.map((program, index) => (
                            <Program key={index} program={program}/>
                        ))
                }
            </div>
        </section>
    );
};

export default Programs;
