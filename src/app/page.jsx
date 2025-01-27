
import { SessionProvider, getSession, useSession } from 'next-auth/react';

export async function getServerSideProps(context) {
    const session = await getSession(context)
    
    return {
        props: { session }
    }
}

export default function App({ Component, pageProps: { session, ...pageProps } }) {
    return (
        <SessionProvider session={session || undefined}>
            <Component {...pageProps} />
        </SessionProvider>
    );
}
