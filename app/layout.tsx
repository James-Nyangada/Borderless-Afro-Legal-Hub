import type {Metadata} from 'next';
import './globals.css'; // Global styles
import { PostHogProvider } from './posthog-provider';
import { Toaster } from 'react-hot-toast';
import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  title: {
    template: '%s | Demystifying Cross-Border Capital, Entity Formation & Relocation Across Africa',
    default: 'Borderless Legal Hub | Demystifying Cross-Border Capital, Entity Formation & Relocation Across Africa',
  },
  description: 'Borderless Legal Hub is an independent thought-leadership platform delivering market intelligence and regulatory insights on cross-border capital flows, entity frameworks, and investment landscapes across Africa. Designed for institutional investors, global entrepreneurs, and the diaspora, the Hub unifies and demystifies Africa’s fragmented legal environment, making complex multi-jurisdictional information transparent, clear, and easily accessible.',
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
