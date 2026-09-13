import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Hithesh Gurudatta — Java Full Stack Developer & Backend Engineer',
  description:
    'Hithesh Gurudatta is a Java Full Stack Trainee at DLithe and B.Tech CSE student at NMAM Institute of Technology. Specializing in Java, Spring Boot, Node.js, Data Structures & Algorithms, and scalable backend architectures.',
  keywords: [
    'Hithesh Gurudatta',
    'Hithesh H G',
    'Java Full Stack Developer',
    'DLithe',
    'NMAMIT',
    'Spring Boot',
    'Backend Engineer',
    'Shivamogga',
    'Karnataka',
    'Minimalist Portfolio',
  ],
  authors: [{ name: 'Hithesh Gurudatta', url: 'https://github.com/hitheshhg' }],
  creator: 'Hithesh Gurudatta',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://hitheshhg.vercel.app',
    title: 'Hithesh Gurudatta — Java Full Stack Developer',
    description: 'B.Tech CSE student at NMAMIT and Java Full Stack Trainee at DLithe. Passionate about backend development and scalable software.',
    siteName: 'Hithesh Gurudatta',
  },
  icons: {
    icon: '/pfp.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-white text-[#0a0a0a] antialiased selection:bg-black selection:text-white">
        <div className="min-h-screen flex flex-col">
          <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 flex flex-col gap-10 sm:gap-14">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
