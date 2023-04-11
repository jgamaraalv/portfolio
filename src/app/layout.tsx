import { Fira_Code } from "next/font/google";
import "remixicon/fonts/remixicon.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Analytics from "@/components/Analytics";
import "../styles/globals.css";

export const metadata = {
  title: "João Vequiato | Senior Front-End Developer | Reactjs, Typescript",
  description:
    "Hello, I'm a passionate senior front-end developer with 12+ years of experience, skilled in React, Typescript, and a variety of other technologies.",
};

const fira = Fira_Code({
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
    <>
      <Analytics />

      <html lang="en" className={fira.variable}>
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
    </>
  );
}
