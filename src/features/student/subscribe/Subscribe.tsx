"use client";
import React from "react";
import Sidebar from "../Components/Sidebar/Sidebar";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import logout from "../assets/logout.svg";
import profilepic from "../assets/profilepic.svg";
import add from "../assets/add.svg";
import Image from "next/image";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import { KeyboardArrowRightOutlined } from "@mui/icons-material";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import card from "../assets/card.svg";
import firstBank from "../assets/firstBank.svg";
import copy from "../assets/copy.svg";
import { set1, set2 } from "./data";

export const Subscribe = () => {
  const [open, setOpen] = React.useState<boolean>(false);
  const [done, setDone] = React.useState<boolean>(false);
  const [deposit, setDeposit] = React.useState<boolean>(false);
  const [ussd, setUssd] = React.useState<boolean>(false);

  return (
    <div className="flex h-full w-full flex-col bg-[#F1F1F1] tracking-wide text-slate-900 sm:flex-row">
      {/* <div className="lg:w-[14%]">
        <Sidebar />
      </div> */}
      <div className="w-full p-0 lg:w-full">
        <div className="flex h-full w-full flex-col items-center bg-[#ffffff]">
          {/* topbar */}
          <section className="mt-24 hidden w-full items-center justify-between border-b-2 border-gray-600 px-4 sm:mt-8 sm:flex sm:px-7 sm:py-2">
            <h1 className="text-xl font-bold text-[#082038]">
              Plan Subscription
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
                <div className="flex flex-col items-center">
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
              <h1 className="text-xl font-bold text-[#082038]">Subscribe</h1>
            </section>
            <div className="mt-10 flex h-full items-start justify-center sm:mt-32">
              <div className="flex h-[400px] w-[90%] flex-col items-start border-2 p-8 shadow-xl md:w-[90%] lg:w-[700px]">
                <h2 className="text-2xl font-bold">Choose Your Plan</h2>
                <h2 className="mt-2 text-[14px] italic">
                  (Upgrade your plan to Premium plan to enjoy more of our
                  explanatory videos)
                </h2>

                <h2 className="text-md mt-12">Choose Plan</h2>
                <div className="relative flex w-full items-center">
                  <input
                    type="text"
                    placeholder="Monthly"
                    className="mt-2 h-12 w-full rounded-md border p-7 outline-none"
                    disabled
                  />
                  <button
                    onClick={() => setOpen(true)}
                    className="absolute right-1 top-[55%] -translate-y-1/2 px-4 py-1"
                  >
                    <KeyboardArrowDownOutlinedIcon />
                  </button>
                  {/* payment plan modal */}
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
                        minWidth: 250,
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
                        Premium Plans
                      </Typography>
                      <div className="mt-4 flex w-full flex-col items-start space-y-4">
                        <h2>Monthly - #200</h2>
                        <h2>Quaterly - #550</h2>
                        <h2>Aunally - #2000</h2>
                      </div>
                    </Sheet>
                  </Modal>
                </div>
                <button
                  onClick={() => setDone(true)}
                  className="mt-10 w-full rounded-md bg-[#016AAD] p-4 text-white"
                >
                  Subscribe
                </button>
                {/* subscribe modal */}
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
                    {/* subscription items */}
                    <div className="mt-4 flex w-full flex-col items-center space-y-4 px-2 sm:p-6">
                      <div className="flex w-full items-center justify-between rounded-xl border-2 px-4 py-3">
                        <div className="flex items-center space-x-4">
                          <Image
                            src={card}
                            alt="logo"
                            width={100}
                            height={100}
                            className="max-h-[25px] max-w-[25px]"
                          />
                          <h2>Debit Card (PayStack)</h2>
                        </div>
                        <KeyboardArrowRightOutlined className="text-[#407BFF]" />
                      </div>
                      <div className="flex w-full items-center justify-between rounded-xl border-2 px-4 py-3">
                        <div className="flex items-center space-x-4">
                          <Image
                            src={card}
                            alt="logo"
                            width={100}
                            height={100}
                            className="max-h-[25px] max-w-[25px]"
                          />
                          <h2>Flutter Wave</h2>
                        </div>
                        <KeyboardArrowRightOutlined className="text-[#407BFF]" />
                      </div>
                      <button
                        className="w-full"
                        onClick={() => setDeposit(true)}
                      >
                        <div className="flex w-full items-center justify-between rounded-xl border-2 px-4 py-3">
                          <div className="flex items-center space-x-4">
                            <Image
                              src={card}
                              alt="logo"
                              width={100}
                              height={100}
                              className="max-h-[25px] max-w-[25px]"
                            />
                            <h2>Bank Deposit</h2>
                          </div>
                          <KeyboardArrowRightOutlined className="text-[#407BFF]" />
                        </div>
                      </button>
                      <button className="w-full" onClick={() => setUssd(true)}>
                        <div className="flex w-full items-center justify-between rounded-xl border-2 px-4 py-3">
                          <div className="flex items-center space-x-4">
                            <Image
                              src={card}
                              alt="logo"
                              width={100}
                              height={100}
                              className="max-h-[25px] max-w-[25px]"
                            />
                            <h2>USSD Code</h2>
                          </div>
                          <KeyboardArrowRightOutlined className="text-[#407BFF]" />
                        </div>
                      </button>
                    </div>
                  </Sheet>
                </Modal>
                {/* Bank Deposit modal */}
                <Modal
                  aria-labelledby="modal-title"
                  aria-describedby="modal-desc"
                  open={deposit}
                  onClose={() => setDeposit(false)}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Sheet
                    variant="outlined"
                    sx={{
                      maxWidth: 370,
                      borderRadius: "md",
                      p: 3,
                      boxShadow: "lg",
                    }}
                  >
                    <div className="w-full px-4 py-0 sm:py-4">
                      <h2 className="text-center">
                        <span className="text-[#016AAD]">Account Name:</span>{" "}
                        Martad Education & Skills Development Ltd
                      </h2>
                      <h2 className="mt-4 font-semibold">Instructions:</h2>
                      <ul className="mt-2 list-disc gap-2 space-y-2 text-sm">
                        <li>
                          Make deposit to the account provided above or Make
                          Payment via USSD code.
                        </li>

                        <li>Copy or Screenshot payment receipt</li>
                        <li>
                          Send the payment receipt to{" "}
                          <code>+234 704 330 3000</code> or{" "}
                          <code>+234 703 330 3000</code> via SMS or WhatsApp.
                        </li>
                      </ul>
                      <div className="mt-6 flex w-full items-center space-x-4">
                        <Image
                          src={firstBank}
                          alt="logo"
                          width={100}
                          height={100}
                          className="max-h-[50px] max-w-[50px]"
                        />
                        <div className="flex flex-col items-start">
                          <h2>
                            {" "}
                            <span className="font-semibold">
                              Account Number:{" "}
                            </span>
                            2034889408
                          </h2>
                          <h2>
                            {" "}
                            <span className="font-semibold">
                              USSD Code:
                            </span>{" "}
                            *894#
                          </h2>
                        </div>
                      </div>
                    </div>
                  </Sheet>
                </Modal>
                {/* ussd modal */}
                <Modal
                  aria-labelledby="modal-title"
                  aria-describedby="modal-desc"
                  open={ussd}
                  onClose={() => setUssd(false)}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Sheet
                    variant="outlined"
                    sx={{
                      minWidth: 370,
                      borderRadius: "md",
                      p: 3,
                      boxShadow: "lg",
                    }}
                  >
                    <ModalClose variant="plain" sx={{ m: 1 }} />
                    <div className="w-full px-2 py-0 sm:px-12 sm:py-4">
                      <h2 className="text-center">
                        <span className="text-[#016AAD]">Account Name:</span>{" "}
                        Martad Education & Skills Development Ltd
                      </h2>
                      <h2 className="mt-4 font-semibold">Instructions:</h2>
                      <ul className="mt-2 list-disc gap-2 space-y-2 text-sm">
                        <li>
                          Make deposit to the account provided above or Make
                          Payment via USSD code.
                        </li>

                        <li>Copy or Screenshot payment receipt</li>
                        <li>
                          Send the payment receipt to{" "}
                          <code>+234 704 330 3000</code> or{" "}
                          <code>+234 703 330 3000</code> via SMS or WhatsApp.
                        </li>
                      </ul>
                      {set1.map((item, index) => (
                        <div
                          key={index}
                          className="mt-6 flex w-full items-center space-x-5 border bg-white px-4 py-2 drop-shadow-lg"
                        >
                          <Image
                            src={item.image}
                            alt="logo"
                            width={100}
                            height={100}
                            className="max-h-[50px] max-w-[50px]"
                          />
                          <div className="flex flex-col items-start">
                            <h2>{item.code}</h2>
                            <div className="flex items-center space-x-2 text-sm">
                              {/* <ContentCopyOutlinedIcon className="h-[5px] w-[5px] text-sm" /> */}
                              <Image
                                src={copy}
                                alt="logo"
                                width={100}
                                height={100}
                                className="max-h-[17px] max-w-[17px]"
                              />
                              <h2 className="font-semibold">Copy</h2>
                            </div>
                          </div>
                        </div>
                      ))}
                      <h2 className="mt-6 text-center">
                        For payment into banks listed below, pay into First bank
                        account.
                      </h2>
                      {set2.map((item, index) => (
                        <div
                          key={index}
                          className="mt-6 flex w-full items-center space-x-5 border bg-white px-4 py-2 drop-shadow-lg"
                        >
                          <Image
                            src={item.image}
                            alt="logo"
                            width={100}
                            height={100}
                            className="max-h-[50px] max-w-[50px]"
                          />
                          <div className="flex flex-col items-start">
                            <h2>{item.code}</h2>
                            <div className="flex items-center space-x-2 text-sm">
                              {/* <ContentCopyOutlinedIcon className="h-[5px] w-[5px] text-sm" /> */}
                              <Image
                                src={copy}
                                alt="logo"
                                width={10}
                                height={10}
                                className="max-h-[17px] max-w-[17px]"
                              />
                              <h2 className="font-semibold">Copy</h2>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Sheet>
                </Modal>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
