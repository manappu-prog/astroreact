import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/swiper.min.css'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

import userTest from '../../resources/Images/usertest.png'


const VideoSwiper = ({ videoData }) => {
    return (
        <>
            <div className='user-test'>
                <img src={userTest}></img>
            </div>
            <Swiper
                className='swiper'
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {
                    videoData.map((video) => <SwiperSlide><img src={video.image}></img></SwiperSlide>)
                }

            </Swiper>
        </>
    )
}

export default VideoSwiper;