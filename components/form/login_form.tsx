// REACT
import { useState } from 'react';
// MUI
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


// APP GLOBAL
import theme from '../../src/theme';
import { ButtonSubmit } from './../hc';


/////////////////////
// LOGIN
////////////////
function check_login_send(pseudo:string, password: string) {
  if(pseudo.length < 6) {
    return false;
  }
  if(password.length < 6) {
    return false;
  }
  return true;
}



export function LoginForm() {
  const [pseudo, set_pseudo] = useState('');
  const [password, set_password] = useState('');

  const handle_submit = async (e:any) => {
    e.preventDefault();
    console.log("submit your login registration");
  }

  const handle_change_pseudo = (event: any) => {
    set_pseudo(event.target.value as string);
  };

  const handle_change_password = (event: any) => {
    set_password(event.target.value as string);
  };


  return <>
    {/* <CssBaseline /> */}
      <form action="#" method="POST" onSubmit={(e) => handle_submit(e)}>
        <Box sx={{ p:2, bgcolor: theme.palette.secondary.light, margin: 3, borderRadius: 5, border: 5, borderColor: 'purple'}}>
          {/* title */}
          <Box sx={{p:1, maxWidth: 190, color: theme.palette.primary.main}}>Entrez votre pseudo et mot de passe</Box>
          {/* pseudo */}
          <Box sx={{p:1}}>
            <TextField id="pseuod" label="Pseudo" variant="outlined" value={pseudo} onChange={handle_change_pseudo}/>
          </Box>
          {/* password */}
          <Box sx={{p:1}}>
            <TextField id="password" label="Mot de passe" variant="outlined" value={password} onChange={handle_change_password}/>
          </Box>
          {/* submit */}
          <Box sx={{p:1}}>
            {check_login_send(pseudo, password) === false ? <ButtonSubmit >au moins six caractères</ButtonSubmit> : <ButtonSubmit type='submit'>validez</ButtonSubmit>} 
          </Box>
        </Box>
      </form>
    </>
}












