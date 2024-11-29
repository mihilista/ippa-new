import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: 'Montserrat, sans-serif'
            },
            colors: {
                transparent: 'transparent',
                current: 'currentColor',
                white: '#ffffff',
                black: '#1E1E1E',
                blue: {
                    200: '#E9EFF1',
                    400: '#b0ccfd',
                    500: '#5963B3',
                    600: '#454F9D',
                    700: '#313848',
                },
                gray: {
                    200: '#F0F1F3',
                    300: '#EFEFEF',
                    400: '#C1C3C8',
                    500: '#898B8E',
                    800: '#1E1E1E'
                }
            },
            fontSize: {
                0: ['0', '0'],
            },
            spacing: {
                device: 'var(--device-height)',
                nav: 'var(--nav-height)',
                'nav-extra': 'calc(var(--nav-height) + 50px)',
            }
        },
    },
    future: {
        hoverOnlyWhenSupported: true
    },
    plugins: [],
};
export default config;
