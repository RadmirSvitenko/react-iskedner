import styled from '@emotion/styled';
import { Box } from '@mui/material';

export const ProductBox = styled(Box)(() => ({
  width: '200px',
  height: '350px',
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'column',
}));

export const ImageBox = styled(Box)(({ image }) => ({
  width: '180px',
  height: '150px',
  backgroundImage: `url(${image})`,
  backgroundSize: '100% 100%',
}));

export const InfoBox = styled(Box)(() => ({
  width: '200px',
  height: '200px',
  boxSizing: 'border-box',
  padding: '0px 5px',
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'column',
}));

export const CounterBox = styled(Box)(() => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}));
