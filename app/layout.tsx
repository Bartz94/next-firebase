import type { Metadata } from "next"
import "./globals.css"
import { Providers } from "./providers"
import { fonts } from "./fonts"

export const metadata: Metadata = {
  title: "NextJS Playground",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={fonts.rubik.variable}>
      <body className='h-[100%]'>
        <Providers >
          {children}
        </Providers>
      </body>
    </html>
  );
}
