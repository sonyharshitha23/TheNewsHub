module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // add this to tell Tailwind where your JSX files are
  ],
  theme: {
    extend: {
      colors: {
        primary: "	#1434A4",
      },
    },
    screens: {
      "2xl": { max: "1535px" },

      xl: { max: "1279px" },

      lg: { max: "1023px" },

      sm: { max: "750px" },
    },
  },
  plugins: [],
};
