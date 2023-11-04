import { Fragment } from 'react';
import type { FunctionComponent, PropsWithChildren } from 'react';
import { Header, Footer, FloatingButtons } from './_components';

const Layout: FunctionComponent<PropsWithChildren> = ({ children }) => {
    return (
        <Fragment>
            <Header/>
            <main className="flex flex-col items-center min-h-screen mt-20 py-20 lg:px-[10vw] bg-snow">
                {children}
            </main>
            <Footer />
            <FloatingButtons />
        </Fragment>
    );
};

export default Layout;
