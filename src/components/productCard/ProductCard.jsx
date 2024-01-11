import { CounterBox, ImageBox, InfoBox, ProductBox } from './styles';
import { Box, IconButton, Typography } from '@mui/material';
import { AddRounded, RemoveRounded } from '@mui/icons-material';

const ProductCard = ({ product }) => {
  const handleChangeCount = (value) => {
    if (value === '+') {
      return product.quantity + 1;
    }

    if (value === '-' && value > 0) {
      return product.quantity - 1;
    }
  };

  return (
    <ProductBox>
      <ImageBox image={product.image} />
      <InfoBox>
        <Typography padding={'10px 0px'} height={'80px'} fontSize={'14px'}>
          {product.title}
        </Typography>

        <Box display={'flex'} gap={'10px'}>
          <Typography fontWeight={'700'}>{product.price} c</Typography>
          {product.discount ? (
            <Typography
              sx={{ textDecoration: 'line-through' }}
              fontSize={'12px'}
              color={'red'}
            >
              {product.discount}
            </Typography>
          ) : (
            <></>
          )}
        </Box>

        <Typography color={'#73CB5E'}>{product.stock}</Typography>
        <Typography fontSize={'12px'} color={'blue'}>
          {product.opt}
        </Typography>
      </InfoBox>
      <CounterBox>
        <IconButton onClick={() => handleChangeCount('-')}>
          <RemoveRounded color="#000" />
        </IconButton>

        <Typography>{product.quantity}</Typography>

        <IconButton onClick={() => handleChangeCount('+')}>
          <AddRounded color="#000" />
        </IconButton>
      </CounterBox>
    </ProductBox>
  );
};

export default ProductCard;
