// NEXT
import { Roboto } from 'next/font/google';

// MUI
import { createTheme } from '@mui/material/styles';
// import { red } from '@mui/material/colors';

// magenta "#ff00ff"
// purple  '#6d006d'
// rose  '#ff84ff'

// cyan "#00ffff'

// vert / green #69b300

// jaune "#ffff00'
// orange "#ff9200"
// rouge "#ff0000"
// rouge sang "#990000"

export const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

// Create a theme instance.
const theme = createTheme({
  palette: {
    // magenta power
    primary: {
      light: '#ff84ff', // rose
      main: "#ff00ff", // magenta
      dark: '#6d006d', // purple
      contrastText: '#000' // noir

    },
    // yellow / cyan power
    secondary: {
      light: '#ffff00', // jaune
      main: '#00ffff', // cyan
      contrastText: '#fff' // blanc
    },

    // rouge power
    error: {
      light: '#ff9200', // orange
      main: "#ff0000", // rouge
      dark: '#990000', // rouge sang
      contrastText: '#000' // noir
    },

    info: {
      light: "#c6c6c6", // gris clair
      main: "#818181", // gris neutre
      dark: "#464646", // gris foncé
      contrastText: '#000' // noir
    },

    success: {
      main: "#69b300", // vert
      // light: 
      // dark: 
      // contrastText: 
    },

    warning: {
      main: '#990000', // rouge sang
      // light: 
      // dark: 
      // contrastText: 
    }
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
});

export default theme;
