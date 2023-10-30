import Link from 'next/link';
import type { FunctionComponent } from 'react';
import Language from '@components/Language';

type MenuLink = {
    label: string;
    link: string;
};

const Menu: FunctionComponent = () => {
    const menuLinks: MenuLink[] = [
        {
            label: 'Universities',
            link: '/universities',
        },
        {
            label: 'About Us',
            link: '/#about',
        },
        {
            label: 'How to Apply?',
            link: '/how-to-apply',
        },
        {
            label: 'Partner',
            link: '/become-a-partner',
        },
        {
            label: 'Fairs',
            link: '/fairs',
        },
    ];

    return (
        <nav className="flex h-full">
            <ul className="flex items-center h-full w-full gap-2">
                {
                    menuLinks.map((menuLink, index) => (
                        <li key={index}>
                            <Link
                                href={menuLink.link}
                                className="flex justify-center items-center text-lightblack h-full p-2.5 cursor-pointer">
                                {menuLink.label}
                            </Link>
                        </li>
                    ))
                }
                <li>
                    <Link
                        href="/register"
                        className="flex justify-center items-center ml-2 py-2 px-8 text-white bg-blue-500 outline rounded-md cursor-pointer hover:outline-1 hover:outline-blue-500 hover:bg-white hover:text-blue-500">
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
