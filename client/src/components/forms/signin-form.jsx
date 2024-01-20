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
import { signinFormSchema } from "@/lib/validations/signin-form";

import { useNavigate } from "react-router-dom";

import axios from "axios";
import { Icons } from "../icons";

const SigninForm = () => {
  const navigate = useNavigate();

  const form = useForm({
    resolver: zodResolver(signinFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const {
    control,
    formState: { isSubmitting },
    handleSubmit,
    reset,
  } = form;

  async function onSubmit(values) {
    try {
      await axios.post("http://localhost:8000/api/user/signin", values);

      navigate("/");
    } catch (err) {
      console.error(err);
    } finally {
      reset();
    }
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
              "Sign in"
            )}
          </Button>
        </form>
      </Form>
    </>
  );
};

export default SigninForm;
