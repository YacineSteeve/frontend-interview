import type { FunctionComponent } from 'react';

type PaginatorProps = {
    currentPage: number;
    totalPages: number;
};

const Paginator: FunctionComponent<PaginatorProps> = ({ currentPage, totalPages }) => {
    return (
        <div className="flex justify-center gap-4">
            {
                Array.from(Array(totalPages).keys()).map((num) => {
                    return (
                        <button
                            key={num}
                            className={
                                `w-10 h-10 rounded-full border border-gray-300 
                                ${
                        num + 1 === currentPage
                            ? 'bg-blue-500 text-white'
                            : 'bg-white'
                        }`
                            }
                        >
                            {num + 1}
                        </button>
                    );
                })
            }
        </div>
    );
};

export default Paginator;
