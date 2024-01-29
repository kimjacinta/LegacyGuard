import React from 'react'
import Navbar from './Navbar'
import { ThemeProvider, createTheme } from '@mui/material/styles';

function Layout({children}) {
  const theme = createTheme({

    palette: {
      mode: 'light',
      primary: {
        main: '#3f51b5',
      },
      secondary: {
        main: '#f50057',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
    <div>
        <Navbar/>
        {children}
    </div>
    </ThemeProvider>
  )
}

export default Layout