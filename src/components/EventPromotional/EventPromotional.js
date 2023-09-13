import React, {useRef} from 'react';
import {Container, Section, TextWrapper} from '../../globalStyles';
import {SwiperSlide} from "swiper/react";
import ShareIcon from "@mui/icons-material/Share";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {Stack,} from "@mui/material";
import {Autoplay, Pagination} from "swiper/modules";
import {EventPromotionalData} from "../../utils/Contents";
import Fab from '@mui/material/Fab';
import {CarouselImage, ImageWrapper, SubText, SwiperStyles, Title} from "./EventPromotionalStyles";
import {data} from "../../utils/CarouselData";
import {COLORS} from "../../constants";

const { title, subtitle, IMAGES } = EventPromotionalData;
const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
};
const EventPromotional = () => {
    return (
        <Section inverse style={{color: COLORS.BLUE}}>
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
                slidesPerView={4}
                spaceBetween={20}
                centeredSlides={true}
                pagination={pagination}
                navigation={false}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, Pagination]}
                className="mySwiper"
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                    },
                    390: {
                        slidesPerView: 1.5,
                    },
                    502: {
                        slidesPerView: 2,
                    },
                    802: {
                        slidesPerView: 3,
                    },
                    992: {
                        slidesPerView: 4,
                    },
                    1200: {
                        slidesPerView: 6,
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
                            <ShareIcon />
                        </Fab>
                        <CarouselImage src={el.image}/>
                        <TextWrapper size="0.9rem" margin="0.7rem">
                            {el.description}
                        </TextWrapper>
                    </ImageWrapper>
                    </SwiperSlide>
                ))}
            </SwiperStyles>
        </Section>
    );
};

export default EventPromotional;
