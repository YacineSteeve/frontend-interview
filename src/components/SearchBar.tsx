'use client';

import type { FunctionComponent } from 'react';

type SearchBarProps = {
    query: string;
};

const SearchBar: FunctionComponent<SearchBarProps> = ({ query }) => {
    return (
        <div className="relative">
            <input
                type="search"
                placeholder="Type Interested Program"
                value={query}
                onChange={() => console.log('Hello World!')}
                className="w-full h-14 pl-4 pr-12 rounded-2xl border-1 border-gray-200 outline outline-1 outline-gray-300 hover:outline-black focus:outline-2 focus:outline-blue-500"
            />
            <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-500"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
            >
                <path fill="currentColor"
                    d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14z"></path>
            </svg>
        </div>
    );
};

export default SearchBar;
