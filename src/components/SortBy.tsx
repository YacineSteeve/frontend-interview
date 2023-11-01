'use client';

import type { FunctionComponent } from 'react';
import type { Option,SearchParams } from '@/types';
import { useToggleVisibility, useSearchParamUpdate } from '@/hooks';
import Select from '@components/Select';

const sortOptions: Option[] = [
    {label: 'Featured', value: 'rank'},
    {label: 'Low to High', value: 'discounted_price'},
    {label: 'High to Low', value: '-discounted_price'},
];

interface SortByProps {
    initialOrder: SearchParams['ordering'],
}

const SortBy: FunctionComponent<SortByProps> = ({ initialOrder }) => {
    const sortOption = sortOptions.find((option) => initialOrder.includes(option.value))
        || sortOptions[0] as Option;
    const updateSortParam = useSearchParamUpdate('ordering');
    const { ref, isVisible, setIsVisible } = useToggleVisibility<HTMLButtonElement>(false);

    const chooseSort = (option: Option) => {
        setIsVisible(false);
        updateSortParam(['-can_apply', option.value]);
    };

    return (
        <button
            ref={ref}
            onClick={() => setIsVisible((prevIsVisible) => !prevIsVisible)}
            className="relative flex justify-evenly w-fit text-lightblack p-1.5 pl-4 rounded-2xl border-1 border-gray-200 outline outline-1 outline-gray-300 hover:outline-black focus:outline-2 focus:outline-blue-700"
        >
            {sortOption.label}
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
                selected={[sortOption]}
                onSelect={chooseSort}
            />
        </button>
    );
};

export default SortBy;
