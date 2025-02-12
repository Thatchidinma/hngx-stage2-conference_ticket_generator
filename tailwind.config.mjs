/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        gradient: "radial-gradient(152.84% 95.20% at -576.37% 1937.13%, rgba(35.85, 160.11, 181.49, 0.20) 0%, rgba(36, 160, 181, 0) 100%)",
        border: '#0E464F',
        'border2': '#2BA4B9',
        'green-1' : '#041E23'
      }
    },
  },
  plugins: [],
};
