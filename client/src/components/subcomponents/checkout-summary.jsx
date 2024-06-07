import { Box, Text, Flex, Button } from "@chakra-ui/react";
import { useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import { CheckoutDataState } from "../../context/ticket";
import { useEffect } from "react";

const CheckOutSummary = ({ children }) => {
  const navigate = useNavigate();
  const movieDetailState = useSelector((state) => state.movies.movieDetail);
  const { checkoutData, setCheckoutData } = CheckoutDataState();
  const subTotal = (
    checkoutData?.numberOfTickets * checkoutData?.pricePerTicket
  ).toFixed(2);
  const afterDiscount = (
    subTotal -
    0.01 * checkoutData?.discount * subTotal
  ).toFixed(2);
  const tax = (0.13 * afterDiscount).toFixed(2);
  const total = parseInt(afterDiscount) + parseInt(tax);

  return (
    <>
      <Flex flexDir="column">
        <Text fontSize={{ base: "20px", md: "18px" }}>Checkout Summary</Text>
        <Text fontSize={{ base: "20px", md: "18px" }}>
          {" "}
          {movieDetailState?.Title}
        </Text>
        <span>Kathmandu,Nepal</span>
        <Flex paddingLeft="8px" justify="space-between">
          <Text>Normal</Text>
          <Text>
           {subTotal}
          </Text>
        </Flex>
        <Flex paddingLeft="8px" justify="space-between">
          <Text>Sub Total</Text>
          <Text>
            {subTotal}
          </Text>
        </Flex>
        <Flex paddingLeft="8px" justify="space-between">
          <Text>Discount {checkoutData?.discount}%</Text>
          <Text>{afterDiscount}</Text>
        </Flex>
        <Flex paddingLeft="8px" justify="space-between">
          <Text>Tax 13%</Text>
          <Text>{tax}</Text>
        </Flex>

        <Flex paddingLeft="8px" justify="space-between">
          <Text>Total</Text>
          <Text>{total}</Text>
        </Flex>
        <Box>
          <Button
            variant="solid"
            colorScheme="red"
            onClick={() => {
              navigate("/your-invoice");
            }}
          >
            Confirm and Pay
          </Button>
        </Box>
      </Flex>
    </>
  );
};

export default CheckOutSummary;
