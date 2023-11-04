'use client';

import Link from 'next/link';
import type { FunctionComponent } from 'react';
import { useToggleVisibility } from '@/hooks';
import type { Link as MenuLink } from '@/types';
import Language from './Language';

const menuLinks: MenuLink[] = [
    {
        label: 'Universities',
        href: '/universities',
    },
    {
        label: 'About Us',
        href: '/#about',
    },
    {
        label: 'How to Apply?',
        href: '/how-to-apply',
    },
    {
        label: 'Partner',
        href: '/become-a-partner',
    },
    {
        label: 'Fairs',
        href: '/fairs',
    },
];

const Menu: FunctionComponent = () => {
    const { ref, isVisible, setIsVisible } = useToggleVisibility(false);

    return (
        <nav ref={ref} className={`flex h-full w-3/5 md:w-1/3 lg:w-auto lg:child:mt-0 ${isVisible ? 'pr-0 child:-mt-3' : 'pr-4 child:mt-0'}`}>
            <ul className={`relative flex flex-col lg:flex-row h-fit lg:h-full w-full gap-6 lg:gap-2 lg:pt-0 lg:pb-0 bg-white lg:bg-inherit child:transition-all duration-200 ${isVisible ? 'items-center pt-4 pb-8 border-2 lg:border-none' : 'items-end lg:items-center'}`}>
                <div
                    onClick={() => setIsVisible(!isVisible)}
                    className={`flex justify-center items-center h-16 aspect-square cursor-pointer bg-white lg:hidden ${isVisible ? 'absolute top-0 right-full border-2' : ''}`}>
                    <div
                        className="flex flex-col justify-between w-6 aspect-square transform transition-all duration-300 origin-center overflow-hidden
                        child:bg-lightblack child:transform child:transition-all child:duration-300">
                        <div
                            className={`h-[3px] origin-left ${isVisible ? 'w-10 rotate-[42deg]' : 'w-6'}`}></div>
                        <div
                            className={`h-[3px] w-5 rounded ${isVisible ? '-translate-x-10' : ''}`}></div>
                        <div
                            className={` origin-left ${isVisible ? 'h-[3px] w-10 -rotate-[42deg]' : 'h-[4px] w-4'}`}></div>
                    </div>
                </div>
                {
                    menuLinks.map((menuLink) => (
                        <li key={menuLink.href} className={`w-full lg:w-fit px-10 lg:px-0 ${isVisible ? '' : 'hidden lg:block'}`}>
                            <Link
                                href={menuLink.href}
                                className="flex justify-center items-center text-lightblack h-full p-2.5 cursor-pointer focus:bg-gray-300">
                                {menuLink.label}
                            </Link>
                            <hr className="lg:hidden"/>
                        </li>
                    ))
                }
                <li className={`w-full lg:w-fit px-10 lg:px-0 ${isVisible ? '' : 'hidden lg:block'}`}>
                    <Link
                        href="/register"
                        className="flex justify-center items-center ml-2 py-2 px-8 text-white bg-skyblue outline rounded-md cursor-pointer hover:outline-1 hover:outline-blue-500 hover:bg-white hover:text-blue-500">
                        Sign Up
                    </Link>
                </li>
                <li className={`flex justify-center w-full lg:w-fit px-10 lg:px-0 ${isVisible ? '' : 'hidden lg:block'}`}>
                    <Language/>
                </li>
            </ul>
        </nav>
    );
};

export default Menu;
