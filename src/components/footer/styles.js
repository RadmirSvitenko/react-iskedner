import styled from '@emotion/styled';
import { Box } from '@mui/material';

export const Container = styled(Box)(() => ({
  width: '100%',
  minHeight: '500px',
  height: 'auto',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  backgroundColor: '#3186C3',
  marginTop: '50px',
  padding: '80px',
}));

export const FooterBox = styled(Box)(() => ({
  width: '20%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  justifyContent: 'space-around',
  alignItems: 'flex-start',
}));
