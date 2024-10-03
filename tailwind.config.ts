import type {Config} from "tailwindcss";

const config: Config = {
    content: ["./app/**/*.{ts,tsx,mdx}", './components/**/*.{ts,tsx,mdx}'],
    theme: {
        extend: {
            backgroundImage: {
                'bg1': "url('/grain.png')",
              }
        }
    },
    plugins: [],
};
export default config;
