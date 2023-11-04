'use client';

import { Fragment } from 'react';
import type { FunctionComponent } from 'react';
import { useToggleVisibility } from '@/hooks';
import type { QueryParams } from '@/types';
import SortBy from './SortBy';
import Filters from './Filters';

interface FiltersWrapperProps {
    initialQueryParams: QueryParams;
}

const FiltersWrapper: FunctionComponent<FiltersWrapperProps> = ({ initialQueryParams }) => {
    const { ref, isVisible, setIsVisible } = useToggleVisibility<HTMLDivElement>(false);

    return (
        <Fragment>
            <div className="flex w-full justify-between items-start h-16 px-3 lg:px-0 pt-2">
                <p className="hidden xl:block text-2xl">
                    Filters
                </p>
                <span className="hidden md:block xl:hidden"></span>
                <button
                    onClick={() => setIsVisible(true)}
                    className="relative flex justify-evenly items-center gap-2 w-fit text-blue-500 px-3 py-1.5 rounded-xl outline outline-1 outline-blue-500 hover:bg-blue-50 focus:bg-blue-50 xl:hidden">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        role="img"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                    >
                        <path fill="currentColor"
                            d="m12.2 13l-.9.9q-.275.275-.275.7t.275.7q.275.275.7.275t.7-.275l2.6-2.6q.3-.3.3-.7t-.3-.7l-2.6-2.6q-.275-.275-.7-.275t-.7.275q-.275.275-.275.7t.275.7l.9.9H9q-.425 0-.713.288T8 12q0 .425.288.713T9 13h3.2Zm-.2 9q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Zm0-2q3.35 0 5.675-2.325T20 12q0-3.35-2.325-5.675T12 4Q8.65 4 6.325 6.325T4 12q0 3.35 2.325 5.675T12 20Zm0-8Z"></path>
                    </svg>
                    FILTERS
                </button>
                <SortBy initialOrder={initialQueryParams.ordering}/>
            </div>
            <section
                className={`fixed top-0 z-30 xl:z-auto xl:relative xl:flex flex-col w-screen xl:w-1/4 h-screen xl:h-fit bg-black bg-opacity-50 xl:bg-inherit lg:-translate-x-[10vw] xl:translate-x-0 ${
                    isVisible
                        ? ''
                        : 'hidden'
                }`}>
                <div
                    ref={ref}
                    className="w-3/4 max-w-max xl:w-full h-screen xl:h-fit bg-white shadow-lg xl:rounded-2xl border border-gray-300 xl:animate-translate-to-right">
                    <div
                        className="flex justify-between items-center h-20 px-5 text-xl text-lightblack bg-gray-100 xl:hidden">
                        Filter
                        <svg
                            onClick={() => setIsVisible(false)}
                            className="p-1 cursor-pointer rounded-full hover:bg-gray-200"
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
                    </div>
                    <Filters queryParams={initialQueryParams}/>
                </div>
            </section>
        </Fragment>
    );
};

export default FiltersWrapper;
