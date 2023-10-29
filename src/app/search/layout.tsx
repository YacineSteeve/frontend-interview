import { Fragment } from 'react';
import type { FunctionComponent, PropsWithChildren } from 'react';
import Header from '@components/Header';
import Footer from '@components/Footer';
import Floating from '@components/Floating';

const Layout: FunctionComponent<PropsWithChildren> = ({ children }) => {
    return (
        <Fragment>
            <Header/>
            <main className="flex flex-col items-center border-1 border-green-300 bg-snow px-52 min-h-screen">
                <div className="flex flex-col pt-20 text-lightblack text-[3.25rem]">
                    Find Your Dream Programs
                </div>
                {children}
            </main>
            <Footer />
            <Floating />
        </Fragment>
    );
};

export default Layout;
