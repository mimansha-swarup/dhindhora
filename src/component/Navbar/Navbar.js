import { AppBar, Avatar, Toolbar, Box, Typography, Chip } from "@mui/material";

import { brandImage } from "../../assets";
import { NavbarStyle,userNameChipStyle } from "./NavbarStyle";

const Navbar = () => {
  return (
    <AppBar position="static" color="inherit" sx={NavbarStyle}>
      <Avatar alt="brandLogo" src={brandImage} />
      <Toolbar>

      <Box sx={userNameChipStyle}>
          <Avatar
            alt="brandLogo"
            src="https://media1.thehungryjpeg.com/thumbs2/ori_3944071_je7b4gk3datpeei8e81xyz2xb35qiqxtrjicl1qx_woman-avatar-icon-vector-flat.jpg"
            sx={{ width: 30, height: 30 }}
          />
          <Typography variant="caption" component="span" >
            @monkesh
          </Typography>
        </Box>
        
      </Toolbar>
    </AppBar>
  );
};

export { Navbar };
