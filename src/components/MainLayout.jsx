import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <>
            <Navbar />
            <main className='min-h-[calc(100vh-100px)] py-2 px-5 lg:px-10 bg-base-200 text-gray-900 dark:bg-gray-800 dark:text-white z-10'><Outlet/></main>
            <Footer />
        </>
    );
};

export default MainLayout;