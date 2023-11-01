import type { Option } from '@/types';

export function buildFilterOptions<T extends readonly string[]>(options: T): Option[] {
    return options.map((option, index) => ({
        label: option,
        value: String(index + 1)
    }));
}
