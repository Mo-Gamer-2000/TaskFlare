// Enable client-side rendering
"use client";

// Import useSession hook from next-auth/react for session management
import { useSession } from "next-auth/react";
// Import redirect function from next/navigation for navigation
import { redirect } from "next/navigation";

// Define the Member component
const Member = () => {
  // Use the useSession hook to get session data and handle authentication
  const { data: session } = useSession({
    required: true, // Require authentication to access this component
    onUnauthenticated() {
      // Redirect to the sign-in page if the user is not authenticated
      redirect("/api/auth/signin?callbackUrl=/ClientMember");
    },
  });

  return (
    // Container div with TailwindCSS classes for styling
    <div>
      <h1 className="text-purple-accent">Client Member</h1>
      {/* Display the user's email if session data is available */}
      <p className="text-purple-accent">{session?.user?.email}</p>
      {/* Display the user's role if session data is available */}
      <p className="text-purple-accent">{session?.user?.role}</p>
    </div>
  );
};

// Export the Member component for use in other parts of the application
export default Member;
