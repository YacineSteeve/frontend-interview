import type { ReactNode } from 'react';
import type { ListResult, RecordModel } from 'pocketbase';
import {
    countries,
    universityTypes,
    campusTypes,
    educationTypes,
    grades,
    feesTypes,
} from '@/utils/contants';

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
    | 'provider_type'
    | 'grade_type'
    | 'education_type'
    | 'campus_type'
    | 'education_language'
    | 'fees_type';

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
    campus: (typeof campusTypes)[number];
    educationType: (typeof educationTypes)[number];
    grade: (typeof grades)[number];
    language: (typeof countries)[number];
    university: {
        name: string;
        picture: string;
        type: (typeof universityTypes)[number];
        country: (typeof countries)[number];
    };
    fees: {
        real: number;
        discounted: number | null;
        currency: 'TRY' | 'USD' | 'EUR';
        type: (typeof feesTypes)[number];
    };
};

export type ProgramListResult = ListResult<Program>;

export type ResultItem<T> = RecordModel & T;
