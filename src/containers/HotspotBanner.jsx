import {Box, Button, Container, Divider, Grid, Rating, Stack, SvgIcon, Typography, useTheme,} from "@mui/material";
import React from "react";
import {section1Content} from "../utils/content";
import AppleIcon from "@mui/icons-material/Apple";
import GoogleIcon from "@mui/icons-material/Google";
import Title from "../components/Title";
import Image from "../assets/images/image.png";
import {COLORS, SECTION_HEIGHT} from "../constants";

const {
    title,
    subtitle,
} = section1Content;

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

const HotspotBanner = () => {
    const theme = useTheme();
    return (
        <Box sx={{width: "100%", backgroundColor: COLORS.BLUE, height: SECTION_HEIGHT}}>
            <Container
            >
                <Box sx={{textAlign: "center"}}> <img src={Image}
                                                      style={{display: 'inline-block', paddingTop: '20rem'}}/></Box>

                <Stack sx={{height: "100%", paddingTop: '8rem'}} justifyContent="center">
                    <Title
                        variant={{xs: "h3", sm: "h2", md: "h2"}}
                        sx={{letterSpacing: "0.02em"}}
                    >
                        {title}
                    </Title>
                    <Box sx={{display: "flex", paddingBottom: "1rem"}}>
                        <Typography sx={{fontSize: "12px"}}>Racing / Action</Typography>
                        <Divider orientation="vertical" flexItem/>
                        <Rating sx={{fontSize: "12px"}} name="disabled" value={4} disabled/>
                    </Box>
                    <Typography
                        sx={{fontSize: "12px", letterSpacing: "0.05em", width: "50%"}}
                    >
                        {subtitle}
                    </Typography>
                </Stack>
            </Container>
            <Stack
                direction={{xs: "column", md: "row"}}
                spacing={4}
                sx={{
                    backgroundColor: COLORS.BlUR_BLUE,
                    padding: "2vh",
                    justifyContent: "center",
                    position: "absolute",
                    bottom: 0,
                    width: "100%"
                }}
            >
                <Container>
                    <Grid container spacing={2}>
                        <Grid item xs={6} style={{placeSelf: "center"}}>
                            <Typography variant="h5" color={COLORS.BLUE}>Download latest version</Typography>
                        </Grid>
                        <Grid item xs={6} style={{display: 'flex', justifyContent: 'flex-end'}}>
                            <SvgIcon component={GoogleIcon}/>
                            <CustomButton>
                                <AppleIcon sx={{fontSize: 36, ml: -1}}/>
                                <Stack sx={{textAlign: "left", ml: 1}}>
                                    <Typography variant="caption" sx={{lineHeight: 1}}>
                                        Get it from
                                    </Typography>
                                    <Typography variant="h5">Microsoft</Typography>
                                </Stack>
                            </CustomButton>
                            <CustomButton>
                                <GoogleIcon sx={{fontSize: 36, ml: -1}}/>
                                <Stack sx={{textAlign: "left", ml: 1}}>
                                    <Typography variant="caption" sx={{lineHeight: 1}}>
                                        Get in on
                                    </Typography>
                                    <Typography variant="h5">Steam</Typography>
                                </Stack>
                            </CustomButton>
                        </Grid>
                    </Grid>
                </Container>
            </Stack>
        </Box>
    );
};

export default HotspotBanner;
