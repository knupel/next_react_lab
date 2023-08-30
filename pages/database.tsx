"use client";
import { useState } from "react";
// import Link from 'next/link';
import type { ReactElement } from 'react'
import { PrismaClient } from '@prisma/client'

// APP
import type { NextPageWithLayout } from './_app';
import Layout from '../components/layout';
import { AddAnimalForm } from '../components/form';

// CALL DATA
const prisma = new PrismaClient();

// https://nextjs.org/docs/app/building-your-application/data-fetching/patterns
async function getData() {
  const res = await fetch('https://nextreactlab.netlify.app/api/animal')
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  console.log("res", res);
  return res.json()
}
 
export async function GetData() {
  const data = await getData(); 
  return <>{data}</>
}










// BUILD FINAL
////////////////
const Page: NextPageWithLayout = () => {
  return <>
    <AddAnimalForm/>
    {/* <GetData/> */}
  </>
}


Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default Page;





