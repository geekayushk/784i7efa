import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import { Toaster } from "react-hot-toast";
import AuthProvider from "@/provider/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Task Manager",
  description: "Task Management Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="lemonade">
      <body className={inter.className}>

        <AuthProvider>
          <Navbar />
          <div className="max-w-7xl w-full mx-auto">
            {children}
          </div>
          <Toaster />
        </AuthProvider>

      </body>
    </html >
  );
}
