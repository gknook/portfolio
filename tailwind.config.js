module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        glow: "0px 0px 8px 2px rgba(252, 211, 77, 0.7)",
        "card-glow":
          "-2px -2px 10px 0px rgba(249, 168, 212,0.7), 0px 2px 10px 0px rgba(139, 92, 246, 0.6), 2px -2px 10px 0px rgba(252, 211, 77, 0.7)",
        "card-glow-grow":
          "-8px -8px 40px 0px rgba(249, 168, 212,0.7), 0px 8px 40px 0px rgba(139, 92, 246, 0.6), 8px -8px 40px 0px rgba(252, 211, 77, 0.7)"
        /* in order: x offset, y offset, blur size, spread size, color */
        /* blur size and spread size are optional (they default to 0) */
      }
    }
  },
  variants: {
    extend: {
      backgroundColor: ["even", "odd"],
      borderRadius: ["hover"],
      opacity: ["disabled"],
      cursor: ["disabled"],
      height: ["hover", "focus"],
      width: ["hover", "focus"],
      translate: ["hover", "focus"]
    }
  },
  plugins: []
};
