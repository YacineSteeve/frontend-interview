'use client';

import Image from 'next/image';
import type { FunctionComponent } from 'react';
import Card from '@components/Card';
import CardButton from '@components/CardButton';
import Chip from '@components/Chip';

type ProgramProps = {
    id: number;
};

const Program: FunctionComponent<ProgramProps> = () => {
    return (
        <Card orientation="horizontal">
            <Image
                src="/images/university.png"
                priority={true}
                alt={'Ankara Medipol University'}
                width={250}
                height={190}
                className="ml-3 rounded-2xl border"
            />
            <div className="flex-1">
                <p className="text-xl text-lightblack mb-1">
                    Ankara Medipol University
                </p>
                <p className="mb-5">
                    Private University
                </p>
                <p className="text-lightblack">
                    Nursing
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                    <Chip label="English" type="language"/>
                    <Chip label="2 years" type="duration"/>
                    <Chip label="Full Time" type="education"/>
                    <Chip label="Bachelor's" type="grade"/>
                </div>
            </div>
            <div className="flex flex-col justify-between items-center w-1/4 pl-4 border-l child:text-center">
                <p className="line-through">
                    2500.00 USD
                </p>
                <p className="text-2xl text-blue-400">
                    2500.00 USD
                </p>
                <Chip label="Full Tuition" type="fees"/>
                <hr className="w-11/12 my-1"/>
                <p>
                    Deadline:&nbsp;
                    <span className="text-red-500">
                        10/31/2023
                    </span>
                </p>
                <p>
                    Season: 2023 Fall (February 2023)
                </p>
                <CardButton label="APPLY" onClick={() => alert('Successfully applied to Ankara Medipol University !')}/>
            </div>
        </Card>
    );
};

export default Program;
