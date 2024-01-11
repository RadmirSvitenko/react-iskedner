import React from 'react';
import {
  AuthBox,
  CustomInput,
  HeaderAppBar,
  HeaderToolbar,
  IconBox,
  MenuBox,
} from './styles';
import logo from '../../images/logo.png';
import headerAuth from '../../images/headerAuth.png';
import headerCart from '../../images/headerCart.png';
import { Box, IconButton } from '@mui/material';
import { MenuRounded } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <HeaderAppBar color="secondary">
      <HeaderToolbar>
        <img src={logo} alt="logotype" />

        <MenuBox>
          <IconButton
            sx={{
              color: '#fff',
            }}
          >
            <MenuRounded />
          </IconButton>
          Каталог
        </MenuBox>

        <CustomInput placeholder="Поиск" />

        <Box>
          <span
            style={{
              fontSize: '12px',
            }}
          >
            Добро пожаловать
          </span>
          <AuthBox>
            <Box
              sx={{
                '&:hover': {
                  textDecoration: 'underline',
                },
              }}
              onClick={() => navigate('/auth')}
            >
              Вход
            </Box>{' '}
            /
            <Box
              sx={{
                '&:hover': {
                  textDecoration: 'underline',
                },
              }}
              onClick={() => navigate('/register')}
            >
              Регистрация
            </Box>
          </AuthBox>
        </Box>

        <IconBox>
          <img
            src={headerAuth}
            alt="Auth"
            width={'30px'}
            height={'30px'}
            style={{
              borderRadius: '50%',
            }}
          />
          <img
            src={headerCart}
            alt="Cart"
            width={'30px'}
            height={'30px'}
            style={{
              borderRadius: '50%',
            }}
          />
        </IconBox>
      </HeaderToolbar>
    </HeaderAppBar>
  );
};

export default Header;
