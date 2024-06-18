import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import localFont from 'next/font/local';

const inter = Inter({ subsets: ["latin"] });
// const helvetica = localFont({
//   src: [
//     {
//       path: '../../public/assets/fonts/helveticaneue/HelveticaNeue.ttf',
//       weight: '400',
//       style: 'normal',
//     },
//     {
//       path: '../../public/assets/fonts/helveticaneue/HelveticaNeue-Medium.ttf',
//       weight: '500',
//       style: 'medium',
//     },
//     {
//       path: '../../public/assets/fonts/helveticaneue/HelveticaNeue-Medium.ttf',
//       weight: '700',
//       style: 'bold',
//     }
//   ],
//   variable: '--font-helvetica'
// })

export const metadata: Metadata = {
  title: "Scout Ai",
  description: "New Ai for teams building what's next.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}


