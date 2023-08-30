import {ReactNode} from "react";


import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Menu } from "./menu";


const theme = createTheme({
  palette: {
    mode: 'dark',
  },
});

// https://nextjs.org/docs/pages/building-your-application/routing/pages-and-layouts#layout-pattern
export default function Layout({ children } : {children: ReactNode}) {

  const style = {
    background: "magenta",
    color: "purple",
    fontFamily : "sans-serif",
  }
  return (
    <ThemeProvider theme={theme}>
      <div style={style}>
        <h1>Laboratoire II Next JS</h1>
        <Menu/>
        {children}
      </div>
    </ThemeProvider>
  );
}