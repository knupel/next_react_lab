// REACT
import type { ReactElement } from 'react';
import { useState } from 'react';
// MUI
import { Box, Button, Container } from '@mui/material';
// EMOTION
import styled from '@emotion/styled';
// APP GLOBAL
import type { NextPageWithLayout } from './_app';
import theme from '../src/theme';
// APP PARTICULAR
import { Layout, LoginForm, RegisterForm } from '../components/hc';



const ButtonConnect = styled(Button) ({
  // textTransform: 'none',
  background: theme.palette.secondary.light, 
  color: theme.palette.primary.main,
  '&:hover': {
    transitionDuration: '800ms',
    color: theme.palette.secondary.light, 
    background: theme.palette.primary.dark,
  }
});

function Login() {
  const [login, set_login] = useState(true);
  const handle_change_log = (event: any) => {
    event.preventDefault();
    login === true ? set_login(false) : set_login(true);
    console.log("login", login);
    // set_name(event.target.value as string);
  };

  return <>
    <Container maxWidth="sm"> 
      {login === true ? <LoginForm/> : <RegisterForm/>}
      {/* manage account */}
        <Box sx={{p:1, margin:3}}>
          <ButtonConnect onClick={handle_change_log}>{login === true ? "créer un compte" : "se connecter"}</ButtonConnect>
        </Box>
    </Container>
  </>;
}

function Logout() {
  return (
    <>Logout</>
  );
}

function Connexion() {
  const [user, set_user] = useState(null);
  return (<>
    {user === null ? <Login/> : <Logout/>}
    </>
  );
}

const Page: NextPageWithLayout = () => {
  return <>
    <Connexion/>
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