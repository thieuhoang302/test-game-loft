import React from 'react';
import {Container, Section} from '../../globalStyles';
import {SwiperSlide, useSwiper} from "swiper/react";
import FileDownloadIcon from '@mui/icons-material/FileDownload';
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {Stack,} from "@mui/material";
import {Pagination} from "swiper/modules";
import {ExclusiveData} from "../../utils/Contents";
import Box from "@mui/material/Box";
import Fab from '@mui/material/Fab';
import {CarouselImage, ImageWrapper, SubText, SwiperStyles, Title} from "./ExclusiveStyles";
import {data} from "../../utils/CarouselData";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {COLORS} from "../../constants";

const { title, subtitle, IMAGES } = ExclusiveData;

const SwiperButton = () => {
    const swiper = useSwiper();
    return (
        <Box className="pagination-slide">
            <Box className="bs-icons">
                <ArrowBackIcon
                    onClick={() => swiper.slidePrev()}
                />
                <p className="swiper-paginations"></p>
                <ArrowForwardIcon
                    onClick={() => swiper.slideNext()}
                />
            </Box>
        </Box>
    );
};
const Exclusive = () => {
    return (
        <Section inverse style={{color: COLORS.BLUE, background: COLORS.WHITE}}>
            <Container>
                <Stack sx={{ height: "100%" }} justifyContent="center">
                    <Title
                    >
                        {title}
                    </Title>

                    <SubText
                    >
                        {subtitle}
                    </SubText>
                </Stack>
            </Container>
            <SwiperStyles
                slidesPerView={3}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    el: '.swiper-paginations',
                    type: 'fraction',
                }}
                navigation={false}
                modules={[Pagination]}
                className="mySwiper"
                breakpoints={{
                    390: {
                        slidesPerView: 1.5,
                    },
                    1200: {
                        slidesPerView: 3,
                    },
                }}
            >
                {data.map((el, index) => (
                    <SwiperSlide>
                    <ImageWrapper key={index}>
                        <Fab size="small"  style={{
                            transform: 'scale(0.7)',
                            position: "absolute",
                            top: "20px",
                            right: "20px",
                            zIndex: "1",
                        }}>
                            <FileDownloadIcon />
                        </Fab>
                        <CarouselImage src={el.image}/>
                    </ImageWrapper>
                    </SwiperSlide>
                ))}<SwiperButton />
            </SwiperStyles>
        </Section>
    );
};

export default Exclusive;
