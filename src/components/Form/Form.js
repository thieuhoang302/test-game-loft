import {Autocomplete, Box, Button, Checkbox, FormControlLabel, Grid, Stack, TextField, Typography} from "@mui/material";
import React, {useState} from "react";
import {COLORS, STYLES_LABEL} from "../../constants";


const Form = ({headline, description, countries, platformOptions, subCheckbox1, subCheckbox2}) => {
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
        <Box
            sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                justifyContent: 'center',
                color: COLORS.BLUE,
            }}
        >
            <Stack sx={{
                marginBottom: 4,
            }}>
                <Typography
                    variant="h4"
                    sx={{fontWeight: 600}}
                >
                    {headline}
                </Typography>

                <Typography
                    sx={{whiteSpace: 'pre-line'}}
                >
                    {description}
                </Typography>
            </Stack>
            <Box
                component="form"
                noValidate
                sx={STYLES_LABEL}
            >
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            autoComplete="given-name"
                            name="firstName"
                            fullWidth
                            id="name"
                            label="Name"
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
                <Box sx={{textAlign: 'center'}}>
                    <Button
                        variant="outlined"
                        width={600}
                        sx={{mt: 3, mb: 2}}
                    >
                        Button
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};

export default Form;
