import type { ReactNode } from 'react';

export type SearchParams = {
    limit: number,
    ordering: string,
} & Partial<{
    offset: number,
    country: number,
    providerType: number,
    gradeType: number,
    educationType: number,
    campusType: number,
    educationLanguage: number,
}>;

export type Option = {
    label: string;
    value: string;
};

export type ChipType = 'language' | 'duration' | 'grade' | 'education' | 'fees';

export type Chip = {
    color: string;
    icon: ReactNode;
}
