import { Metadata } from "next";

interface PageMetadata {
    title?: string;
    description?: string;
    image?: string;
}

export const APP_NAME = 'IPPA';
export const APP_URL = 'https://koucink.ippa.cz';
export const APP_COLOR = '#101010';

const TITLE_SUFFIX = APP_NAME;
const DESCRIPTION = '';

export const DEFAULT_METADATA: Metadata = {
    metadataBase: new URL(APP_URL),
    title: formatTitle(APP_NAME),
    description: DESCRIPTION,
    applicationName: APP_NAME,
    manifest: "/site.webmanifest",
    themeColor: APP_COLOR,
    icons: {
        icon: [
            { url: "/favicon.svg", type: "image/svg+xml" },
            { url: "/favicon.ico" },
            { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
        ],
        apple: "/apple-touch-icon.png",
    },
    openGraph: {
        title: formatTitle(APP_NAME),
        siteName: APP_NAME,
        url: APP_URL,
        description: DESCRIPTION,
        type: "website",
        images: [{
            url: `${APP_URL}/images/og-image.jpg`,
        }]
    },
    twitter: {
        card: "summary_large_image",
        title: formatTitle(APP_NAME),
        description: DESCRIPTION,
        images: [`${APP_URL}/images/og-image.jpg`],
    },
    other: {
        "apple-mobile-web-app-title": APP_NAME,
        "msapplication-TileColor": APP_COLOR,
    },
};

function formatTitle(title = '') {
    if (title === '' || title === TITLE_SUFFIX) {
        return TITLE_SUFFIX;
    }

    return `${title} | ${TITLE_SUFFIX}`;
}

export function getPageMetadata(data: PageMetadata): Metadata {
    const { title, description, image } = data;

    return {
        ...DEFAULT_METADATA,
        title: title ? formatTitle(title) : DEFAULT_METADATA.title,
        description: description || DEFAULT_METADATA.description,
        openGraph: {
            ...DEFAULT_METADATA.openGraph,
            title: title ? formatTitle(title) : DEFAULT_METADATA.openGraph?.title,
            description: description || DEFAULT_METADATA.openGraph?.description,
            images: image ? [{ url: image }] : DEFAULT_METADATA.openGraph?.images,
        },
        twitter: {
            ...DEFAULT_METADATA.twitter,
            title: title ? formatTitle(title) : DEFAULT_METADATA.twitter?.title,
            description: description || DEFAULT_METADATA.twitter?.description,
            images: image ? [image] : DEFAULT_METADATA.twitter?.images,
        },
    };
}