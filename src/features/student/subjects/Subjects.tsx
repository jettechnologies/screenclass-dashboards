import React from "react";
import Image from "next/image";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import { subjectsdata } from "./data";
import Link from "next/link";

export const Subjects = () => {
  return (
    <div className="flex h-full w-full flex-col bg-[#F1F1F1] tracking-wide text-slate-900 sm:flex-row">
      <div className="w-full p-0 lg:w-full">
        <div className="flex h-full w-full flex-col items-center bg-[#ffffff]">
          <div className="h-full w-full">
            <section className="mt-24 flex w-full items-center justify-between px-4 sm:mt-9 sm:flex sm:px-7 sm:py-2">
              <h3 className="text-xl font-bold text-[#082038]">All Subjects</h3>
            </section>
            {/* subjects data */}
            <section className="mb-16 mt-10 flex w-full flex-col flex-wrap items-center gap-4 space-y-8 px-8 sm:space-y-0 md:mb-16 md:flex-col md:space-y-4 lg:mb-0 lg:flex-row">
              {subjectsdata.map((data, index) => (
                <Link key={index} href={data.link}>
                  <div className="h-[23rem] w-[370px] rounded-lg border px-4 py-4 shadow-lg sm:w-[25rem] sm:px-8">
                    <div className="flex w-full flex-col items-center">
                      <Image
                        src={data.picture}
                        alt="logo"
                        width={1000}
                        height={1000}
                        className="min-w-[300px] rounded-lg sm:min-w-[20rem]"
                      />
                      <div className="mt-5 w-full">
                        <p className="font-semibold">{data.subject}</p>
                        <div className="flex w-full flex-col items-center">
                          <div className="mt-2 flex w-full items-center space-x-1 text-sm text-gray-500">
                            <DashboardOutlinedIcon />
                            <p>{data.topics} Topics</p>
                          </div>
                          <div className="mt-1 flex w-full items-center space-x-1 text-sm text-gray-500">
                            <AccessTimeOutlinedIcon />
                            <p>{data.units} Units</p>
                          </div>
                        </div>
                        {/* {<p className="ml-36 w-full font-bold text-[#7D7CB4]">
                          {data.time}
                        </p>} */}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};
