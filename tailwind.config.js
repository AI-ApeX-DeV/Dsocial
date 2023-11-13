/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: "#000",
        "colours-blue-gray-900": "#101828",
        "gray-900": "#111928",
        "red-300": "#f8b4b4",
        "yellow-300": "#faca15",
        "green-300": "#84e1bc",
        "teal-300": "#7edce2",
        "purple-200": "#dcd7fe",
        white: "#fff",
        plum: "#b483ae",
        "gray-400": "#9ca3af",
        black: "#000",
        "colours-blue-gray-900": "#101828",
        "gray-900": "#111928",
        "red-300": "#f8b4b4",
        "yellow-300": "#faca15",
        "green-300": "#84e1bc",
        "teal-300": "#7edce2",
        "purple-200": "#dcd7fe",
      },
      spacing: {},
      fontFamily: {
        "text-xs-font-medium": "Inter",
      },
      borderRadius: {
        "48xl": "67px",
        "6xs": "7px",
        "8xl": "27px",
        smi: "13px",
        lg: "18px",
        "24xl": "43px",
        "3xs": "10px",
        "130xl": "149px",
        lg: "18px",
        "48xl": "67px",
        "6xs": "7px",
        "8xl": "27px",
        smi: "13px",
        "24xl": "43px",
      },
    },
    fontSize: {
      sm: "0.88rem",
      base: "1rem",
      xs: "0.75rem",
      "3xs": "0.63rem",
      lg: "1.13rem",
      inherit: "inherit",
      
    },
  },
  corePlugins: {
    preflight: false,
  },
};
