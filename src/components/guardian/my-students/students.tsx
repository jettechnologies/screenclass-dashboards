"use client";
import ManageStudentsModal from "@/components/modal/guardian/ManageStudentsModal";
import RegisterStudentModal from "@/components/modal/guardian/RegisterStudentModal";
import AddStudentModal from "@/components/modal/guardian/AddStudentModal";
import { RemoveStudentModal } from "@/components/modal/guardian/remove-student";
import Image from "next/image";
import React, { useState } from "react";
import { useAllStudents } from "@/hook/swr";
import { StudentCardSkeleton } from "@/components/skeleton/guardian";

const Students = () => {
  const [showRegisterStudentModal, setShowRegisterStudentModal] =
    useState(false);
  const [showManageStudentsModal, setShowManageStudentsModal] = useState(false);
  const [showAddStudentModal, setshowAddStudentModal] = useState(false);
  const [showRemoveStudentModal, setShowRemoveStudentModal] = useState(false);
  const [scid, setScid] = useState("");
  const [studentId, setStudentId] = useState("");
  const { data: students, isLoading } = useAllStudents();

  return (
    <div className="">
      <RegisterStudentModal
        isOpen={showRegisterStudentModal}
        setIsOpen={setShowRegisterStudentModal}
      />
      <ManageStudentsModal
        isOpen={showManageStudentsModal}
        setIsOpen={setShowManageStudentsModal}
        openRemoveStudentModal={() => setShowRemoveStudentModal(true)}
        studentId={studentId}
      />
      <AddStudentModal
        isOpen={showAddStudentModal}
        setIsOpen={setshowAddStudentModal}
      />

      <RemoveStudentModal
        isOpen={showRemoveStudentModal}
        onCancel={() => setShowRemoveStudentModal(false)}
        scid={scid}
      />
      <div className="my-5 flex flex-col justify-between gap-y-4 md:flex-row md:gap-y-0 lg:items-center">
        <h2 className="segoe text-lg text-[#1B1B1B] md:text-xl">Students</h2>
        <div className="flex w-fit">
          <button
            onClick={() => setShowRegisterStudentModal(true)}
            className="segoe mr-4 min-w-[130px] rounded-md bg-SC-Orange px-4 py-2 text-sm font-black text-white md:w-[200px] md:py-[14px]"
          >
            Register new student
          </button>
          <button
            onClick={() => setshowAddStudentModal(true)}
            className="segoe w-[130px] rounded-md border-2 border-SC-Light-orange bg-white py-2 text-sm font-black text-SC-Orange md:w-[200px] md:py-[14px]"
          >
            Add student
          </button>
        </div>
      </div>
      <div className="space-y-2 pb-2">
        {isLoading ? (
          <StudentCardSkeleton />
        ) : students && students.length > 0 ? (
          students.map((student) => (
            <div
              key={student._id}
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
                  <h4 className="segoe text-base font-semibold text-[#1B1B1B] md:text-lg">
                    {`${student.firstName} ${student.lastName}`}
                  </h4>
                  <p className="segoe text-sm text-[#1B1B1B] md:text-base">
                    {student.level.name}
                  </p>
                  <p className="segoe mt-2 text-base text-SC-Orange md:mt-4">
                    {student.scid}
                  </p>
                </div>
              </div>
              <div
                onClick={() => {
                  setShowManageStudentsModal(true);
                  setScid(student.scid);
                  setStudentId(student._id);
                }}
                className="cursor-pointer border-2 border-black"
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
          ))
        ) : (
          <>
            <div className="flex min-h-[80vh] flex-col items-center justify-center p-4 text-center">
              <Image
                src="/icons/empty-state.svg"
                alt="No students"
                width={200}
                height={120}
                className="mb-4 object-cover"
              />
              <h3 className="text-lg font-semibold text-[#252733]">
                No Students Found
              </h3>
              <p className="text-sm text-gray-500">
                You currently have no registered students
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Students;
