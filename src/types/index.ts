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
