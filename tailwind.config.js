module.exports = {
  mode: 'jit',
  content: [
    './resources/**/*.antlers.html',
    './resources/**/*.blade.php',
    './resources/**/*.vue',
    './content/**/*.md'
  ],
  safelist: [
    { pattern: /grid-cols-(1|2|3|4|5|6|7|8|9)/ }
  ],
  important: false,
  theme: {
    screens: {
        'xxl': {'max': '1440px'},
        '<xxl': {'min': '1439px'},

        'xl': {'max': '1280px'},
        '<xl': {'min': '1279px'},
        // => @media (max-width: 1279px) { ... }

        'lg': {'max': '1024px'},
        '<lg': {'min': '1023px'},
        // => @media (max-width: 1023px) { ... }

        'lg-md': {'max': '890px'},
        '<lg-md': {'min': '889px'},

        'md': {'max': '768px'},
        '<md': {'min': '767px'},
        // => @media (max-width: 767px) { ... }

        'sm': {'max': '640px'},
        '<sm': {'min': '639px'},
        // => @media (max-width: 639px) { ... }

        'xs': {'max': '400px'},
        '<xs': {'min': '400px'},
        // => @media (max-width: 639px) { ... }
    },
    extend: {
        width: {
            container: '90%'
        },
        inset: {
            container: '5%'
        },
        colors: {
            primary: '#827855',
            secondary: '#BCB9A8',
            dark: '#464338',
            light: '#DADBD6',
            'light-gray': '#DADBD6'
        },
        fontFamily: {
            'sans' : ['Josefin Sans', 'sans-serif']
        }
    },
  },
  variants: {},
  plugins: [],
}
