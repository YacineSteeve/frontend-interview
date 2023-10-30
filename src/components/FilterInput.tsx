'use client';

import { useState, useEffect } from 'react';
import type { FunctionComponent, ChangeEvent } from 'react';
import { useToggleVisibility } from '@/hooks';
import type { Option } from '@/types';
import Select from '@components/Select';

type FilterInputProps = {
    label: string;
    options: Option[];
};

const FilterInput: FunctionComponent<FilterInputProps> = ({ label, options }) => {
    const [filteredOptions, setFilteredOptions] = useState<Option[]>(options);
    const [selectedOptions, setSelectedOptions] = useState<Option[]>([]);
    const [optionSearch, setOptionSearch] = useState<string>('');
    const { ref, isVisible, setIsVisible } = useToggleVisibility<HTMLDivElement>(false);

    const selectFilter = (option: Option) => {
        setIsVisible(false);
        setOptionSearch('');

        if (selectedOptions.find((selected) => selected.value === option.value)) {
            removeFilter(option);
            return;
        }

        setSelectedOptions((prevSelected) => [...prevSelected, option]);
    };

    const removeFilter = (option: Option) => {
        setSelectedOptions((prevSelected) => prevSelected.filter((selected) => selected.value !== option.value));
    };

    const clearFilters = () => {
        setSelectedOptions([]);
    };

    const handleOptionSearch = (event: ChangeEvent<HTMLInputElement>) => {
        setOptionSearch(event.target.value);
    };

    useEffect(() => {
        setFilteredOptions(options.filter((option) => {
            return option.label.toLowerCase().includes(optionSearch.toLowerCase());
        }));
    }, [optionSearch, options]);

    return (
        <div className="flex flex-col gap-1.5 w-full h-fit">
            <p className="w-full h-fit text-lightblack">{label}</p>
            <div
                ref={ref}
                className="relative flex"
            >
                <input
                    id={`select-${label}`}
                    type="text"
                    value={optionSearch}
                    onChange={handleOptionSearch}
                    onFocus={() => setIsVisible(true)}
                    className="peer w-full h-full min-h-[40px] pl-4 pr-16 text-lightblack rounded-md border-1 border-gray-200 outline outline-1 outline-gray-300 hover:outline-black focus:outline-2 focus:outline-blue-500"
                />
                <label
                    htmlFor={`select-${label}`}
                    className={`absolute flex items-center p-1 h-1/2 bg-white left-4 peer-focus:text-blue-500 ${
                        selectedOptions.length > 0
                            ? 'text-xs -top-1/4'
                            : 'top-1/4 peer-focus:text-xs peer-focus:-top-1/4'
                    }`}
                >
                    Select {label}
                </label>
                <div className="absolute top-2 left-2 flex flex-wrap gap-2 w-fit h-full pointer-events-none mr-16">
                    {
                        selectedOptions.map((option) => (
                            <span
                                key={option.value}
                                className="flex justify-evenly items-center gap-1 p-1 text-lightblack text-xs w-fit h-fit rounded-2xl bg-gray-100 pointer-events-auto"
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
                <div className="absolute bottom-1/4 right-2 h-1/2 flex items-center gap-1 text-gray-500 child:cursor-pointer child:rounded-full child-hover:bg-gray-100">
                    <svg
                        className={`p-1 ${selectedOptions.length > 0 ? 'block' : 'hidden'}`}
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
                        className=""
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
        </div>
    );
};

export default FilterInput;
