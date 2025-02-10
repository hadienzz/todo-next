import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google"; // Add any provider you'd like

const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
            clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET
        })
    ],
    callbacks: {
        async session({ session, token }) {
            session.user.id = token.id;
            console.log("Session Callback:", session);
            return session;
        },
        async jwt({ token, account, profile }) {
            if (account) {
                token.id = token.sub;
            }
            console.log("JWT Callback:", token);
            return token;
        },
    },
}


const handler = NextAuth(authOptions)
export { handler as POST, handler as GET }