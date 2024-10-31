import Link from "next/link";
import { FaExclamationTriangle } from "react-icons/fa";

const NotFoundPage = () => {
  return (
    <section className="bg-blue-50 min-h-screeen flex-grow">
      <div className="container m-auto max-2-2xl py-24">
        <div className="flex justify-center">
          <FaExclamationTriangle className="text-yellow-400 text-8xl fa-5x" />
        </div>
        <div className="text-center">
          <h1 className="text-3xl font-bold mt-4 mb-2">Page Not Found</h1>
          <p className="text-gray-400 text-xl mb-10">
            The page you are looking for does not exist.
          </p>
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

export default NotFoundPage;
