'use client';

import { useState, useEffect } from 'react';
import type { FunctionComponent, ChangeEvent } from 'react';
import { useToggleVisibility, useSearchParamUpdate } from '@/hooks';
import type { Filter, Option } from '@/types';
import Select from '@components/Select';

type FilterInputProps = {
    filter: Filter;
};

const FilterInput: FunctionComponent<FilterInputProps> = ({ filter }) => {
    const [filteredOptions, setFilteredOptions] = useState<Option[]>(filter.options);
    const [optionSearch, setOptionSearch] = useState<string>('');
    const [initialSearchParam, setSearchParam] = useSearchParamUpdate(filter.value);
    const [selectedOptions, setSelectedOptions] = useState<Option[]>(
        filter.options.filter((option) => initialSearchParam.includes(option.value))
    );
    const { ref, isVisible, setIsVisible } = useToggleVisibility<HTMLDivElement>(false);

    const updateSearchParam = (selectedOptions: Option[]) => {
        setSelectedOptions(selectedOptions);
        setSearchParam(selectedOptions.map((option) => option.value));
    };

    const selectFilter = (option: Option) => {
        setIsVisible(false);
        setOptionSearch('');

        if (selectedOptions.find((selected) => selected.value === option.value)) {
            removeFilter(option);
            return;
        }

        updateSearchParam([...selectedOptions, option]);
    };

    const removeFilter = (option: Option) => {
        updateSearchParam(selectedOptions.filter((selected) => selected.value !== option.value));
    };

    const clearFilters = () => {
        updateSearchParam([]);
    };

    const handleOptionSearch = (event: ChangeEvent<HTMLInputElement>) => {
        setOptionSearch(event.target.value);
    };

    useEffect(() => {
        setFilteredOptions(filter.options.filter((option) => {
            return option.label.toLowerCase().includes(optionSearch.toLowerCase());
        }));
    }, [optionSearch, filter]);

    return (
        <div className="relative flex flex-col gap-2 w-full h-fit">
            <p className="w-full h-fit text-lightblack">{filter.label}</p>
            <div
                ref={ref}
                tabIndex={0}
                className="peer group relative flex flex-col min-h-[40px] rounded-md border-1 border-gray-200 outline outline-1 outline-gray-300 hover:cursor-text hover:outline-black focus-within:outline-2 focus-within:!outline-blue-500"
            >
                <div className={`flex flex-wrap gap-2 w-fit h-full pointer-events-none mr-16 ${
                    selectedOptions.length > 0
                        ? 'p-2'
                        : 'hidden'
                }`}>
                    {
                        selectedOptions.map((option) => (
                            <span
                                key={option.value}
                                className="flex justify-evenly items-center gap-1 p-1 text-lightblack text-sm w-fit h-fit rounded-2xl bg-gray-100 pointer-events-auto"
                            >
                                {option.label}
                                <svg
                                    className="text-white p-0.5 cursor-pointer rounded-full bg-gray-400"
                                    onClick={() => removeFilter(option)}
                                    focusable="false"
                                    aria-hidden="true"
                                    viewBox="0 0 24 24"
                                    width="15"
                                    height="15"
                                    fill="currentColor"
                                    color="currentColor"
                                >
                                    <path
                                        d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
                                </svg>
                            </span>
                        ))
                    }
                </div>
                <input
                    id={`select-${filter.label}`}
                    type="text"
                    value={optionSearch}
                    onChange={handleOptionSearch}
                    onFocus={() => setIsVisible(true)}
                    className={`pl-4 text-lightblack rounded-md focus:outline-none ${
                        selectedOptions.length > 0
                            ? 'h-0 pr-4 focus:h-10 focus:my-2 focus:mx-auto focus:w-11/12 focus:bg-gray-100 group-focus:h-10 group-focus:bg-gray-100 group-focus:my-2 group-focus:mx-auto group-focus:w-11/12'
                            : 'h-10 pr-16'
                    }`}
                />
                <div
                    className="absolute bottom-1/4 right-2 h-1/2 flex items-center gap-1 text-gray-500 child:cursor-pointer child:rounded-full child-hover:bg-gray-100">
                    <svg
                        className={`p-1 z-10 ${selectedOptions.length > 0 ? 'block' : 'hidden'}`}
                        onClick={clearFilters}
                        focusable="false"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        width="26"
                        height="26"
                        fill="currentColor"
                        color="currentColor"
                    >
                        <path
                            d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
                    </svg>
                    <svg
                        onClick={() => setIsVisible((prevVisible) => !prevVisible)}
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
                </div>
                <Select
                    visible={isVisible}
                    options={filteredOptions}
                    selected={selectedOptions}
                    onSelect={selectFilter}
                />
            </div>
            <label
                htmlFor={`select-${filter.label}`}
                className={`absolute left-4 flex items-center px-1 h-fit bg-white pointer-events-none peer-focus-within:text-blue-500 ${
                    selectedOptions.length > 0
                        ? 'text-xs top-6'
                        : 'top-10 peer-focus-within:text-xs peer-focus-within:top-6'
                }`}
            >
                Select {filter.label}
            </label>
        </div>
    );
};

export default FilterInput;
