import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function FilterButton(props) {
  const [Value, setValue] = React.useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
    props.value(event.target.value);
  };

  const data= props.data;

  return (
    <Box sx={{ minWidth: 120, m: 2 }}>
      <FormControl fullWidth  size="small">
        <InputLabel>{props.nama}</InputLabel>
        <Select
          value={Value}
          label={props.nama}
          onChange={handleChange}
        >
          {data.map((item, index) => (
            <MenuItem key={index} value={item}>{item}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
