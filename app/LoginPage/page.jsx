// Import Link component from next/link for navigation
import Link from "next/link";
// Import getServerSession from next-auth for retrieving server session
import { getServerSession } from "next-auth";
// Import authentication options
import { options } from "../api/auth/[...nextauth]/options";

// Define the Login component
const Login = async () => {
  // Retrieve the session data using server-side authentication options
  const session = await getServerSession(options);

  return (
    // Container div with TailwindCSS classes for styling
    <div className="flex flex-col items-center justify-center bg-page py-8 px-4">
      {/* Heading for the login page */}
      <h1 className="text-4xl font-bold text-purple-accent mb-4 text-center">
        Welcome to Task<span className="text-yellow-400">Flare</span> Login
      </h1>
      {/* Description text */}
      <p className="text-lg text-gray-700 mb-6">
        Please select an option below to continue.
      </p>
      {/* Container div for the navigation links */}
      <div className="grid grid-cols-1 gap-4 max-w-md w-full bg-white rounded-lg shadow-lg p-6">
        {/* Navigation links with TailwindCSS styling */}
        <Link
          href="/CreateUser"
          className="block px-4 py-3 text-purple-accent hover:bg-yellow-200 rounded-md transition duration-300"
        >
          Create User
        </Link>
        <Link
          href="/ClientMember"
          className="block px-4 py-3 text-purple-accent hover:bg-yellow-200 rounded-md transition duration-300"
        >
          Client Member
        </Link>
        <Link
          href="/Member"
          className="block px-4 py-3 text-purple-accent hover:bg-yellow-200 rounded-md transition duration-300"
        >
          Member
        </Link>
        <Link
          href="/Public"
          className="block px-4 py-3 text-purple-accent hover:bg-yellow-200 rounded-md transition duration-300"
        >
          Public
        </Link>
        {/* Conditionally render the sign out link if session exists, otherwise render the sign in link */}
        {session ? (
          <Link
            href="/api/auth/signout?callbackUrl=/"
            className="block px-4 py-3 text-purple-accent hover:bg-yellow-200 rounded-md transition duration-300"
          >
            Logout
          </Link>
        ) : (
          <Link
            href="/api/auth/signin"
            className="block px-4 py-3 text-purple-accent hover:bg-yellow-200 rounded-md transition duration-300"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

// Export the Login component for use in other parts of the application
export default Login;
