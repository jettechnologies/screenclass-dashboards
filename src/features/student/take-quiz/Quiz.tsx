import React from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import logout from "../assets/logout.svg";
import profilepic from "../assets/profilepic.svg";
import add from "../assets/add.svg";
import test from "../assets/test.svg";
import amico from "../assets/amico.svg";
import AlarmOutlinedIcon from "@mui/icons-material/AlarmOutlined";
import Image from "next/image";
import Link from "next/link";

export const Quiz = () => {
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
            <section className="mt-24 w-full px-4 sm:mt-9 sm:px-7 sm:py-2">
              <h1 className="text-xl font-bold text-[#082038]">Quiz</h1>
              <h1 className="mt-4 text-lg text-[#082038] sm:mt-8">
                Put your understanding of the topic to test by answering a few
                questions.
              </h1>
            </section>
            <div className="flex w-full items-start px-7">
              <div className="flex w-full flex-col items-start">
                <div className="h-full w-full">
                  <div className="mt-6 flex h-[270px] w-full flex-col rounded-xl border border-[#7BE1F7] bg-white drop-shadow-xl sm:w-[590px]">
                    <div className="flex h-full w-full items-center justify-center rounded-xl bg-[#7BE1F7] px-7">
                      <h2 className="text-md ml-12 text-center font-semibold sm:ml-3 sm:text-start sm:text-2xl">
                        Importance of Recreation
                      </h2>

                      <Image
                        src={test}
                        alt="logo"
                        width={100}
                        height={100}
                        className="min-w-[250px] sm:min-w-[300px]"
                      />
                    </div>
                    <div className="h-[60px] w-full rounded-b-xl bg-white px-7 py-4">
                      Subject:{" "}
                      <span className="font-semibold">Comprehension</span>
                    </div>
                  </div>
                  <div className="mt-12 w-full sm:mt-16">
                    <h2>
                      Total Questions: <span className="font-semibold">3</span>
                    </h2>
                    <h2 className="mt-3">
                      Total Time: <span className="font-semibold">15 min</span>
                    </h2>
                    <h2 className="mt-5 font-semibold">Instructions:</h2>
                    <h2 className="mt-2 max-w-2xl">
                      The quizzes consists of questions carefully designed to
                      help you self-assess your comprehension of the information
                      presented on the topics covered in the unit.
                    </h2>
                    <h2 className="mt-2 max-w-2xl">
                      After responding to a question, click on the {'"'}Next
                      Question button{'"'} at the bottom to go to the next
                      question. After responding to the last question, click on{" "}
                      {'"'}Close{'"'} on the top of the window to exit the quiz.
                    </h2>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <Image
                  src={amico}
                  alt="logo"
                  width={100}
                  height={100}
                  className="hidden min-w-[500px] md:hidden lg:block"
                />
              </div>
            </div>
            <div className="mb-16 mt-8 flex items-center justify-start space-x-6 px-7 sm:mb-0 sm:mt-12">
              <div className="flex w-28 items-center justify-center rounded-md border-2 border-black bg-[#F0F7F9] px-4 py-2 text-center text-lg">
                <AlarmOutlinedIcon />
                <h2>15:00</h2>
              </div>
              <Link href="/student/take-quiz/assesment">
                <button className="w-40 rounded-2xl bg-[#0966AB] px-4 py-2 text-lg font-semibold text-white shadow-xl">
                  Start Quiz
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
