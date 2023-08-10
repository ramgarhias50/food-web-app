module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframe: {
        scaale: {
          '0%,100%': {
            transform: 'rotate(0deg)'
          },
          '50%': { transform: 'rotate(90deg)' }
        }
      }
    },
  },
  plugins: [require("tailwind-gradient-mask-image")],
}