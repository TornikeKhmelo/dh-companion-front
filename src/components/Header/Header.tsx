import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  InputBase,
  Box,
  Avatar,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import SettingsIcon from "@mui/icons-material/Settings";
interface HeaderProps {
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}

export const Header: React.FC<HeaderProps> = ({ setSearchQuery }) => {
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "0 10px",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Avatar alt="James Ronald" src="/static/images/avatar/1.jpg" />
          <Typography sx={{ color: "#545871" }} variant="h6">
            James Ronald
          </Typography>
        </Box>
        <IconButton color="inherit">
          <SettingsIcon sx={{ color: "#6A6CE0" }} />
        </IconButton>
      </Toolbar>
      <Toolbar style={{ padding: "0 10px" }}>
        <InputBase
          sx={{
            display: "flex",
            boxShadow: "0px 2px 4px 0px #6A6CE026",
            background: "#FFFEFC",
            borderRadius: "6px",
            p: "0 16px",
            minHeight: "46px",
          }}
          placeholder="Search for notes"
          startAdornment={
            <SearchIcon
              sx={{
                p: "6px",
                borderRadius: "6px",
                background: "#6A6CE0",
                color: "#FFF",
                order: 2,
              }}
            />
          }
          fullWidth
          style={{ paddingLeft: 8 }}
          onChange={handleSearchChange}
        />
      </Toolbar>
    </AppBar>
  );
};
export default Header;
