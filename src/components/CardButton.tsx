import type { FunctionComponent } from 'react';

type CardButtonProps = {
    label: string;
};

const CardButton: FunctionComponent<CardButtonProps> = ({ label }) => {
    return (
        <button className="w-full text-white text-sm py-2 rounded-2xl bg-blue-600 hover:bg-blue-700">
            {label}
        </button>
    );
};

export default CardButton;
