import Link from 'next/link';
import type { FunctionComponent } from 'react';
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
    return (
        <nav className="flex h-full">
            <ul className="flex items-center h-full w-full gap-2">
                {
                    menuLinks.map((menuLink) => (
                        <li key={menuLink.href}>
                            <Link
                                href={menuLink.href}
                                className="flex justify-center items-center text-lightblack h-full p-2.5 cursor-pointer">
                                {menuLink.label}
                            </Link>
                        </li>
                    ))
                }
                <li>
                    <Link
                        href="/register"
                        className="flex justify-center items-center ml-2 py-2 px-8 text-white bg-skyblue outline rounded-md cursor-pointer hover:outline-1 hover:outline-blue-500 hover:bg-white hover:text-blue-500">
                        Sign Up
                    </Link>
                </li>
                <li>
                    <Language/>
                </li>
            </ul>
        </nav>
    );
};

export default Menu;
