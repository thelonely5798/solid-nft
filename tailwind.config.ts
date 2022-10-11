module.exports = {
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      screens: {
        '3xl': '1500px',
        '4xl': '1600px',
        '5xl': '1700px',
        '6xl': '1800px',
      },
      colors: {
        'primary-green': '#34D178',
        'dark-blue': '#1A1F25',
      },
    },
  },
  variants: {},
  plugins: [
    require('flowbite/plugin')
  ],
  content: [
    "./node_modules/flowbite/**/*.js"
]
}