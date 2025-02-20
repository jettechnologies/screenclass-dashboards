"use client";
import ManageStudentsModal from "@/components/modal/guardian/ManageStudentsModal";
import RegisterStudentModal from "@/components/modal/guardian/RegisterStudentModal";
import Image from "next/image";
import React, { useState } from "react";

const Students = () => {
  const [showAddStudentModal, setShowAddStudentModal] = useState(false);
  const [showManageStudentsModal, setShowManageStudentsModal] = useState(false);
  return (
    <div className="">
      <RegisterStudentModal
        isOpen={showAddStudentModal}
        setIsOpen={setShowAddStudentModal}
      />
      <ManageStudentsModal
        isOpen={showManageStudentsModal}
        setIsOpen={setShowManageStudentsModal}
      />
      <div className="my-5 flex items-center justify-between">
        <h2 className="segoe text-lg text-[#1B1B1B] md:text-xl">Students</h2>
        <button
          onClick={() => setShowAddStudentModal(true)}
          className="segoe w-[150px] rounded-md bg-SC-Orange py-2 text-sm font-black text-white md:w-[292px] md:py-[14px]"
        >
          Add new student
        </button>
      </div>
      <div className="space-y-2 pb-2">
        {Array.from({ length: 5 }, (_, index) => (
          <div
            key={index}
            className="flex items-center justify-between rounded-[10px] bg-white px-3 py-4 md:px-9"
            style={{
              boxShadow: "0px 0px 10px -2px rgba(0, 0, 0, 0.25)",
            }}
          >
            <div className="flex items-center gap-4 md:gap-[26px]">
              <Image
                src={"/guardian/students-ellipse.svg"}
                alt="user icon"
                width={70}
                height={70}
                className="h-auto w-14 md:w-[70px]"
              />
              <div>
                <h3 className="segoe text-xl font-semibold text-[#1B1B1B] md:text-2xl">
                  Temilola Ann
                </h3>
                <p className="segoe text-sm text-[#1B1B1B] md:text-base">
                  Student&apos;s Class
                </p>
                <p className="segoe mt-2 text-base text-SC-Orange md:mt-4 md:text-lg">
                  Student&apos;s ID
                </p>
              </div>
            </div>
            <div
              onClick={() => setShowManageStudentsModal(true)}
              className="cursor-pointer"
            >
              <Image
                src={"/guardian/blue-more-icon.svg"}
                alt="more icon"
                width={34}
                height={6}
                className="h-auto w-7 md:w-full"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Students;
