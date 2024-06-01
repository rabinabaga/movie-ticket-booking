import React from "react";
import { Box } from "@chakra-ui/react";

export const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      {isOpen ? <>close icon</> : <>menu icon</>}
    </Box>
  );
};

