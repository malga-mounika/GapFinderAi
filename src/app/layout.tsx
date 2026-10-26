import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "GapFinder AI | Personalized Learning",
    description:
        "Discover knowledge gaps, assess your understanding, and build personalized revision plans with GapFinder AI.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}