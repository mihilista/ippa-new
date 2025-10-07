
const PRELOAD_FONTS = [
    '/fonts/inter/Inter_18pt-Regular.woff2',
    '/fonts/gloock/Gloock-Regular.woff2'
];

export default function PreloadFonts() {
    return (
        <>
            {PRELOAD_FONTS.map((font) => (
                <link
                    key={`Font Preload: ${font}`}
                    rel="preload"
                    href={font}
                    as="font"
                    type="font/woff2"
                    crossOrigin="anonymous"
                />
            ))}
        </>
    )
}