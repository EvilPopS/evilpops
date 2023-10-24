import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import EvilpopsTxt from "@/components/EvilpopsTxt";
import TopOfScreenBlur from "@/components/TopOfScreenBlur";

export const metadata: Metadata = {
    title: "EvilPopS",
    description: "Here is information about me and my work!",
};

function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className="select-none">
                <TopOfScreenBlur />
                <Navbar />
                <EvilpopsTxt />
                {children}
            </body>
        </html>
    );
}

export default RootLayout;
