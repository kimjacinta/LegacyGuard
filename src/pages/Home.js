import * as React from 'react';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';

const CustomTextField = ({ id, label, defaultValue }) => (
  <TextField
    required
    id={id}
    label={label}
    defaultValue={defaultValue}
  />
);

const CalculateMinimumFI= ({}) => 
{
  // If MinimumFi2 progress last cell is smaller than 1 (true), then greater than 80 years

  // if false, then 
  
}

function Home() {

  return (
    <div>
      <Typography variant="h4" component="h4" gutterBottom>
          Financial Independence Calculator
      </Typography>

      <CustomTextField id="outlined-required" label="Birth Date" />
      <CustomTextField id="outlined-required" label="Monthly Income" />
      <CustomTextField id="outlined-required" label="Initial Savings" />
      <CustomTextField id="outlined-required" label="Accelerated Savings" />
      <CustomTextField id="outlined-required" label="Initial Liquidity"  />
      <CustomTextField id="outlined-required" label="Lifestyle Floor" />
      <CustomTextField id="outlined-required" label="Inflation (Expenses)" />
      <CustomTextField id="outlined-required" label="Income Growth" />
      <CustomTextField id="outlined-required" label="First Deposit Date" />
      <CustomTextField id="outlined-required" label="Start Investing At" />
      <CustomTextField id="outlined-required" label="Start Investing After" />
      <CustomTextField id="outlined-required" label="Total Return (+ specs)" />
      <CustomTextField id="outlined-required" label="Drawable Return" />
      <CustomTextField id="outlined-required" label="Minimum FI" />
      <CustomTextField id="outlined-required" label="Ideal FI" />
      <CustomTextField id="outlined-required" label="Retirement Age" />
    </div>
  );
}

export default Home;