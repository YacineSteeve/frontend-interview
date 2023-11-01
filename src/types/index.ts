import type { ReactNode } from 'react';
import type { ListResult, RecordModel } from 'pocketbase';

export type Link = {
    label: string;
    href: string;
};

export type Option = {
    label: string;
    value: string;
};

export type OptionalFilter =
    | 'country'
    | 'providerType'
    | 'gradeType'
    | 'educationType'
    | 'campusType'
    | 'educationLanguage';

export type Filter = {
    label: string;
    value: OptionalFilter;
    options: Option[];
};

export type SearchParams = {
    limit: string;
    ordering: string;
} & Partial<{
    query: string;
    offset: string;
} & Record<OptionalFilter, string>>;

export type ChipType = 'language' | 'duration' | 'grade' | 'education' | 'fees';

export type Chip = {
    color: string;
    icon: ReactNode;
};

export type Program = {
    name: string;
    duration: number;
    partner: boolean;
    applicationDeadline: Date | null;
    season: string | null;
    campus: 'On' | 'Off';
    educationType: 'Full time' | 'Evening Period' | 'Online';
    grade: 'Associate degree' | 'Bachelor degree' | 'Master Non-Thesis' | 'Master With-Thesis' | 'Phd degree';
    language:
        | 'Turkish' | 'English' | 'Russian' | 'Arabic' | 'Spanish' | 'French' | 'German' | 'Chinese'
        | '30% English 70% Turkish' | '50% English 50% Turkish' | '30% Arabic 70% Turkish' | '30% German 70% Turkish';
    university: {
        name: string;
        picture: string;
        type: 'Private' | 'State';
        country: 'India' | 'Turkey' | 'Malaysia' | 'Ukraine' | 'Northern Cyprus' | 'Bosnia and Herzegovina';
    };
    fees: {
        real: number;
        discounted: number | null;
        currency: 'TRY' | 'USD' | 'EUR';
        type: 'Yearly' | 'Full Tuition';
    };
};

export type ProgramListResult = ListResult<Program>;

export type ResultItem<T> = RecordModel & T;
