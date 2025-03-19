import { FormContent } from "@/features/landing/components/shared";

export const SignupContent = () => {
  return (
    <>
      <FormContent
        formType="signin"
        children={
          <p className="text-center font-poppins text-[14px] font-medium text-[#063D68] lg:text-[20px]">
            Register now to and continue enjoying{" "}
            <span className="px-2 text-SC-Orange">limitless features</span> on
            our platform
          </p>
        }
      />
    </>
  );
};
