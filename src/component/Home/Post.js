import React from 'react'
import { Bookmark, ModeComment, ThumbUpAlt } from "@mui/icons-material";
import {
  Avatar,
  Button,
  Divider,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import { grey } from "@mui/material/colors";
import { HomePageStyles } from "../../styles/HomePageStyle";

export const Post = () => {
  const {PostContainerStyle,PostActionButtonStyles,UserNameStyle,PostDividerStyle} = HomePageStyles
  return (
    <Paper sx={PostContainerStyle} >
        <Stack flexDirection="row"  p={2} gap={3} alignItems="center" >
            <Avatar
              alt="profile-pic"
              src="https://bestcellphonespyapps.com/wp-content/uploads/2017/09/pexels-photo-220453-1-1001x1024.jpeg"
            />
            <Stack alignItems="start">
              <Typography  sx={UserNameStyle}   variant="subtitle1" component="p" >@user</Typography>
              <Typography    variant="caption" component="p" color={grey[500]} >22 May at 20:58</Typography>
            </Stack>


        </Stack>
        <Divider sx={PostDividerStyle}/>
        <Container>
        <Typography  my={2} variant="body1" component="p" textAlign="start" color={"grey[200]"} >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem temporibus iure magni nesciunt laudantium, nostrum vel tenetur ipsum necessitatibus incidunt ex doloribus sunt accusamus iste numquam facere, quaerat nemo ad!
          </Typography>
        </Container>
        <Divider sx={PostDividerStyle}/>
        <Stack flexDirection="row" justifyContent="stretch" p={1} gap={3}>
          <Button sx={PostActionButtonStyles} > <ThumbUpAlt/> Like</Button>
          <Button sx={PostActionButtonStyles} > <ModeComment/> Comment</Button>
          <Button sx={PostActionButtonStyles}> <Bookmark/> Save</Button>
        </Stack>
      </Paper>
  )
}
