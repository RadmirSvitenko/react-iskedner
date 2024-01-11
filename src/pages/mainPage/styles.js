import styled from '@emotion/styled';
import { Box } from '@mui/material';

export const Container = styled(Box)(() => ({
  marginTop: '120px',
  width: '100%',
  minHeight: '100vh',
  height: 'auto',
  display: 'flex',
  flexDirection: 'column',
  padding: '0px 100px',
}));

export const AdProductBox = styled(Box)(() => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '20px 0px 50px 0px',
}));

export const CategoryProductBox = styled(Box)(() => ({
  padding: '20px 0px',
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  gap: '20px',
}));

export const CategoryProductImage = styled(Box)(() => ({
  width: '170px',
  height: '170px',
  display: 'flex',
  marginBottom: '100px',
  flexDirection: 'column',
  justifyContent: 'space-between',
  backgroundColor: '#fff',
}));

export const HitsProductBox = styled(Box)(() => ({
  width: '100%',
  padding: '20px 0px',
  height: 'auto',
  display: 'flex',
}));

export const NewsBox = styled(Box)(() => ({
  width: '100%',
  display: 'flex',
  margin: '30px 0px',
}));

export const AddressShopsBox = styled(Box)(() => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  boxSizing: 'border-box',
  margin: '20px 0px',
}));

export const AucProductsBox = styled(Box)(() => ({
  width: '100%',
  padding: '20px 0px',
  height: 'auto',
  display: 'flex',
}));
