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
        <div className="flex p-5 flex-col gap-4 h-[calc(100vh - 80px)] overflow-y-scroll min-[1120px]:max-h-none min-[1120px]:overflow-y-auto">
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
            <ClearButton/>
        </div>
    );
};

export default Filters;
