import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import Review from './Review';
import lightfont from './ApercuLight.ttf'
import medfont from './ApercuMedium.ttf'
import { light } from '@mui/material/styles/createPalette';
import { useNavigate } from 'react-router-dom';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const steps = ['Your details', 'Select preferences', 'Review'];


// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: "#000"
    }
  },
  typography: {
    fontFamily: 'ApercuMedium,Arial',
  },
  components: {
    MuiTypography: {
      styleOverrides: `
        @font-face {
          font-family: 'ApercuLight';

          src: local('ApercuLight'), local('Raleway-Regular'), url(${lightfont}) format('ttf');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        };
         @font-face {
          font-family: 'ApercuMedium';
        

          font-weight: 1000;
          src: local('ApercuMedium'), local('Raleway-Regular'), url(${lightfont}) format('ttf');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        };
      `,
    },
  },
});

export default function Checkout() {
  const [name, setName] = React.useState("")
  const [address, setAddress] = React.useState("")
  const [genre, setGenre] = React.useState([])
  const [favorites, setFavorites] = React.useState([])
  const navigate = useNavigate()
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    if(activeStep == 2) {
      localStorage.setItem("name", name);
      localStorage.setItem("address", address);
      localStorage.setItem("genre", genre);
      localStorage.setItem("favorites", favorites);
      navigate('/')
    }
    if(activeStep == 0)
    {
      if(!name) {alert("Enter your name!");return} 

        let validRegex = /^\S+@\S+\.\S+$/;

          if(!address.match(validRegex)) {alert("Wrong email!");return}
        
        setActiveStep(activeStep + 1)

    }

    if(activeStep == 1)
    {
      if(!(genre.length >= 1))
        alert("Choose atleast one genre")
      else if(!(favorites.length >= 3 && favorites.length <= 10))
        alert("Choose atleast 3 favorites and less than 10")
      else
        setActiveStep(activeStep + 1)
    }

  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };


  
function getStepContent(step) {
  switch (step) {
    case 0:
      return <AddressForm setName={setName} setAddress = {setAddress} />;
    case 1:
      return <PaymentForm setGenre={setGenre} setFavorites = {setFavorites} />;
    case 2:
      return <Review />;
    default:
      throw new Error('Unknown step');
  }
}
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
     
      <Container component="main" maxWidth="sm" sx={{ mb: 4, fontFamily: 'ApercuMedium' }}>

        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center" >
            Let's set up
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography variant="h5" gutterBottom>
                Thank you for your order.
              </Typography>
              <Typography variant="subtitle1">
                Your order number is #2001539. We have emailed your order
                confirmation, and will send you an update when your order has
                shipped.
              </Typography>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {getStepContent(activeStep)}
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Back
                  </Button>
                )}

                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 3, ml: 1 }}
                >
                  {activeStep === steps.length - 1 ? `Let's go!` : 'Next'}
                </Button>
              </Box>
            </React.Fragment>
          )}
        </Paper>
     
      </Container>
    </ThemeProvider>
  );
}