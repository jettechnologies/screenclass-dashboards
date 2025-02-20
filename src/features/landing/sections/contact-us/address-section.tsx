import Image from "next/image";

export const AddressSection = () => {
  return (
    <section className="min-h-screen w-full">
      <div className="h-[40dvh] w-full bg-bg-contact-map bg-cover bg-center bg-no-repeat" />
      <div className="relative mx-auto flex w-full max-w-screen-xl flex-wrap justify-between gap-y-8 pb-12 pt-24 max-[780px]:px-8 lg:pt-48">
        <div className="flex-[0_0_50%] lg:flex-[0_0_33.3%] xl:flex-[0_0_30%]">
          <h5 className="text-sm font-semibold uppercase text-[#07A1AB] lg:text-2xl">
            Address
          </h5>
          <div className="mt-4 flex flex-col gap-y-4">
            <p className="text-xs font-medium text-black lg:text-lg">
              Screenclass Learning Management System Inc.
            </p>
            <p className="text-xs font-medium text-black lg:text-lg">
              3B, Alegbe Close, Mende Maryland, Lagos, Nigeria.
            </p>
          </div>
        </div>
        <div className="flex-[0_0_50%] max-[780px]:order-3 lg:flex-[0_0_33.3%] xl:flex-[0_0_30%]">
          <h5 className="text-sm font-semibold uppercase text-[#07A1AB] lg:text-2xl">
            call us
          </h5>
          <div className="mt-4 flex flex-col gap-y-4">
            <p className="text-xs font-medium text-black lg:text-lg">
              +234 704 330 3000
            </p>
            <p className="text-xs font-medium text-black lg:text-lg">
              +234 809 293 3330
            </p>
            <p className="text-xs font-medium text-black lg:text-lg">
              Mon - Fr. 9am - 6pm (GMT +1)
            </p>
          </div>
        </div>
        <div className="flex-[0_0_50%] max-[780px]:order-2 lg:flex-[0_0_33.3%] xl:flex-[0_0_30%]">
          <h5 className="text-sm font-semibold uppercase text-[#07A1AB] lg:text-2xl">
            EMAIL ADDRESS
          </h5>
          <div className="mt-4 flex flex-col gap-y-4">
            <p className="text-xs font-medium text-black lg:text-lg">
              Info@screenclass.com
            </p>
            <p className="text-xs font-medium text-black lg:text-lg">
              admin@screenclass.com
            </p>
            <p className="text-xs font-medium text-black lg:text-lg">
              screenclass@gmail.com
            </p>
          </div>
        </div>
        {/* the location image */}
        <div className="absolute -top-[15dvh] right-0 h-[130px] w-[150px] overflow-clip rounded-xl shadow-xl lg:-top-[25dvh] lg:h-[250px] lg:w-[250px]">
          <Image
            src="/images/contact-location.png"
            alt="contact-location"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};
