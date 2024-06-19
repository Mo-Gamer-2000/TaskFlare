// Import Link component from next/link for navigation
import Link from "next/link";
// Import React for creating React components
import React from "react";

// Define the Denied component
const Denied = () => {
  return (
    // Container div with TailwindCSS classes for styling
    <div className="flex flex-col items-center justify-center bg-page px-4 py-8">
      {/* Inner div for the content box with styling */}
      <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg text-center max-w-md w-full">
        {/* Heading for the Access Denied message */}
        <h1 className="text-3xl md:text-4xl font-bold text-red-600 mb-4">
          Access Denied
        </h1>
        {/* Paragraph for additional message */}
        <p className="text-md md:text-lg text-gray-700 mb-4 md:mb-6">
          Sorry, you do not have the necessary permissions to view this page.
        </p>
        {/* Paragraph for contact message */}
        <p className="text-sm md:text-base text-gray-600 mb-4">
          If you believe this is a mistake, please contact the administrator.
        </p>
        {/* Link to navigate back to the home page */}
        <Link href="/">
          <button className="inline-block bg-yellow-400 text-purple-accent font-semibold px-4 py-2 rounded-md hover:bg-yellow-200 transition duration-300">
            Go to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

// Export the Denied component for use in other parts of the application
export default Denied;
