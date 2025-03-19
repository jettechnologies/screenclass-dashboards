import Image from "next/image";

export const WhoWeAreSection = () => {
  return (
    <section className="relative min-h-[90dvh] w-full bg-bg-about-section-3 bg-cover bg-center bg-no-repeat px-8 py-6 md:py-12">
      <div className="mx-auto h-full w-[90%]">
        <div className="flex h-fit w-fit flex-col justify-between justify-self-end lg:w-full lg:flex-row">
          <div className="w-max">
            <h3 className="text-[60px] font-normal uppercase leading-none text-white lg:text-[100px]">
              who
            </h3>

            <div className="mb-4 mt-2 flex items-center gap-x-2 lg:gap-x-4">
              <h2 className="font-poppins text-[65px] font-medium uppercase leading-none text-SC-Blue lg:text-[115px]">
                we
              </h2>
              <h5 className="rotate-90 self-center text-[30px] font-medium uppercase leading-none text-white lg:text-[48px]">
                are
              </h5>
            </div>
            <p className="w-[190px] text-xs font-normal text-white lg:w-[300px] lg:text-sm">
              Learn the basics. Build a Firm Foundation | get Education through
              our Expressive Medium that Inspires creativity
            </p>
          </div>
          <div className="relative mt-[4rem] h-[252px] w-[267px] lg:h-[300px] lg:w-[400px] xl:h-[383px] xl:w-[513px]">
            <Image
              src="/images/about-who-img.png"
              alt="who-we-are_img"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="mt-10 flex w-full flex-wrap justify-center gap-4">
          <div className="min-w-fit rounded-[4px] bg-white px-[30px] py-[10px]">
            <p className="text-[10px] font-medium text-black lg:text-sm">
              Over 20 years Experience
            </p>
          </div>
          <div className="min-w-fit rounded-[4px] bg-white px-[30px] py-[10px]">
            <p className="text-[10px] font-medium text-black lg:text-sm">
              A Team of Professionals
            </p>
          </div>
          <div className="min-w-fit rounded-[4px] bg-white px-[30px] py-[10px]">
            <p className="text-[10px] font-medium text-black lg:text-sm">
              Best E-Learning platform for children
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// another code for incase i will be told to change the feel
{
  /* <section className="relative min-h-screen w-full border-2 border-black bg-bg-about-section-3 bg-cover bg-center bg-no-repeat">
  <div className="relative z-30">
    <Header />
  </div>
  <div className="mx-auto h-full w-[90%] px-8 py-6 md:py-12">
    <div className="flex h-fit w-fit flex-col justify-between justify-self-end lg:w-full lg:flex-row">
      <div className="w-max">
        <h3 className="text-[60px] font-normal uppercase leading-none text-white lg:text-[100px]">
          who
        </h3>

        <div className="mb-4 mt-2 flex items-center gap-x-2 lg:gap-x-4">
          <h2 className="font-poppins text-[65px] font-medium uppercase leading-none text-SC-Blue lg:text-[115px]">
            we
          </h2>
          <h5 className="rotate-90 self-center text-[30px] font-medium uppercase leading-none text-white lg:text-[48px]">
            are
          </h5>
        </div>
        <p className="w-[190px] text-xs font-normal text-white lg:w-[300px] lg:text-sm">
          Learn the basics. Build a Firm Foundation | get Education through our
          Expressive Medium that Inspires creativity
        </p>
      </div>
      <div className="relative mt-[5rem] h-[252px] w-[267px] lg:h-[300px] lg:w-[400px] xl:h-[383px] xl:w-[513px]">
        <Image
          src="/images/about-who-img.png"
          alt="who-we-are_img"
          fill
          className="object-cover"
        />
      </div>
    </div>
    <div className="mt-20 flex w-full flex-wrap justify-center gap-4">
      <div className="min-w-fit rounded-[4px] bg-white px-[30px] py-[10px]">
        <p className="text-[10px] font-medium text-black lg:text-sm">
          Over 20 years Experience
        </p>
      </div>
      <div className="min-w-fit rounded-[4px] bg-white px-[30px] py-[10px]">
        <p className="text-[10px] font-medium text-black lg:text-sm">
          A Team of Professionals
        </p>
      </div>
      <div className="min-w-fit rounded-[4px] bg-white px-[30px] py-[10px]">
        <p className="text-[10px] font-medium text-black lg:text-sm">
          Best E-Learning platform for children
        </p>
      </div>
    </div>
  </div>
</section>; */
}
