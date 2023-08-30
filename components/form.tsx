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
import styled from '@emotion/styled';
import FormGroup from '@mui/material/FormGroup';
import Button from '@mui/material/Button';



// FAMILLE DICTIONNAIRE
const family_list = [
  'mamifère',
  'reptile',
  'insecte',
  'poisson',
  'molusque',
  'oiseau',
];

// SWITCH LEGENDAIRE
const SwitchLegendary = styled((props: SwitchProps) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(16px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#65C466',
        opacity: 1,
        border: 0,
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#33cf4d',
      border: '6px solid #fff',
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color:
        theme.palette.mode === 'light'
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 22,
    height: 22,
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
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
    console.log("mythic",event.target.checked);
    set_mythic(event.target.checked as boolean);
  };

  const handle_submit = async (e:any) => {
    e.preventDefault()
    const body = { name, family, age, mythic, boolean:false }
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
      <CssBaseline />
      <form action="#" method="POST" onSubmit={(e) => handle_submit(e)}>
        <Container maxWidth="sm">
          <Box sx={{ p:2, bgcolor: 'yellow', margin: 3, borderRadius: 5, border: 5, borderColor: 'purple'}}>
            {/* title */}
            <Box sx={{p:1, maxWidth: 190}}>Créez votre créature</Box>
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
              {check_data_before_send(name, family, age) === false ? <Button >Ceci n'est pas une bête</Button> : <Button type='submit'>envoyer la bête</Button>}
              
            </Box>
          </Box>
        </Container>
      </form>
    </>
  );
}


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