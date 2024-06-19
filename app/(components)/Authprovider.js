// Enable client-side rendering
"use client";

// Import SessionProvider from next-auth/react for handling session state
const { SessionProvider } = require("next-auth/react");

// Define the AuthProvider component that wraps its children with SessionProvider
const AuthProvider = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

// Export the AuthProvider component for use in other parts of the application
export default AuthProvider;
