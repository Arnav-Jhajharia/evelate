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
import {Modal} from "@mui/material";


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  bgcolor: '#000',
  // border: '2px solid #000',
  // boxShadow: 24,
  // p: 4,
};
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


export default function App({children, className}) {
     const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [email, setEmail] = React.useState("");
  return (
      <>
      <div className = {className}onClick = {handleOpen}>{children}</div>
            <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
              

    <div className="App" style={style}>
      <footer>
        <br /> <br />
  
          <section className={classes.about}>
            <h2>Sign up for our daily fact file  {email}</h2>
            <p class="text-justify">

<CustomizedInputsStyleOverrides setEmail = {setEmail}/>            </p>
          </section>
    
       
      </footer>
    </div>
    {/* </Box> */}
         </Modal>
         </>
  );
}
