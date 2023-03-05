import { Box, Grid, Typography, useTheme } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import 'swiper/swiper-bundle.min.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import CategoriesCard from '../components/General/CategoriesCard';

SwiperCore.use([Navigation]);

function CategoriesSlider({ slides }) {
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
           <CategoriesCard category={slide} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default CategoriesSlider;
