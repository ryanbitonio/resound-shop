import useAuth from "@/components/hooks/useAuth";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
  const { data: user, error, isLoading } = useAuth();

  if (isLoading)
    return (
      <p className="flex items-center justify-center min-h-screen">
        Loading...
      </p>
    );

  if (error) {
    return (
      <p className="flex items-center justify-center min-h-screen">
        You need to sign in your account.
      </p>
    );
  }

  if (!user) return <Navigate to="/signin" />;

  return <Outlet />;
};

export default PrivateRoutes;
