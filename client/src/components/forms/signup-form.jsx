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

import useSignup from "../hooks/useSignup";

const SignupForm = () => {
  const { mutate } = useSignup();

  const form = useForm({
    resolver: zodResolver(authSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const {
    control,
    formState: { isSubmitting },
    handleSubmit,
  } = form;

  async function onSubmit(values) {
    mutate(values);
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)} className="-mt-4 space-y-3">
          <FormField
            control={control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="name@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="************"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button className="w-full" disabled={isSubmitting} type="submit">
            {isSubmitting ? (
              <Icons.loading className="w-4 h-4 mr-2 animate-spin" />
            ) : (
              "Continue"
            )}
          </Button>
        </form>
      </Form>
    </>
  );
};

export default SignupForm;
