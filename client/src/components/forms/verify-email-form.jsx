import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { authSchema } from "@/lib/validations/auth";

import { Icons } from "../icons";
import useVerifyEmail from "../hooks/useVerifyEmail";

const VerifyEmailForm = () => {
  const { data } = useVerifyEmail();

  const form = useForm({
    resolver: zodResolver(authSchema),
    defaultValues: {
      code: "",
    },
  });

  const {
    control,
    formState: { isSubmitting },
    handleSubmit,
    setFocus,
  } = form;

  function onSubmit(values) {
    console.log(data)
    setFocus("code");
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)} className="-mt-4 space-y-3">
          <FormField
            control={control}
            name="code"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Verification Code</FormLabel>
                <FormControl>
                  <Input placeholder="name@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button className="w-full" disabled={isSubmitting} type="submit">
            {isSubmitting ? (
              <Icons.loading className="w-4 h-4 mr-2 animate-spin" />
            ) : (
              "Create Account"
            )}
          </Button>
        </form>
      </Form>
    </>
  );
};

export default VerifyEmailForm;
