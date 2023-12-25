import * as z from "zod";

export const signInFormSchema = z.object({
  email: z
    .string()
    .nonempty({ message: "Please enter your email" })
    .min(3, { message: "Email must be at least 3 characters" })
    .max(50, { message: "Email must be 50 characters only" })
    .regex(/^[A-Za-z\s]+$/, {
      message: "Email should contain only letters and spaces",
    }),
  password: z
    .string()
    .nonempty({ message: "Please enter your password" })
    .min(3, { message: "Password must be at least 3 characters" })
    .max(50, { message: "Password must be 50 characters only" })
    .regex(/^[A-Za-z\s]+$/, {
      message: "Password should contain only letters and spaces",
    }),
});
