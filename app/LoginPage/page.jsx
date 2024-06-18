import Link from "next/link";
import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";

const Login = async () => {
  const session = await getServerSession(options);

  return (
    <div className="flex flex-col items-center justify-center bg-page py-8 px-4">
      <h1 className="text-4xl font-bold text-purple-accent mb-4 text-center">
        Welcome to Task<span className="text-yellow-400">Flare</span> Login
      </h1>
      <p className="text-lg text-gray-700 mb-6">
        Please select an option below to continue.
      </p>
      <div className="grid grid-cols-1 gap-4 max-w-md w-full bg-white rounded-lg shadow-lg p-6">
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

export default Login;
