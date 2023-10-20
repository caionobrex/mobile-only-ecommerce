'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';

const rooms = [
  {
    id: 1,
    name: 'Dinning Room',
    img: '/rooms/dinningRoom.svg',
  },
  {
    id: 1,
    name: 'Bed Room',
    img: '/rooms/bedRoom.svg',
  },
  {
    id: 1,
    name: 'Office Room',
    img: '/rooms/officeRoom.svg',
  }
]

export const RoomsSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={2.5}
    >
      {rooms.map((category) => (
        <SwiperSlide key={category.id}>
          <div className="relative px-4 py-5 rounded-xl h-52">
            <span className="text-lg">{category.name.split(' ')[0]}</span>
            <br />
            <span className="text-lg">{category.name.split(' ')[1]}</span>
            <Image src={category.img} alt={category.name} objectFit="cover" layout="fill" className="rounded-xl -z-10" />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};