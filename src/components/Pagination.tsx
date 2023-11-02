'use client';

import { Fragment } from 'react';
import type { FunctionComponent, MouseEvent } from 'react';
import { useSearchParamUpdate } from '@/hooks';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    step: number;
}

const Pagination: FunctionComponent<PaginationProps> = ({ currentPage, step }) => {
    const totalPages = 10;
    const updateOffset = useSearchParamUpdate('offset');

    const handlePageChange = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        updateOffset([`${(parseInt(event.target.textContent) - 1) * step}`]);
    };

    const handlePreviousPage = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        if (currentPage === 1) {
            return;
        }

        updateOffset([`${(currentPage - 2) * step}`]);
    };

    const handleNextPage = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        if (currentPage === totalPages) {
            return;
        }

        updateOffset([`${(currentPage) * step}`]);
    };

    return (
        <div className="flex justify-center items-center gap-1 w-full h-fit child:flex child:justify-center child:items-center child:h-8 child:aspect-square child:rounded-full child:cursor-pointer child-hover:bg-gray-200">
            {
                currentPage > 1 &&
                    <Fragment>
                        <button onClick={handlePreviousPage}>
                            <svg
                                className="h-5 w-5 transform rotate-180"
                                xmlns="http://www.w3.org/2000/svg"
                                focusable="false"
                                aria-hidden="true"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                            >
                                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
                            </svg>
                        </button>
                        <button onClick={handlePageChange}>1</button>
                    </Fragment>
            }
            {
                currentPage > 2 && <span>...</span>
            }
            <button className="border" onClick={handlePageChange}>{currentPage}</button>
            {
                currentPage < totalPages - 1 && <span>...</span>
            }
            {
                currentPage < totalPages &&
                    <Fragment>
                        <button onClick={handlePageChange}>{totalPages}</button>
                        <button onClick={handleNextPage}>
                            <svg
                                className="h-5 w-5"
                                xmlns="http://www.w3.org/2000/svg"
                                focusable="false"
                                aria-hidden="true"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                            >
                                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
                            </svg>
                        </button>
                    </Fragment>
            }
        </div>
    );
};

export default Pagination;
