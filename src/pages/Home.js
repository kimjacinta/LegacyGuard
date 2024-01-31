import React, {useState, useEffect} from 'react';
import Typography from '@mui/material/Typography';
import { Box, Grid } from '@mui/material';
import FinancialInputFields from '../components/FinancialInputFields';
import NetWorthChart from '../components/NetWorthChart';

function Home() {
  const [netWorthData, setNetWorthData] = useState([]);

  return (
    <div>
      <Box sx={{ flexGrow: 1, padding: 3}}>
      <Grid container alignItems="center" justifyContent="center" spacing={2}>

      <Grid item xs={12}>
      <Typography variant="h4" component="h4" gutterBottom/>
      </Grid>

      <Grid item xs={12}>
      <FinancialInputFields setNetWorthData={setNetWorthData} />
      </Grid>

      <Grid item xs={12}>
      <NetWorthChart data={netWorthData} />
      </Grid>
      
      </Grid>
      </Box>
    </div>
  );
}

export default Home;