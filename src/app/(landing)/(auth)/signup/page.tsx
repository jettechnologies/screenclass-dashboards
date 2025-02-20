import {
  SignupContent,
  SignupForm,
} from "@/features/landing/sections/auth/signup/";
import { useForm } from "react-hook-form";

export default function page() {
  return (
    <div className="flex min-h-screen w-full flex-col gap-x-10 text-white lg:flex-row">
      <div className="min-h-[350px] w-full flex-1 pt-24 lg:min-h-screen lg:pt-48">
        <SignupContent />
      </div>
      <div className="h-full w-full flex-1 px-8 pb-8 lg:px-14 lg:py-12">
        <SignupForm />
      </div>
    </div>
  );
}
