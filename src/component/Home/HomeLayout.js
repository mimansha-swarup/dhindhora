import { Grid } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Navbar } from '../Navbar/Navbar'
import { Sidebar,SuggestionCard } from '../index'
import { HomePageStyles } from '../../styles/HomePageStyle'

export const HomeLayout = ({children}) => {
  const { contentContainerStyle ,contentBoxStyle} = HomePageStyles;
  return (
    <div>
    <Navbar />
    <Box sx={contentContainerStyle}>
      <Grid container spacing={2}>
        <Grid item sm={3} lg={2} xs={0}>
          <Sidebar />
        </Grid>
        <Grid item  sm={9} lg={7} xs={12}>
         <Box sx={contentBoxStyle}>
           {children}
         </Box>
        </Grid>
        <Grid item sm={0} lg={3} xs={0}>
          <SuggestionCard />
        </Grid>
      </Grid>
    </Box>
  </div>
  )
}
