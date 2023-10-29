import type { FunctionComponent } from 'react';
import Card from '@components/Card';
import CardButton from '@components/CardButton';

const Filters: FunctionComponent = () => {
    return (
        <section className="flex flex-col w-1/4 h-fit">
            <div className="flex h-14">
                <p className="text-2xl">
                    Filters
                </p>
            </div>
            <Card orientation="vertical">
                <CardButton label="Button 1"/>
                <CardButton label="CLEAR FILTERS"/>
            </Card>
        </section>
    );
};

export default Filters;
