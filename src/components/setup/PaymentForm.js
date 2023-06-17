import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import AutoComplete  from './AutoComplete';
export default function PaymentForm({setFavorites, setGenre}) {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>

      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
          <AutoComplete setFavorites={setFavorites} setGenre={setGenre}/>
        </Grid>
        <br />
        
        
        <Grid item xs={12}>
         
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
