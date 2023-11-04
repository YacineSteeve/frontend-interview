import type { FunctionComponent } from 'react';
import Link from 'next/link';

const AppNotFound: FunctionComponent = () => {
    return (
        <div className="flex flex-col items-center justify-center w-screen h-screen text-white bg-black">
            <div className="text-4xl">Sorry, this page is not implemented !</div>
            <br/>
            <div className="text-3xl">Please, go back to&nbsp;
                <Link href="/search/" className="underline">the working one</Link>
                .
            </div>
        </div>
    );
};

export default AppNotFound;
