import type { FunctionComponent } from 'react';
import type { Filter, QueryParams } from '@/types';
import {
    countries,
    universityTypes,
    grades,
    educationTypes,
    campusTypes,
    languages,
    feesTypes,
} from '@/utils/contants';
import { buildFilterOptions } from '@/utils/build-filter-options';
import FilterInput  from './FilterInput';
import ClearButton from './ClearButton';

const filters: Filter[] = [
    {
        label: 'Country',
        value: 'country',
        options: buildFilterOptions(countries)
    },
    {
        label: 'University Type',
        value: 'provider_type',
        options: buildFilterOptions(universityTypes)
    },
    {
        label: 'Grade Type',
        value: 'grade_type',
        options: buildFilterOptions(grades)
    },
    {
        label: 'Education Type',
        value: 'education_type',
        options: buildFilterOptions(educationTypes)
    },
    {
        label: 'Campus Type',
        value: 'campus_type',
        options: buildFilterOptions(campusTypes)
    },
    {
        label: 'Education Language',
        value: 'education_language',
        options: buildFilterOptions(languages)
    },
    {
        label: 'Fees Type',
        value: 'fees_type',
        options: buildFilterOptions(feesTypes)
    },
];

interface FiltersProps {
    queryParams: QueryParams
}

const Filters: FunctionComponent<FiltersProps> = ({ queryParams }) => {
    return (
        <section className="flex flex-col w-1/4 h-fit">
            <div className="flex h-14">
                <p className="text-2xl">
                    Filters
                </p>
            </div>
            <div className="flex p-5 w-full h-fit bg-white shadow-lg rounded-2xl border border-gray-300 flex-col gap-4 animate-translate-to-right">
                {
                    filters.map((filter) => {
                        const filterValues = queryParams[filter.value];

                        return <FilterInput
                            key={filter.value}
                            filter={filter}
                            initialValues={filterValues ? filterValues.split(',') : []}
                        />;
                    })
                }
                <ClearButton />
            </div>
        </section>
    );
};

export default Filters;
