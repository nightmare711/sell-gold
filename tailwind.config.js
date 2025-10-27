/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#fcb51f",
        secondary: "#141618",
        tertiary: "#777777",
        overlay: "rgba(20, 22, 24, 0.5)", // Note: there's also another value, see css
        link: "#141618",
        'link-hover': "#9d9d9d",
        body: "#9e9999",
        heading: "#141618",
        border: "#e4e4e4",

        error: "#D8000C",
        success: "#4F8A10",
        warning: "#9F6000",
        info: "#31708f",

        // Blog UI related (extra semantic names, technically not colors)
        'blog-border-radius': "0px",
        'blog-gutter-width': "30px",
      }
    },
  },
  plugins: [],
};
