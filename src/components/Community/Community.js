import React from 'react';
import {Container, Section, TextWrapper} from '../../globalStyles';
import {SwiperSlide, useSwiper} from "swiper/react";
import SearchIcon from '@mui/icons-material/Search';
import ShareIcon from "@mui/icons-material/Share";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import {Avatar, Grid, IconButton, InputAdornment, Stack, TextField, Typography,} from "@mui/material";
import {Navigation, Pagination} from "swiper/modules";
import {CommunityData} from "../../utils/Contents";
import Box from "@mui/material/Box";
import Fab from '@mui/material/Fab';
import {CarouselImage, ImageWrapper, SubText, SwiperStyles, Title} from "./CommunityStyles";
import {data} from "../../utils/CarouselData";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {COLORS, STYLES_LABEL} from "../../constants";

const { title, subtitle, IMAGES } = CommunityData;

const stylesSearch = {
    searchDeskstop: {
        marginLeft: "24px",
        '@media (max-width: 440px)': {
          display: "none"
        }
    },
    searchMobile: {
        display: "none",
        '@media (max-width: 440px)': {
            display: "block",
            width: "inherit",
            marginTop: "10px"
        }
    }
}
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
const Community = () => {
    return (
        <Section inverse smPadding="40px 0" style={{color: COLORS.BLUE, background: COLORS.WHITE}}>
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
                <SwiperStyles
                    slidesPerView={6}
                    spaceBetween={30}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    {IMAGES.map((img) => (
                        <SwiperSlide>
                            <Avatar
                                alt="Remy Sharp"
                                src={img}
                                sx={{ width: 48, height: 48 }}
                            />
                            <Typography>Short Title</Typography>
                        </SwiperSlide>
                    ))}
                </SwiperStyles>
                <Grid container spacing={2} style={{ margin: "20px 0" }}>
                    <Grid item xs={4} style={{ placeSelf: "center", padding: 0}}>
                        <Typography
                            variant="h5"
                            sx={{fontWeight: 600}}
                        >
                            All Posts
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        xs={8}
                        style={{ display: "flex", justifyContent: "flex-end", padding: 0 }}
                    >
                        <TwitterIcon sx={{fontSize: "40px", marginRight: "24px"}}/>
                        <InstagramIcon sx={{fontSize: "40px", marginRight: "24px"}}/>
                        <FacebookIcon sx={{fontSize: "40px"}}/>
                        <TextField
                            type="search"
                            id="search"
                            label="Search"
                            sx={[STYLES_LABEL, stylesSearch.searchDeskstop]}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment>
                                        <IconButton>
                                            <SearchIcon />
                                        </IconButton>
                                    </InputAdornment>
                                )
                            }}
                        />
                    </Grid>
                    <TextField
                        type="search"
                        id="search"
                        label="Search"
                        fullWidth
                        sx={[STYLES_LABEL, stylesSearch.searchMobile]}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment>
                                    <IconButton>
                                        <SearchIcon />
                                    </IconButton>
                                </InputAdornment>
                            )
                        }}
                    />
                </Grid>
            </Container>
            <SwiperStyles
                slidesPerView={6}
                spaceBetween={20}
                centeredSlides={true}
                pagination={{
                    el: '.swiper-paginations',
                    type: 'fraction',
                }}
                navigation={false}
                modules={[Pagination]}
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
                ))}<SwiperButton />
            </SwiperStyles>
        </Section>
    );
};

export default Community;
