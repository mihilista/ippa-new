import type {Metadata, Viewport} from "next";
import "./globals.css";
import Analytics from "@/components/analytics";
import {GlobalProvider} from "@/context/global-context";
import Nav from "@/components/nav";
import Footer from "@/components/footer";

export const viewport: Viewport = {
    themeColor: '#f5f5f5',
}

export const metadata: Metadata = {
    metadataBase: new URL('https://ippa.cz/'),
    title: "IPPA",
    description: "",
    applicationName: "IPPA",
    icons: [
        {
            url: "/apple-touch-icon.png",
            sizes: "180x180",
            type: "image/png",
        },
        {
            url: "/favicon-32x32.png",
            sizes: "32x32",
            type: "image/png",
        },
        {
            url: "/favicon-16x16.png",
            sizes: "16x16",
            type: "image/png",
        },
    ],
    manifest: "/site.webmanifest",
    other: {
        "apple-mobile-web-app-title": "IPPA",
        "msapplication-TileColor": "#fff",
    },
    openGraph: {
        title: "IPPA",
        siteName: "IPPA",
        url: "/",
        description: "",
        type: "website",
        images: [{
            url: "/images/og-image.png",
        }]
    },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    const isProduction = process.env.NODE_ENV === 'production';

    return (
        <html lang="cs" className="scroll-smooth scroll-pt-nav bg-white text-black">
        <head>
            <link
                rel="preload"
                href="/fonts/dmsans/DMSans-Regular.woff2"
                as="font"
                type="font/woff2"
                crossOrigin="anonymous"
            />
        </head>
        <body className="flex flex-col min-h-device">

        {isProduction && <Analytics/>}

        <GlobalProvider>
            <Nav/>
            <main className="relative flex flex-col w-full flex-1">
                {children}
            </main>
            <Footer/>
        </GlobalProvider>
        </body>
        </html>
    );
}
