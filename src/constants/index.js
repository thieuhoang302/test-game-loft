export const NAVBAR_HEIGHT = 76;
export const SECTION_HEIGHT = "100vh";

export const COLORS = {
    WHITE: "#FFFFFF",
    BLUE: "#2699FB",
    BlUR_BLUE: "#D8EDFF",
    BLUE_WHITE: "#EBF6FF",
    BLUE_NAVBAR: "#A9D6FD",
    // BACKGROUND:"#EBF6FF",
    BACKGROUND: "brown",

};
export const STYLES_LABEL = {
    '& label.Mui-focused': {
        color: COLORS.BLUE,
    },
    '& label': {
        color: COLORS.BLUE,
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: COLORS.BLUE,
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: COLORS.BLUE,
        },
        '&:hover fieldset': {
            borderColor: COLORS.BLUE,
        },
        '&.Mui-focused fieldset': {
            borderColor: COLORS.BLUE,
        },
    },
    '& .MuiSvgIcon-root': {
        color: COLORS.BLUE,
    }
}


