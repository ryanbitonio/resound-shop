import useAuth from "@/components/hooks/useAuth";
import useSignin from "@/components/hooks/useSignin";
import useAuthStore from "@/lib/authStore";
import { useState } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";

const PrivateRoutes = () => {
  const navigate = useNavigate();
  const [seconds, setSeconds] = useState(3);

  const { data: googleuser } = useAuth();
  const { isLoading, isError } = useSignin();

  const localuser = localStorage.getItem('token')

  const user =  googleuser ?? localuser;

  console.log('current user: ', user)

  if (isLoading)
    return (
      <p className="flex items-center justify-center min-h-screen">
        Loading...
      </p>
    );

  if (isError) {
    const timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else {
        navigate("/signin");
        clearInterval(timer);
      }
    }, ms("1s"));

    return (
      <>
        <p className="flex items-center justify-center min-h-screen text-center">
          You need to login first. <br />
          Redirecting you to sign in page in {seconds}
        </p>
      </>
    );
  }

  if (!user) return <Navigate to="/signin" />;

  return <Outlet />;
};

export default PrivateRoutes;
