import { Box, Container, HTMLChakraProps } from "@chakra-ui/react";

function CustomContainer(props) {
  const { children } = props;
  return (
    <>
      <Box {...rest}>
        <Container maxW="container.xl">{children}</Container>
      </Box>
    </>
  );
}

export default CustomContainer;


