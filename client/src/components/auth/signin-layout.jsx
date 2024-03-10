import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Icons } from "../icons";
import { Button } from "../ui/button";

import { Link } from "react-router-dom";
import SigninForm from "../forms/signin-form";

const SigninAuthLayout = () => {

  return (
    <Card className="w-[26rem]">
      <CardHeader className="space-y-4">
        <div className="space-y-1">
          <CardTitle className="text-2xl">Sign in</CardTitle>
          <CardDescription className="text-sm">
            Choose your preferred sign in method
          </CardDescription>
        </div>
        <Button asChild variant="outline" type="button">
          <Link to="http://localhost:8000/auth/google" >
            <Icons.google className="w-4 h-4 mr-2 " />
            Google
          </Link>
        </Button>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="px-2 bg-background text-muted-foreground">
              Or continue with
            </span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <SigninForm />
      </CardContent>
      <CardFooter className="flex flex-wrap items-center justify-between gap-2">
        <div className="text-sm text-muted-foreground">
          <span className="hidden mr-1 sm:inline-block">
            Don't have an account?
          </span>
          <Link
            aria-label="Sign up"
            to="/signup"
            className="text-primary underline-offset-4 hover:underline"
          >
            Sign up
          </Link>
        </div>
        <a
          aria-label="Reset password"
          href="/"
          className="text-sm text-primary underline-offset-4 hover:underline"
        >
          Reset password
        </a>
      </CardFooter>
    </Card>
  );
};

export default SigninAuthLayout;
