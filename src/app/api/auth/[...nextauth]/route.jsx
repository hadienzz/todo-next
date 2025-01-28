import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google"; // Add any provider you'd like

const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
            clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET
        })
    ]
}

const handler = NextAuth(authOptions)
export { handler as POST, handler as GET }