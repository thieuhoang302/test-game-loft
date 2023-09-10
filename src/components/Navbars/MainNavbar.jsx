import {AppBar, Container, IconButton, Stack, useTheme,} from "@mui/material";
import React from "react";
import {COLORS, NAVBAR_HEIGHT} from "../../constants";
import {navbarContent} from "../../utils/content";
import MenuIcon from "@mui/icons-material/Menu";

const {Logo} = navbarContent;

export default function Navbar() {
    const theme = useTheme();
    return (
        <AppBar
            elevation={0}
            sx={{
                py: 1,
                height: NAVBAR_HEIGHT,
                backgroundColor: COLORS.BLUE_NAVBAR,
                justifyContent: "center",
            }}
        >
            <Container
                sx={{
                    [theme.breakpoints.up("lg")]: {
                        maxWidth: "1380px!important",
                    },
                }}
            >
                <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                    flexWrap="wrap"
                >
                    <img src={Logo} style={{height: "100%", objectFit: "contain"}}/>
                    <IconButton>
                        <MenuIcon sx={{color: "black"}}/>
                    </IconButton>
                </Stack>
            </Container>
        </AppBar>
    );
};
