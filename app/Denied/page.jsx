import Link from "next/link";
import React from "react";

const Denied = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-page px-4 py-8">
      <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg text-center max-w-md w-full">
        <h1 className="text-3xl md:text-4xl font-bold text-red-600 mb-4">
          Access Denied
        </h1>
        <p className="text-md md:text-lg text-gray-700 mb-4 md:mb-6">
          Sorry, you do not have the necessary permissions to view this page.
        </p>
        <p className="text-sm md:text-base text-gray-600 mb-4">
          If you believe this is a mistake, please contact the administrator.
        </p>
        <Link href="/">
          <button className="inline-block bg-yellow-400 text-purple-accent font-semibold px-4 py-2 rounded-md hover:bg-yellow-200 transition duration-300">
            Go to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Denied;
