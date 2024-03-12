import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import VerifyEmailForm from "../forms/verify-email-form";

const VerifyEmailLayout = () => {
  return (
    <Card className="w-[26rem]">
      <CardHeader className="space-y-4">
        <div className="space-y-1">
          <CardTitle className="text-2xl">Verify Email</CardTitle>
          <CardDescription className="text-sm">
            Verify your email address to complete your account creation
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <VerifyEmailForm />
      </CardContent>
    </Card>
  );
};

export default VerifyEmailLayout;
