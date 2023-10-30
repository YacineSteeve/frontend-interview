import type { FunctionComponent, MouseEvent } from 'react';

type CardButtonProps = {
    label: string;
    onClick: () => void;
};

const CardButton: FunctionComponent<CardButtonProps> = ({ label, onClick }) => {
    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        onClick();
    };

    return (
        <button
            onClick={handleClick}
            className="w-full text-white text-sm py-2 rounded-2xl bg-blue-600 hover:bg-blue-700"
        >
            {label}
        </button>
    );
};

export default CardButton;
