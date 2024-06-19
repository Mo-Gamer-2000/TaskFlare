// Import getServerSession function from next-auth to retrieve session data
import { getServerSession } from "next-auth";

// Import options object from the specified path for next-auth configuration
import { options } from "../api/auth/[...nextauth]/options";

// Import redirect function from next/navigation for redirection handling
import { redirect } from "next/navigation";

// Define the Member component as an asynchronous function
const Member = async () => {
  // Retrieve session data from the server using getServerSession with provided options
  const session = await getServerSession(options);

  // If no session is found, redirect the user to the sign-in page with a callback URL
  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/Member");
  }

  // Render the Member component UI
  return (
    <div>
      {/* Display the title with a purple accent */}
      <h1 className="text-purple-accent">Member</h1>

      {/* Display the user's email with a purple accent */}
      <p className="text-purple-accent">{session?.user?.email}</p>

      {/* Display the user's role with a purple accent */}
      <p className="text-purple-accent">{session?.user?.role}</p>
    </div>
  );
};

// Export the Member component as the default export
export default Member;
