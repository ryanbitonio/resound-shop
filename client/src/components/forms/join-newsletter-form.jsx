"use client";

import { PaperPlaneIcon } from "@radix-ui/react-icons";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export function JoinNewsletterForm() {
  const form = useForm({
    defaultValues: {
      email: "",
    },
  });

  function onSubmit() {
    form.reset();
  }

  return (
    <Form {...form}>
      <form
        className="grid w-full"
        onSubmit={form.handleSubmit(onSubmit)}
        autoComplete="off"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="relative space-y-0">
              <FormLabel className="sr-only">Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="name@example.com"
                  className="pr-12"
                  {...field}
                />
              </FormControl>
              <FormMessage />
              <Button
                className="absolute right-[3.5px] top-[4px] z-20 h-7 w-7"
                size="icon"
              >
                <PaperPlaneIcon className="w-3 h-3" aria-hidden="true" />
                <span className="sr-only">Join newsletter</span>
              </Button>
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
