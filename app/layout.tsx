import Analytics from "@/components/analytics";
import Footer from "@/components/footer";
import Nav from "@/components/nav";
import PreloadFonts from "@/components/preload-fonts";
import { GlobalProvider } from "@/context/global-context";
import { CONTACT_ADDRESS, CONTACT_EMAIL, CONTACT_PHONE } from '@/helpers/contacts';
import { APP_COLOR, APP_NAME, APP_URL, DEFAULT_METADATA } from '@/helpers/metadata';
import { aristoclick } from '@mihilista/aristoclick-logo';
import {
    ConsentInitScript,
    CookieBanner,
    CookieConsentProvider,
    CookiePreferencesModal
} from '@mihilista/cookie-consent';
import type { Metadata, Viewport } from "next";
import React from "react";
import "./globals.css";

export const viewport: Viewport = {
    themeColor: APP_COLOR,
}

export const metadata: Metadata = DEFAULT_METADATA;

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    aristoclick();

    return (
        <html lang="cs"
            className="scroll-smooth"
        >
            <head>
                <PreloadFonts />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@graph": [
                                {
                                    "@type": ["Organization", "LocalBusiness", "MedicalBusiness", "Psychologist"],
                                    "@id": `${APP_URL}#org`,
                                    "name": APP_NAME,
                                    "url": APP_URL,
                                    "image": `${APP_URL}/images/og-image.jpg`,
                                    "logo": `${APP_URL}/images/logo-dark.png`,
                                    "email": CONTACT_EMAIL,
                                    "telephone": { CONTACT_PHONE },
                                    "address": {
                                        "@type": "PostalAddress",
                                        "streetAddress": CONTACT_ADDRESS.street,
                                        "addressLocality": CONTACT_ADDRESS.city,
                                        "postalCode": CONTACT_ADDRESS.zip,
                                        "addressCountry": CONTACT_ADDRESS.country
                                    },
                                    "areaServed": { "@type": "AdministrativeArea", "name": "Česká republika" },
                                    "knowsLanguage": ["cs"],
                                    "founder": { "@id": `${APP_URL}#person` },
                                    "isAccessibleForFree": false,
                                    "offers": {
                                        "@type": "Offer",
                                        "itemOffered": { "@id": `${APP_URL}#service` },
                                        "availability": "https://schema.org/InStock",
                                        "url": `${APP_URL}#contact`
                                    }
                                },
                                {
                                    "@type": "Person",
                                    "@id": `${APP_URL}#person`,
                                    "name": "PhDr. Otakar Chaloupka, CSc.",
                                    "jobTitle": "Psycholog / Kouč",
                                    "url": APP_URL,
                                    "image": `${APP_URL}/images/otakar-chaloupka.jpg`,
                                    "worksFor": { "@id": `${APP_URL}#org` },
                                    // "alumniOf": { "@type": "CollegeOrUniversity", "name": "NÁZEV UNIVERZITY" },
                                    // "hasCredential": [
                                    //     { "@type": "EducationalOccupationalCredential", "credentialCategory": "license", "name": "ČAKO / ČMPS / jiná odbornost" }
                                    // ],
                                    "knowsLanguage": ["cs"]
                                },
                                {
                                    "@type": "Service",
                                    "@id": `${APP_URL}#service`,
                                    "serviceType": "Individuální psychologické poradenství a koučink",
                                    "provider": { "@id": `${APP_URL}#org` },
                                    "areaServed": "CZ",
                                    "availableChannel": [
                                        { "@type": "ServiceChannel", "serviceUrl": `${APP_URL}#contact`, "availableLanguage": ["cs"] },
                                        { "@type": "ServiceChannel", "servicePhone": { "@type": "ContactPoint", "telephone": CONTACT_PHONE, "contactType": "customer service" } }
                                    ],
                                    "audience": {
                                        "@type": "Audience",
                                        "audienceType": ["manažeři", "lídři", "foundeři", "týmy", "vedoucí pracovníci", "návrat po vyhoření"]
                                    }
                                },
                                {
                                    "@type": "WebSite",
                                    "@id": `${APP_URL}#website`,
                                    "url": APP_URL,
                                    "name": APP_NAME,
                                    "inLanguage": "cs",
                                    "publisher": { "@id": `${APP_URL}#org` },
                                    "potentialAction": {
                                        "@type": "ReserveAction",
                                        "target": `${APP_URL}#contact`,
                                        "result": { "@type": "Reservation", "name": "Konzultace" }
                                    }
                                },
                                {
                                    "@type": "VideoObject",
                                    "@id": `${APP_URL}#intro-video`,
                                    "name": "Úvodní video",
                                    "description": "Krátké představení služby a přístupu.",
                                    "thumbnailUrl": `${APP_URL}/images/header-video-thumb_desktop.jpg`,
                                    "contentUrl": `${APP_URL}/videos/header.mp4`,
                                    "uploadDate": "2025-09-30",
                                    "duration": "PT1M55S",
                                    "publisher": { "@id": `${APP_URL}#org` }
                                }
                            ]
                        })
                    }}
                />
                <ConsentInitScript />
            </head>
            <body className="min-h-device flex flex-col">
                <Analytics />

                <CookieConsentProvider>
                    <CookieBanner />
                    <CookiePreferencesModal />

                    <GlobalProvider>
                        <Nav />
                        <main className="flex-1 pt-nav flex flex-col gap-36 md:gap-75 pb-36 md:pb-75 w-screen overflow-hidden">
                            {children}
                        </main>
                        <Footer />
                    </GlobalProvider>
                </CookieConsentProvider>
            </body>
        </html>
    );
}
