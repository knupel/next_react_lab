import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: "Tête d'enfant",
};

// le fonction export by default peut-être nommé n'importe comment
// du moment que le nom du ficher est nommé page.tsx
export default function TestChild() {
  // ou cannont use the state of the 
  // return <h1>{is ? "sister layout" : "brother layout"}</h1>;
  return <h1>child layout</h1>;
}