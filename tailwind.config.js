// tailwind.config.js

module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Ensure this is correctly set to your source files
  ],
  theme: {
    extend: {
      colors: {
        // You can add custom colors if you need specific shades
        "custom-purple": "#F4C8D0", // Example custom color for purple
        "custom-yellow": "#FAF8D8", // Example custom color for yellow
      },
    },
  },
  plugins: [],
};
