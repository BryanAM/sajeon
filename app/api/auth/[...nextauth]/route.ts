import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

// Define the expected User type if not already defined
interface User {
  id: string;
  name: string;
  password?: string; // Typically, passwords should not be exposed
}

const authOptions: NextAuthOptions = {
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
        // const user = { id: 42, name: "mooncakes", password: "mooncakes" };
        const user: User = { id: "42", name: "mooncakes", password: "mooncakes" };
        if (
          credentials?.username === user.name &&
          credentials?.password === user.password
        ) {
          const { password, ...userSansPassword } = user;
          return userSansPassword;
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
