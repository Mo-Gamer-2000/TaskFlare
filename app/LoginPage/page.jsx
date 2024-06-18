import Link from "next/link";
import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";

const Login = async () => {
  const session = await getServerSession(options);
  return (
    <div>
      <h1>Login</h1>
      <div>
        <Link
          href="/CreateUser"
          className="block px-4 py-2 text-purple-accent hover:bg-yellow-200 rounded-md"
        >
          Create User
        </Link>
        <Link
          href="/ClientMember"
          className="block px-4 py-2 text-purple-accent hover:bg-yellow-200 rounded-md"
        >
          Client Member
        </Link>
        <Link
          href="/Member"
          className="block px-4 py-2 text-purple-accent hover:bg-yellow-200 rounded-md"
        >
          Member
        </Link>
        <Link
          href="/Public"
          className="block px-4 py-2 text-purple-accent hover:bg-yellow-200 rounded-md"
        >
          Public
        </Link>
        {session ? (
          <Link
            href="/api/auth/signout?callbackUrl=/"
            className="block px-4 py-2 text-purple-accent hover:bg-yellow-200 rounded-md"
          >
            Logout
          </Link>
        ) : (
          <Link
            href="/api/auth/signin"
            className="block px-4 py-2 text-purple-accent hover:bg-yellow-200 rounded-md"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Login;
