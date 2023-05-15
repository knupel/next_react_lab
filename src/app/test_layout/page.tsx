// To use Metadata add in the layout

//import { Metadata } from 'next';

// export async function generateMetadata({ params }) {
//   return {
//     title: "Tête de parent",
//   };
// }


"use client";
import { useState } from "react";

// le fonction export by default peut-être nommé n'importe comment
// du moment que le nom du ficher est nommé page.tsx
export default function Test() {
  const [is, set_is] = useState(false);

  function func(e : any) {
    e.preventDefault();
    console.log("is", is);
    console.log("event", e);
    if(is) {
      set_is(false);
    } else {
      set_is(true);
    }
  }

  return <>
    <h1 style= {{cursor : "pointer"}} onClick={func}>{is ? "father layout" : "mother layout"}</h1>
  </>;
}