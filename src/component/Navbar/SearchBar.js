import { Box, InputBase, List, ListItem, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { SearchInputStyle, SearchStyle } from "../../styles/NavbarStyle";
import { useSelector } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";
export const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");
  const { user } = useSelector((state) => state);

  const open = Boolean(searchInput);

  const searchByName = (listData, searchQuery) =>
    listData.filter((userData) =>
      userData.username.toLowerCase().includes(searchQuery)
    );

  const searchedUser = searchByName(user.users, searchInput);
  
  return (
    <>
      <Box sx={SearchStyle}>
        <InputBase
          sx={SearchInputStyle}
          placeholder="Search User…"
          inputProps={{ "aria-label": "search" }}
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />

        <SearchIcon />

        {open && <Paper
          sx={{
            position: "absolute",
            top: "2.07rem",
            width: "100%",
            maxHeight: "10.5rem",
            overflow: "auto",
            scroll: "auto",
          }}
        >
          <List>
            {searchedUser.length > 0 ? (
              searchedUser.map((eachUsers) => {
                return (
                  <Link key={eachUsers._id} onClick={()=>setSearchInput("")} to={`/profile/${eachUsers.username}`}>
                    <ListItem>{eachUsers.username}</ListItem>
                  </Link>
                );
              })
            ) : (
              <ListItem>No such user found</ListItem>
            )}
          </List>
        </Paper>}
      </Box>
    </>
  );
};
