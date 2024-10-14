import type { Config } from "tailwindcss";
const {
    default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");
const config: Config = {
    darkMode: 'class',
    content: ["./app/**/*.{ts,tsx,mdx}", './components/**/*.{ts,tsx,mdx}'],
    theme: {
        extend: {
            backgroundImage: {
                'bg1': "url('/grain.png')",
            },
            animation: {
                scroll:
                    "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
            },
            keyframes: {
                scroll: {
                    to: {
                        transform: "translate(calc(-50% - 0.5rem))",
                    },
                },
            },
        }
    },
    plugins: [addVariablesForColors],
};
export default config;

function addVariablesForColors({ addBase, theme }: any) {
    let allColors = flattenColorPalette(theme("colors"));
    let newVars = Object.fromEntries(
        Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
    );

    addBase({
        ":root": newVars,
    });
}