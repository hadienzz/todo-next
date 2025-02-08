'use client'

import FooterModal from '../../components/Modal/FooterModal';
import './globals.css';
import { SessionProvider, useSession } from 'next-auth/react'

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body>
        <SessionProvider>
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
