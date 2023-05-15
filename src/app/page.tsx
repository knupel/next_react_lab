// import React from "react";
import Link from 'next/link';

export default function Page() {
  const style = {
    display : "flex",
    justifyContent : "space-around",
  }
  return <>
    <div style={style}>
      <Link href="/other">{"Alien"}</Link>
      <Link href="/test_layout">{"Parent"}</Link>
      <Link href="/test_layout/child_layout">{"Child"}</Link>
    </div>
    <h1>Salut Knupel. Allez aux suivants !!!</h1>
  </>
}