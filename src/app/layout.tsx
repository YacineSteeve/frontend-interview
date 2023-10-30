import type { FunctionComponent, PropsWithChildren } from 'react';
import type { Metadata } from 'next';
import '@styles/global.css';

const metadata: Metadata = {
    title: 'Askuni | Find Your Dream Programs',
    description: 'Find your dream programs for better future.',
};

const RootLayout: FunctionComponent<PropsWithChildren> = ({ children }) => {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
};

export { metadata };
export default RootLayout;
