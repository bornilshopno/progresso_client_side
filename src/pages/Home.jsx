import { GiBoomerangSun } from 'react-icons/gi';
import useAuth from '../hooks/useAuth';
import { Link, Links } from 'react-router';

const Home = () => {
     const { user } = useAuth();
    return (
        
            <div className="hero min-h-[calc(100vh_-_115px)]">
                <div className="hero-content isolation-auto text-center">
                    <div className="max-w-lg">
                        <h1 className="text-3xl font-semibold flex flex-col sm:flex-row gap-3  text-center items-center justify-center">Welcome to <span className="italic flex items-center gap-1">
                            <GiBoomerangSun />
                            <span>progresso</span>
                        </span> </h1>

                        <p className="py-6">
                            A visual task management solution built for productivity and team collaboration.
                            Streamline your workflow with an intuitive Kanban board — track tasks, update progress, and stay aligned with your goals. Whether you're managing solo projects or working with a team, our app helps you prioritize, organize, and deliver efficiently.
                        </p>
                       
                        { user ? <Link className='btn rounded-lg' to={"/progress-board"} >View Progress Board</Link> : <Link to={"/login"} className="btn rounded-lg">Log In</Link>}
                        
                    </div>
                </div>
            </div>
       
    );
};

export default Home;