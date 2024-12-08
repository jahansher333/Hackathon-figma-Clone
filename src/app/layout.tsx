import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
// import { Montserrat, Inter } from "next/font/google"; 

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// const inter = Inter({ 
//   subsets: ["latin"],
//   variable: "--font-inter",
//   weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
    

//  });

//  const sans = Montserrat({ 
//   subsets: ["latin"],
//   variable: "--font-sans",
//   weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
    

//  });

export const metadata: Metadata = {
  title: "Furniture Store",
  description: "Furniture Store to sell furniture online",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
