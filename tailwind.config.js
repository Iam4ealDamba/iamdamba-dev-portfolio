/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        tw_primary: "#E6C088",
        tw_secondary: "#26304A",
        tw_bg: "#040916",
        tw_text_light: "#EDEDED",
        tw_text_dark: "#0D0D0D",
        tw_accent: "#AFAFAF",
      },
      screens: {
        max_xl: { max: "1280px" },
        max_xl_2: { max: "1185px" },
        max_lg: { max: "1070px" },
        max_md: { max: "820px" },
        max_md_2: { max: "768px" },
        max_sm: { max: "640px" },
      },
    },
  },
  plugins: [],
};
