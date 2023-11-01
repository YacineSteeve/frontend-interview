'use client';

import Image from 'next/image';
import { Fragment } from 'react';
import type { FunctionComponent } from 'react';
import type { Program as ProgramType } from '@/types';
import Card from '@components/Card';
import CardButton from '@components/CardButton';
import Chip from '@components/Chip';

interface ProgramProps {
    program: ProgramType
}

const Program: FunctionComponent<ProgramProps> = ({ program }) => {
    const formattedDate = program.applicationDeadline ? new Date(program.applicationDeadline).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
    }) : 'N/A';

    return (
        <Card orientation="horizontal">
            <Image
                src={`/images/universities/${program.university.picture}`}
                alt={program.university.name}
                width={250}
                height={190}
                className="ml-3 rounded-2xl border"
            />
            <div className="flex-1">
                <p className="text-xl text-lightblack mb-1">
                    {program.university.name}
                </p>
                <p className="mb-5">
                    {program.university.type} University
                </p>
                <p className="text-lightblack">
                    {program.name}
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                    <Chip label={program.language} type="language"/>
                    <Chip label={`${program.duration} years`} type="duration"/>
                    <Chip label={program.educationType} type="education"/>
                    <Chip label={program.grade} type="grade"/>
                </div>
            </div>
            <div className="flex flex-col justify-between items-center w-1/4 pl-4 border-l child:text-center">
                {
                    program.fees.discounted &&
                        <p className="line-through">
                            {program.fees.real} {program.fees.currency}
                        </p>
                }
                <p className="text-2xl text-blue-400">
                    {program.fees.discounted || program.fees.real} {program.fees.currency}
                </p>
                <Chip label="Full Tuition" type="fees"/>
                <hr className="w-11/12 my-1"/>
                {
                    program.partner
                        ?   <Fragment>
                            <p>
                                Deadline:&nbsp;
                                <span className="text-red-500">
                                    {formattedDate}
                                </span>
                            </p>
                            <p>
                                Season: {program.season}
                            </p>
                        </Fragment>
                        :   <p className="text-red-500">
                                Application Closed
                        </p>
                }
                {
                    <CardButton
                        label="APPLY"
                        onClick={() => alert(`Successfully applied to ${program.university.name} !`)}
                    />
                }
            </div>
        </Card>
    );
};

export default Program;
