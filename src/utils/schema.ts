import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Name should be at least 3 characters long" }),
  email: z.string().email({ message: "Invalid email address" }),
  contact: z.string().regex(/^[0-9]{11}$/, {
    message: "Invalid phone number, must be 11 digits",
  }),
  message: z
    .string()
    .min(3, { message: "Message should be at least 3 characters long" })
    .max(256, {
      message: "You have exceeded the character limit (256 characters max)",
    }),
});

// export const signupSchema = z
//   .object({
//     fullname: z
//       .string()
//       .min(3, "Fullname must be at least 3 characters")
//       .max(100, "Fullname is too long"),
//     contact: z
//       .string()
//       .min(10, "Contact number must be at least 10 digits")
//       .max(15, "Contact number is too long"),
//     email: z.string().email("Invalid email format"),
//     password: z.string().min(6, "Password must be at least 6 characters"),
//     confirmPassword: z.string(),
//     roles: z.enum(["guardian", "student"], {
//       errorMap: () => ({
//         message: "Role must be either 'guardian' or 'student'",
//       }),
//     }),
//     termsAgreement: z.literal(true, {
//       errorMap: () => ({
//         message: "You must accept the terms and conditions.",
//       }),
//     }),
//   })
//   .refine((data) => data.password === data.confirmPassword, {
//     message: "Passwords do not match",
//     path: ["confirmPassword"],
//   });

export const signupSchema = z
  .object({
    fullname: z
      .string()
      .min(3, "Fullname must be at least 3 characters")
      .max(100, "Fullname is too long"),

    contact: z
      .string()
      .min(10, "Contact number must be at least 10 digits")
      .max(15, "Contact number is too long"),

    email: z.string().email("Invalid email format"),

    password: z.string().min(6, "Password must be at least 6 characters"),

    confirmPassword: z.string(),

    roles: z.enum(["guardian", "student"], {
      errorMap: () => ({
        message: "Role must be either 'guardian' or 'student'",
      }),
    }),

    termsAgreement: z
      .boolean({
        required_error: "You must accept the terms and conditions.",
      })
      .refine((value) => value === true, {
        message: "You must accept the terms and conditions.",
      }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export const signinSchema = z.object({
  identifier: z
    .string()
    .refine((value) => /^\d{11}$/.test(value) || /^SSC\d{5}$/.test(value), {
      message:
        "Enter a valid 10-digit phone number or a valid SSC ID (e.g., SSC12345)",
    }),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export const resetPasswordSchema = z.object({
  resetField: z
    .string()
    .refine((value) => /^\d{11}$/.test(value) || /^SSC\d{5,}$/.test(value), {
      message:
        "Enter a valid 10-digit phone number or a valid SSC ID (e.g., SSC12345)",
    }),
});
