import clientPromise from "@/app/lib/mongodb";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google"; // Add any provider you'd like
import { MongoDBAdapter } from "@auth/mongodb-adapter";

export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
            clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET
        })
    ],
    callbacks: {
        async jwt({ token, user, profile }) {
            if (user) {
                token.id = user.id || token.sub || account?.providerAccountId
            }
            console.log("JWT Callback:", token);
            return token;
        },
        async session({ session, token }) {
            session.user.id = token.id;
            console.log("Session Callback:", session);
            return session;
        },
    },
}

const handler = NextAuth(authOptions)
export { handler as POST, handler as GET }