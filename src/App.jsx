import React from "react";
import HotspotBanner from "./containers/HotspotBanner";
import RegisterForm from "./containers/RegisterForm";
import Community from "./containers/Community";
import EventsPromotions from "./containers/EventsPromotions";
import Footer from "./components/Footers/MainFooter";
import {Box} from "@mui/material";
import FloatingActionButtons from "./components/FloatingButtons/FloatingActionButtons";
import Navbar from "./components/Navbars/MainNavbar";
import ExclusiveContent from "./containers/ExclusiveContent";

const App = () => {
    return (
        <>
            <Navbar/>
            <HotspotBanner/>
            <Box sx={{bgcolor: "background.default", position: "relative"}}>
                <RegisterForm/>
                <Community/>
                <EventsPromotions/>
                <Community/>
                <EventsPromotions/>
                <ExclusiveContent/>
                <Footer/>
            </Box>
            <FloatingActionButtons/>
        </>
    );
};

export default App;
