'use client'

import FooterModal from '../../components/UI/FooterModal';
import TaskContextProvider from './context/TaskContextProvider';
import './globals.css';
import { SessionProvider, useSession } from 'next-auth/react'

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body>
        <SessionProvider>
          <TaskContextProvider>
            {children}
          </TaskContextProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
