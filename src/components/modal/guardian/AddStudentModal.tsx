"use client";

import { SubmitHandler, useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { addStudentSchema } from "@/utils/validators";
import { InputField } from "@/features/landing/components/form";
import { attachStudentAsGuardian } from "@/mutation";
import { Toaster, toast } from "sonner";
import React from "react";
import Modal from "react-modal";
import useNoScroll from "@/components/hooks/useNoScroll";
import { Button } from "@/features/landing/components/form";
import { useAllStudents } from "@/hook/swr";

interface AddStudentProps {
  scid: string;
}
const AddStudentModal = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  useNoScroll(isOpen);

  const { mutate } = useAllStudents();

  const methods = useForm<AddStudentProps>({
    resolver: zodResolver(addStudentSchema),
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const watchedFields = methods.watch(["scid"]);

  const allFieldsFilled = watchedFields.every((field) => Boolean(field));

  const submit: SubmitHandler<AddStudentProps> = async (data) => {
    const { scid } = data;

    try {
      const response = await attachStudentAsGuardian({ scid });
      if (response?.success) {
        toast.success(response?.message);
        setIsOpen(false);
        mutate();
      } else {
        toast.error(response?.message);
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred during registration");
    }
  };

  return (
    <>
      <Toaster position="top-right" richColors />
      <Modal
        isOpen={isOpen}
        className="modal w-[298px] bg-SC-Bland px-8 pb-3 pt-5"
        overlayClassName="backdrop"
        onRequestClose={() => setIsOpen(false)}
        shouldCloseOnOverlayClick={true}
        contentLabel="Register Student Modal"
        ariaHideApp={false}
      >
        <h2 className="segoe font-semibold text-black">Register new student</h2>

        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(submit)} className="mt-6">
            <InputField
              name="scid"
              placeholder="SC1234"
              className="input-field mb-4 px-4"
            />
            <Button
              type="submit"
              content="Register"
              isDisabled={!allFieldsFilled || !methods.formState.isValid}
              loading={methods.formState.isSubmitting}
              className="font-normal lg:text-sm"
            />
          </form>
        </FormProvider>
      </Modal>
    </>
  );
};

export default AddStudentModal;
