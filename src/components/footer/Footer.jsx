import { Box, Typography } from '@mui/material';
import React from 'react';
import { Container, FooterBox } from './styles';
import logo from '../../images/logo.png';
import appStore from '../../images/appStore.png';
import googlePlay from '../../images/googlePlay.png';
import whatsapp from '../../images/whatsapp.png';

const Footer = () => {
  return (
    <Container>
      <FooterBox>
        <img src={logo} alt="logotype" />
        <Typography width={'70%'} color={'#fff'}>
          Первый отечественный бренд Iskender на рынке сантехники от компании
          ОсОО «Стройдом.кг»
        </Typography>

        <Box display={'flex'} gap={'20px'}>
          <img src={appStore} alt="appStore" width={'100px'} height={'40px'} />
          <img
            src={googlePlay}
            alt="googlePlay"
            width={'100px'}
            height={'40px'}
          />
        </Box>
      </FooterBox>

      <FooterBox>
        <Typography variant="h5" color="#fff">
          Адреса
        </Typography>

        <Box>
          <Typography color={'#E0E0E0'}>ЭлитСтрой</Typography>
          <Typography color={'#fff'}>ул. Ден-Сяопина 18/1</Typography>
        </Box>

        <Box>
          <Typography color={'#E0E0E0'}>Баткен</Typography>
          <Typography color={'#fff'}>ул. Льва-Толстого 19</Typography>
        </Box>

        <Box>
          <Typography color={'#E0E0E0'}>ТааТан</Typography>
          <Typography color={'#fff'}>ул. Лермонтова 6</Typography>
        </Box>
      </FooterBox>

      <FooterBox>
        <Typography variant="h5" color="#fff">
          Компания
        </Typography>

        <Box>
          <Typography color={'#E0E0E0'}>Каталог</Typography>
          <Typography color={'#E0E0E0'}>Избранное</Typography>
          <Typography color={'#E0E0E0'}>Личный кабинет</Typography>
        </Box>
      </FooterBox>

      <FooterBox>
        <Typography variant="h5" color="#fff">
          Контакты
        </Typography>

        <Box>
          <Typography color={'#E0E0E0'}>Email:</Typography>
          <Typography color={'#fff'}>iskender.kg@gmail.com</Typography>
        </Box>

        <Box>
          <Typography color={'#E0E0E0'}>Телефон:</Typography>
          <Typography color={'#fff'}>+996 (500) 000-104</Typography>
          <Typography color={'#fff'}>+996 (997) 000-104</Typography>
          <Typography color={'#fff'}>+996 (222) 000-104</Typography>
        </Box>

        <Box>
          <img src={whatsapp} alt="whatsapp" />
        </Box>
      </FooterBox>
    </Container>
  );
};

Footer.propTypes = {};

export default Footer;
