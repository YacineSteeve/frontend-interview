'use client';

import type {FunctionComponent} from 'react';
import type { Option } from '@/types';
import { useToggle } from '@/hooks';
import Select from '@components/Select';

const Language: FunctionComponent = () => {
    const languages: Option[] = [
        {
            label: 'Türkçe',
            value: 'tr',
        },
        {
            label: 'English',
            value: 'en',
        },
        {
            label: 'Français',
            value: 'fr',
        }
    ];

    const [showLanguages, toggleLanguages] = useToggle(false);

    return (
        <div
            onClick={toggleLanguages}
            className="relative p-2 rounded-full cursor-pointer hover:bg-black hover:bg-opacity-5"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                width="35"
                height="35"
                viewBox="0 0 24 24"
                fill="currentColor"
            >
                <path
                    fill="currentColor"
                    d="M11 1H3c-1.1 0-2 .9-2 2v12l3-3h5v-1c0-2.2 1.79-4 4-4V3c0-1.1-.9-2-2-2m0 3H9.5c-.34 1.19-.96 2.3-1.82 3.26l-.02.02l1.26 1.25l-.37 1.01L7 8l-2.5 2.5l-.69-.73l2.53-2.49A8.58 8.58 0 0 1 4.86 5h.99c.31.6.69 1.17 1.15 1.68A7.69 7.69 0 0 0 8.57 4H3V3h3.5V2h1v1H11v1m10 5h-8c-1.1 0-2 .9-2 2v7c0 1.1.9 2 2 2h7l3 3V11c0-1.1-.9-2-2-2m-1.37 10l-.85-2.25h-3.56L14.38 19h-1.5l3.37-9h1.5l3.38 9h-1.5M17 12l1.22 3.25h-2.43L17 12Z"
                ></path>
            </svg>
            <Select
                visible={showLanguages}
                options={languages}
                selected={languages[1] as Option}
                onSelect={toggleLanguages}
            />
        </div>
    );
};

export default Language;
