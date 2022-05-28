import { Avatar, Box, List, ListItem, Stack, Typography } from "@mui/material";
import React from "react";
import { SuggestionCardStyles } from "../../styles/SuggestionCardStyles";

export const SuggestionCard = () => {
  const { SuggestionContainerStyle, ListStyle, ListTileStyle } =
    SuggestionCardStyles;
  return (
    <Box sx={SuggestionContainerStyle}>
      <Typography variant="subtitle1" component="p" fontWeight="bold">
        Suggestions
      </Typography>
      <List sx={ListStyle}>
        {[
          [...Array(5)].map((e,i) => (
            <ListItem key={i} sx={ListTileStyle}>
              <Avatar
                alt="profile-suggestion"
                src="https://bestcellphonespyapps.com/wp-content/uploads/2017/09/pexels-photo-220453-1-1001x1024.jpeg"
    
              />
              <Stack>
                <Typography textAlign="center" variant="body2">
                  Jhon Doe
                </Typography>
                <Typography textAlign="center" variant="caption">
                  @JhonDoe
                </Typography>
              </Stack>
            </ListItem>
          )),
        ]}
      </List>
    </Box>
  );
};
