"use client";

import { SubmitHandler, useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchema } from "@/utils/validators";
import { InputField, Button } from "@/features/landing/components/form";
import { LuCheck } from "react-icons/lu";
import Link from "next/link";
import { signup } from "@/mutation";
import { Toaster, toast } from "sonner";
import { UserRoles } from "@/utils";
import { redirect } from "next/navigation";

interface SignupFormProps {
  fullname: string;
  username: string;
  mobile: string;
  email: string;
  password: string;
  confirmPassword: string;
  role: UserRoles;
  termsAgreement: boolean;
}

const inputFields = [
  { name: "fullname", placeholder: "Fullname" },
  { name: "username", placeholder: "Username" },
  { name: "mobile", placeholder: "Phone number", color: "#619BEB" },
  { name: "email", placeholder: "Email address" },
  { name: "password", type: "password", placeholder: "Password" },
  {
    name: "confirmPassword",
    type: "password",
    placeholder: "Confirm Password",
  },
];

export const SignupForm = () => {
  const methods = useForm<SignupFormProps>({
    resolver: zodResolver(signupSchema),
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const selectedRole = methods.watch("role");
  const watchedFields = methods.watch([
    "fullname",
    "username",
    "mobile",
    "password",
    "confirmPassword",
    "role",
    "termsAgreement",
  ]);

  // Check if all fields are filled
  const allFieldsFilled = watchedFields.every((field) => Boolean(field));
  console.log(allFieldsFilled, methods.formState.isValid);

  const submit: SubmitHandler<SignupFormProps> = async (data) => {
    const { fullname, username, mobile, email, password, role } = data;
    const studentRole = role.toLowerCase() === "student";
    const [firstname, lastname] = fullname.split(" ");
    const signupData = {
      firstName: firstname,
      lastName: lastname,
      username,
      mobile,
      email,
      password,
      role,
    };

    const response = await signup(signupData);
    if (response?.success) {
      toast.success(response?.message);
      if (studentRole) {
        redirect("/student");
      } else {
        redirect("/guardian");
      }
    } else {
      toast.error(response?.message);
    }
  };

  return (
    <>
      <Toaster duration={2000} position="top-right" richColors />

      <div className="grid min-h-[300px] w-full max-w-[554px] place-items-center rounded-lg bg-[#EDF7FE] py-12 shadow-md">
        <div className="w-fit px-3">
          <h3 className="text-center text-xl font-semibold capitalize text-black lg:text-2xl">
            Register
          </h3>
          <FormProvider {...methods}>
            <form
              onSubmit={methods.handleSubmit(submit)}
              className="mt-12 flex w-fit flex-col gap-y-8"
            >
              {inputFields.map(
                ({ name, type = "text", placeholder, color }) => (
                  <div key={name} className="h-[52px] w-full lg:w-[376px]">
                    <InputField
                      name={name}
                      type={type as "text" | "password"}
                      placeholder={placeholder}
                      inputSize="lg"
                      radius="10px"
                      color={color}
                      className="text-SC-Brand-Blue shadow-md placeholder:text-SC-Brand-Blue"
                    />
                  </div>
                ),
              )}
              <div className="w-full lg:w-[376px]">
                <p className="font-poppins text-xs font-normal text-black lg:text-sm">
                  Select role
                </p>
                <div className="mt-6 flex w-full gap-x-8">
                  {["STUDENT", "GUARDIAN"].map((role) => (
                    <button
                      key={role}
                      type="button"
                      className={`flex h-[36px] items-center gap-x-4 rounded-[10px] px-[14px] py-[6px] lowercase max-[780px]:flex-1 ${
                        selectedRole === role
                          ? "bg-SC-Orange text-white"
                          : "bg-[#E3E3E3] text-black"
                      } ${methods.formState.errors.role && "border border-red-500"}`}
                      onClick={() =>
                        methods.setValue("role", role as UserRoles)
                      }
                    >
                      <p className="text-[10px] font-normal capitalize lg:text-xs">
                        I am a {role}
                      </p>
                      <LuCheck size={20} color="white" />
                    </button>
                  ))}
                </div>
                {methods.formState.errors.role && (
                  <p className="mt-1 text-sm text-red-500">
                    {methods.formState.errors.role.message}
                  </p>
                )}
              </div>
              <div className="w-full lg:w-[376px]">
                <div className="flex w-full items-center gap-x-2">
                  <input
                    type="checkbox"
                    className={`h-4 w-4 rounded-sm border bg-gray-100 checked:border-SC-Orange checked:bg-SC-Orange ${methods.formState.errors.termsAgreement ? "border-red-500" : "border-gray-200"}`}
                    {...methods.register("termsAgreement")}
                  />
                  <p className="text-center font-poppins text-[10px] text-black">
                    By registering for Screenclass, you to the{" "}
                    <span className="text-SC-Orange">Terms</span> and{" "}
                    <span className="text-SC-Orange">Privacy Policy.</span>
                  </p>
                </div>
                {methods.formState.errors.termsAgreement && (
                  <p className="mt-1 text-sm text-red-500">
                    {methods.formState.errors.termsAgreement.message}
                  </p>
                )}
              </div>
              <div className="mt-6 w-full lg:w-[376px]">
                <Button
                  isDisabled={!allFieldsFilled || !methods.formState.isValid}
                  loading={methods.formState.isSubmitting}
                  content="Register"
                />
              </div>
              <div className="flex w-full justify-center gap-x-4">
                <Link
                  href="/signin/student"
                  className="rounded-full bg-white px-[18px] py-[7px] shadow-md"
                >
                  <p className="text-[8px] font-normal text-[#131313] lg:text-xs">
                    If you have an Account?{" "}
                    <span className="ml-1 text-SC-Orange">Sign In</span>
                  </p>
                </Link>
              </div>
            </form>
          </FormProvider>
        </div>
      </div>
    </>
  );
};
