import { Route, Routes } from 'react-router';
import KanbanBoard from './pages/KanbanBoard';


import NotFound from './pages/NotFound';
import MainLayout from './components/MainLayout';
import Home from './pages/Home';
import AddTask from './pages/AddTask';
import Register from './auths/Register';
import LogIn from './auths/LogIn';



const AppRoutes = () => {
    return (
      

            <Routes>
                {/* Wrap pages where Navbar/Footer should show */}
                <Route element={<MainLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/progress-board" element={<KanbanBoard />} /> //need to be private
                    <Route path="/add-task" element={<AddTask />} /> //need to be private
                    <Route path="/login" element={<LogIn />} />
                    <Route path="/register" element={<Register />} />
                </Route>

                {/* NotFound route without Navbar/Footer */}
                <Route path="*" element={<NotFound />} />
            </Routes>

    
    );
};

export default AppRoutes;