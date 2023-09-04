// REACT
import { useState } from 'react';
// MUI
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';


// APP GLOBAL
import theme from '../../src/theme';
import { ButtonSubmit } from './../hc';




// https://planetscale.com/blog/nextjs-netlify-planetscale-starter-app#the-planetscale-next-js-starter-app

/////////////////////
// REGISTER
////////////////
function check_register_send(first_name: string, family_name:string, role:string, pseudo:string, email: string,  password: string) {
  if(first_name.length < 6) {
    return false;
  }

  if(family_name.length < 6) {
    return false;
  }

  if(email.length < 6) {
    return false;
  }

  if(role.length < 1) {
    role = role_list[0];
  }

  if(pseudo.length < 6) {
    return false;
  }

  if(password.length < 6) {
    return false;
  }
  return true;
}


// FAMILLE DICTIONNAIRE
const role_list = [
  'visiteur',
  'utilisateur',
  'administrateur',
];


export function RegisterForm() {
  const [first_name, set_first_name] = useState('');
  const [family_name, set_family_name] = useState('');
  const [email, set_email] = useState('');
  const [role, set_role] = useState('');
  const [pseudo, set_pseudo] = useState('');
  const [password, set_password] = useState('');

  const handle_submit = async (event:any) => {
    event.preventDefault();
    const body = { first_name, family_name, email, pseudo, password, role }
    try {
      const response = await fetch('/api/auth/user', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      })
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
    set_first_name('');
    set_family_name('');
    set_email('');
    set_pseudo('');
    set_password('');
    set_role('');
  }


  const handle_change_first_name = (event: any) => {
    set_first_name(event.target.value as string);
  };

  const handle_change_family_name = (event: any) => {
    set_family_name(event.target.value as string);
  };

  const handle_change_email = (event: any) => {
    set_email(event.target.value as string);
  };

  const handle_change_role = (event: any) => {
    set_role(event.target.value as string);
  };

  const handle_change_pseudo = (event: any) => {
    set_pseudo(event.target.value as string);
  };

  const handle_change_password = (event: any) => {
    set_password(event.target.value as string);
  };


  return <>
    <form action="#" method="POST" onSubmit={(e) => handle_submit(e)}>
      <Box sx={{ p:2, bgcolor: theme.palette.secondary.light, margin: 3, borderRadius: 5, border: 5, borderColor: 'purple'}}>
        {/* title */}
        <Box sx={{p:1, maxWidth: 190, color: theme.palette.primary.main}}>Créez votre compte</Box>
        {/* first name */}
        <Box sx={{p:1}}>
          <TextField id="firstname" label="Prénom" variant="outlined" value={first_name} onChange={handle_change_first_name}/>
        </Box>
        {/* family name */}
        <Box sx={{p:1}}>
          <TextField id="familyname" label="Nom" variant="outlined" value={family_name} onChange={handle_change_family_name}/>
        </Box>
        {/* email */}
        <Box sx={{p:1}}>
          <TextField id="email" label="Courriel" variant="outlined" value={email} onChange={handle_change_email}/>
        </Box>
        {/* role */}
        <Box sx={{p:1, maxWidth: 190}}>
            <FormControl fullWidth>
              <InputLabel id="role_label">Rôle</InputLabel>
              <Select labelId="role_label" id="role" label="Rôle" value={role} onChange={handle_change_role}>
                {role_list.map((elem) => (
                  <MenuItem
                  key={elem}
                  value={elem}>
                    {elem}
                  </MenuItem>

                ))}
              </Select>
            </FormControl>
          </Box>
        {/* pseudo */}
        <Box sx={{p:1}}>
          <TextField id="name" label="Pseudo" variant="outlined" value={pseudo} onChange={handle_change_pseudo}/>
        </Box>
        {/* password */}
        <Box sx={{p:1}}>
          <TextField id="password" label="Mot de passe" variant="outlined" value={password} onChange={handle_change_password}/>
        </Box>
        {/* submit */}
        <Box sx={{p:1}}>
          {check_register_send(first_name, family_name, role, pseudo, email,  password) === false ? <ButtonSubmit >au moins six caractères</ButtonSubmit> : <ButtonSubmit type='submit'>validez</ButtonSubmit>} 
        </Box>
      </Box>
    </form>
  </>
}


