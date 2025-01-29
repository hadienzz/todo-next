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
            session.user.id = token.id; // Tambahkan id ke session.user
            console.log("Session Callback:", session); // Debug session
            return session;
        },
        async jwt({ token, account, profile }) {
            // Simpan Google sub ID sebagai token.id
            if (account) {
                token.id = token.sub; // Ambil sub dari token (Google ID unik pengguna)
            }
            console.log("JWT Callback:", token); // Debug token
            return token;
        },
    },
}


const handler = NextAuth(authOptions)
export { handler as POST, handler as GET }