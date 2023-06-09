import "./styles.css";
import classes from "./App.module.css";
import SocialFollow from "./SocialFollow";
import * as React from 'react';
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";
import { outlinedInputClasses } from '@mui/material/OutlinedInput';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider, Theme, useTheme } from '@mui/material/styles';
import { BsArrowRight } from 'react-icons/bs'
const customTheme = (outerTheme) =>
  createTheme({
   palette: {
    primary: {
      main: '#fff',
    },
  },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            '--TextField-brandBorderColor': '#E0E3E7',
            '--TextField-brandBorderHoverColor': '#B2BAC2',
            '--TextField-brandBorderFocusedColor': '#6F7E8C',
            '& label.Mui-focused': {
              color: 'white',
            },
          },
        },
      },
      MuiFormLabel: {
        styleOverrides: {
          root: {
            fontSize: '1rem',
            color: 'white'
          }
        }
      },
      MuiOutlinedInput: {
        styleOverrides: {
          notchedOutline: {
            borderColor: 'var(--TextField-brandBorderColor)',
          },

          root: {
            color: 'white',
            // width: '90%',
            [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: 'var(--TextField-brandBorderHoverColor)',
            },
            [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: 'var(--TextField-brandBorderFocusedColor)',
            },
          },
        },
      },
      MuiFilledInput: {
        styleOverrides: {
          root: {
            "::placeholder":{
              "color":"white"
            },
            background: 'darkgrey',
                        color: 'white',


            '&:before, &:after': {
              borderBottom: '2px solid var(--TextField-brandBorderColor)',
            },
            '&:hover:not(.Mui-disabled, .Mui-error):before': {
              borderBottom: '2px solid var(--TextField-brandBorderHoverColor)',
            },
            '&.Mui-focused:after': {
              borderBottom: '2px solid var(--TextField-brandBorderFocusedColor)',
            },
          },
        },
      },
      MuiInput: {
        styleOverrides: {
          root: {
            '&:before': {
              borderBottom: '2px solid var(--TextField-brandBorderColor)',
            },
            '&:hover:not(.Mui-disabled, .Mui-error):before': {
              borderBottom: '2px solid var(--TextField-brandBorderHoverColor)',
            },
            '&.Mui-focused:after': {
              borderBottom: '2px solid var(--TextField-brandBorderFocusedColor)',
            },
          },
        },
      },
    },
  });

 function CustomizedInputsStyleOverrides({setEmail}) {

  const outerTheme = useTheme();

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: { sm: '0.8fr 0.1fr' },
        gap: 2,
      }}
    >
      <ThemeProvider theme={customTheme(outerTheme)}>
        {/* <TextField label="Outlined" /> */}
        <TextField label="Enter your email address" variant="outlined" onChange={(e) => setEmail(e.target.value)}/>
        {/* <TextField label="Standard" variant="standard" /> */}
        <Button variant="contained"><BsArrowRight /></Button>

      </ThemeProvider>
    </Box>
  );
}


export default function App() {
  const [email, setEmail] = React.useState("");
  return (
    <div className="App">
      <footer>
        <br /> <br />
        <div className={classes.lower}>
          <section className={classes.about}>
            <h2>Sign up for our daily knowletter {email}</h2>
            <p class="text-justify">

<CustomizedInputsStyleOverrides setEmail = {setEmail}/>            </p>
          </section>
          <section className={classes.socials}>
            <h2>We are Social</h2>
            <SocialFollow />
          </section>
        </div>
      </footer>
    </div>
  );
}
