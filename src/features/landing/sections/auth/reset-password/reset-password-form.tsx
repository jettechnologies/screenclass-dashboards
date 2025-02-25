"use client";

import { FormProvider, useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputField, Button } from "@/features/landing/components/form";
import { resetPasswordSchema } from "@/utils";

interface ResetFormProps {
  resetField: string;
}

export const ResetPasswordForm = () => {
  const methods = useForm<ResetFormProps>({
    resolver: zodResolver(resetPasswordSchema),
  });

  const watchedFields = methods.watch(["resetField"]);

  // Check if all fields are filled
  const allFieldsFilled = watchedFields.every((field) => field && field !== "");

  const submit: SubmitHandler<ResetFormProps> = (data) => {
    console.log(data);
  };

  return (
    <div className="grid min-h-[300px] w-full max-w-[554px] place-items-center rounded-lg bg-[#EDF7FE] py-12 shadow-md">
      <div className="w-fit px-3">
        <h3 className="text-center text-xl font-semibold capitalize text-black lg:text-2xl">
          Reset password
        </h3>
        <FormProvider {...methods}>
          <form
            onSubmit={methods.handleSubmit(submit)}
            className="mt-12 flex w-fit flex-col gap-y-8"
          >
            <div className="h-[52px] w-full lg:w-[376px]">
              <InputField
                name="resetField"
                placeholder="Enter Phone Number or SSCID"
                inputSize="lg"
                radius={"10px"}
                className="text-SC-Brand-Blue shadow-md placeholder:text-SC-Brand-Blue"
              />
            </div>
            <div className="mt-6 w-full">
              <Button
                isDisabled={!allFieldsFilled || !methods.formState.isValid}
                content="enter"
              />
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
};
