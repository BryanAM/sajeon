import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username:",
          type: "text",
          placeholder: "MagicMooncakes1111",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Secret Passphrase",
        },
      },
      async authorize(credentials) {
        // TODO: Retrieve user from MongoDB here
        const user = { id: 42, name: "mooncakes", password: "mooncakes" };
        if (
          credentials?.username === user.name &&
          credentials?.password === user.password
        ) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET as string,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
