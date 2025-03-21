"use client";

import React from "react";
import { usePagination } from "@/hook/usePagination";

interface PaginationProps {
  totalPages: number;
  pageId: string;
  children?: React.ReactNode;
}

export const Pagination = ({
  totalPages,
  pageId,
  children,
}: PaginationProps) => {
  const { handlePageChange, getPageStyle, currentPage } = usePagination(pageId);

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  const getPreviousButtonStyle = () => {
    const baseStyle =
      "flex h-12 w-28 items-center justify-center rounded-lg text-sm font-medium md:w-[10rem]";

    if (currentPage === 1) {
      return `${baseStyle} cursor-not-allowed bg-gray-200 text-gray-400`;
    } else if (currentPage === totalPages) {
      return `${baseStyle} bg-blue-500 text-white hover:bg-blue-600`;
    }
    return `${baseStyle} bg-blue-400 text-white hover:bg-blue-500`;
  };

  return (
    <nav aria-label="Page navigation" className="w-full lg:w-[80%]">
      <div className="flex justify-between">
        {/* Previous Button */}
        <button
          type="button"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`sm:32 ${getPreviousButtonStyle()}`}
        >
          Previous
        </button>

        {/* Next Button */}
        <button
          type="button"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`flex h-12 w-28 items-center justify-center rounded-lg text-sm font-medium sm:w-32 md:w-[10rem] ${
            currentPage === totalPages
              ? "cursor-not-allowed bg-gray-200 text-gray-400"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
        >
          Next
        </button>
      </div>
      <div className="mb-10 flex w-full justify-center">{children}</div>

      {/* Page Numbers */}
      <ul className="flex flex-wrap justify-center gap-2 text-sm">
        {pageNumbers.map((page) => (
          <li key={page}>
            <button
              type="button"
              onClick={() => handlePageChange(page)}
              className={getPageStyle(page)}
              aria-current={page === currentPage ? "page" : undefined}
            >
              {page}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};
