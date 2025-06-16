import { Navigate, useLocation } from "react-router";
import useAuth from "../hooks/useAuth";
import { motion } from "motion/react"

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  if (loading) {
    return <div className="flex items-center justify-center h-screen bg-white dark:bg-gray-900">
    <motion.div
      className="w-16 h-16 border-4 border-t-transparent border-blue-500 dark:border-blue-400 rounded-full"
      animate={{ rotate: 360 }}
      transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
    ></motion.div>
  </div>;
  }
  if (user) {
    return children;
  }
  return <Navigate to="/logIn" state={{ from: location }} replace></Navigate>;
};
export default PrivateRoute;
