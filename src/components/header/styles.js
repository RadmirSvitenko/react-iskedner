import styled from '@emotion/styled';
import { AppBar, Box, TextField, Toolbar } from '@mui/material';
import theme from '../../theme';

export const HeaderAppBar = styled(AppBar)(() => ({
  width: '100%',
  height: '100px',
  padding: '0px 100px',
}));

export const HeaderToolbar = styled(Toolbar)(() => ({
  width: '100%',
  height: '100px',
  display: 'flex',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  gap: '20px',
}));

export const MenuBox = styled(Box)(() => ({
  padding: '5px 30px 5px 10px',
  display: 'flex',
  alignItems: 'center',
  borderRadius: '1000px',
  backgroundColor: '#000',
  opacity: '0.5',
}));

export const CustomInput = styled(TextField)(() => ({
  backgroundColor: '#fff',
  background: '#fff',
  fontSize: '16px',
  transition: '0.5s',
  borderRadius: '1000px',
  flexGrow: '1',

  '& .MuiOutlinedInput-root': {
    color: '#000',
    padding: '0px 10px',
    letterSpacing: '1.5px',
    borderColor: theme.palette.secondary.main,

    '& fieldset': {
      borderRadius: '1000px',
      transition: '0.5s',
      borderColor: theme.palette.secondary.main,
    },
    '&:hover fieldset': {
      transition: '0.5s',
      borderColor: theme.palette.secondary.main,
    },
    '&.Mui-focused fieldset': {
      transition: '0.5s',
      boxShadow: '0px 5px 14px 6px rgba(251, 0, 0, 0.2)',
    },
  },
}));

export const AuthBox = styled(Box)(() => ({
  display: 'flex',
  cursor: 'pointer',
}));

export const IconBox = styled(Box)(() => ({
  display: 'flex',
  gap: '10px',
}));
