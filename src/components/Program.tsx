import Image from 'next/image';
import type { FunctionComponent } from 'react';
import Card from '@components/Card';
import CardButton from '@components/CardButton';
import Chip from '@components/Chip';

type ProgramProps = {
    id: number;
};

const Program: FunctionComponent<ProgramProps> = ({ id }) => {
    return (
        <Card orientation="horizontal">
            <Image
                src="/images/university.png"
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
                    <Chip label="Bachelor's" type="Degree"/>
                    <Chip label="English" type="Language"/>
                    <Chip label="On-Campus" type="Campus"/>
                    <Chip label="Fall" type="Season"/>
                    <Chip label="Spring" type="Season"/>
                </div>
            </div>
            <div className="flex flex-col justify-between items-center w-1/4 pl-4 border-l">
                <p>
                    2500.00 USD
                </p>
                <hr className="w-11/12"/>
                <p>
                    Deadline: 10/31/2023
                    Season: 2023 Fall (September 2023)
                </p>
                <CardButton label={`BUTTON ${id}`}/>
            </div>
        </Card>
    );
};

export default Program;
