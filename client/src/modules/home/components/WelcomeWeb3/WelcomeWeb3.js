import React from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import NavigationIcon from "@mui/icons-material/Navigation";

const WelcomeWeb3 = () => {
  return (
    <Fab
      className="bg-blue"
      variant="extended"
      size="medium"
      color="primary"
      aria-label="add"
    >
      <NavigationIcon className="" sx={{ mr: 1 }} />
      Connect Wallet
    </Fab>
  );
};
export default WelcomeWeb3;
