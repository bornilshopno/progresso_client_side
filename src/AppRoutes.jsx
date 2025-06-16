import { Route, Routes } from 'react-router';
import NotFound from './pages/NotFound';
import MainLayout from './components/MainLayout';
import Home from './pages/Home';
import AddTask from './pages/AddTask';
import Register from './auths/Register';
import LogIn from './auths/LogIn';
import UpdateTask from './pages/UpdateTask';
import TaskBoard from './pages/TaskBoard';
import PrivateRoute from './auths/PrivateRoute';



const AppRoutes = () => {
    return (
      

            <Routes>
                {/* Wrap pages where Navbar/Footer should show */}
                <Route element={<MainLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/progress-board" element={<PrivateRoute><TaskBoard /></PrivateRoute>} /> //need to be private
                    <Route path="/add-task" element={<PrivateRoute><AddTask /></PrivateRoute>} /> //need to be private
                    <Route path="/update-task/:id" element={<PrivateRoute><UpdateTask /></PrivateRoute>} />
                    <Route path="/login" element={<LogIn />} />
                    <Route path="/register" element={<Register />} />
                </Route>

                {/* NotFound route without Navbar/Footer */}
                <Route path="*" element={<NotFound />} />
            </Routes>

    
    );
};

export default AppRoutes;