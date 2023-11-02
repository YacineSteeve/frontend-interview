'use client';

import type { FunctionComponent } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import CardButton from './CardButton';

const ClearButton: FunctionComponent = () => {
    const router = useRouter();
    const pathname = usePathname();

    return (
        <CardButton
            label="CLEAR FILTERS"
            onClick={() => router.push(pathname)}
        />
    );
};

export default ClearButton;
