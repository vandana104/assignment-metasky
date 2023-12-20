import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Link from "@mui/material/Link";
import SearchIcon from "@mui/icons-material/Search"; 

function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: "#222", 
        color: "#fff", 
        padding: "20px", 
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
        <SearchIcon fontSize="large" /> 
      <Box width="70%">
        <List sx={{ display: "flex", flexDirection: "row", padding: 0, }}>
          <ListItem >
            <Link href="#" color="inherit">
              <Typography variant="body1" component="span" sx={{ padding: "10px" }}>
                Help
              </Typography>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#" color="inherit">
              <Typography variant="body1" component="span" sx={{ padding: "10px" }}>
                Contact Us
              </Typography>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#" color="inherit">
              <Typography variant="body1" component="span" sx={{ padding: "10px" }}>
                Privacy & Terms
              </Typography>
            </Link>
          </ListItem>
        </List>
      </Box>
      
      
    </Box>
  );
}

export default Footer;
