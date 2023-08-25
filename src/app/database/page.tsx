"use client";
import { useState } from "react";
import Link from 'next/link';



// le fonction export by default peut-être nommé n'importe comment
// du moment que le nom du ficher est nommé page.tsx
export default function Database() {
  // title
  const [is, set_is] = useState(false);
  // input database
  const [name, set_name] = useState('');
  const [family, set_family] = useState('');
  const [age, set_age] = useState(0);
  const [mythic, set_mythic] = useState(false);
  const [select, set_select] = useState(false);

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


  const handleSubmit = async (e:any) => {
    e.preventDefault()
    const body = { name, family, age, mythic, select }
    try {
      const response = await fetch('/api/animal', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      })
      // console.log("body", body);
      if (response.status !== 200) {
        console.log('something went wrong')
        //set an error banner here
      } else {
        resetForm()
        console.log('form submitted successfully !!!')
        //set a success banner here
      }
      console.log("response", response);
      console.log("response.status", response.status);
      //check response, if success is false, dont take them to success page
    } catch (error) {
      console.log('there was an error submitting', error)
    }
    console.log("body", body);
  }
  
  
  const resetForm = () => {
    set_name('')
    set_family('')
    set_age(0)
    set_mythic(false)
    set_select(false)
  }

  return <>
    <Link href="/">{"Menu"}</Link>
    <h1 style= {{cursor : "pointer"}} onClick={func}>{is ? "database" : "DATA BASE"}</h1>
    <form action="#" method="POST" onSubmit={(e) => handleSubmit(e)}>
      <input
        type='text'
        name='name'
        id='name'
        placeholder='nom'
        autoComplete='given-name'
        onChange={(e) => set_name(e.target.value)}
        value={name}
        className='bg-zinc-300 text-gray-200-900 focus:ring-indigo-400 focus:border-indigo-400 border-warm-gray-300 block w-full rounded-md py-3 px-4 shadow-sm'
      />

      <input
        type='text'
        name='family'
        id='family'
        placeholder='famille'
        autoComplete='given-family'
        onChange={(e) => set_family(e.target.value)}
        value={family}
        className='bg-zinc-300 text-gray-200-900 focus:ring-indigo-400 focus:border-indigo-400 border-warm-gray-300 block w-full rounded-md py-3 px-4 shadow-sm'
      />

      <input
        type='number'
        name='age'
        id='age'
        placeholder='age'
        autoComplete='given-age'
        onChange={(e) => set_age(e.target.valueAsNumber)}
        value={age}
        className='bg-zinc-300 text-gray-200-900 focus:ring-indigo-400 focus:border-indigo-400 border-warm-gray-300 block w-full rounded-md py-3 px-4 shadow-sm'
      />
      <button type='submit' style={{width:'100px', height:'20px'}} >envoyer</button>
    </form>
    {/* voir plus tard pour les booléens */}
    {/* <input
      type='boolean'
      name='mythic'
      id='mythic'
      placeholder='légendaire'
      autoComplete='given-mythic'
      onChange={(e) => set_age(e.target.valueAsNumber)}
      value={mythic}
      className='bg-zinc-300 text-gray-200-900 focus:ring-indigo-400 focus:border-indigo-400 border-warm-gray-300 block w-full rounded-md py-3 px-4 shadow-sm'
    /> */}
  </>;
}



