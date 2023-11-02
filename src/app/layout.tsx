import type { FunctionComponent, PropsWithChildren } from 'react';
import type { Metadata } from 'next';
import '@/styles/global.css';

export function generateMetadata(): Metadata {
    return {
        title: 'Askuni',
        description: 'Search for better future with Askuni.',
    };
}

const RootLayout: FunctionComponent<PropsWithChildren> = ({ children }) => {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
};

export default RootLayout;
