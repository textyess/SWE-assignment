// eslint-disable-next-line @typescript-eslint/no-var-requires
const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}", "../../packages/ui/src/**/*.{ts,tsx}"],
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
            fontFamily: {
                main: ["Geist", ...fontFamily.sans],
                secondary: ["Inter", ...fontFamily.sans],
            },
            colors: {
                slate: {
                    100: "#F5F3F0",
                },
                primary: {
                    DEFAULT: "#503ADC",
                    foreground: "#FFF",
                    900: "#120B69",
                    800: "#1C127F",
                    700: "#2B1D9E",
                    600: "#3C2ABD",
                    500: "#503ADC",
                    400: "#7C68EA",
                    300: "#9A88F4",
                    200: "#BEB1FB",
                    100: "#DFD7FD",
                    50: "#EFEBFE",
                },
                secondary: {
                    DEFAULT: "#A69BED",
                    foreground: "#FFF",
                },
                background: {
                    DEFAULT: "#F9F8F6",
                },
                accent: "#f4f4f5",
                destructive: {
                    DEFAULT: "#F72B27",
                    foreground: "#FFF",
                    100: "#FEE3D3",
                    200: "#FEC0A8",
                    300: "#FC957C",
                    400: "#FA6C5C",
                    500: "#F72B27",
                    600: "#D41C28",
                    700: "#B1132B",
                    800: "#8F0C2B",
                    900: "#76072B",
                },
                success: {
                    DEFAULT: "#95DB0A",
                    foreground: "#FFF",
                    100: "#F3FDCC",
                    200: "#E5FB9B",
                    300: "#CEF468",
                    400: "#B7E942",
                    500: "#95DB0A",
                    600: "#79BC07",
                    700: "#609D05",
                    800: "#487F03",
                    900: "#386901",
                },
                popover: {
                    DEFAULT: "#FFF",
                    foreground: "#000",
                },
                warning: {
                    DEFAULT: "#FC9105",
                    900: "#782F00",
                    800: "#924001",
                    700: "#B55802",
                    600: "#D87303",
                    500: "#FC9105",
                    400: "#FDB443",
                    300: "#FECA68",
                    200: "#FEE09A",
                    100: "#FEF1CC",
                },
                neutral: {
                    DEFAULT: "#9E9E9E",
                    50: "#FAF9F7",
                    100: "#F5F3F0",
                    200: "#E8E6E3",
                    300: "#DAD8D5",
                    400: "#B5B3B0",
                    500: "#8F8D8A",
                    600: "#6B6966",
                    700: "#4A4845",
                    800: "#363432",
                    900: "#282624",
                },
                error: {
                    DEFAULT: "#F72B27",
                    foreground: "#FFF",
                    100: "#FEE3D3",
                    200: "#FEC0A8",
                    300: "#FC957C",
                    400: "#FA6C5C",
                    500: "#F72B27",
                    600: "#D41C28",
                    700: "#B1132B",
                    800: "#8F0C2B",
                    900: "#76072B",
                },
            },
            boxShadow: {
                custom: "0 0 0 3px hsla(248, 70%, 55%, 25%), 0 0 0 1px hsla(248, 70%, 55%, 50%)",
                card: "0 0 0 1px rgba(0,0,0,0.03), 0 2px 4px rgba(0,0,0,0.04), 0 8px 16px rgba(0,0,0,0.04)",
                "card-hover": "0 0 0 1px rgba(0,0,0,0.03), 0 4px 8px rgba(0,0,0,0.06), 0 12px 24px rgba(0,0,0,0.06)",
                "primary-glow": "0 1px 2px rgba(80, 58, 220, 0.2), 0 4px 12px rgba(80, 58, 220, 0.15)",
                "input-focus": "0 0 0 2px rgba(80,58,220,0.15), 0 1px 3px 0 rgba(80,58,220,0.1)",
            },
            transitionTimingFunction: {
                "out-expo": "cubic-bezier(0.19, 1, 0.22, 1)",
            },
            transitionDuration: {
                fast: "120ms",
                normal: "200ms",
                slow: "350ms",
            },
            spacing: {
                "sidebar-width": "288px",
                "new-sidebar-width": "224px",
            },
            keyframes: {
                gradient: {
                    to: {
                        backgroundPosition: "var(--bg-size) 0",
                    },
                },
                "accordion-down": {
                    from: { height: 0 },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: 0 },
                },
                breathing: {
                    "0%": {
                        "-webkit-transform": "scale(0.9)",
                        "-ms-transform": "scale(0.9)",
                        transform: "scale(0.9)",
                    },

                    "25%": {
                        "-webkit-transform": "scale(1)",
                        "-ms-transform": "scale(1)",
                        transform: "scale(1)",
                    },

                    "60%": {
                        "-webkit-transform": "scale(0.9)",
                        "-ms-transform": "scale(0.9)",
                        transform: "scale(0.9)",
                    },

                    "100%": {
                        "-webkit-transform": "scale(0.9)",
                        "-ms-transform": "scale(0.9)",
                        transform: "scale(0.9)",
                    },
                },
                "shiny-text": {
                    "0%, 90%, 100%": {
                        "background-position": "calc(-100% - var(--shiny-width)) 0",
                    },
                    "30%, 60%": {
                        "background-position": "calc(100% + var(--shiny-width)) 0",
                    },
                },
                "bounce-right": {
                    "0%, 100%": { transform: "translateX(0)" },
                    "20%": { transform: "translateX(6px)" },
                    "40%": { transform: "translateX(0)" },
                    "60%": { transform: "translateX(3px)" },
                    "80%": { transform: "translateX(0)" },
                },
                typing: {
                    "0%": {
                        width: "0%",
                        visibility: "hidden",
                    },
                    "100%": {
                        width: "100%",
                    },
                },
                blink: {
                    "50%": {
                        borderColor: "transparent",
                    },
                    "100%": {
                        borderColor: "white",
                    },
                },
                "fade-in": {
                    "0%": {
                        opacity: "0",
                        transform: "translateY(10px)",
                    },
                    "100%": {
                        opacity: "1",
                        transform: "translateY(0)",
                    },
                },
                slideInUp: {
                    "0%": {
                        opacity: "0",
                        transform: "translateY(10px)",
                    },
                    "100%": {
                        opacity: "1",
                        transform: "translateY(0)",
                    },
                },
                "pulse-once": {
                    "0%": {
                        transform: "scale(1)",
                        boxShadow: "0 0 0 0 rgba(80, 58, 220, 0.4)",
                    },
                    "50%": {
                        transform: "scale(1.05)",
                        boxShadow: "0 0 0 8px rgba(80, 58, 220, 0)",
                    },
                    "100%": {
                        transform: "scale(1)",
                        boxShadow: "0 0 0 0 rgba(80, 58, 220, 0)",
                    },
                },
                voiceOrb: {
                    "0%, 100%": { transform: "scale(1)", opacity: "0.35" },
                    "50%": { transform: "scale(1.06)", opacity: "0.55" },
                },
                voiceOrbInner: {
                    "0%, 100%": { transform: "scale(1) rotate(0deg)" },
                    "50%": { transform: "scale(1.02) rotate(180deg)" },
                },
                voiceWave1: {
                    "0%": { transform: "scale(1)", opacity: "0.25" },
                    "100%": { transform: "scale(1.4)", opacity: "0" },
                },
                voiceWave2: {
                    "0%": { transform: "scale(1)", opacity: "0.18" },
                    "100%": { transform: "scale(1.55)", opacity: "0" },
                },
                voiceWave3: {
                    "0%": { transform: "scale(1)", opacity: "0.12" },
                    "100%": { transform: "scale(1.7)", opacity: "0" },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
                breathing: "breathing 3s ease-out infinite normal",
                gradient: "gradient 8s linear infinite",
                "shiny-text": "shiny-text 8s infinite",
                "bounce-right": "bounce-right 1.2s",
                typing: "typing 2s steps(20) blink .7s infinite",
                "fade-in": "fade-in 0.4s ease-out",
                slideInUp: "slideInUp 0.4s ease-out forwards",
                "pulse-once": "pulse-once 0.6s ease-out",
                "voice-orb": "voiceOrb 5s ease-in-out infinite",
                "voice-orb-inner": "voiceOrbInner 8s ease-in-out infinite",
            },
            typography: {
                primary: {
                    css: {
                        "--tw-prose-body": 'theme("colors.neutral.600")',
                        "--tw-prose-headings": 'theme("colors.primary.900")',
                        "--tw-prose-links": 'theme("colors.primary.500")',
                        "--tw-prose-bold": 'theme("colors.primary.900")',
                        maxWidth: "none",
                    },
                },
            },
        },
    },
    plugins: [require("tailwindcss-animate"), require("tailwind-scrollbar"), require("@tailwindcss/typography")],
};
