'use client';

import Link from 'next/link';
import Image from 'next/image';
import type { FunctionComponent } from 'react';
import { useScrolledDown } from '@/hooks';
import Menu from './Menu';

const Header: FunctionComponent = () => {
    const scrolledDown = useScrolledDown(75);

    return (
        <header id="top" className={`fixed top-0 z-20 flex justify-center items-center w-screen h-20 border-b bg-white transition-all ease-in-out duration-300 ${
            scrolledDown ? 'py-0 lg:shadow-sm' : 'lg:h-28 py-3 lg:border-none lg:bg-snow'
        }`}>
            <div className="flex flex-1 justify-between items-center h-full lg:mx-[5vw] xl:mx-44 pl-8 pr-0 lg:pr-4">
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
