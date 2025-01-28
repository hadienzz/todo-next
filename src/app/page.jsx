'use client'
import { Swiper, SwiperSlide, useSwiper, } from 'swiper/react';
import Card from '../../components/UI/Card';
import { CONTENTS } from '../../data';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import 'swiper/css';

const App = () => {
    const router = useRouter()
    const [slideIsEnd, setSlideIsEnd] = useState(false)

    const SwiperButtonPrev = () => {
        const swiper = useSwiper()
        return (
            <button onClick={() => swiper.slidePrev()} className='text-button'>Back</button>
        )
    }

    const SwiperButtonNext = () => {
        const swiper = useSwiper()
        return (
            <button onClick={() => slideIsEnd ? router.push('/get-started') : swiper.slideNext()} className='px-6 py-3 bg-[#8875FF] rounded-[4px]'>{!slideIsEnd ? 'Next' : 'Get Started'}</button>
        )
    }

    return (
        <>
            <main className='h-screen bg-[#121212] px-6 text-[white] pt-4'>
                <Swiper onSlideChange={(swiper) => setSlideIsEnd(swiper.isEnd)} >
                    {CONTENTS.map((content) => (
                        <SwiperSlide key={content.id} pagination={{ clickable: true }}>
                            <Card {...content} />

                        </SwiperSlide>))}

                    <div className='flex justify-between md:justify-around md:pt-12 pt-[107px]'>
                        <SwiperButtonPrev />
                        <SwiperButtonNext />
                    </div>

                </Swiper>
            </main >

        </>
    );
};

export default App;