"use client";
import { useState } from "react";
// import Link from 'next/link';
import type { ReactElement } from 'react'

// APP
import type { NextPageWithLayout } from './_app';
import Layout from '../components/layout';
import { AddAnimalForm } from '../components/form';






// BUILD FINAL
////////////////
const Page: NextPageWithLayout = () => {
  return <>
    <AddAnimalForm/>
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





