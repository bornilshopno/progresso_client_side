import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <>
            <Navbar />
            <main className='min-h-[calc(100vh-128px)] py-2 px-5 lg:px-10 bg-base-200 text-gray-900 dark:bg-gray-800 dark:text-white'><Outlet/></main>
            <Footer />
        </>
    );
};

export default MainLayout;