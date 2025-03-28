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

export const signupSchema = z
  .object({
    fullname: z
      .string()
      .min(3, "Fullname must be at least 3 characters")
      .max(100, "Fullname is too long"),

    username: z
      .string()
      .min(3, "Username must be at least 3 characters")
      .max(30, "Username is too long")
      .optional(),

    mobile: z
      .string()
      .min(10, "Contact number must be at least 10 digits")
      .max(15, "Contact number is too long"),

    email: z.string().email("Invalid email format").optional(),

    password: z.string().min(8, "Password must be at least 8 characters"),

    confirmPassword: z.string(),

    role: z.enum(["GUARDIAN", "STUDENT"], {
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

export const registerStudentSchema = z
  .object({
    fullname: z
      .string()
      .min(3, "Fullname must be at least 3 characters")
      .max(100, "Fullname is too long"),

    username: z
      .string()
      .min(3, "Username must be at least 3 characters")
      .max(30, "Username is too long")
      .optional(),

    mobile: z
      .string()
      .min(10, "Contact number must be at least 10 digits")
      .max(15, "Contact number is too long"),

    email: z.string().email("Invalid email format").optional(),

    password: z.string().min(8, "Password must be at least 8 characters"),

    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export const addStudentSchema = z.object({
  scid: z.string().refine((value) => /^SC\d{4}$/.test(value), {
    message: "Enter a valid SC ID (e.g., SC1234)",
  }),
});

export const signinSchema = z.object({
  identifier: z
    .string()
    .refine((value) => /^\d{11}$/.test(value) || /^SC\d{4}$/.test(value), {
      message:
        "Enter a valid 10-digit phone number or a valid SSC ID (e.g., SC1234)",
    }),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

export const forgetPasswordSchema = z.object({
  resetField: z
    .string()
    .refine((value) => /^\d{11}$/.test(value) || /^SC\d{4}$/.test(value), {
      message:
        "Enter a valid 10-digit phone number or a valid SSC ID (e.g., SC1234)",
    }),
});

export const resetPasswordSchema = z
  .object({
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export const otpSchema = z.object({
  otp: z.string().length(6, "OTP must be exactly 6 digits"),
});

export type OtpFormValues = z.infer<typeof otpSchema>;
