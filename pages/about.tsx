// REACT
// import * as React from 'react';
import type { ReactElement } from 'react'
// MUI
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
// APP
import Link from '../src/Link';
import ProTip from '../src/ProTip';
import Copyright from '../src/Copyright';
import type { NextPageWithLayout } from './_app'
import Layout from '../components/layout'



function About() {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Quelques trucs à propos de mes tests sur Material UI and NEXT
        </Typography>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}



const Page: NextPageWithLayout = () => {
  return <>
    <About/>
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




