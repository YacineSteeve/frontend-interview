import type { SearchParams, OptionalFilter } from '@/types';
import {
    countries,
    universityTypes,
    grades,
    educationTypes,
    campusTypes,
    languages,
    feesTypes,
} from '@/utils/contants';

const paramFiltersMap: Record<OptionalFilter, readonly string[]> = {
    'country': countries,
    'provider_type': universityTypes,
    'grade_type': grades,
    'education_type': educationTypes,
    'campus_type': campusTypes,
    'education_language': languages,
    'fees_type': feesTypes,
};

const fieldsFilterMap: Record<OptionalFilter, string> = {
    'country': 'university.country',
    'provider_type': 'university.type',
    'grade_type': 'grade',
    'education_type': 'educationType',
    'campus_type': 'campus',
    'education_language': 'language',
    'fees_type': 'fees.type',
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

    return [
        deadlineString,
        queryString,
        ...paramsStrings
    ].filter(Boolean).join(' && ');
};

export default createFilterString;
