// Import Nav and Footer components from the specified paths
import Nav from "./(components)/Nav";
import Footer from "./(components)/Footer";

// Import global CSS file for additional styles
import "./globals.css";

// Import necessary FontAwesome configurations and styles
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

// Import AuthProvider component from the specified path
import AuthProvider from "./(components)/Authprovider";

// Stop adding CSS to FontAwesome icons to prevent excessive size
config.autoAddCss = false;

// Metadata for the application
export const metadata = {
  title: "TaskFlare", // Application title
  description: "TaskFlare developed by Moeez Abdul", // Application description
};

// RootLayout component to provide a consistent layout for the application
export default function RootLayout({ children }) {
  return (
    <html lang="en-GB">
      <AuthProvider>
        {" "}
        {/* Wrap content with AuthProvider for authentication */}
        <body>
          <div className="flex flex-col h-screen max-h-screen">
            {" "}
            {/* Flex container with full height */}
            <Nav /> {/* Include navigation component */}
            <div className="flex-grow overflow-y-auto bg-page text-default-text">
              {/* Main content area with scrolling and background */}
              {children} {/* Render child components */}
            </div>
            <Footer /> {/* Include footer component */}
          </div>
        </body>
      </AuthProvider>
    </html>
  );
}
