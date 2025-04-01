import Image from "next/image";

interface FormContentProps {
  formType: "reset-password" | "signin";
  children: React.ReactNode;
}

export const FormContent = ({ formType, children }: FormContentProps) => {
  return (
    <section className="-mb-[100%] ml-0 flex h-full w-full flex-col-reverse max-sm:px-2 md:-mb-[50%] lg:-mb-[0%] lg:ml-4 lg:flex-col">
      {formType === "signin" ? (
        <Image
          src="/images/form-phone.png"
          alt="form image"
          width={953}
          height={795}
          priority
          className="h-full w-full object-cover"
        />
      ) : (
        <Image
          src="/images/reset-password.png"
          alt="form image"
          width={680}
          height={650}
          priority
          className="object-contain"
        />
      )}
      {children}
    </section>
  );
};
