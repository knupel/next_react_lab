// REACT
import {ReactNode} from "react";

// NEXT

// MUI

// APP GLOBAL
import theme from '../src/theme';

// APP LOCAL
import { Menu } from "./menu";


// https://nextjs.org/docs/pages/building-your-application/routing/pages-and-layouts#layout-pattern
export default function Layout({ children } : {children: ReactNode}) {

  const style = {
    background: theme.palette.primary.main,
    color: "purple",
    fontFamily : "sans-serif",
  }
  return (
    <>
    {/* <div style={style}> */}
      <h1>Laboratoire II Next JS</h1>
      <Menu/>
      {children}
    {/* </div> */}
    </>
  );
}