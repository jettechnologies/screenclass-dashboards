import React from "react";
// import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
// import Image from "next/image";
// import logout from "../assets/logout.svg";
// import profilepic from "../assets/profilepic.svg";
// import add from "../assets/add.svg";
// import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
// import Modal from "@mui/joy/Modal";
// import ModalClose from "@mui/joy/ModalClose";
// import Typography from "@mui/joy/Typography";
// import Sheet from "@mui/joy/Sheet";
// import check from "../assets/check.gif";

export const MyClass = () => {
  // const [open, setOpen] = React.useState<boolean>(false);
  // const [done, setDone] = React.useState<boolean>(false);

  return (
    <div className="flex h-full w-full flex-col bg-[#F1F1F1] tracking-wide text-slate-900 sm:flex-row">
      <div className="w-full p-0 lg:w-full">
        <div className="flex h-full w-full flex-col items-center bg-[#ffffff]">
          <div className="mt-32 flex h-full items-center justify-center sm:mb-36">
            {/* <div className="flex h-[450px] w-[90%] flex-col items-start border-2 border-black p-8 shadow-xl md:w-[90%] lg:w-[700px]">
              <h2 className="text-2xl font-bold">Switch Class</h2>
              <h2 className="mt-2 text-[14px] italic">
                Note: Switching classes doesn{"'"}t void your current
                subscription. New class will be on Free plan while your previous
                class plan remains active till its expiring date.
              </h2>
              <h2 className="mt-2 text-[14px]">
                You can always switch back at your convinience.
              </h2>
              <h2 className="text-md mt-12">Choose Class</h2>
              <div className="relative flex w-full items-center">
                <input
                  type="text"
                  placeholder="Basic Class"
                  className="mt-2 h-12 w-full rounded-md border p-7 outline-none"
                  disabled
                />
                <button
                  onClick={() => setOpen(true)}
                  className="absolute right-1 top-[55%] -translate-y-1/2 px-4 py-1"
                >
                  <KeyboardArrowDownOutlinedIcon />
                </button>
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
                      minWidth: 200,
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
                      Classes
                    </Typography>
                    <div className="mt-4 flex w-full flex-col items-start space-y-4">
                      <h2>Class 1</h2>
                      <h2>Class 1</h2>
                      <h2>Class 1</h2>
                    </div>
                  </Sheet>
                </Modal>
              </div>
              <button
                onClick={() => setDone(true)}
                className="mt-4 w-full rounded-md bg-[#016AAD] p-4 text-white"
              >
                Switch Class
              </button>
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
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
