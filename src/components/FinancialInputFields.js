import React from 'react'
import { useState } from 'react';
import { Grid, FormControl, Box} from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import dayjs from 'dayjs';

const CustomTextField = ({ id, label, defaultValue, onChange }) => (
    <Grid item xs={1}>
    <TextField
      required
      value={defaultValue}
      id={id}
      label={label}
      onChange={onChange}
    />
    </Grid>
  );

function FinancialInputFields() {
    const [message, setMessage] = useState('');
    // State
    const [birthDateInput, setBirthDateInput] = useState("");
    const [totalinvestedInput, setTotalInvestedInput] = useState("");
    const [monthlyContributionInput, setMonthlyContributionInput] = useState("");
    const [annualReturnInput, setAnnualReturnInput] = useState("");
    const [safeWithdrawalRateInput, setsafeWithdrawalRateInput] = useState("");
    const [inflationInput, setinflationInput] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevents the default form submission behavior

        const requestData = {
            birthDateInput,
            totalinvestedInput,
            monthlyContributionInput,
            annualReturnInput,
            safeWithdrawalRateInput,
            inflationInput
        };

        // Send data to the server
        fetch('http://localhost:3000/networth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData)
        })
        .then((res) => res.json())
        .then((jsonData) => setMessage(jsonData.message))
        .catch((error) => console.error('Error fetching data:', error))}

  return (
    <form onSubmit={handleSubmit}>
    <Grid container rowSpacing={1} alignItems="center" justifyContent="center" columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
    <Grid item xs={1}>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DesktopDatePicker 
        label="Birth Date*" 
        style={{ width: '100%' }} 
        value={birthDateInput}
        onChange={(date) => {
            console.log(dayjs(date).format('YYYY-MM-DD'))
            setBirthDateInput(date ? dayjs(date).format('YYYY-MM-DD') : ''); 
        }}
    />

    </LocalizationProvider>
    </Grid>

    <CustomTextField 
        required
        id="outlined-required" 
        label="Total Invested" 
        value={totalinvestedInput}
        onChange={(e) => {
            setTotalInvestedInput(e.target.value)
        }}
    />

    <CustomTextField 
        required
        id="outlined-required" 
        label="Monthly Contribution" 
        value={monthlyContributionInput}
        onChange={(e) => {
            setMonthlyContributionInput(e.target.value)
        }}

        />

    <CustomTextField 
        required
        id="outlined-required" 
        label="Annual Return" 
        value={annualReturnInput}
        onChange={(e) => {
            setAnnualReturnInput(e.target.value)
        }}

    />

    <CustomTextField 
        required
        id="outlined-required" 
        label="Safe Withdrawal Rate"
        value={safeWithdrawalRateInput}
        onChange={(e) => {
            setsafeWithdrawalRateInput(e.target.value)
        }}  
    />

    <CustomTextField 
        required
        id="outlined-required" 
        label="Inflation" 
        value={inflationInput}
        onChange={(e) => {
            setinflationInput(e.target.value)
        }}
    />

    <Grid item xs={1}>
    <Button type="submit" variant="contained">Submit</Button>
    </Grid>

    </Grid>
    </form>
  )
}

export default FinancialInputFields