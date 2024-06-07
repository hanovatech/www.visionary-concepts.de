module.exports = {
  content: ["content/**/*.md", "layouts/**/*.html"],
  theme: {
    extends: {
      colors: {
        primary: "#86c33a"
      }
    }
  },
  variants: {},
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
  blocklist: [
    "collapse"
  ]
}
