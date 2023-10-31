import type { FunctionComponent } from 'react';
import type { Filter, Option } from '@/types';
import FilterInput  from '@components/FilterInput';
import Card from '@components/Card';
import ClearButton from '@components/ClearButton';

const countries: Option[] = [
    {value: 'United States', label: 'United States'},
    {value: 'Turkey', label: 'Turkey'},
    {value: 'United Kingdom', label: 'United Kingdom'},
    {value: 'Canada', label: 'Canada'},
    {value: 'Australia', label: 'Australia'},
];

const filters: Filter[] = [
    {
        label: 'Country',
        value: 'country',
        options: countries
    },
    {
        label: 'University Type',
        value: 'providerType',
        options: countries
    },
    {
        label: 'Grade Type',
        value: 'gradeType',
        options: countries
    },
    {
        label: 'Education Type',
        value: 'educationType',
        options: countries
    },
    {
        label: 'Campus Type',
        value: 'campusType',
        options: countries
    },
    {
        label: 'Education Language',
        value: 'educationLanguage',
        options: countries
    },
];

const Filters: FunctionComponent = () => {
    return (
        <section className="flex flex-col w-1/4 h-fit">
            <div className="flex h-14">
                <p className="text-2xl">
                    Filters
                </p>
            </div>
            <Card orientation="vertical">
                {
                    filters.map((filter) => (
                        <FilterInput key={filter.value} filter={filter} />
                    ))
                }
                <ClearButton />
            </Card>
        </section>
    );
};

export default Filters;
