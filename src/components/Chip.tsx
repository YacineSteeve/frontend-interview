import type { FunctionComponent } from 'react';

type ChipProps = {
    label: string;
    type: string;
};

const Chip: FunctionComponent<ChipProps> = ({ label, type }) => {
    console.log(type);
    return (
        <span className="flex items-center justify-center text-sm px-2 rounded-md border">
            {label}
        </span>
    );
};

export default Chip;
