module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      // Custom named colors
      backgroundImage: {
        'black-gradient': 'linear-gradient(280deg, rgba(45, 45, 45, 0.80) 0%, rgba(0, 0, 0, 0.85) 100%)',
      },
      colors: {
        customGreen: '#5B9132',
        mainBlack: '#171515',
        txt1:'#FFF',
        btn:'#171515',
      },
      backgroundColor:{
        'form': 'var(--grey-popup-base, #383838)',
      },
      //font-family
      fontFamily: {
        'Open Sans': ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
