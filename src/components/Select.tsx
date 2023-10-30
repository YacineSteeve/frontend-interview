import type { FunctionComponent, MouseEvent } from 'react';
import type { Option } from '@/types';

type SelectProps = {
    visible: boolean;
    options: Option[];
    selected: Option;
    onSelect: (option: Option) => void;
};

const Select: FunctionComponent<SelectProps> = ({ visible, options, selected, onSelect }) => {
    const handleSelect = (option: Option) => (event: MouseEvent<HTMLLIElement>) => {
        event.preventDefault();
        event.stopPropagation();
        onSelect(option);
    };

    return (
        <ul className={`absolute top-full left-0 w-full min-w-max h-fit py-2 bg-white shadow-xl rounded-md ${visible ? 'block' : 'hidden'}`}>
            {options.map((option) => (
                <li
                    key={option.value}
                    onClick={handleSelect(option)}
                    className={`flex justify-start items-center w-full h-fit px-4 py-1.5 text-lightblack text-left cursor-pointer hover:bg-gray-100 ${selected.value === option.value ? 'bg-blue-50' : ''}`}
                >
                    {option.label}
                </li>
            ))}
        </ul>
    );
};

export default Select;
