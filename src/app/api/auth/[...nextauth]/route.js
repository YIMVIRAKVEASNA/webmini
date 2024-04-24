import { loginService, registerService ,} from "@/service/auth.service";
import nextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOption = {
  providers: [
    // login by email and password
    CredentialsProvider({
      // get email and password from login form
      async authorize(userInfo) {
        // define object structure
        const newUserInfo = {
          email: userInfo.email,
          password: userInfo.password,
        };
        //  call login services
        const login = await loginService(newUserInfo);
        console.log("login",login)
        return login;
      },
    }),

    CredentialsProvider({
      // get email and password from login form
      async authorize(userInfo) {
        // define object structure
        const newUserInfo = {
          firstname: userInfo.firstname,
          lastname: userInfo.lastname,
          gender: userInfo.gender,
          email: userInfo.email,
          password: userInfo.password,
        };
        //  call login services
        const Register = await registerService(newUserInfo);
        console.log("register",Register)
        return Register;
      },
    }),

  ],
  // used to set token into cookies
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token }) {
      session.user = token;
      return session;
    },
  },
  // calling secret key
  secret: process.env.NEXTAUTH_SECRET,
  // tell protected to used this segment for login
  pages: {
    signIn: "/login",
  },
};

const handler = nextAuth(authOption);
export { handler as GET, handler as POST };
