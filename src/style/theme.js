import { createTheme } from "@mui/material/styles";
import {purple, orange, red, indigo, teal} from '@mui/material/colors';
const primaryColor = "#2374e1";
const secondaryColor = red[500];

const customTheme = createTheme({
    palette: {
        primary: {
            main: primaryColor
        },
        secondary: {
            main: secondaryColor
        }
    }
})

export default customTheme;