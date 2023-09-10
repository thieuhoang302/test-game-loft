import React from "react";
// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css"

// import required modules
import {Navigation, Pagination} from "swiper/modules";
import {
    Avatar,
    Box,
    Card,
    CardContent,
    CardHeader,
    CardMedia,
    Container,
    Grid,
    IconButton,
    Stack,
    TextField,
    Typography
} from "@mui/material";
import {section4Content} from "../utils/content";
import Title from "../components/Title";
import {COLORS, SECTION_HEIGHT} from "../constants";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const {
    title, subtitle,
    IMAGES
} = section4Content;


export default function Community() {

    return (
        <Box sx={{width: "100%", backgroundColor: COLORS.BLUE, height: SECTION_HEIGHT}}>
            <Container
            >
                <Stack sx={{height: "100%"}} justifyContent="center">
                    <Title
                        variant={{xs: "h3", sm: "h2", md: "h2"}}
                        sx={{letterSpacing: "0.02em", mb: 1}}
                    >
                        {title}
                    </Title>

                    <Title
                        variant={{xs: "h4", sm: "h3", md: "h5"}}
                        sx={{fontWeight: 100, letterSpacing: "0.05em", mb: 2}}
                    >
                        {subtitle}
                    </Title>
                </Stack>
                <Swiper
                    slidesPerView={6}
                    spaceBetween={30}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    {IMAGES.map((img) => (<SwiperSlide> <Avatar
                            alt="Remy Sharp"
                            src={img}
                            sx={{width: 48, height: 48}}
                        />
                            <Typography>haha</Typography>
                        </SwiperSlide>)
                    )}
                </Swiper>
                <Grid container spacing={2}>
                    <Grid item xs={6} style={{placeSelf: "center"}}>
                        <Title
                            variant={{xs: "h4", sm: "h3", md: "h5"}}
                            sx={{fontWeight: 100, letterSpacing: "0.05em", mb: 2}}
                        >
                            All Posts
                        </Title>
                    </Grid>
                    <Grid item xs={6} style={{display: 'flex', justifyContent: 'flex-end'}}>
                        <TwitterIcon/>
                        <InstagramIcon/>
                        <FacebookIcon/>
                        <TextField type="search" id="search" label="Search" sx={{width: 600}}/>
                    </Grid>
                </Grid>
            </Container>
            <Swiper
                slidesPerView={6}
                spaceBetween={30}
                centeredSlides={true}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
                height={600}
            >
                {IMAGES.map((img, index) => (<SwiperSlide>
                        <Card sx={{maxWidth: 345}}>
                            <CardHeader
                                avatar={
                                    <Avatar sx={{bgcolor: "red"}} aria-label="recipe">
                                        R
                                    </Avatar>
                                }
                                action={
                                    <IconButton aria-label="settings">
                                        <MoreVertIcon/>
                                    </IconButton>
                                }
                                title="Shrimp and Chorizo Paella"
                                subheader="September 14, 2016"
                            />
                            <CardMedia
                                component="img"
                                height="194"
                                image="../../..assets/image.png"
                                alt="Paella dish"
                            />
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                    This impressive paella is a perfect party dish and a fun meal to cook
                                    together with your guests. Add 1 cup of frozen peas along with the mussels,
                                    if you like.
                                </Typography>
                            </CardContent>
                        </Card>
                        <Typography>haha</Typography>
                    </SwiperSlide>)
                )}
            </Swiper>

        </Box>
    );
}
