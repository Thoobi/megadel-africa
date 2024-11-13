/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      fontSize: {
        13: "1.3rem",
        14: "1.4rem",
        16: "1.6rem",
        18: "1.8rem",
        22: "2.2rem",
        24: "2.4rem",
        32: "3.2rem",
        40: "4rem",
        43: "43rem",
        50: "5rem",
      },
      colors: {
        "custom-blue": {
          100: "#166AE3",
          500: "#16225D",
          900: "#222C3B",
        },

        "custom-red": {
          100: "#ED5B2E",
        },
      },
      height: {
        "screen-1/2": "50vh",
      },
      backgroundColor: {
        "custom-blue": {
          100: "#166AE3",
          200: "#EAF2FD",
          300: "#0A2F63",
          500: "#1A1E73",
        },
      },
      backgroundImage: {
        "custom-radial": "radial-gradient(circle, #0A3A86 60%, #09295D)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
