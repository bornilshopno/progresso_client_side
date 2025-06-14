import React from 'react';
import { GiBoomerangSun } from 'react-icons/gi';

const Home = () => {
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content text-center">
                    <div className="max-w-lg">
                        <h1 className="text-3xl font-bold flex gap-6 text-center justify-center">Welcome to <span className="italic flex items-center gap-3">
                            <GiBoomerangSun />
                            <span>progresso</span>
                        </span> </h1>

                        <p className="py-6">
                            A visual task management solution built for productivity and team collaboration.
                            Streamline your workflow with an intuitive Kanban board — track tasks, update progress, and stay aligned with your goals. Whether you're managing solo projects or working with a team, our app helps you prioritize, organize, and deliver efficiently.
                        </p>
                        <button className="btn btn-primary">Log In</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;