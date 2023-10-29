import { Fragment } from 'react';
import type { FunctionComponent, PropsWithChildren } from 'react';
import Header from '@components/Header';
import Footer from '@components/Footer';
import Floating from '@components/Floating';

const Layout: FunctionComponent<PropsWithChildren> = ({ children }) => {
    return (
        <Fragment>
            <Header/>
            <main className="flex flex-col items-center py-20 border-1 border-green-300 bg-snow px-56 min-h-screen">
                {children}
            </main>
            <Footer />
            <Floating />
        </Fragment>
    );
};

export default Layout;
