/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'meta-1': '#DC3545',
        'meta-2': '#EFF2F7',
        'meta-3': '#10B981',
        'meta-4': '#313D4A',
        'meta-5': '#259AE6',
        'meta-6': '#FFBA00',
        'meta-7': '#FF6766',
        'meta-8': '#F0950C',
        'meta-9': '#E5E7EB',
        'meta-10': '#0FADCF',
      }
    },
    /* colors: {
      primary: "#16423C",
      secondary: "#6A9C89",
      green1: "#C4DAD2",
      green2: "#E9EFEC",
    }, */
  },
  plugins: [],
};
