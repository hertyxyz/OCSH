module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        logo: 'Bowlby One SC, Arial B',
        karla: 'karla'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
