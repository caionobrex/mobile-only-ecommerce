'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';

const categories = [
  {
    id: 1,
    name: 'Chair',
    img: '/categories/chair.svg',
  },
  {
    id: 1,
    name: 'Sofa',
    img: '/categories/sofa.svg',
  },
  {
    id: 1,
    name: 'Desk',
    img: '/categories/desk.svg',
  }
]

export const CategoriesSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={2.7}
    >
      {categories.map((category) => (
        <SwiperSlide key={category.id}>
          <div className="relative px-4 py-5 rounded-xl">
            <span>{category.name}</span>
            <Image src={category.img} alt={category.name} objectFit="cover" layout="fill" className="rounded-xl -z-10" />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};