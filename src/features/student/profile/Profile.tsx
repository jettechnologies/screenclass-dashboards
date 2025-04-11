"use client";

import React from "react";
import profilepic2 from "../assets/profilepic2.svg";
import guardian from "../assets/guardian.svg";
import check from "../assets/check.gif";
import Image from "next/image";
import Modal from "@mui/joy/Modal";
import Sheet from "@mui/joy/Sheet";
import { useStudentProfile, useDashboardStatistics } from "@/hook/swr";
import { PersonalDetailsForm, SecurityDetails } from "@/components/shared";
import { ProfileFormData } from "@/utils/validators";
import { editStudentProfile } from "@/mutation";
import { Skeleton } from "@mui/material";
import { QuizPieChart } from "@/components/shared";
import { calculatePerformance } from "@/utils";

export const Profile = () => {
  const [guard, setGuard] = React.useState<boolean>(false);
  const [name, setName] = React.useState<boolean>(false);
  const [added, setAdded] = React.useState<boolean>(false);

  const {
    data: studentDetails,
    isLoading: fetchingStudent,
    mutate,
  } = useStudentProfile();
  const { quizHistory, isLoading: fetchingStatistics } =
    useDashboardStatistics();

  const transformedData = {
    firstName: studentDetails?.firstName ?? "",
    lastName: studentDetails?.lastName ?? "",
    email: studentDetails?.email ?? "",
    contact: studentDetails?.mobile ?? "",
  };

  const fullName =
    studentDetails && `${studentDetails.firstName} ${studentDetails.lastName}`;

  const performanceCounts = calculatePerformance(quizHistory || []);

  const handleSubmit = async (formData: ProfileFormData) => {
    const { firstName, lastName } = formData;

    const response = await editStudentProfile({ firstName, lastName });

    if (!response?.success) {
      throw new Error(response?.message || "Failed to update profile");
    }
    return response;
  };

  return (
    <div className="flex h-full w-full flex-col items-center rounded-md bg-white">
      <section className="mt-24 w-full max-w-screen-xl px-7 sm:mt-9 sm:py-2">
        <h1 className="text-xl font-bold text-[#082038]">Settings</h1>
      </section>
      {/* personal details */}
      <section className="mt-4 flex w-full max-w-screen-xl flex-col justify-between px-7 md:flex-col lg:flex-row">
        <div className="flex flex-col items-start sm:w-full">
          <div
            className="mt-2 flex h-[380px] w-[350px] flex-col items-center rounded-xl bg-white px-0 py-6 drop-shadow-md sm:px-4"
            style={{
              background:
                "linear-gradient(135deg, #0A60A5 0%, #9EC5E4 39%, #DEF1FF 68%)",
            }}
          >
            <div>
              <Image
                src={profilepic2}
                alt="logo"
                width={10}
                height={10}
                className="min-w-[200px] rounded-full border-2 p-2"
              />
            </div>
            {fetchingStudent ? (
              Array.from({ length: 3 }).map((_, index) => (
                <Skeleton
                  key={index}
                  variant="text"
                  className="mb-4"
                  width={200}
                  height={20}
                />
              ))
            ) : (
              <>
                <h2 className="mt-2 text-xl font-light">{fullName}</h2>
                <h2 className="text-xl font-light">Student</h2>
                <h2 className="mt-4 text-xl font-light text-[#F7631B]">
                  {studentDetails?.scid}
                </h2>
              </>
            )}
          </div>
        </div>
        <div className="flex flex-col items-start sm:w-full">
          <div
            className="mt-2 flex h-[380px] w-[350px] flex-col items-center rounded-xl bg-white px-4 py-6 drop-shadow-md"
            style={{
              background:
                "linear-gradient(135deg, #F9996B 0%, #FDEAE1 44%, #FFFAF7 83%)",
            }}
          >
            <h2>Quiz Performances</h2>
            {fetchingStatistics ? (
              <Skeleton variant="circular" width={200} height={300} />
            ) : (
              <QuizPieChart data={performanceCounts} />
            )}
          </div>
        </div>
        <div className="mt-6 flex flex-col items-start sm:w-full md:mt-6 lg:mt-0">
          <div
            className="mt-2 flex h-[380px] w-[350px] flex-col items-center rounded-xl border bg-white px-4 py-6 drop-shadow-md"
            style={{
              background:
                "linear-gradient(135deg, #0A60A5 0%, #9EC5E4 39%, #DEF1FF 68%)",
            }}
          >
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
            {/* would need to come back to this section of the code */}
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
      <div className="mx-auto mt-8 w-full max-w-screen-xl" />
      <section className="flex w-full max-w-screen-xl justify-center">
        <PersonalDetailsForm
          action="edit"
          data={transformedData}
          isLoading={fetchingStudent}
          mutate={async () => void mutate()}
          onSubmit={handleSubmit}
        />
      </section>

      <section className="mb-16 mt-10 flex w-full max-w-screen-xl items-center justify-between px-7">
        <SecurityDetails />
      </section>
    </div>
  );
};
