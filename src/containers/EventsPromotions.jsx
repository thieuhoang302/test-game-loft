import {Box, useMediaQuery, useTheme,} from "@mui/material";
import React from "react";

import {section5Content} from "../utils/content";
import {SECTION_HEIGHT} from "../constants";
import {Swiper, SwiperSlide} from "swiper/react";
// import required modules
import {Pagination} from "swiper/modules";

import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

const {BannerBgImage, BannerBgImageMobile, title, subtitle} = section5Content;

const EventsPromotions = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    };
    return (
        <Box sx={{width: "100%", height: SECTION_HEIGHT}}>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={pagination}
                modules={[Pagination]}
                loop={true}
                className="mySwiper"
            >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide>
            </Swiper>
        </Box>)
};

export default EventsPromotions;
