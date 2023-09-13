import React from 'react';
import {Container} from '../../globalStyles';
import {HeroSection, Img, ImgWrapper, StackCustom, Text, TextSub} from './HotspotBannerStyles';
import {Box, Button, Grid, Rating, Stack} from "@mui/material";
import {COLORS} from "../../constants";
import Nintendo from "../../assets/images/nintendo.png"

const HotspotBanner = ({
                           Image,
                           title,
                           rating,
                           subtitle
                       }) => {
    const CustomButton = ({children, ...props}) => (
        <Button
            variant="outlined"
            sx={{
                borderRadius: 2,
                color: "text.primary",
                borderColor: "black",
                backgroundColor: "black",
                marginLeft: "8px",
                height: 58,
                px: 2,
            }}
            {...props}
        >
            {children}
        </Button>
    );

    return (
        <HeroSection>
            <Container>
                <ImgWrapper>
                    <Img
                        src={Image}
                    />
                </ImgWrapper>
                <Stack
                    sx={{paddingTop: "8rem", display: "contents"}}
                    justifyContent="center"
                >
                    <Text sx={{fontSize: "2.125rem", fontWeight: 600}}
                    >
                        {title}
                    </Text>
                    <Box sx={{display: "flex", paddingBottom: "1rem"}}>
                        <Text sx={{fontSize: "12px"}}>Racing / Action</Text>
                        <Rating
                            sx={{fontSize: "12px", alignItems: "center"}}
                            name="disabled"
                            value={4}
                            disabled
                        />
                    </Box>
                    <TextSub
                    >
                        {subtitle}
                    </TextSub>
                </Stack>
            </Container>
            <StackCustom
                direction={{xs: "column", md: "row"}}
                spacing={4}
            >
                <Container>
                    <Grid container spacing={2}>
                        <Grid item xs={6} style={{placeSelf: "center"}}>
                            <Text variant="h5" color={COLORS.BLUE} sx={{fontWeight: 600}}>
                                Download latest version
                            </Text>
                        </Grid>
                        <Grid
                            item
                            xs={6}
                            style={{display: "flex", justifyContent: "flex-end"}}
                        >
                            <img src={Nintendo} style={{display: "inline-block"}}/>
                            <CustomButton>
                                {/*<AppleIcon sx={{fontSize: 36, ml: -1}}/>*/}
                                <Stack sx={{textAlign: "left", ml: 1}}>
                                    <Text variant="caption" sx={{lineHeight: 1}}>
                                        Get it from
                                    </Text>
                                    <Text variant="h5">Microsoft</Text>
                                </Stack>
                            </CustomButton>
                            <CustomButton>
                                <Stack sx={{textAlign: "left", ml: 1}}>
                                    <Text variant="caption" sx={{lineHeight: 1}}>
                                        Get in on
                                    </Text>
                                    <Text variant="h5">Steam</Text>
                                </Stack>
                            </CustomButton>
                        </Grid>
                    </Grid>
                </Container>
            </StackCustom>
        </HeroSection>
    );
};

export default HotspotBanner;
