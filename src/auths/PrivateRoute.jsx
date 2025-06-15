

import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../SharedCompoents/useAuth";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth()
    const location = useLocation()

    if (loading) {
        return <span className="loading loading-bars loading-lg"></span>
    }

    if (user) {
        return <div> {children} </div>
    }

    else return (<Navigate to={"/login"} state={location.pathname}></Navigate>

    )
};

export default PrivateRoute;