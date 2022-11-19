import React from "react";
import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import BadgeIcon from "@mui/icons-material/Badge";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/system";

function NavBar() {
  let navigate = useNavigate()
  return (
    <div>
      <AppBar sx={{ background: "#662E9B" }} position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{display:'flex',alignItems:'center'}} onClick={()=>navigate('/')}>
            <BadgeIcon />
            <Typography  ml variant="h6">
              Employee
            </Typography>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

export default NavBar;
