import type { FunctionComponent, MouseEvent } from 'react';

interface CardButtonProps {
    label: string;
    onClick: () => void;
}

const CardButton: FunctionComponent<CardButtonProps> = ({ label, onClick }) => {
    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        onClick();
    };

    return (
        <button
            onClick={handleClick}
            className="w-full text-white text-sm py-2 rounded-2xl bg-lightblue hover:bg-darkblue"
        >
            {label}
        </button>
    );
};

export default CardButton;
