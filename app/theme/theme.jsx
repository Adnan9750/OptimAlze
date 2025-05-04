
import { createTheme } from "@mui/material/styles";


const theme = createTheme({
    palette: {
        primary: {
            main: "#144E8C", // Primary color (default buttons, links, highlights)
            light: "#7986cb", // Lighter shade
            dark: "#303f9f", // Darker shade (hover state)
            contrastText: "#ffffff", // Text color on primary buttons
        },
        secondary: {
            main: "#4F4F4F", // Secondary color
            light: "#ff4081", // Lighter shade
            dark: "#c51162", // Darker shade (hover state)
            contrastText: "#ffffff", // Text color on secondary buttons
        },
    },
    typography: {
        fontFamily: '"Nunito", sans-serif',
        h1: {
            fontSize: "2rem",
            fontWeight: 700
        },
        h2: {
            fontSize: "1.55rem",
            fontWeight: 700
        },
        h3: {
            fontSize: "1.45rem",
            fontWeight: 700
        },
        h4: {
            fontSize: "1.35rem",
            fontWeight: 600
        },
        h5: {
            fontSize: "1.25rem",
            fontWeight: '600 !important'
        },
        body1: {
            fontSize: "16px",
            fontWeight: 400,
            lineHeight: 1.5,
        },
        body2: {
            fontSize: "14px",
            fontWeight: 400,
            lineHeight: 1.25,
        },
        button: {
            fontSize: "14px",
            fontWeight: 500,
            textTransform: "uppercase",
        },
        caption: {
            fontSize: "12px",
            fontWeight: 400,
        },
    },
    components: {
        MuiListItemButton: {
            styleOverrides: {
                root: {
                    color:'black',
                    fontSize:'16px',
                    '&:hover': {
                        color: '#B91C1C',
                        // textDecoration: 'underline',
                        backgroundColor: 'transparent',
                    },
                    '&.Mui-selected': {
                        color: '#B91C1C',
                        fontWeight: 'bold',
                        backgroundColor: 'transparent',
                        '&:after': {
                            content: '""',
                            position: 'absolute',
                            bottom: 0,
                            left: '50%',
                            transform: 'translateX(-50%) scaleX(1)',
                            width: '80%',
                            height: '2px',
                            // backgroundColor: '#B91C1C',
                        },
                    },
                    '&:after': {
                        content: '""',
                        position: 'absolute',
                        bottom: 0,
                        left: '50%',
                        transform: 'translateX(-50%) scaleX(0)',
                        width: '80%',
                        height: '2px',
                        backgroundColor: '#B91C1C',
                        transition: 'transform 0.3s ease',
                    },
                    '&:hover:after': {
                        transform: 'translateX(-50%) scaleX(1)',
                    },
                },
            },
        },
    },
})

export default theme;