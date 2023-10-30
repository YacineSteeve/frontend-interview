import Link from 'next/link';
import Image from 'next/image';
import type { FunctionComponent } from 'react';
import Menu from './Menu';

const Header: FunctionComponent = () => {
    return (
        <header id="top" className="sticky top-0 z-10 flex justify-center items-center w-full h-28 py-3 bg-white">
            <div className="flex flex-1 justify-between items-center h-full mx-64 px-4">
                <Link href="/">
                    <Image
                        src="/images/askuni.png"
                        alt="Askuni Logo"
                        width={155}
                        height={38}
                    />
                </Link>
                <Menu/>
            </div>
        </header>
    );
};

export default Header;
