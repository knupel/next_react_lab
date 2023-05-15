"use client";
import { useState } from "react";
import Link from 'next/link';
import Image from 'next/image';

// le fonction export by default peut-être nommé n'importe comment
// du moment que le nom du ficher est nommé page.tsx
export default function Other() {
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
    <Link href="/">{"Retour vers le futur"}</Link>
    <h1 style= {{cursor : "pointer"}} onClick={func}>{is ? "other" : "OTHER"}</h1>
    <Image
    src="/__atome_1.jpg"
    // src="/05_profil.jpg"
      // src="/../../media/05_profil.jpg"
      // src="/../../media/05_profil.png"
      // src="/media/05_profil.png"
      // src="/05_profil.png"
      width={500}
      height={500}
      alt="Fiche Knupel"
    />
  </>;
}