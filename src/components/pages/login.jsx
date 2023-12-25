import LoginImage from "../../assets/login-image.webp";
import AuthLayout from "../auth/layout";

import { AspectRatio } from "../ui/aspect-ratio";
import Icon from "../ui/icon";

const Login = () => {
  return (
    <>
      <div className="min-h-screen grid lg:grid-cols-2 grid-cols-1 md:grid-cols-3">
        <AspectRatio ratio={16 / 9}>
          <img
            className="absolute object-cover inset-0 md:static w-full h-full"
            src={LoginImage}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-65% md:to-45%" />
          <Icon />
          <p className="absolute left-8 bottom-6 text-white font-sovereign text-4xl uppercase">
            Sovereign
          </p>
        </AspectRatio>
        <section className="absolute h-full w-full md:col-span-2 lg:col-auto md:static  flex items-center justify-center">
          <AuthLayout />
        </section>
      </div>
    </>
  );
};

export default Login;
