import React from 'react'
import { LineChart } from '@mui/x-charts/LineChart';
import { Grid} from '@mui/material';

export default function NetWorthChart() {
  return (
    <Grid container rowSpacing={1} alignItems="center" justifyContent="center" columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
    <Grid item xs={5}>
    <LineChart
        xAxis={[{ data: [20, 30, 40, 50, 60, 70] }]}
        series={[
            {
            data: [2000, 3000, 4000, 5000, 7000, 10000],
            area: true,
            label: 'Networth',
            },
        ]}
        width={500}
        height={300}
    />
    </Grid>

  </Grid>
);

}