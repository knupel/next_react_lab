// "use client";
// import { useState } from "react";
// import Link from 'next/link';
import type { ReactElement } from 'react'
// import { PrismaClient } from '@prisma/client'

// APP GLOBAL
import type { NextPageWithLayout } from './_app';
import Layout from '../components/layout';
// APP PARTICULAR
import { AddAnimalForm } from '../components/form';

// import get_static_props from './api/animal';

// CALL DATA
// const prisma = new PrismaClient();












// BUILD FINAL
////////////////
const Page: NextPageWithLayout = () => {
  // console.log(get_static_props());
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





