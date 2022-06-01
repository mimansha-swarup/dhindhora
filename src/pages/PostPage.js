import {  Paper } from "@mui/material";

import { HomeLayout } from "../component";
import { HomePageStyles } from "../styles/HomePageStyle";


export const PostPage = () => {
  const { PostContainerStyle} = HomePageStyles;

  return (
    <HomeLayout>
      <Paper sx={PostContainerStyle}>
     
        
      </Paper>
    </HomeLayout>
  );
};
