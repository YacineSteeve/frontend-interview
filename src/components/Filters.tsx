import type { FunctionComponent } from 'react';
import type { Filter, SearchParams } from '@/types';
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
import FilterInput  from '@components/FilterInput';
import Card from '@components/Card';
import ClearButton from '@components/ClearButton';

const filters: Filter[] = [
    {
        label: 'Country',
        value: 'country',
        options: buildFilterOptions(countries)
    },
    {
        label: 'University Type',
        value: 'providerType',
        options: buildFilterOptions(universityTypes)
    },
    {
        label: 'Grade Type',
        value: 'gradeType',
        options: buildFilterOptions(grades)
    },
    {
        label: 'Education Type',
        value: 'educationType',
        options: buildFilterOptions(educationTypes)
    },
    {
        label: 'Campus Type',
        value: 'campusType',
        options: buildFilterOptions(campusTypes)
    },
    {
        label: 'Education Language',
        value: 'educationLanguage',
        options: buildFilterOptions(languages)
    },
    {
        label: 'Fees Type',
        value: 'feesType',
        options: buildFilterOptions(feesTypes)
    },
];

interface FiltersProps {
    params: SearchParams
}

const Filters: FunctionComponent<FiltersProps> = ({ params }) => {
    return (
        <section className="flex flex-col w-1/4 h-fit">
            <div className="flex h-14">
                <p className="text-2xl">
                    Filters
                </p>
            </div>
            <Card orientation="vertical">
                {
                    filters.map((filter) => {
                        const initialParams = params[filter.value];

                        return <FilterInput
                            key={filter.value}
                            filter={filter}
                            initialFilterParams={initialParams ? initialParams.split(',') : []}
                        />;
                    })
                }
                <ClearButton />
            </Card>
        </section>
    );
};

export default Filters;
