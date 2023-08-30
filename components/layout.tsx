// import React from "react";



import { Menu } from "./menu";



// https://nextjs.org/docs/pages/building-your-application/routing/pages-and-layouts#layout-pattern
export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const style = {
    background: "magenta",
    color: "purple",
    fontFamily : "sans-serif",
  }
  return (
    <div style={style}>
      <h1>Laboratoire II Next JS</h1>
      <Menu/>
      {children}
    </div>
  );
}