import type { FunctionComponent } from 'react';
import type { Chip, ChipType } from '@/types';
import {
    GradeIcon,
    DurationIcon,
    EducationIcon,
    FeesIcon,
    LanguageIcon,
} from '@components/chip-icon';

const chips: Record<ChipType, Chip> = {
    grade: {
        color: 'border-purple-800 text-purple-800',
        icon: <GradeIcon />,
    },
    language: {
        color: 'border-green-700 text-green-700',
        icon: <LanguageIcon />,
    },
    duration: {
        color: 'border-orange-400 text-orange-400',
        icon: <DurationIcon />,
    },
    education: {
        color: 'border-blue-500 text-blue-500',
        icon: <EducationIcon />,
    },
    fees: {
        color: 'border-green-700 text-green-700',
        icon: <FeesIcon />,
    },
};

interface ChipProps {
    label: string;
    type: ChipType;
}

const Chip: FunctionComponent<ChipProps> = ({ label, type }) => {
    return (
        <span className={`flex justify-center items-center gap-1 text-sm pl-1 pr-2 py-0.5 rounded-lg border ${chips[type].color}`}>
            {chips[type].icon}
            {label}
        </span>
    );
};

export default Chip;
