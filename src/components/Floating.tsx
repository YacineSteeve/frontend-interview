'use client';

import Link from 'next/link';
import Image from 'next/image';
import {Fragment} from 'react';
import type { FunctionComponent } from 'react';
import { FloatingWhatsApp } from 'react-floating-whatsapp';

const Floating: FunctionComponent = () => {
    return (
        <Fragment>
            <Link href="#top" className="fixed bottom-28 right-11 rounded-full aspect-square p-3 cursor-pointer bg-black bg-opacity-25 hover:bg-opacity-40">
                <Image
                    src="/images/back-to-top.png"
                    alt="Back to top"
                    width={16}
                    height={19}
                />
            </Link>
            <FloatingWhatsApp
                avatar="/images/askuni-big.png"
                accountName="Askuni"
                phoneNumber="+905523674336"
                chatMessage="Hi, how can we help you?"
                allowEsc={true}
                allowClickAway={true}
            />
        </Fragment>
    );
};

export default Floating;
