import React from 'react';
import Community from '../components/Community/Community';
import EventPromotional from '../components/EventPromotional/EventPromotional';
import Exclusive from '../components/Exclusive/Exclusive';
import {Contact} from '../components/Contact/Contact';
import HotspotBanner from '../components/HotspotBanner/HotspotBanner';
import {ContactData, HospotBannerData} from "../utils/Contents";
import Box from "@mui/material/Box";

// HotspotBanner Feature Contact EventPromotional

const Home = () => {
    return (
        <Box>
            <HotspotBanner {...HospotBannerData}/>
            <Contact {...ContactData} />
            <Community/>
            <EventPromotional/>
            <Exclusive/>
        </Box>
    );
};

export default Home;
