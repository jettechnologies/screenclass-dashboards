import {
  SignupContent,
  SignupForm,
} from "@/features/landing/sections/auth/signup/";

export default function page() {
  return (
    <div className="flex min-h-screen w-full flex-col gap-x-10 text-white lg:flex-row">
      <div className="min-h-[350px] w-full flex-1 border-2 border-black py-[3rem] lg:min-h-screen">
        <SignupContent />
      </div>
      <div className="-mt-[20%] h-full w-full flex-1 place-items-center px-8 pb-8 lg:-mt-0 lg:px-14 lg:py-12">
        <SignupForm />
      </div>
    </div>
  );
}
