import type { Metadata, Viewport } from "next";
import "./globals.css";
import Analytics from "@/components/analytics";
import { GlobalProvider } from "@/context/global-context";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import PreloadFonts from "@/components/preload-fonts";

export const viewport: Viewport = {
    themeColor: '#ffffff',
}

export const metadata: Metadata = {
    metadataBase: new URL('https://koucink.ippa.cz/'),
    title: "IPPA - Institut psychologické a personální analýzy",
    description: "Dopřejte si koučink od zkušeného psychologa, který vám pomůže překonat bariéry a posunout se k naplněnému životu i kariéře. Jste připraveni na změnu?",
    applicationName: "IPPA",
    icons: [
        {
            url: "/apple-touch-icon.png",
            sizes: "180x180",
            type: "image/png",
        },
        {
            url: "/favicon-96x96.png",
            sizes: "96x96",
            type: "image/png",
        }
    ],
    manifest: "/site.webmanifest",
    other: {
        "apple-mobile-web-app-title": "IPPA",
        "msapplication-TileColor": "#ffffff",
    },
    openGraph: {
        title: "IPPA - Institut psychologické a personální analýzy",
        siteName: "IPPA",
        url: "https://koucink.ippa.cz/",
        description: "Dopřejte si koučink od zkušeného psychologa, který vám pomůže překonat bariéry a posunout se k naplněnému životu i kariéře. Jste připraveni na změnu?",
        type: "website",
        images: [{
            url: "/images/og-image.jpg",
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
        <html lang="cs" className="scroll-smooth scroll-pt-nav-extra bg-white text-black">
            <head>
                <PreloadFonts />
            </head>
            <body className="flex flex-col min-h-device">

                {isProduction && <Analytics />}

                <GlobalProvider>
                    <Nav />
                    <main className="relative flex flex-col w-full flex-1 pt-nav pb-16">
                        {children}
                    </main>
                    <Footer />
                </GlobalProvider>
            </body>
        </html>
    );
}
