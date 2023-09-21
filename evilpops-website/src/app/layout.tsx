import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
    title: "EvilPopS",
    description: "Here is information about me and my work!",
};

function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <Navbar></Navbar>
                {children}
            </body>
        </html>
    );
}

export default RootLayout;
