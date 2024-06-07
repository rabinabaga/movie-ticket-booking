import { Flex, Text, Button, Center, Box, ButtonGroup } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const TicketBox = () => {
  const movieDetailState = useSelector((state) => state.movies.movieDetail);
  const navigate = useNavigate();
  const [total, setTotal] = useState(1000);
  console.log("total", total);
  return (
    <>
      <Flex direction="column" gap="20px">
        <Box>
          <Text fontWeight="bold">Event Details</Text>
          <Flex style={{ color: "black" }} direction="column">
            <Box>
              <input type="date" defaultValue="12/04/2023"></input>
            </Box>
            <Box style={{ color: "white" }}>
              <Text marginTop={4}>Kathmandu, Nepal</Text>
            </Box>
          </Flex>
        </Box>
        <Box>
          <Text fontWeight="bold">Select Tickets</Text>
          <Flex direction="row">
            <Flex direction="column">
              <Text>1X Ticket(s)</Text>
              <Box>USD $500.00</Box>
            </Flex>
            <ButtonGroup spacing="2">
              <Button variant="solid" colorScheme="blackAlpha">
                -
              </Button>
              <Center bg="black" h="40px" p={4} color="white">
                2
              </Center>
              <Button
                variant="solid"
                colorScheme="pink"
                onClick={() => {
                  navigate("/");
                }}
              >
                +
              </Button>
            </ButtonGroup>
          </Flex>
        </Box>
        <Button
          variant="solid"
          colorScheme="pink"
          onClick={() => {
            navigate(`/${movieDetailState?.Title}/order-confirmation`);
          }}
        >
          Check out for ${total}
        </Button>
      </Flex>
    </>
  );
};

export default TicketBox;
