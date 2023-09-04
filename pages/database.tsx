// "use client";
// import { useState } from "react";
// import Link from 'next/link';
import type { ReactElement } from 'react'
// import { PrismaClient } from '@prisma/client'

// APP GLOBAL
import type { NextPageWithLayout } from './_app';
// APP PARTICULAR
import { Layout, AddAnimalForm } from '../components/hc';





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





