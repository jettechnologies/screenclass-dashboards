"use client";
import React from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import logout from "../assets/logout.svg";
import profilepic from "../assets/profilepic.svg";
import profilepic2 from "../assets/profilepic2.svg";
import guardian from "../assets/guardian.svg";
import add from "../assets/add.svg";
import details from "../assets/details.svg";
import check from "../assets/check.gif";
import Image from "next/image";
import RadialChart4 from "../Components/RaidalChart4";
import Modal from "@mui/joy/Modal";
import Sheet from "@mui/joy/Sheet";

export const Profile = () => {
  const [done, setDone] = React.useState<boolean>(false);
  const [guard, setGuard] = React.useState<boolean>(false);
  const [name, setName] = React.useState<boolean>(false);
  const [added, setAdded] = React.useState<boolean>(false);

  return (
    <div className="flex h-full w-full flex-col overflow-y-scroll bg-[#F1F1F1] tracking-wide text-slate-900 sm:flex-row">
      {/* <div className="lg:w-[14%]">
        <Sidebar />
      </div> */}
      <div className="w-full p-0 lg:w-full">
        <div className="flex h-full w-full flex-col items-center bg-[#ffffff]">
          {/* topbar */}
          <section className="mt-24 hidden w-full items-center justify-between border-b-2 border-gray-600 px-4 sm:mt-8 sm:flex sm:px-7 sm:py-2">
            <h1 className="text-xl font-bold text-[#082038]">
              Account Settings
            </h1>
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
              <h1 className="text-xl font-bold text-[#082038]">Settings</h1>
            </section>
            {/* personal details */}
            <section className="mt-4 flex w-full flex-col items-center justify-between px-7 md:flex-col lg:flex-row">
              <div className="flex flex-col items-start sm:w-full">
                <h2>Personal Details</h2>
                <div className="mt-2 flex h-[380px] w-[350px] flex-col items-center rounded-xl border bg-white px-0 py-6 drop-shadow-md sm:px-4">
                  <div>
                    <Image
                      src={profilepic2}
                      alt="logo"
                      width={10}
                      height={10}
                      className="min-w-[200px] rounded-full border-2 p-2"
                    />
                  </div>
                  <h2 className="mt-2 text-xl font-light">IfeOluwa Smith</h2>
                  <h2 className="text-xl font-light">Student</h2>
                  <h2 className="mt-4 text-xl font-light text-[#F7631B]">
                    SC51125
                  </h2>
                </div>
              </div>
              <div className="flex flex-col items-start sm:w-full">
                <div className="h-7"></div>
                <div className="mt-2 flex h-[380px] w-[350px] flex-col items-center rounded-xl border bg-white px-4 py-6 drop-shadow-md">
                  <h2 className="mb-8">Quiz Performances</h2>
                  <RadialChart4 value1={70} value2={25} value3={5} />
                  <div className="mt-10 flex items-center justify-between space-x-4">
                    <div className="flex items-center space-x-1">
                      <div className="h-3 w-3 rounded-xl bg-[#268B8D]"></div>
                      <h2 className="text-[16px] text-gray-500">Passed</h2>
                    </div>
                    <div className="flex items-center space-x-1">
                      <div className="h-3 w-3 rounded-xl bg-[#EC8694]"></div>
                      <h2 className="text-[16px] text-gray-500">Failed</h2>
                    </div>
                    <div className="flex items-center space-x-1">
                      <div className="h-3 w-3 rounded-xl bg-[#D9D9D9]"></div>
                      <h2 className="text-[16px] text-gray-500">
                        Fair Performance
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex flex-col items-start sm:w-full md:mt-6 lg:mt-0">
                <h2>Guardian Details</h2>
                <div className="mt-2 flex h-[380px] w-[350px] flex-col items-center rounded-xl border bg-white px-4 py-6 drop-shadow-md">
                  <div>
                    <Image
                      src={guardian}
                      alt="logo"
                      width={10}
                      height={10}
                      className="min-w-[200px] rounded-full border-2 p-2"
                    />
                  </div>
                  <h2 className="mt-1 text-xl font-light">Debbie Ann</h2>
                  <h2 className="text-xl font-light">Guardian</h2>
                  <button
                    onClick={() => setGuard(true)}
                    className="mt-6 w-40 rounded-lg bg-[#0966AB] py-3 font-semibold text-white"
                  >
                    Add Guardian
                  </button>
                  {/* search for Guardian modal */}
                  <Modal
                    aria-labelledby="modal-title"
                    aria-describedby="modal-desc"
                    open={guard}
                    onClose={() => setGuard(false)}
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
                      <div className="flex w-full flex-col items-start">
                        <h2 className="mb-4 mt-0 text-lg font-semibold">
                          Search for Guardian
                        </h2>
                        <div className="relative flex w-full flex-col items-center">
                          <h2>Enter Guardian’s mobile number or SCID</h2>
                          <input
                            type="text"
                            disabled
                            className="mt-3 w-full border p-2"
                            placeholder="SC00000"
                          />
                        </div>
                        <div className="relative mt-6 flex w-full items-center space-x-3">
                          <button className="mt-4 w-full rounded-md border border-[#016AAD] p-2 text-[#016AAD]">
                            Cancel
                          </button>

                          <button
                            onClick={() => setName(true)}
                            className="mt-4 w-full rounded-md bg-[#016AAD] p-2 text-white"
                          >
                            Search
                          </button>
                        </div>
                        {/* search modal */}
                        <Modal
                          aria-labelledby="modal-title"
                          aria-describedby="modal-desc"
                          open={name}
                          onClose={() => setName(false)}
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
                              <h2 className="font-semibold">Guardian Name</h2>
                              <button
                                onClick={() => setAdded(true)}
                                className="w-full rounded-md bg-[#016AAD] p-2 text-white"
                              >
                                Add
                              </button>
                            </div>
                            {/* done modal */}
                            <Modal
                              aria-labelledby="modal-title"
                              aria-describedby="modal-desc"
                              open={added}
                              onClose={() => setAdded(false)}
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
                          </Sheet>
                        </Modal>
                      </div>
                    </Sheet>
                  </Modal>
                </div>
              </div>
            </section>
            {/* personal details input */}
            <section className="mt-4 flex w-full flex-col items-center justify-between px-7 md:w-full lg:w-[80%]">
              <div className="mt-4 flex w-full items-center justify-between">
                <h2 className="text-xl">Personal Details</h2>
                <Image
                  src={details}
                  alt="logo"
                  width={100}
                  height={100}
                  className="max-h-[35px] max-w-[35px]"
                />
              </div>
              <div className="mt-10 flex w-full flex-col items-start space-y-4">
                <div className="flex w-full items-center space-x-6">
                  <div className="flex w-full flex-col items-start">
                    <h2>LAST NAME</h2>
                    <input
                      type="text"
                      placeholder="Smith"
                      className="mt-3 w-full rounded-lg border-2 p-5 outline-none"
                    />
                  </div>
                  <div className="flex w-full flex-col items-start">
                    <h2>FIRST NAME</h2>
                    <input
                      type="text"
                      placeholder="Ifeoluwa"
                      className="mt-3 w-full rounded-lg border-2 p-5 outline-none"
                    />
                  </div>
                </div>
                <div className="flex w-full flex-col items-start">
                  <h2>EMAIL</h2>
                  <input
                    type="email"
                    placeholder="emailaddress@gmail.com"
                    className="mt-3 w-full rounded-lg border-2 p-5 outline-none"
                  />
                </div>
                <div className="flex w-full flex-col items-start">
                  <h2>PHONE NUMBER</h2>
                  <input
                    type="text"
                    placeholder="+234 000 000 0000"
                    className="mt-3 w-full rounded-lg border-2 p-5 outline-none"
                  />
                </div>
                <button
                  onClick={() => setDone(true)}
                  className="mt-10 w-32 rounded-lg bg-[#0966AB] py-3 font-semibold text-white"
                >
                  Save
                </button>
                {/* done modal */}
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
            </section>
            <section className="mb-16 mt-10 flex w-full items-center justify-between px-7">
              <h1 className="text-xl font-bold text-[#082038]">
                Security Details
              </h1>
              <button className="w-40 rounded-md bg-[#0966AB] px-1 py-2 text-white sm:w-56 sm:px-4">
                Change Password
              </button>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};
