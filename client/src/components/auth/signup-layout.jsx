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
import SignupForm from "../forms/signup-form";

const SignupAuthLayout = () => {
  return (
    <Card className="w-[26rem]">
      <CardHeader className="space-y-4">
        <div className="space-y-1">
          <CardTitle className="text-2xl">Sign up</CardTitle>
          <CardDescription className="text-sm">
            Choose your preferred sign up method
          </CardDescription>
        </div>
        <Button variant="outline" type="button">
          <Icons.google className="w-4 h-4 mr-2 " />
          Google
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
        <SignupForm />
      </CardContent>
      <CardFooter className="flex flex-wrap items-center justify-between gap-2">
        <div className="text-sm text-muted-foreground">
          <span className="hidden mr-1 sm:inline-block">
            Already have an account?
          </span>
          <Link
            aria-label="Sign in"
            to="/signin"
            className="text-primary underline-offset-4 hover:underline"
          >
            Sign in
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
};

export default SignupAuthLayout;
