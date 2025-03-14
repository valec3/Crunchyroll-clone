'use client';
import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import './hero.css';
import { dataHero } from '@/constants/hero.data';
import ThumbsSlider from './ThumbsSlider';
import InfoSerie from './InfoSerie';
function Hero() {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const [currentIndexSlide, setCurrentIndexSlide] = useState(0);
    // const onAutoplayTimeLeft = (
    //     swiper: any,
    //     time: number,
    //     progress: number,
    // ) => {
    //     if (progressCircle.current) {
    //         progressCircle.current.style.setProperty(
    //             '--progress',
    //             `${1 - progress}`,
    //         );
    //     }
    //     if (progressContent.current) {
    //         progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    //     }
    // };
    console.log(currentIndexSlide);
    return (
        <div className="relative">
            <Swiper
                onSlideChange={(swiper) => {
                    setCurrentIndexSlide(swiper.activeIndex);
                }}
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                // onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper z-10"
            >
                {dataHero.map((item, index) => (
                    <SwiperSlide key={item.id}>
                        <img
                            src={item.image}
                            alt=""
                            className="object-cover aspect-video z-10"
                        />
                        <InfoSerie sinopsis={item.sinopsis} />
                    </SwiperSlide>
                ))}
                <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                </div>
            </Swiper>
            <ThumbsSlider currentIdx={currentIndexSlide} />
        </div>
    );
}

export default Hero;
