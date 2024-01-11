import React from 'react';
import Header from '../../components/header/Header';
import {
  AdProductBox,
  AddressShopsBox,
  AucProductsBox,
  CategoryProductBox,
  CategoryProductImage,
  Container,
  HitsProductBox,
  NewsBox,
} from './styles';
import adIcon1 from '../../images/addIcon1.png';
import adIcon2 from '../../images/addIcon2.png';
import adIcon3 from '../../images/addIcon3.png';
import adIcon4 from '../../images/addIcon4.png';
import adIcon5 from '../../images/addIcon5.png';
import category1 from '../../images/category1.png';
import category2 from '../../images/category2.png';
import category3 from '../../images/category3.png';
import category4 from '../../images/category4.png';
import category5 from '../../images/category5.png';
import category6 from '../../images/category6.png';
import category7 from '../../images/category7.png';
import category8 from '../../images/category8.png';
import category9 from '../../images/category9.png';
import category10 from '../../images/category10.png';
import category11 from '../../images/category11.png';
import category12 from '../../images/category12.png';
import hitProduct from '../../images/hitProduct.png';
import news from '../../images/news.png';
import addressShops from '../../images/addressShops.png';

import { Box, Typography } from '@mui/material';
import ProductCard from '../../components/productCard/ProductCard';
import Footer from '../../components/footer/Footer';

const MainPage = () => {
  const ads = [
    {
      image: adIcon1,
      name: 'скидки',
    },

    {
      image: adIcon2,
      name: 'акция',
    },

    {
      image: adIcon3,
      name: 'распродажа',
    },

    {
      image: adIcon4,
      name: 'подарки',
    },

    {
      image: category1,
      name: 'подарки',
    },

    {
      image: adIcon1,
      name: 'скидки',
    },

    {
      image: adIcon2,
      name: 'акция',
    },

    {
      image: adIcon3,
      name: 'распродажа',
    },

    {
      image: adIcon4,
      name: 'подарки',
    },

    {
      image: adIcon5,
      name: 'подарки',
    },
  ];

  const catagory = [
    {
      image: category1,
      quantity: '3000',
      name: 'Ванны',
    },

    {
      image: category2,
      quantity: '3000',
      name: 'Смесители',
    },

    {
      image: category3,
      quantity: '3000',
      name: 'Вытяжки для кухни',
    },

    {
      image: category4,
      quantity: '3000',
      name: 'Кухонные мойки',
    },

    {
      image: category5,
      quantity: '3000',
      name: 'Другие',
    },

    {
      image: category6,
      quantity: '3000',
      name: 'Унитазы',
    },

    {
      image: category7,
      quantity: '3000',
      name: 'Умывальники',
    },

    {
      image: category8,
      quantity: '3000',
      name: 'Полотенцесушители',
    },

    {
      image: category9,
      quantity: '3000',
      name: 'Водонагреватели',
    },

    {
      image: category10,
      quantity: '3000',
      name: 'Душевые',
    },

    {
      image: category11,
      quantity: '3000',
      name: 'Водонагреватели',
    },

    {
      image: category12,
      quantity: '3000',
      name: 'Водонагреватели',
    },
  ];

  const hitProducts = [
    {
      image: hitProduct,
      title: 'Держатель для лейки BOOU PG605 Держатель для лейки BOOU PG605..',
      price: 1294,
      stock: 'В наличии',
      opt: 'Комплект',
      quantity: 0,
    },

    {
      image: hitProduct,
      title: 'Держатель для лейки BOOU PG605',
      price: 1294,
      stock: 'В наличии',
      opt: 'Комплект',
      quantity: 0,
    },

    {
      image: hitProduct,
      title: 'Держатель для лейки',
      price: 1294,
      stock: 'В наличии',
      opt: 'Комплект',
      quantity: 0,
    },

    {
      image: hitProduct,
      title: 'Держатель для лейки BOOU PG605 ',
      price: 1294,
      stock: 'В наличии',
      opt: 'Комплект',
      quantity: 0,
    },

    {
      image: hitProduct,
      title: 'Держатель для лейки BOOU PG605 ',
      price: 1294,
      stock: 'В наличии',
      opt: 'Комплект',
      quantity: 0,
    },

    {
      image: hitProduct,
      title: 'Держатель для лейки BOOU PG605 ',
      price: 1294,
      stock: 'В наличии',
      opt: 'Комплект',
      quantity: 0,
    },
  ];

  const addressShopList = [addressShops, addressShops, addressShops];

  const aucProducts = [
    {
      image: hitProduct,
      title: 'Держатель для лейки BOOU PG605 Держатель для лейки BOOU PG605..',
      price: 1294,
      stock: 'В наличии',
      opt: 'Комплект',
      quantity: 0,
      discount: 1294,
    },

    {
      image: hitProduct,
      title: 'Держатель для лейки BOOU PG605',
      price: 999999,
      stock: 'В наличии',
      opt: 'Комплект',
      quantity: 0,
      discount: 999999,
    },

    {
      image: hitProduct,
      title: 'Держатель для лейки',
      price: 1294,
      stock: 'В наличии',
      opt: 'Комплект',
      quantity: 0,
      discount: 1294,
    },

    {
      image: hitProduct,
      title: 'Держатель для лейки BOOU PG605 ',
      price: 1294,
      stock: 'В наличии',
      opt: 'Комплект',
      quantity: 0,
      discount: 1294,
    },

    {
      image: hitProduct,
      title: 'Держатель для лейки BOOU PG605 ',
      price: 1294,
      stock: 'В наличии',
      opt: 'Комплект',
      quantity: 0,
      discount: 1294,
    },

    {
      image: hitProduct,
      title: 'Держатель для лейки BOOU PG605 ',
      price: 1294,
      stock: 'В наличии',
      opt: 'Комплект',
      quantity: 0,
      discount: 1294,
    },
  ];

  return (
    <>
      <Container>
        <Header />

        <AdProductBox>
          {ads?.map(({ image, name }) => (
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '10px',
              }}
            >
              <img src={image} alt={name} />
            </Box>
          ))}
        </AdProductBox>

        <h1>Категории</h1>

        <CategoryProductBox>
          {catagory?.map(({ image, quantity, name }) => (
            <CategoryProductImage>
              <Box>
                <Typography>{name}</Typography>
                <Typography>{quantity}</Typography>
              </Box>
              <img src={image} alt={name} />
            </CategoryProductImage>
          ))}
        </CategoryProductBox>

        <h1>Хит продаж</h1>

        <HitsProductBox>
          {hitProducts?.map((product) => (
            <ProductCard product={product} />
          ))}
        </HitsProductBox>

        <h1>Новости</h1>

        <NewsBox>
          <img src={news} alt="новости" width={'100%'} />
        </NewsBox>

        <AucProductsBox>
          {aucProducts?.map((product) => (
            <ProductCard product={product} />
          ))}
        </AucProductsBox>

        <h1>Адреса магазинов</h1>

        <AddressShopsBox>
          {addressShopList?.map((image) => (
            <img width={'32%'} src={image} alt="address" />
          ))}
        </AddressShopsBox>
      </Container>
      <Footer />
    </>
  );
};

export default MainPage;
