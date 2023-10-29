import { redirect } from 'next/navigation';
import type { NextPage } from 'next';

const HomePage: NextPage = () => {
    redirect('/search');
};

export default HomePage;
