import Link from "next/link";
import React from "react";

function Pagination({ currentPage, pageSize, totalItems }) {
  const totalPages = Math.ceil(totalItems / pageSize);

  return (
    <section className="container mx-auto flex justify-center items-center my-8">
      {currentPage > 1 && (
        <Link
          href={`/properties?page=${currentPage - 1}`}
          className="mr-2 px-2 py-1 border border-gray-300 rounded"
        >
          Prev
        </Link>
      )}
      <span className="mx-2">
        Page {currentPage} of {totalPages}
      </span>
      {currentPage < totalPages && (
        <Link
          href={`/properties?page=${currentPage + 1}`}
          className="mr-2 px-2 py-1 border border-gray-300 rounded"
        >
          Next
        </Link>
      )}
    </section>
  );
}

export default Pagination;
