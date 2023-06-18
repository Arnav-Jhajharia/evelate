import * as React from 'react';
import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { Box } from '@mui/material';
import courses from './../../helpers/const/courseDetails'
export default function Tags({setFavorites, setGenre}) {
  return (
    <Stack spacing={3}  >
  <Autocomplete
        required
        multiple
        id="tags-outlined"
        options={uniqueCategories}
        getOptionLabel={(option) => option}
        defaultValue={[]}
        onChange={(e, val) => setGenre(val)} 
            
        filterSelectedOptions
        renderInput={(params) => (
          <TextField
            {...params}
        
            label="Choose genres"
            placeholder="Favorites"
          />
        )}
      />

      <Autocomplete

        multiple
        id="tags-outlined"
        options={top100Films}
        getOptionLabel={(option) => option.title}
        defaultValue={[]}
        onChange={(e, val) => setFavorites(val)}             
        filterSelectedOptions
        renderInput={(params) => (
          <TextField
            {...params}
        
            label="Choose atleast 3 favorite topics!"
            placeholder="Favorites"
          />
        )}
      />
    </Stack>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films =  Object.entries(courses).flatMap(([category, items]) =>
  items.map(({ title }) => ({ title, category }))
);

const uniqueCategories = Object.keys(courses);
