import type { URLSearchParams } from 'url';

const createFilterString = (params: URLSearchParams): string => {
    const filterString = `applicationDeadline > "${new Date().toISOString()}`;

    return '';
};

export default createFilterString;
