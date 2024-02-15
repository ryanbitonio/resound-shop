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

import { useNavigate } from "react-router-dom";

import axios from "axios";
import { Icons } from "../icons";

import { toast } from "sonner";
import ApiClient from "@/services/api-client";

const apiClient = new ApiClient("/api/user/signin");

const SigninForm = () => {
  const navigate = useNavigate();

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
    setFocus,
  } = form;

  async function onSubmit(values) {
    try {
      apiClient.post(values);
      navigate("/");
    } catch (err) {
      if (err.response && err.response.status === 401) {
        toast.error("The verification strategy is not valid for this account.");
      } else {
        toast.error("Couldn't find your account.");
      }
    } finally {
      setFocus("email");
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
