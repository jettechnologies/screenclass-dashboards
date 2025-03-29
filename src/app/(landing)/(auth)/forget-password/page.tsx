import {
  ForgetPasswordContent,
  ForgetPasswordForm,
} from "@/features/landing/sections/auth/forget-password";

const page = () => {
  return (
    <div className="flex min-h-screen w-full flex-col gap-x-10 text-white lg:flex-row overflow-x-hidden">
      <div className="min-h-[350px] w-full flex-1 py-[1.5rem] lg:min-h-screen">
        <ForgetPasswordContent />
      </div>
      <div className="h-full w-full flex-1 place-items-center px-8 pb-8 lg:grid lg:h-screen lg:px-14 lg:py-12">
        <ForgetPasswordForm />
      </div>
    </div>
  );
};

export default page;
