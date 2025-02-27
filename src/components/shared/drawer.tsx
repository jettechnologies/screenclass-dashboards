import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface DrawerProps {
  children: React.ReactNode;
  drawerTitle?: string;
  isOpen: boolean;
  onClose: () => void;
  position?: "left" | "right";
}

export const Drawer = ({
  children,
  drawerTitle,
  isOpen,
  onClose,
  position = "left",
}: DrawerProps) => {
  // Animation variants for the drawer
  const drawerVariants = {
    open: { x: 0 },
    closed: { x: position === "left" ? "-100%" : "100%" },
  };

  return (
    <>
      {/* Dark overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-30 bg-black bg-opacity-50"
            onClick={onClose}
          />
        )}
      </AnimatePresence>

      {/* Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="drawer"
            initial="closed"
            animate="open"
            exit="closed"
            variants={drawerVariants}
            transition={{ type: "tween", duration: 0.3 }}
            className={`fixed top-0 z-40 h-screen w-64 overflow-y-auto bg-white p-4 ${
              position === "left" ? "left-0" : "right-0"
            }`}
          >
            {drawerTitle && (
              <h5 className="text-base font-semibold uppercase text-gray-500">
                {drawerTitle}
              </h5>
            )}
            <button
              type="button"
              onClick={onClose}
              className="absolute end-2.5 top-2.5 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200"
            >
              <svg
                className="h-3 w-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close menu</span>
            </button>

            <div className="overflow-y-auto py-4">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
