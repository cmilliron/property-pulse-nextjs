"use client";
import Link from "next/link";
import { FaExclamationCircle } from "react-icons/fa";

const ErrorPage = ({ error }) => {
  return (
    <section className="bg-blue-50 min-h-screeen flex-grow">
      <div className="container m-auto max-2-2xl py-24">
        <div className="flex justify-center">
          <FaExclamationCircle className="text-yellow-400 text-8xl fa-5x" />
        </div>
        <div className="text-center">
          <h1 className="text-3xl font-bold mt-4 mb-2">Something Went Wrong</h1>
          <p className="text-gray-400 text-xl mb-10">{error.toString()}</p>
          <Link
            href="/"
            className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-4 px-6 rounded"
          >
            Go Home
          </Link>
        </div>
      </div>
      <div className="flex-grow"></div>
    </section>
  );
};

export default ErrorPage;
