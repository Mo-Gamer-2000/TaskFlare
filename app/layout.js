import Nav from "./(components)/Nav";
import Footer from "./(components)/Footer";
import "./globals.css";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import AuthProvider from "./(components)/Authprovider";

// Stopped adding CSS to the Icons, which makes the Huge
config.autoAddCss = false;

export const metadata = {
  title: "TaskFlare",
  description: "TaskFlare developed by Moeez Abdul",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-GB">
      <AuthProvider>
        <body>
          <div className="flex flex-col h-screen max-h-screen">
            <Nav />
            <div className="flex-grow overflow-y-auto bg-page text-default-text">
              {children}
            </div>
            <Footer />
          </div>
        </body>
      </AuthProvider>
    </html>
  );
}
