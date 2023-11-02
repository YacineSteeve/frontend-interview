import type { FunctionComponent, PropsWithChildren } from 'react';

interface CardProps extends PropsWithChildren<{
    orientation: 'horizontal' | 'vertical';
}> {}

const Card: FunctionComponent<CardProps> = ({ orientation, children }) => {
    return (
        <div
            className={`flex p-5 w-full h-fit bg-white shadow-lg rounded-2xl border border-gray-300 ${
                orientation === 'horizontal'
                    ? 'flex-row gap-8'
                    : 'flex-col gap-4'
            }`}
        >
            {children}
        </div>
    );
};

export default Card;
