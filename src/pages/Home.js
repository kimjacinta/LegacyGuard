import React, {useState, useEffect} from 'react';
import Typography from '@mui/material/Typography';
import { Box, Grid } from '@mui/material';
import FinancialInputFields from '../components/FinancialInputFields';
import NetWorthChart from '../components/NetWorthChart';

function Home() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/test') 
      .then((res) => res.text())
      .then((data) => {
        return JSON.parse(data);
      })
      .then((jsonData) => setMessage(jsonData.message))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <Box sx={{ flexGrow: 1, padding: 3}}>
      <Grid container alignItems="center" justifyContent="center" spacing={2}>

      <Grid item xs={12}>
      <Typography variant="h4" component="h4" gutterBottom/>
      </Grid>

      <h1>{message}</h1>

      <Grid item xs={12}>
      <FinancialInputFields/>
      </Grid>

      <Grid item xs={12}>
      <NetWorthChart/>
      </Grid>
      
      </Grid>
      </Box>
    </div>
  );
}

export default Home;