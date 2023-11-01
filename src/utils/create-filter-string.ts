import type { SearchParams, OptionalFilter } from '@/types';
import {
    countries,
    universityTypes,
    grades,
    educationTypes,
    campusTypes,
    languages,
} from '@/utils/contants';

const paramFiltersMap: Record<OptionalFilter, readonly string[]> = {
    country: countries,
    providerType: universityTypes,
    gradeType: grades,
    educationType: educationTypes,
    campusType: campusTypes,
    educationLanguage: languages,
};

const fieldsQueryLookup = [
    'name',
    'season',
    'grade',
    'educationType',
    'language',
    'university.name',
    'university.country',
    'university.type',
    'fees.type',
];

const fieldsFilterMap: Record<OptionalFilter, string> = {
    country: 'university.country',
    providerType: 'university.type',
    gradeType: 'grade',
    educationType: 'educationType',
    campusType: 'campus',
    educationLanguage: 'language',
};

const createFilter = (params: SearchParams, filter: OptionalFilter): string => {
    const indices = params[filter];

    if (!indices) {
        return '';
    }

    const filterStrings = indices.split(',').map((index) => {
        return `${fieldsFilterMap[filter]} = "${paramFiltersMap[filter][parseInt(index) - 1]}"`;
    });

    return `(${filterStrings.join(' || ')})`;
};

const createFilterString = (params: SearchParams): string => {
    const deadlineString = `applicationDeadline > "${new Date().toISOString()}"`;
    const queryString = params.query
        ? `(${fieldsQueryLookup.map((field) => `${field} ~ "${params.query}"`).join(' || ')})`
        : '';

    const paramsStrings = Object.keys(paramFiltersMap).map((filter) => {
        return createFilter(params, filter as OptionalFilter);
    });
    console.log(paramsStrings.filter(Boolean).join(' && '));
    return [
        deadlineString,
        queryString,
        ...paramsStrings
    ].filter(Boolean).join(' && ');
};

export default createFilterString;
