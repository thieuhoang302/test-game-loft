import {
    Autocomplete,
    Box,
    Button,
    Checkbox,
    Container,
    FormControlLabel,
    Grid,
    Stack,
    TextField,
    useTheme
} from "@mui/material";
import React, {useState} from "react";
import {section3Content} from "../utils/content";
import {COLORS, SECTION_HEIGHT, STYLES} from "../constants";
import Title from "../components/Title/index.jsx";

const {title, subtitle, ITEM, countries, platformOptions, subCheckbox1, subCheckbox2} = section3Content;

const RegisterForm = () => {
    const theme = useTheme();
    const [email, setEmail] = useState('');
    const [isValidEmail, setIsValidEmail] = useState(true);

    const handleEmailChange = (event) => {
        const inputEmail = event.target.value;
        setEmail(inputEmail);

        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        const isValid = emailRegex.test(inputEmail);
        setIsValidEmail(isValid);
    };
    return (
        <Box sx={{width: "100%", height: SECTION_HEIGHT}}>
            <Container sx={{
                display: "-webkit-box", paddingTop: '9rem'
            }}>
                <Grid container spacing={2} sx={{justifyContent: "center"}}>
                    <Grid item xs={6} style={{placeSelf: "center"}}>
                        <img
                            src={ITEM.logo}
                        />
                    </Grid>
                    <Grid item xs={6} style={{display: 'flex'}}>
                        <Box
                            sx={{
                                marginTop: 8,
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: 'center',
                                color: COLORS.BLUE,
                            }}
                        >
                            <Stack>
                                <Title
                                    variant={{xs: "h3", sm: "h2", md: "h2"}}
                                    sx={{letterSpacing: "0.02em", mb: 1,}}
                                >
                                    {title}
                                </Title>

                                <Title
                                    variant={{xs: "h4", sm: "h3", md: "h5"}}
                                    sx={{fontWeight: 100, letterSpacing: "0.05em", mb: 2, whiteSpace: 'pre-line'}}
                                >
                                    {subtitle}
                                </Title>
                            </Stack>
                            <Box
                                component="form"
                                noValidate
                                sx={{mt: 3}}
                            >
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <TextField
                                            autoComplete="given-name"
                                            name="firstName"
                                            fullWidth
                                            id="name"
                                            label="Name"
                                            sx={STYLES.textField}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            label="Email"
                                            type="email"
                                            fullWidth
                                            value={email}
                                            onChange={handleEmailChange}
                                            error={!isValidEmail}
                                            helperText={!isValidEmail ? 'Định dạng email không hợp lệ' : ''}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Autocomplete
                                            id="country-select-demo"
                                            fullWidth
                                            options={countries}
                                            autoHighlight
                                            getOptionLabel={(option) => option.label}
                                            renderOption={(props, option) => (
                                                <Box component="li" sx={{'& > img': {mr: 2, flexShrink: 0}}} {...props}>
                                                    <img
                                                        loading="lazy"
                                                        width="20"
                                                        src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                                                        srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                                                        alt=""
                                                    />
                                                    {option.label} ({option.code}) +{option.phone}
                                                </Box>
                                            )}
                                            renderInput={(params) => (
                                                <TextField
                                                    {...params}
                                                    label="Country"
                                                    inputProps={{
                                                        ...params.inputProps,
                                                        autoComplete: 'new-password', // disable autocomplete and autofill
                                                    }}
                                                />
                                            )}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Autocomplete
                                            disablePortal
                                            id="combo-box-demo"
                                            options={platformOptions}
                                            fullWidth
                                            renderInput={(params) => <TextField {...params} label="Platform"/>}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <FormControlLabel
                                            control={
                                                <Checkbox/>
                                            }
                                            label={subCheckbox1}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <FormControlLabel
                                            control={
                                                <Checkbox/>
                                            }
                                            label={subCheckbox2}
                                        />
                                    </Grid>
                                </Grid>
                                <Button
                                    width={600}
                                    variant="contained"
                                    sx={{mt: 3, mb: 2}}
                                >
                                    Button
                                </Button>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default RegisterForm;
