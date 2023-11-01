import type { URLSearchParams } from 'url';

const createFilterString = (params: URLSearchParams): string => {
    const filterString = `applicationDeadline > "${new Date().toISOString()}`;

    return params.get('query') ? `${filterString} AND name like "%${params.get('query')}%"` : filterString;
};

export default createFilterString;
