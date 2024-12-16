import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/NAV";
import Footer from "@/components/Footer";
import { ToastProvider } from "@/components/ui/ToastProvider";

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

export const metadata = {
  title: "ICEMSS 2025 - International Conference on Engineering, Management and Social Sciences",
  description: "Join ICEMSS 2025 in Delhi, India. A 2-day multidisciplinary conference bringing together 1000+ academics and professionals from 50+ countries for cutting-edge research in engineering, management, and social sciences.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar/>
        {children}
        <Footer/>
        <ToastProvider/>
      </body>
    </html>
  );
}
