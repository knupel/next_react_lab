// import React from "react";
import Link from 'next/link';

export default function Page() {
  const style = {
    display : "flex",
    justifyContent : "space-around",
  }
  return <>
    <div style={style}>
      <Link href="/database">{"tableau base de donnée"}</Link>
      <Link href="/test_layout">{"Parent"}</Link>
      <Link href="/test_layout/child_layout">{"Child"}</Link>
    </div>
    <h1>Laboratoire Next JS</h1>
  </>
}