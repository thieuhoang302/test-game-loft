import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Fab from '@mui/material/Fab';
import ShareIcon from '@mui/icons-material/Share';
import {ReactComponent as MailIcon} from '../../assets/images/mail-icon.svg';
import {ReactComponent as SupportIcon} from '../../assets/images/suport-icon.svg';

const Styles = {
    gridStyle: {
        position: "fixed",
        bottom: 0,
        right: 0,
        width: 'auto',
        padding: '10rem',
    },
    icon: {
        fontSize: "20px"
    }

};
export default function FloatingActionButtons() {
    return (
        <Box position="static">
            <Grid container direction="column" spacing={1} sx={Styles.gridStyle}>
                <Grid item>
                    <Fab size="small" aria-label="Share" sx={Styles.icon}>
                        <ShareIcon sx={Styles.icon}/>
                    </Fab>
                </Grid>
                <Grid item>
                    <Fab size="small" aria-label="Mail" sx={Styles.icon}>
                        <MailIcon sx={Styles.icon}/>
                    </Fab>
                </Grid>
                <Grid item>
                    <Fab size="small" aria-label="Support" sx={Styles.icon}>
                        <SupportIcon sx={Styles.icon}/>
                    </Fab>
                </Grid>
            </Grid>
        </Box>
    );
}

