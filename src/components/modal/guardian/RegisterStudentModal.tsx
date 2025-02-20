import useNoScroll from "@/components/hooks/useNoScroll";
import React from "react";
import Modal from "react-modal";
import Select from "react-select";

const RegisterStudentModal = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  useNoScroll(isOpen);
  return (
    <Modal
      // appElement={
      //   (document.getElementById("__next") as HTMLElement) || undefined
      // }
      isOpen={isOpen}
      className="modal w-[298px] bg-SC-Bland px-8 pb-3 pt-5"
      overlayClassName="backdrop"
      onRequestClose={() => setIsOpen(false)}
      shouldCloseOnOverlayClick={true}
      contentLabel="Register Student Modal"
      ariaHideApp={false}
    >
      <h2 className="segoe font-semibold text-black">Register new student</h2>
      <form className="mt-6">
        <label
          htmlFor="full-name"
          className="segoe text-sm text-[rgba(27,27,27,0.90)]"
        >
          Full Name
        </label>
        <input
          id="full-name"
          type="text"
          className="input-field mb-4 px-4"
          placeholder="Ada George"
        />
        <label
          htmlFor="password"
          className="segoe text-sm text-[rgba(27,27,27,0.90)]"
        >
          Password
        </label>
        <input
          id="password"
          type="password"
          className="input-field mb-4 px-4"
          placeholder="....."
        />
        <label
          htmlFor="confirm-password"
          className="segoe text-sm text-[rgba(27,27,27,0.90)]"
        >
          Confirm Password
        </label>
        <input
          id="confirm-password"
          type="password"
          className="input-field mb-4 px-4"
          placeholder="....."
        />
        <label
          htmlFor="class"
          className="segoe text-sm text-[rgba(27,27,27,0.90)]"
        >
          Choose Class
        </label>
        <Select
          id="class"
          className="segoe w-full text-xs font-light outline-none"
          styles={{
            control: (baseStyles) => ({
              ...baseStyles,
              background: "transparent",
              border: "1px solid #ccc",
              borderRadius: "6px",
              height: "35px",
            }),
          }}
        />
        <button className="segoe mt-6 w-full rounded-[4px] bg-SC-Blue py-1 font-semibold text-white">
          Register
        </button>
      </form>
    </Modal>
  );
};

export default RegisterStudentModal;
