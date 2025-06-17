import { Link } from "react-router";
import { GiBoomerangSun } from 'react-icons/gi';

const NotFound = () => {
    return (
        <div className='to-gray-600 bg-gradient-to-br from-gray-950  min-h-screen flex flex-col justify-around'>
            <div className="m-10 border-4 border-gray-700 py-4 lg:py-10 rounded-3xl to-gray-400 bg-gradient-to-br from-gray-900">
                <h1 className="font-bold text-4xl lg:text-9xl  text-center text-amber-700">404!!</h1>
                <h2 className="text-center font-semibold text-white">Unforetunately, you landed in a wrong place. Click below to safely return..</h2>
                <h3 className="flex justify-center items-center my-2 lg:my-5"><Link to="/"><span className="italic flex items-center gap-3 px-5 py-2 border rounded-lg bg-green-700 text-white">Return to
                            <GiBoomerangSun />
                            progresso</span> </Link></h3>
                <h4 className="text-center text-lg text-white italic">Stay updated with your task progress</h4>
            </div>
        </div>
    );
};

export default NotFound;