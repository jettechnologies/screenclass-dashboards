"use client";
import React from "react";
import Sidebar from "../Components/Sidebar/Sidebar";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import logout from "../assets/logout.svg";
import profilepic from "../assets/profilepic.svg";
import add from "../assets/add.svg";
import Image from "next/image";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
// import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import check from "../assets/check.gif";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import { subjectsdata } from "./data";
import Link from "next/link";

export const Subjects = () => {
  const [open, setOpen] = React.useState<boolean>(false);
  const [done, setDone] = React.useState<boolean>(false);
  const [subject, setSubject] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setSubject(event.target.value as string);
  };

  return (
    <div className="flex h-full w-full flex-col bg-[#F1F1F1] tracking-wide text-slate-900 sm:flex-row">
      {/* <div className="lg:w-[14%]">
        <Sidebar />
      </div> */}
      <div className="w-full p-0 lg:w-full">
        <div className="flex h-full w-full flex-col items-center bg-[#ffffff]">
          {/* topbar */}
          <section className="mt-24 hidden w-full items-center justify-between border-b-2 border-gray-600 px-4 sm:mt-8 sm:flex sm:px-7 sm:py-2">
            <h1 className="text-xl font-bold text-[#082038]">My Subjects</h1>
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
            <section className="mt-24 flex w-full items-center justify-between px-4 sm:mt-9 sm:flex sm:px-7 sm:py-2">
              <h1 className="text-xl font-bold text-[#082038]">All Subjects</h1>
              <button
                onClick={() => setOpen(true)}
                className="w-44 rounded-md bg-[#F7631B] px-1 py-2 text-white sm:w-56 sm:px-4"
              >
                Add new subjects
              </button>
              {/* Add a subject modal */}
              <Modal
                aria-labelledby="modal-title"
                aria-describedby="modal-desc"
                open={open}
                onClose={() => setOpen(false)}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Sheet
                  variant="outlined"
                  sx={{
                    minWidth: 350,
                    borderRadius: "md",
                    p: 3,
                    boxShadow: "lg",
                  }}
                >
                  <ModalClose variant="plain" sx={{ m: 1 }} />
                  <Typography
                    component="h2"
                    id="modal-title"
                    level="h4"
                    textColor="inherit"
                    sx={{ fontWeight: "lg", mb: 1 }}
                  >
                    Add a subject
                  </Typography>
                  <div className="mt-4 flex w-full flex-col items-start">
                    <h2 className="text-md mb-4 mt-0">Choose a subject</h2>
                    <div className="relative flex w-full items-center">
                      {/* input within modal */}
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                          Subject
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={subject}
                          label="subject"
                          onChange={handleChange}
                        >
                          <MenuItem value={"English"}>English</MenuItem>
                          <MenuItem value={"Mathematics"}>Mathematics</MenuItem>
                          <MenuItem value={"Basic Science"}>
                            Basic Science
                          </MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                    <button
                      onClick={() => setDone(true)}
                      className="mt-4 w-full rounded-md bg-[#016AAD] p-2 text-white"
                    >
                      Add Subject
                    </button>
                    {/* done modal  */}
                    <Modal
                      aria-labelledby="modal-title"
                      aria-describedby="modal-desc"
                      open={done}
                      onClose={() => setDone(false)}
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Sheet
                        variant="outlined"
                        sx={{
                          minWidth: 300,
                          borderRadius: "md",
                          p: 3,
                          boxShadow: "lg",
                        }}
                      >
                        <div className="mt-4 flex w-full flex-col items-center space-y-4">
                          <Image
                            src={check}
                            width={100}
                            height={100}
                            alt="Done!"
                            className="min-w-[250px]"
                          />
                          <h2>Done!</h2>
                        </div>
                      </Sheet>
                    </Modal>
                  </div>
                </Sheet>
              </Modal>
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
                      <div className="mt-5 flex w-full items-end justify-between">
                        <div className="flex w-full flex-col items-center">
                          <h2 className="font-semibold">{data.subject}</h2>
                          <div className="mt-2 flex w-full items-center space-x-1 text-sm text-gray-500">
                            <DashboardOutlinedIcon />
                            <h2>{data.topics} Topics</h2>
                          </div>
                          <div className="mt-1 flex w-full items-center space-x-1 text-sm text-gray-500">
                            <AccessTimeOutlinedIcon />
                            <h2>{data.units} Units</h2>
                          </div>
                        </div>
                        <h2 className="ml-36 w-full font-bold text-[#7D7CB4]">
                          {data.time}
                        </h2>
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
