import React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { Grid } from '@mui/material';

export default function NetWorthChart({ data }) {
    console.log('Received data in NetWorthChart:', data);

    // Convert 'Net Worth' values to numbers and format 'Month' column
    const numericData = data.map(entry => ({
        'Month': new Date(entry['Month']), // Ensure 'Month' is a JavaScript Date object
        'Net Worth': parseFloat(entry['Net Worth']),
        'Age': entry['Age'],
    }));
    console.log('Numeric data:', numericData);

    // Prepare combined labels and values for the x-axis
    const xAxisData = numericData.map(entry => ({
        value: entry['Age'],
        label: `Age ${entry['Age']}`,
    }));

    // Use numericData for the chart
    return (
        <Grid container rowSpacing={1} alignItems="center" justifyContent="center" columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={5}>
                <LineChart
                    xAxis={[
                        {
                            data: xAxisData.map(entry => entry.value),
                            label: 'Age',
                            xAccessor: value => {
                                const selectedEntry = xAxisData.find(entry => entry.value === value);
                                return selectedEntry ? selectedEntry.label : value;
                            },
                        }
                    ]}
                    series={[
                        {
                            data: numericData.map(entry => entry['Net Worth']),
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