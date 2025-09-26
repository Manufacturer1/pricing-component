/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cyan: {
          custom: {
            soft: "hsl(174, 77%, 80%)",
            strong: "hsl(174, 86%, 45%)",
          },
        },
        gray: {
          custom: {
            light: "hsl(14, 92%, 95%)",
          },
        },
        red: {
          custom: {
            light: "hsl(15, 100%, 70%)",
          },
        },
        blue: {
          custom: {
            pale: "hsl(226, 100%, 87%)",
            veryPale: "hsl(230, 100%, 99%)",
            emptySlider: "hsl(224, 65%, 95%)",
            toggleBg: "hsl(223, 50%, 87%)",
            graysh: "hsl(225, 20%, 60%)",
            dark: "hsl(227, 35%, 25%)",
          },
        },
      },
    },
  },
  plugins: [],
};
