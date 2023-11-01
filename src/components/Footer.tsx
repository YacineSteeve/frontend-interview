import Link from 'next/link';
import Image from 'next/image';
import { Fragment } from 'react';
import type { FunctionComponent } from 'react';
import type { Link as FooterLink } from '@/types';

type FooterColumn = {
    title: string;
    links: FooterLink[];
};

const columns: FooterColumn[] = [
    {
        title: 'Navigations',
        links: [
            {
                label: 'About Us',
                href: '/#about'
            },
            {
                label: 'Programs',
                href: '/search'
            },
            {
                label: 'Universities',
                href: '/universities'
            },
            {
                label: 'Articles',
                href: '/articles'
            },
            {
                label: 'Contact',
                href: '/contact'
            },
            {
                label: 'Fairs',
                href: '/fairs'
            },
            {
                label: 'Become a Partner',
                href: '/become-a-partner'
            }
        ]
    },
    {
        title: 'For Students',
        links: [
            {
                label: 'How To Apply',
                href: '/how-to-apply'
            },
            {
                label: 'Candidate Form',
                href: '/candidate-form'
            },
        ]
    },
    {
        title: 'Legal',
        links: [
            {
                label: 'Privacy Policy',
                href: '/privacy-policy'
            },
            {
                label: 'Terms and Conditions',
                href: '/terms-and-conditions'
            },
            {
                label: 'Cookie Policy',
                href: '/cookie-policy'
            },
            {
                label: 'Disclaimer',
                href: '/disclaimer'
            },
        ]
    },
];

const socialLinks: FooterLink[] = [
    {
        label: 'Facebook',
        href: 'https://www.facebook.com/askunicom/'
    },
    {
        label: 'Twitter',
        href: 'https://twitter.com/askunicom'
    },
    {
        label: 'Instagram',
        href: 'https://www.instagram.com/askunicom/?hl=tr'
    },
    {
        label: 'LinkedIn',
        href: 'https://tr.linkedin.com/company/askunicom/'
    },
];

const Footer: FunctionComponent = () => {
    return (
        <footer className="pt-24 pb-7 bg-lightgrey">
            <div className="mx-52 px-3">
                <div className="flex gap-20 justify-between child:flex child:flex-col child:w-1/4 child:mb-10">
                    <div className="gap-6">
                        <Link href="/">
                            <Image
                                src="/images/askuni.png"
                                alt="Askuni Logo"
                                width={164}
                                height={40}
                            />
                        </Link>
                        <p>
                            Halkalı Merkez Mah. Halkalı Cad. 281/23 Zaim Teknopark No:6 34303 Küçükçekmece/Istanbul
                        </p>
                        <p>
                            <Link href="tel:+905523674336">+(90) 552 367 43 36</Link>
                        </p>
                        <p>
                            <Link href="mailto:info@askuni.com">info@askuni.com</Link>
                        </p>
                    </div>
                    {
                        columns.map((column, index) => (
                            <div key={index} className="gap-6">
                                <p className="text-lightblack text-xl">{column.title}</p>
                                <ul className="flex flex-col gap-3">
                                    {
                                        column.links.map((link) => (
                                            <li key={link.href}>
                                                <Link href={link.href}>
                                                    {link.label}
                                                </Link>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        ))
                    }
                </div>
                <hr className="mt-7"/>
                <div className="flex justify-between pt-7">
                    <p>&copy; 2023-2023 Askuni. All Rights Reserved</p>
                    <ul className="flex gap-3">
                        {
                            socialLinks.map((link, index) => (
                                <Fragment key={link.href}>
                                    <li>
                                        <Link href={link.href} target="_blank">
                                            {link.label}
                                        </Link>
                                    </li>
                                    {
                                        index < socialLinks.length - 1 && <li>|</li>
                                    }
                                </Fragment>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
