import { Box, Grid, Typography, useTheme } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import 'swiper/swiper-bundle.min.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import ChannelCard from '../components/General/ChannelCard';

SwiperCore.use([Navigation]);

function ChannelSlider({ slides }) {
  const theme = useTheme();
  const swiperParams = {
    navigation: true,
    loop: true,
    spaceBetween: 10,
    slidesPerView: theme.breakpoints.values.sm === 600 ? 2 : 4,
  };
  

  return (
    <Swiper {...swiperParams}>
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
           <ChannelCard channel={slide} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default ChannelSlider;
