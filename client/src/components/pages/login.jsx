import LoginImage from "../../assets/login-image.webp";
import AuthLayout from "../auth/layout";
import SigninForm from "../forms/signin-form";

import { Logo } from "../logo";
import { AspectRatio } from "../ui/aspect-ratio";

import { Toaster } from "../ui/toaster";

const Login = () => {
  return (
    <>
      <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2 md:grid-cols-3">
        <AspectRatio ratio={16 / 9}>
          <img
            className="absolute inset-0 object-cover w-full h-full md:static"
            src={LoginImage}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-65% md:to-45%" />
          <Logo className="absolute" />
          <p className="absolute text-4xl text-white uppercase left-8 bottom-6 font-sovereign">
            Sovereign
          </p>
        </AspectRatio>
        <section className="absolute flex items-center justify-center w-full h-full px-8 md:col-span-2 lg:col-auto md:static">
          <AuthLayout
            title="Sign in"
            description="Choose your preferred sign in method"
            account="Don't have an account?"
            alternative="Sign up"
            href="/signup"
          >
            <SigninForm />
          </AuthLayout>
        </section>
      </div>
      <Toaster />
    </>
  );
};

export default Login;
