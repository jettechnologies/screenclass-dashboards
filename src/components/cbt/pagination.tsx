"use client";

import React from "react";
import { useRouter } from "next/navigation";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  responses: { id: number; response: string }[];
  children?: React.ReactNode;
}

export const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
  responses,
  children,
}) => {
  const router = useRouter();

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      router.push(`/cbt/${page}`);
    }
  };

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  const getPageStyle = (page: number) => {
    const baseStyle =
      "flex h-10 w-10 items-center justify-center rounded-md border transition-colors duration-200";

    if (responses?.length > 0) {
      const hasResponse = responses.some((response) => response.id === page);
      const lastResponseId = Math.max(
        ...responses.map((response) => response.id),
      ); // Find the highest id in responses

      if (hasResponse) {
        // Page has a response
        return `${baseStyle} bg-blue-500 text-white hover:bg-bluw-600`;
      } else if (page > lastResponseId) {
        // Page is ahead of the last response's id
        return `${baseStyle} bg-white text-gray-500 hover:bg-gray-100 hover:text-gray-700`;
      } else {
        // Page is behind or in-between responses and does not have a response
        return `${baseStyle} border-red-500  hover:border-red-600`;
      }
    }

    // Default styling when no responses or current page
    return `${baseStyle} ${
      page === currentPage
        ? "border-blue-300 bg-blue-50 text-blue-600"
        : "bg-white text-gray-500 hover:bg-gray-100 hover:text-gray-700"
    } border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`;
  };

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
      <div className="mb-10 flex justify-between">
        <button
          type="button"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`sm:32 ${getPreviousButtonStyle()}`}
        >
          Previous
        </button>

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
        {children}
      </div>

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
