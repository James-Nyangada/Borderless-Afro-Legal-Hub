import type {Metadata} from 'next';
import './globals.css'; // Global styles
import { PostHogProvider } from './posthog-provider';
import { Toaster } from 'react-hot-toast';
import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  title: 'Blog Home Page - Untitled UI',
  description: 'A modern blog interface',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <PostHogProvider>
          <Navbar />
          {children}
          <Toaster position="bottom-right" />
        </PostHogProvider>
      </body>
    </html>
  );
}
