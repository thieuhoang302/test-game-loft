import {Box, Container, Divider, Grid, IconButton, Typography,} from "@mui/material";
import {Stack} from "@mui/system";
import React from "react";
import {footerContent} from "../../utils/content";
import OutlinedButton from "../Buttons/OutlinedButton";
import Title from "../Title";
import {COLORS, SECTION_HEIGHT} from "../../constants";

const {
    visit,
    legal,
    copyright,
    socials,
} = footerContent;

const LinkSection = ({title, links}) => (
    <Stack spacing={2.5}>
        <Title>{title}</Title>

        {links.map(({title}) => (
            <Typography
                key={title}
                variant="body2"
                color="text.secondary"
                sx={{
                    cursor: "pointer",
                    "&:hover": {
                        color: "text.primary",
                    },
                }}
            >
                {title}
            </Typography>
        ))}
    </Stack>
);

const Footer = () => {
    return (
        <Box sx={{width: "100%", backgroundColor: COLORS.BLUE, height: SECTION_HEIGHT}}>
            <Container>
                <Grid container spacing={8} flexWrap="wrap-reverse">
                    <Grid item xs={12} md={6} lg={7} xl={8}>
                        <Stack>
                            <OutlinedButton arrow sx={{height: 60, my: 3}}>
                                Subscribe
                            </OutlinedButton>

                            <Stack
                                direction="row"
                                spacing={1}
                                alignItems="center"
                                justifyContent="space-between"
                                flexWrap="wrap"
                            >
                                {socials.map((item, i) => (
                                    <IconButton key={i}>
                                        <item.icon/>
                                    </IconButton>
                                ))}
                            </Stack>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} md={6} lg={5} xl={4}>
                        <Box>
                            <Typography variant="body2" color="text.secondary">
                                {visit.title}
                            </Typography>
                            {visit.content.map((c) => (
                                <p>{c}</p>
                            ))}
                        </Box>
                        <Box>
                            <Typography variant="body2" color="text.secondary">
                                {legal.title}
                            </Typography>
                            {legal.content.map((c) => (
                                <p>{c}</p>
                            ))}
                        </Box>
                    </Grid>
                </Grid>
            </Container>
            <Divider sx={{mt: 6, mb: 5}}/>
            <Container>
                <Stack
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Typography variant="body2" color="text.secondary">
                        {copyright.first}
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                        {copyright.second}
                    </Typography>
                </Stack>
            </Container>
        </Box>
    );
};

export default Footer;
