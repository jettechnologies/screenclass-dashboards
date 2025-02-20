import {
  SigninContent,
  SigninForm,
} from "@/features/landing/sections/auth/signin";

const page = () => {
  return (
    <div className="flex min-h-screen w-full flex-col gap-x-10 text-white lg:flex-row">
      <div className="min-h-[350px] w-full flex-1 pt-24 lg:min-h-screen lg:pt-40">
        <SigninContent />
      </div>
      <div className="h-full w-full flex-1 place-items-center px-8 pb-8 lg:grid lg:h-screen lg:px-14 lg:py-12">
        <SigninForm />
      </div>
    </div>
  );
};

export default page;
