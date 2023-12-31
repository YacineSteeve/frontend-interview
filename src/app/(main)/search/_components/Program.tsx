'use client';

import Image from 'next/image';
import { Fragment } from 'react';
import type { FunctionComponent } from 'react';
import type { Program as ProgramType } from '@/types';
import CardButton from './CardButton';
import Chip from './Chip';

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
        <div className="flex flex-col md:flex-row p-5 w-full h-fit bg-white shadow-lg rounded-2xl border border-gray-300 gap-8">
            <Image
                src={`/images/universities/${program.university.picture}`}
                alt={program.university.name}
                width={250}
                height={190}
                className="m-auto w-[250px] h-[190px] rounded-2xl"
            />
            <div className="flex md:block flex-col flex-1 items-center">
                <p className="text-xl text-lightblack mb-1">
                    {program.university.name}
                </p>
                <p className="mb-5">
                    {program.university.type} University
                </p>
                <p className="text-lightblack">
                    {program.name}
                </p>
                <div className="flex justify-center md:justify-start flex-wrap gap-2 mt-2">
                    <Chip label={program.language} type="language"/>
                    <Chip label={`${program.duration} years`} type="duration"/>
                    <Chip label={program.educationType} type="education"/>
                    <Chip label={program.grade} type="grade"/>
                </div>
            </div>
            <div className="flex flex-col justify-start items-center md:w-1/4 pl-4 md:border-l child:text-center">
                {
                    program.fees.discounted !== 0 &&
                        <p className="line-through">
                            {program.fees.real} {program.fees.currency}
                        </p>
                }
                <p className="text-2xl text-info">
                    {program.fees.discounted || program.fees.real} {program.fees.currency}
                </p>
                <Chip label="Full Tuition" type="fees"/>
                <hr className="w-11/12 my-1"/>
                {
                    program.partner
                    || (program.applicationDeadline !== '' && program.applicationDeadline > new Date().toISOString())
                        ?   <Fragment>
                            <p>
                                Deadline:&nbsp;
                                <span className="text-red-500">
                                    {formattedDate}
                                </span>
                            </p>
                            <p className="pb-2">
                                Season: {program.season}
                            </p>
                            <CardButton
                                label="APPLY"
                                onClick={() => alert(`Successfully applied to ${program.university.name} !`)}
                            />
                        </Fragment>
                        :   <p className="text-center text-sm">
                                This program is not available
                        </p>
                }
            </div>
        </div>
    );
};

export default Program;
