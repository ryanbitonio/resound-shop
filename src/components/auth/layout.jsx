import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import SignInForm from "../forms/signin-form";
import { Button } from "../ui/button";

const AuthLayout = () => {
  return (
    <Card className="w-[26rem]">
      <CardHeader className="space-y-4">
        <div className="space-y-1">
          <CardTitle className="text-2xl">Sign in</CardTitle>
          <CardDescription className="text-sm">
            Choose your preferred sign in method
          </CardDescription>
        </div>
        <Button variant="outline" type="button">
          <GitHubLogoIcon className="mr-2 h-4 w-4" />
          Gmail
        </Button>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Or continue with
            </span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <SignInForm />
      </CardContent>
      <CardFooter className="flex flex-wrap items-center justify-between gap-2">
        <div className="text-sm text-muted-foreground">
          <span className="mr-1 hidden sm:inline-block">
            Don&apos;t have an account?
          </span>
          <a
            aria-label="Sign up"
            href="/"
            className="text-primary underline-offset-4 hover:underline"
          >
            Sign up
          </a>
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

export default AuthLayout;
