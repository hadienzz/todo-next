'use client'

import { Swiper, SwiperSlide, useSwiper, useSwiperSlide } from 'swiper/react';
import 'swiper/css';
import Card from '../../components/UI/Card';
import { CONTENTS } from '../../data';
import { useRef } from 'react';


const SwiperButtonNext = ({ children }) => {
  const swiper = useSwiper()
  return (
    <button onClick={() => swiper.slideNext()} className='px-6 py-3 bg-[#8875FF] rounded-[4px]' >{children}</button>
  )
}

const SwiperButtonPrev = ({ children }) => {
  const swiper = useSwiper()
  return (
    <button onClick={() => swiper.slidePrev()} className='text-button'>{children}</button>
  )
}

const Home = () => {

  return (
    <>
      <main className='h-screen bg-[#121212] px-6 text-[white] pt-4'>
        <Swiper >
          {CONTENTS.map((content) => <SwiperSlide key={content.id}><Card {...content} /></SwiperSlide>)}

          <div className='flex justify-between md:justify-around md:pt-12 pt-[107px]'>
            <div>
              <SwiperButtonPrev>Back</SwiperButtonPrev>
            </div>
            <div>
              <SwiperButtonNext>Next</SwiperButtonNext>
            </div>
          </div>
        </Swiper>
      </main>

    </>
  );
};

export default Home;
