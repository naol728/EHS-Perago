import { Geist, Geist_Mono } from "next/font/google";
import "./../../style/globals.css";
import Appbar from "../../components/Appbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "EHS-Perago",
  description: "this is the intern project for perago information",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Appbar />
        <div className="mt-20">{children}</div>
      </body>
    </html>
  );
}
