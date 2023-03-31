import { Inter } from "next/font/google";
import "remixicon/fonts/remixicon.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "../styles/globals.css";

export const metadata = {
  title: "João Vequiato | Senior Front-End Developer | Reactjs, Typescript",
  description:
    "Hello, I'm a passionate front-end developer with 12+ years of experience, skilled in React, Typescript, and a variety of other technologies.",
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <div className="main-container">
          <div className="main-content">
            <Header />

            <main>{children}</main>

            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
