import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import EvilpopsTxt from "@/components/EvilpopsTxt";

export const metadata: Metadata = {
    title: "EvilPopS",
    description: "Here is information about me and my work!",
};

function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <Navbar />
                <EvilpopsTxt />
                {children}
            </body>
        </html>
    );
}

export default RootLayout;
