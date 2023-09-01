// REACT
import { useState } from 'react';
// MUI
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch, { SwitchProps } from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import Button from '@mui/material/Button';

// EMOTION
import styled from '@emotion/styled';

// APP GLOBAL
import theme from '../src/theme';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// FORM CONNEXION / LOGIN / REGISTER
/////////////////////////////////////////////////
/////////////////////////////////////////////////


const ButtonSubmit = styled(Button) ({
  // textTransform: 'none',
  color: theme.palette.secondary.light, 
  background: theme.palette.primary.main,

  '&:hover': {
    transitionDuration: '800ms',
    background: theme.palette.primary.dark, 
  }
});

// https://planetscale.com/blog/nextjs-netlify-planetscale-starter-app#the-planetscale-next-js-starter-app

/////////////////////
// REGISTER
////////////////
function check_register_send(first_name: string, family_name:string, pseudo:string, email: string,  password: string) {
  if(first_name.length < 6) {
    return false;
  }

  if(family_name.length < 6) {
    return false;
  }

  if(email.length < 6) {
    return false;
  }

  if(pseudo.length < 6) {
    return false;
  }

  if(password.length < 6) {
    return false;
  }
  return true;
}



export function RegisterForm() {
  const [first_name, set_first_name] = useState('');
  const [family_name, set_family_name] = useState('');
  const [email, set_email] = useState('');
  const [pseudo, set_pseudo] = useState('');
  const [password, set_password] = useState('');

  const handle_submit = async (e:any) => {
    e.preventDefault();
    console.log("submit your login registration");
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

  const handle_change_pseudo = (event: any) => {
    set_pseudo(event.target.value as string);
  };

  const handle_change_password = (event: any) => {
    set_password(event.target.value as string);
  };


  return <>
    <form action="#" method="POST" onSubmit={(e) => handle_submit(e)}>
      {/* <Container maxWidth="sm"> */}
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
            {check_login_send(pseudo, password) === false ? <ButtonSubmit >au moins six caractères</ButtonSubmit> : <ButtonSubmit type='submit'>validez</ButtonSubmit>} 
          </Box>
        </Box>
      {/* </Container> */}
    </form>
  </>
}




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
        {/* <Container maxWidth="sm"> */}
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
        {/* </Container> */}
      </form>
    </>
}















/////////////////////////////////////////////////
/////////////////////////////////////////////////
// FORM DATABASE
/////////////////////////////////////////////////
/////////////////////////////////////////////////

// FAMILLE DICTIONNAIRE
const family_list = [
  'mamifère',
  'reptile',
  'insecte',
  'poisson',
  'molusque',
  'oiseau',
];

// CHECK
function check_data_before_send(name:string, family: string, age:number) {
  if(name.length < 1) {
    return false;
  }

  if(family.length < 1) {
    return false;
  }

  if(age < 1) {
    return false;
  }
  return true;
}

// SWITCH LEGENDAIRE
const SwitchLegendary = styled((props: SwitchProps) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(() => ({
  width: 42,
  height: 26,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(16px)',
      color: theme.palette.secondary.light,
      '& + .MuiSwitch-track': {
        backgroundColor: 'magenta',
        // backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#65C466',
        opacity: 1,
        border: 0,
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      // color: '#33cf4d',
      border: '6px solid #fff',
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      // color: theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[600],
      color: 'grey'
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: 0.7,
      // opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 22,
    height: 22,
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: '#E9E9EA',
    // backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
    opacity: 1,
    // transition: theme.transitions.create(['background-color'], {
    //   duration: 500,
    // }),
  },
}));



export function AddAnimalForm() {
  // input database
  const [name, set_name] = useState('');
  const [family, set_family] = useState('');
  const [age, set_age] = useState(0);
  const [mythic, set_mythic] = useState(false);

  const handle_change_family = (event: SelectChangeEvent) => {
    set_family(event.target.value as string);
  };

  const handle_change_name = (event: any) => {
    set_name(event.target.value as string);
  };

  const handle_change_age = (event: any) => {
    if(isNaN(event.target.value) === false && event.target.value > 0) {
      set_age(Number(event.target.value));
    }
  };

  const handle_change_mythic = (event: any) => {
    // console.log("mythic",event.target.checked);
    set_mythic(event.target.checked as boolean);
  };

  const handle_submit = async (event:any) => {
    event.preventDefault();
    let select:boolean = false;
    const body = { name, family, age, mythic, select }
    try {
      const response = await fetch('/api/animal', {
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
    set_name('')
    set_family('')
    set_age(0)
    set_mythic(false)
  }

  return (
    <>
      {/* <CssBaseline /> */}
      <form action="#" method="POST" onSubmit={(e) => handle_submit(e)}>
        {/* <Container maxWidth="sm"> */}
          <Box sx={{ p:2, bgcolor: theme.palette.secondary.light, margin: 3, borderRadius: 5, border: 5, borderColor: 'purple'}}>
            {/* title */}
            <Box sx={{p:1, color: theme.palette.primary.main, maxWidth: 190}}>Créez votre créature</Box>
            {/* name */}
            <Box sx={{p:1}}>
              <TextField id="name" label="Nom de la bête" variant="outlined" value={name} onChange={handle_change_name}/>
            </Box>
            {/* family */}
            <Box sx={{p:1, maxWidth: 130}}>
              <FormControl fullWidth>
                <InputLabel id="family_label">Famille</InputLabel>
                <Select labelId="family_label" id="family" label="Famille" value={family} onChange={handle_change_family}>
                  {family_list.map((elem) => (
                    <MenuItem
                    key={elem}
                    value={elem}>
                      {elem}
                    </MenuItem>

                  ))}
                </Select>
              </FormControl>
            </Box>
            {/* age */}
            <Box sx={{p:1}}>
              <TextField id="age" label="Age de la bête" variant="outlined" value={age} onChange={handle_change_age}/>
            </Box>
            {/* légendaire */}
            {/* need FromGroup to put the switch bellow the previous element */}
            <Box sx={{p:1}}>
              <FormGroup>
                <FormControlLabel
                  control={<SwitchLegendary sx={{ m: 1 }} onChange={handle_change_mythic}/>}
                  label={mythic === true ? "Légendaire" : "Ordinaire"}
                />
              </FormGroup>
            </Box>
            {/* submit */}
            <Box sx={{p:1}}>
              {check_data_before_send(name, family, age) === false ? <ButtonSubmit >Ceci n'est pas une bête</ButtonSubmit> : <ButtonSubmit type='submit'>envoyer la bête</ButtonSubmit>}
            </Box>
          </Box>
        {/* </Container> */}
      </form>
    </>
  );
}


