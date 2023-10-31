import type { ReactNode } from 'react';

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
}
