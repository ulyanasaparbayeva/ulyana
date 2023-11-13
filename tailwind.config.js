module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/components/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      container: {
        center: true,
        screens: {
          sm: '450px',
          md: '768px',
          lg: '1024px',
          xl: '1264px',
        },
        padding: {
          DEFAULT: "1rem",
          sm: "1rem",
          lg: "1rem",
          xl: "1rem",
        },
      },
      colors: {
        "primary": "#B9B4C7",
        "primary-2":"#4C1D95",
        "secondary": "#F0E9FC",
        "secondary-2": "#E3E4E6",
        "secondary-3":"#3f3d56"
      },


    },

  },
};
