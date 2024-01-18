import * as z from "zod";

export const signInFormSchema = z.object({
  email: z
    .string()
    .nonempty({ message: "Please enter your email" })
    .email({
      message: "Please enter a valid email format (e.g. name@example.com)",
    })
    .min(3, { message: "Email must be at least 3 characters" })
    .max(50, { message: "Email must be 50 characters only" }),
  password: z
    .string()
    .nonempty({ message: "Please enter your password" })
    .min(8, { message: "Password must be at least 8 characters" })
    .max(32, { message: "Password must be 32 characters only" }),
});
