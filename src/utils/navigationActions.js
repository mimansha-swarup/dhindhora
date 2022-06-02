import { Bookmark, Explore, Home } from "@mui/icons-material";




const iconStyle= {
  fontSize: { xs: "x-large", sm: "xx-large" },
}
export const navigationItems = [
  {
    id: 1,
    icon: <Home  sx={iconStyle} />,
    text: "Home",
    link: "/",
  },
  {
    id: 2,
    icon: <Bookmark  sx={iconStyle} />,
    text: "Bookmark",
    link: "/bookmark",
  },
  
  {
    id: 3,
    icon: <Explore  sx={iconStyle} />,
    text: "Explore",
    link: "/explore",
  },
  
];