import {
  useDisclosure,
  Flex,
  Box,
  Button,
  VStack,
  Icon,
  HStack,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { NavLink, useNavigate } from "react-router-dom";
import Drawer from "./drawer";
import { IoMdMenu } from "react-icons/io";

import {data} from "./header";
import React from "react";

export default function MobileDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <Flex display={{ base: "flex", md: "none" }}>
      {/* // Menu Button */}
      <Button ref={btnRef} onClick={onOpen}>
        <IoMdMenu size="26px" />
      </Button>
      {/* // Drawer Component */}
      <Drawer isOpen={isOpen} onClose={onClose} finalFocusRef={btnRef}>
        <VStack alignItems="left">
          {data.map((item, i) => (
            <NavLink className={"nav-link"} to="/" style={{ color: "black" }}>
              {item.label}
            </NavLink>
          ))}
        </VStack>
      </Drawer>
    </Flex>
  );
}
