import { Typography } from '@mui/material';
import React from 'react'
import {  HomeLayout, Post } from "../component";
export const ExplorePage = () => {
  return (
    <HomeLayout>
      <Typography variant="h6" textAlign="start" mb={2} component="h6">Explore</Typography>
      {[...Array(5)].map(e=><Post key={e} />)}
    </HomeLayout>
  )
}