import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_types: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  callbacks: {
    // Invoked on successful signin
    async signIn({ profile }) {
      // 1. Connect ot the database
      // 2. check if user exists
      // 3. if not, create user
      // 4. Retunr ture to allow sign in
    },
    // Session callback funcation that momdifies the session object
    async session({ session }) {
      // 1. Get user from database
      // 2. Assign user id from the session
      // 3. Return session
    },
  },
};
