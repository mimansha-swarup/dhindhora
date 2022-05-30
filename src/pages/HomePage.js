import {
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";

import { AddPost, HomeLayout, Post } from "../component";
import { HomePageStyles } from "../styles/HomePageStyle";


export const HomePage = () => {
  const { SortDividerStyle, SortLabelStyle, SortSelcetStyle } = HomePageStyles;




  return (
    <HomeLayout>
      <Typography variant="h6" textAlign="start" mb={2} component="h6">
        Home
      </Typography>
      <AddPost />
      <Stack
        my={2}
        gap={1}
        justifyContent="space-around"
        flexDirection="row"
        alignItems="center"
      >
        <Divider sx={SortDividerStyle} textAlign="right">
          <Stack flexDirection="row">
            <InputLabel sx={SortLabelStyle}>sort by</InputLabel>
            <FormControl size="small">
              <Select value="top" disableUnderline sx={SortSelcetStyle} variant="standard">
                <MenuItem value="top">Top</MenuItem>
                <MenuItem value="recent">Recent</MenuItem>
              </Select>
            </FormControl>
          </Stack>
        </Divider>
      </Stack>
      {[...Array(5)].map((e, i) => (
        <Post key={i} />
      ))}
    </HomeLayout>
  );
};
