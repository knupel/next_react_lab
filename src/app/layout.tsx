// import React from "react";

export default function RootLayout({
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
    <html lang="en">
      <body style={style}>{children}</body>
    </html>
  );
}