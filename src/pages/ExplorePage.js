import { Typography } from '@mui/material';
import {  useSelector } from 'react-redux';
import {  HomeLayout, Post } from "../component";
export const ExplorePage = () => {

  const {post:{allPosts}} = useSelector(state=>state)
  const exploreFeed =[...allPosts].reverse()

  return (
    <HomeLayout>
      <Typography variant="h6" textAlign="start" mb={2} component="h6">Explore</Typography>
      {exploreFeed.map(postInfo=><Post key={postInfo._id} postInfo={postInfo} />)}
    </HomeLayout>
  )
}