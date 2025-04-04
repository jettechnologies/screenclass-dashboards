"use client";

import { InputField, TextAreaField } from "../../components/form";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema } from "@/utils";
import Image from "next/image";
import { Map, APIProvider } from "@vis.gl/react-google-maps";

interface ContactFormTypes {
  name: string;
  email: string;
  contact: string;
  message: string;
}

const location = { lat: 6.569680110827858, lng: 3.371306080013683 };

export const ContactForm = () => {
  const methods = useForm<ContactFormTypes>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = (data: ContactFormTypes) => console.log(data);

  return (
    <section
      className="grid min-h-screen w-full place-items-center"
      style={{
        background:
          "linear-gradient(to left, rgba(255,160,103,0.25) 0%, rgba(90,159,211,0.25) 100%)",
        backdropFilter: "blur(80px)",
        WebkitBackdropFilter: "blur(80px)",
      }}
    >
      <div className="flex min-h-screen w-full flex-col-reverse gap-8 md:flex-row">
        <div className="w-full px-8 pb-12 pt-12 max-sm:order-2 md:w-1/2 lg:px-16 xl:px-24">
          <FormProvider {...methods}>
            <form
              className="flex h-full w-full flex-col justify-center gap-y-4"
              onSubmit={methods.handleSubmit(onSubmit)}
            >
              <div className="flex w-full flex-col gap-y-4">
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
              <div className="mt-6 w-full">
                <button className="w-full rounded-lg bg-SC-Nav-Blue px-[10px] py-3 font-poppins text-sm font-semibold capitalize text-white lg:text-xl">
                  send message
                </button>
              </div>
            </form>
          </FormProvider>
        </div>
        {/* <div className="flex items-center max-sm:order-1 md:w-1/2 md:pr-4">
          <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY!}>
            <div className="relative h-[300px] max-h-[500px] min-h-[250px] w-full rounded-md border-2 border-black shadow-md lg:h-[430px]">
              <Map
                center={location}
                zoom={13}
                gestureHandling="greedy"
                disableDefaultUI={false}
                zoomControl={true}
              />
              <div className="absolute left-0 top-0 h-full w-full">
                <Image
                  src="/images/contact-location.png"
                  alt="contact-location"
                  width={100}
                  height={100}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </APIProvider>
        </div> */}
        <div className="flex items-center max-sm:order-1 md:w-1/2 md:pr-4">
          <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY!}>
            <div
              className="relative h-[300px] max-h-[500px] min-h-[250px] w-full rounded-md border-2 border-black shadow-md lg:h-[430px]"
              aria-label="Location map"
            >
              <Map
                center={location}
                zoom={13}
                gestureHandling="greedy"
                disableDefaultUI={false}
                zoomControl={true}
                aria-label="Interactive map"
              />

              {/* Fallback image in case map fails to load */}
              <div
                className="absolute bottom-0 left-0 h-[150px] w-[250px]"
                role="img"
                aria-label="Map location preview"
              >
                <Image
                  src="/images/contact-location.png"
                  alt="Location preview image"
                  width={250}
                  height={150}
                  className="h-full w-full object-cover"
                  priority={false}
                  quality={80}
                  loading="lazy"
                />
              </div>
            </div>
          </APIProvider>
        </div>
      </div>
    </section>
  );
};
