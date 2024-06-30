import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/app/(models)/User";arison
import bcrypt from "bcrypt";

// Define authentication options for NextAuth.js
export const options = {
  providers: [
    // GitHub authentication provider
    GitHubProvider({
      profile(profile) {
        // Log GitHub profile data
        console.log("GitHub Profile: ", profile);

        // Assign role based on email
        let userRole = "GitHub User";
        if (profile?.email == "moeezrajput2000@gmail.com") {
          userRole = "admin"; // Grant admin role for specific email
        }

        // Return profile with added role
        return {
          ...profile,
          role: userRole,
        };
      },
      clientId: process.env.GITHUB_ID, // GitHub OAuth client ID
      clientSecret: process.env.GITHUB_Secret, // GitHub OAuth client secret
    }),
    // Google authentication provider
    GoogleProvider({
      profile(profile) {
        // Log Google profile data
        console.log("Google Profile: ", profile);

        // Assign role based on Google authentication
        let userRole = "Google User";
        return {
          ...profile,
          id: profile.sub, // Use Google profile sub as id
          role: userRole,
        };
      },
      clientId: process.env.GOOGLE_ID, // Google OAuth client ID
      clientSecret: process.env.GOOGLE_Secret, // Google OAuth client secret
    }),
    // Credentials authentication provider
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "email",
          type: "text",
          placeholder: "your-email",
        },
        password: {
          label: "password",
          type: "password",
          placeholder: "your-password",
        },
      },
      async authorize(credentials) {
        try {
          // Find user by email in the database
          const foundUser = await User.findOne({ email: credentials.email })
            .lean() // Optimize query performance
            .exec(); // Execute the query

          // If user is found
          if (foundUser) {
            console.log("User Already Exists!");
            // Compare provided password with hashed password
            const match = await bcrypt.compare(
              credentials.password,
              foundUser.password
            );

            // If password matches
            if (match) {
              console.log("Good Passed!");
              delete foundUser.password; // Remove password from user object

              // Assign default role
              foundUser["role"] = "Unverified Email";
              return foundUser; // Return user data
            }
          }
        } catch (error) {
          // Log any errors during the process
          console.log(error);
        }
        return null; // Return null if authentication fails
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      // If user data exists, add role to token
      if (user) token.role = user.role;
      return token; // Return modified token
    },
    async session({ session, token }) {
      // If session user data exists, add role from token to session
      if (session?.user) session.user.role = token.role;
      return session; // Return modified session
    },
  },
};
