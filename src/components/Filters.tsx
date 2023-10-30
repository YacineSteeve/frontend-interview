'use client';

import type { FunctionComponent } from 'react';
import type { Option } from '@/types';
import FilterInput  from '@components/FilterInput';
import Card from '@components/Card';
import CardButton from '@components/CardButton';

const Filters: FunctionComponent = () => {
    const countries: Option[] = [
        {value: 'United States', label: 'United States'},
        {value: 'Turkey', label: 'Turkey'},
        {value: 'United Kingdom', label: 'United Kingdom'},
        {value: 'Canada', label: 'Canada'},
        {value: 'Australia', label: 'Australia'},
    ];

    return (
        <section className="flex flex-col w-1/4 h-fit">
            <div className="flex h-14">
                <p className="text-2xl">
                    Filters
                </p>
            </div>
            <Card orientation="vertical">
                <FilterInput label="Country" options={countries}/>
                <FilterInput label="University Type" options={countries}/>
                <FilterInput label="Grade Type" options={countries}/>
                <FilterInput label="Education Type" options={countries}/>
                <FilterInput label="Campus Type" options={countries}/>
                <FilterInput label="Education Language" options={countries}/>
                <CardButton label="CLEAR FILTERS" onClick={() => alert('Successfully cleared filters !')}/>
            </Card>
        </section>
    );
};

export default Filters;
