"use client";

import { InputField, TextAreaField } from "../../components/form";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema } from "@/utils";

interface ContactFormTypes {
  name: string;
  email: string;
  contact: string;
  message: string;
}

export const ContactForm = () => {
  const methods = useForm<ContactFormTypes>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = (data: ContactFormTypes) => console.log(data);

  return (
    <section className="grid min-h-screen w-full place-items-center bg-bg-index-two bg-center bg-no-repeat">
      <div className="w-full max-w-screen-xl rounded-[20px] bg-white px-8 pb-12 pt-12 shadow-md lg:px-16 xl:px-24">
        <FormProvider {...methods}>
          <form
            className="flex h-full w-full flex-col gap-y-4"
            onSubmit={methods.handleSubmit(onSubmit)}
          >
            <div className="flex w-full flex-col gap-y-4 lg:flex-row lg:gap-x-12">
              <div className="flex flex-1 flex-col gap-y-6">
                <InputField
                  name="name"
                  placeholder="Enter your name"
                  inputSize="lg"
                  radius={"6px"}
                  className="border border-black shadow-md"
                />
                <InputField
                  name="email"
                  placeholder="Enter your email address"
                  inputSize="lg"
                  radius={"6px"}
                  className="border border-black shadow-md"
                />
                <InputField
                  name="contact"
                  placeholder="Enter your phone number"
                  inputSize="lg"
                  radius={"6px"}
                  className="border border-black shadow-md"
                />
              </div>
              <div className="flex-1">
                <TextAreaField
                  name="message"
                  className="h-full border border-black shadow-md max-sm:h-[119px]"
                  placeholder="Enter your message here"
                />
              </div>
            </div>
            <div className="mt-6 w-full justify-end lg:flex lg:gap-x-12">
              <button className="w-full flex-[0_0_48%] rounded-lg bg-SC-Nav-Blue px-[10px] py-3 font-poppins text-sm font-semibold capitalize text-white lg:text-xl">
                send message
              </button>
            </div>
          </form>
        </FormProvider>
      </div>
    </section>
  );
};
