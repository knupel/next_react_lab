import { Metadata } from 'next';
import Link from 'next/link';
 
export const metadata: Metadata = {
  title: "Tête de parent",
};

export default function TestLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const style = {
    background: "yellow"
  }

  return (
    <section style={style}>
      <Link href="/">{"Retour vers le futur"}</Link>
      {children}
    </section>
  );
}