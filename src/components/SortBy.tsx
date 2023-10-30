'use client';

import { useState } from 'react';
import type { FunctionComponent } from 'react';
import type { Option } from '@/types';
import { useToggleVisibility } from '@/hooks';
import Select from '@components/Select';

const SortBy: FunctionComponent = () => {
    const sortOptions: Option[] = [
        { label: 'Featured', value: 'featured' },
        { label: 'Low to High', value: 'low-to-high' },
        { label: 'High to Low', value: 'high-to-low' },
    ];

    const [sort, setSort] = useState<Option>(sortOptions[0] as Option);
    const { ref, isVisible, setIsVisible } = useToggleVisibility<HTMLButtonElement>(false);

    const chooseSort = (option: Option) => {
        setSort(option);
        setIsVisible(false);
    };

    return (
        <button
            ref={ref}
            onClick={() => setIsVisible((prevIsVisible) => !prevIsVisible)}
            className="relative flex justify-evenly w-fit text-lightblack p-1.5 pl-4 rounded-2xl border-1 border-gray-200 outline outline-1 outline-gray-300 hover:outline-black focus:outline-2 focus:outline-blue-700"
        >
            {sort.label}
            <svg
                className="text-xs text-gray-500"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="currentColor"
                color="currentColor"
            >
                <path d="M7 10l5 5 5-5z"></path>
            </svg>
            <Select
                visible={isVisible}
                options={sortOptions}
                selected={[sort]}
                onSelect={chooseSort}
            />
        </button>
    );
};

export default SortBy;
