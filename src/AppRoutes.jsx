import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';
import KanbanBoard from './pages/KanbanBoard';
import Login from './pages/Login';
import Register from './pages/Register';
import NotFound from './pages/NotFound';
import MainLayout from './components/MainLayout';
import Home from './pages/Home';
import AddTask from './components/AddTask';

const AppRoutes = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    {/* Wrap pages where Navbar/Footer should show */}
                    <Route element={<MainLayout />}>
                        <Route path="/"  element={<Home /> } />
                        <Route path="/progress-board"  element={<KanbanBoard /> } /> //need to be private
                        <Route path="/add-task"  element={<AddTask /> } /> //need to be private
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                    </Route>

                    {/* NotFound route without Navbar/Footer */}
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default AppRoutes;