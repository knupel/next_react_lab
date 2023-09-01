// MUI
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
// APP GLOBAL
import theme from '../src/theme';

const menu = [['Accueil', '/'], ['à propos', '/about'], ['Database', '/database'], ['compte', '/connect']];


const ButtonMenu = styled(Button) ({
  // textTransform: 'none',
  background: 'yellow', color: 'magenta', display: 'block',
  '&:hover': {
    transitionDuration: '800ms',
    color: theme.palette.primary.dark, 
    background: theme.palette.secondary.light,
  }
});

/**
 * see default value MUI : https://mui.com/material-ui/customization/default-theme/?expand-path=$.breakpoints.values
keys: Array(5)
    0: "xs"
    1: "sm"
    2: "md"
    3: "lg"
    4: "xl"
 */

export function Menu() {
  return <>
    <AppBar position="static" sx={{background:'yellow'}}>
      <Container maxWidth="xl">
        <Box sx={{ flexGrow: 1, display: {sm: 'flex' } }}>
        {/* <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}> */}

                  {menu.map((elem) => (
                    <ButtonMenu
                      key={elem[0]}
                      href={elem[1]}
                      sx={{ my: 1 }}
                    >
                      {elem[0]}
                    </ButtonMenu>
                  ))}
        </Box>
      </Container>
    </AppBar>
  </>
}