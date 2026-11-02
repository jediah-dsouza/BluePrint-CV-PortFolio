import type { Metadata } from 'next';
import { profile } from '@/content/portfolio';
import '@fontsource/ibm-plex-mono/400.css';
import '@fontsource/ibm-plex-mono/500.css';
import '@fontsource/space-grotesk/400.css';
import '@fontsource/space-grotesk/500.css';
import '@fontsource/space-grotesk/700.css';
import './globals.css';
const title = `${profile.name} | Frontend developer portfolio`;
const description = `${profile.intro} Explore experience, education, skills and selected projects.`;
export const metadata: Metadata = { title, description, openGraph: { title, description, type: 'website' } };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
