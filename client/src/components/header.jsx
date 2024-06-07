import { Image, Flex, Button, HStack, chakra } from "@chakra-ui/react";
import Logo from "../logo.jpg";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const CTA = "Get Started";

export const data = [
  { label: "Home" },
  { label: "Concert" },
  { label: "Movies" },
  { label: "Theatre Events" },
];
export default function Header() {
  const datam = useState([
    { label: "Home" },
    { label: "Concert" },
    { label: "Movies" },
    { label: "Theatre Events" },
  ]);

  return (
    <chakra.header id="header">
      <Flex w="100%" px="6" py="5" align="center" justify="space-between">
        {/* logo */}
        <Image src={Logo} h="50px" />
        {/* //Nav Items */}
        <HStack display={{ base: "none", md: "flex" }} as="nav" spacing="5">
          {data.map(
            (item, i) => {
              return (
                <>
                  <NavLink className={"nav-link"} to="/">
                    {item.label}
                  </NavLink>
                </>
              );
            }
            // <Link key={i} to="section1"
          )}
        </HStack>

        <HStack>
          <Button>{CTA}</Button>
        </HStack>
      </Flex>
    </chakra.header>
  );
}
