import { Flex, Text, Button, Center, Box, ButtonGroup } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { CheckoutDataState } from "../../context/ticket";
const TicketBox = () => {
  const movieDetailState = useSelector((state) => state.movies.movieDetail);
  const navigate = useNavigate();
  const { checkoutData, setCheckoutData } = CheckoutDataState();
  console.log("checkout data", checkoutData);

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
              <Box>Rs.{movieDetailState?.price}</Box>
            </Flex>
            <ButtonGroup spacing="2">
              <Button
                variant="solid"
                colorScheme="blackAlpha"
                onClick={() => {
                  if (checkoutData.numberOfTickets >= 1) {
                    setCheckoutData((prev)=>{
                      return {
                        ...prev,
                        numberOfTickets: prev.numberOfTickets - 1,
                      };
                    })
                  }
                }}
              >
                -
              </Button>
              <Center bg="black" h="40px" p={4} color="white">
                {checkoutData?.numberOfTickets}
              </Center>
              <Button
                variant="solid"
                colorScheme="pink"
                onClick={() => {
                  setCheckoutData((prev) => {
                    return {
                      ...prev,
                      numberOfTickets: prev.numberOfTickets + 1,
                    };
                  });
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
          Check out for{" "}
          {movieDetailState?.price * checkoutData?.numberOfTickets}
        </Button>
      </Flex>
    </>
  );
};

export default TicketBox;
