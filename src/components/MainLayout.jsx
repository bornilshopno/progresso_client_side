import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <>
            <Navbar />
            <main className='min-h-[calc(100vh-100px)]'><Outlet/></main>
            <Footer />
        </>
    );
};

export default MainLayout;