import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import logout from "../assets/logout.svg";
import profilepic from "../assets/profilepic.svg";
import add from "../assets/add.svg";
import AlarmOutlinedIcon from "@mui/icons-material/AlarmOutlined";
import Image from "next/image";
import { quiz } from "./data";
import Link from "next/link";

export const Assesment = () => {
  return (
    <div className="flex h-full w-full flex-col bg-[#F1F1F1] tracking-wide text-slate-900 sm:flex-row">
      <div className="w-full p-0 lg:w-full">
        <div className="flex h-full w-full flex-col items-center bg-[#ffffff]">
          {/* topbar */}
          <section className="mt-24 hidden w-full items-center justify-between border-b-2 border-gray-600 px-4 sm:mt-8 sm:flex sm:px-7 sm:py-2">
            <h1 className="text-xl font-bold text-[#082038]">Take Quiz</h1>
            <div className="flex items-center justify-center space-x-4">
              <h1 className="text-md font-extralight text-[#082038]">
                09 June, 2023
              </h1>
              <div className="rounded-md bg-[#9698D54D] p-1">
                <SearchOutlinedIcon />
              </div>
            </div>
            <div className="flex w-[370px] items-center justify-between bg-clip-text px-7">
              <div className="relative mr-10 flex w-full items-center justify-center space-x-4">
                <div className="">
                  <Image
                    src={profilepic}
                    alt="logo"
                    width={10}
                    height={10}
                    className="min-w-[70px]"
                  />
                  <Image
                    src={add}
                    alt="logo"
                    width={100}
                    height={100}
                    className="absolute right-[136px] top-[45px] max-h-[21px] max-w-[21px]"
                  />
                </div>
                <div className="hiddee=items-center flex flex-col">
                  <h2 className="text-xl font-light">SC51125</h2>
                  <h2 className="text-xl font-light text-[#F7631B]">Student</h2>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-4">
                <Image
                  src={logout}
                  alt="logo"
                  width={100}
                  height={100}
                  className="max-h-[30px] max-w-[30px]"
                />
              </div>
            </div>
          </section>
          {/* body */}
          <div className="h-full w-full">
            <section className="mt-24 flex w-full justify-between space-x-10 px-5 sm:mt-9 sm:justify-normal sm:px-7 sm:py-2">
              <h1 className="text-xl font-bold text-[#082038]">Quiz</h1>
              <h1 className="text-lg text-[#082038]">Common Fractions</h1>
            </section>
            <section className="mt-6 flex w-full items-center justify-between px-7">
              <h2 className="text-gray-500">Fractions</h2>
              <div className="flex items-center justify-center space-x-1 text-center">
                <AlarmOutlinedIcon />
                <h2>00:50</h2>
              </div>
            </section>
            {/* progressbar */}
            <section className="mt-4 w-full px-7 sm:mt-6">
              <div className="h-2 w-full rounded-lg bg-neutral-200 dark:bg-gray-300">
                <div
                  className={`h-2 rounded-l-lg bg-[#0966AB]`}
                  style={{ width: "45%" }}
                ></div>
              </div>
            </section>
            {/* questions & options */}
            <section className="mt-4 w-full px-7">
              {quiz.map((item, index) => (
                <div
                  key={index}
                  className="h-[570px] w-full rounded-2xl border px-4 py-4"
                >
                  <h2 className="mt-5 sm:mt-10">
                    {" "}
                    <span className="text-xl font-semibold">
                      Q.{item.number}
                    </span>
                    /{item.total}
                  </h2>
                  <h2 className="mt-4 font-semibold">{item.question}</h2>
                  <div className="mt-6 flex w-full flex-col space-y-6">
                    {item.options.map((option, index) => (
                      <div
                        key={index}
                        className="flex w-full items-center space-x-2 rounded-2xl bg-[#F0F7F9] p-4 hover:bg-teal-600 hover:duration-200 hover:ease-in"
                      >
                        {/* {item.letters.map((letter, index) => (
                          <h2 key={index} className="font-semibold">
                            {letter}
                          </h2>
                        ))} */}
                        <h2 className="font-semibold">{option}</h2>
                      </div>
                    ))}
                  </div>
                  <div className="mb-16 mt-12 flex w-full items-center justify-center space-x-6 sm:mb-0">
                    <button className="w-40 rounded-2xl bg-[#F0F7F9] px-4 py-2 text-lg font-semibold text-black shadow-xl">
                      Previous
                    </button>
                    <button className="hidden w-40 rounded-2xl bg-[#0966AB] px-4 py-2 text-lg font-semibold text-white shadow-xl">
                      Next
                    </button>
                    <Link href="/student/take-quiz/assesment/test-scores">
                      <button className="w-40 rounded-2xl bg-[#0966AB] px-4 py-2 text-lg font-semibold text-white shadow-xl">
                        Submit
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};
