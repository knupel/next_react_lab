// LABORATOIRE NEXT MUI
// 2023-2023
// V 0.0.2

// REACT
// import * as React from 'react';
import type { ReactElement } from 'react'
// APP
import Link from '../src/Link';
import ProTip from '../src/ProTip';
import Copyright from '../src/Copyright';
import type { NextPageWithLayout } from './_app'
import Layout from '../components/layout'

// https://nextjs.org/docs/pages/building-your-application/routing/pages-and-layouts#layout-pattern

// MUI
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



const Page: NextPageWithLayout = () => {
  return <>
    {/* your code inside the main layout */}
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

