// EMOTION
import styled from "@emotion/styled";
// MUI
import { Button } from "@mui/material";
// APP
import theme from "src/theme";

export const ButtonSubmit = styled(Button) ({
  // textTransform: 'none',
  color: theme.palette.secondary.light, 
  background: theme.palette.primary.main,

  '&:hover': {
    transitionDuration: '800ms',
    background: theme.palette.primary.dark, 
  }
});