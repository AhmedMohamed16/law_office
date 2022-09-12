module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Playfair Display',
      body: 'Open Sans',
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1170px',
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4E302A',
          darker: '#292726',
          hover: '#56A51B',
        },

        accent: {
          DEFAULT: '#1B6DA5',
          hover: '#1B9BA5',
        },

        gray: '#766F66',
        white: '#ffffff',
      },
      spacing: {
        54: '54px',
        800: '800px',
      },

      content: {
        quote: 'url("assets/img/quoteMark.png")',
      },
    },
  },
  plugins: [],
};
