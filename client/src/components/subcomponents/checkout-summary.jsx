import { Box, Text, Flex, Button } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";

import {getCurrentMovie, selectCurrentMovie} from "../../reducers/movie.reducer"
import { useNavigate } from "react-router-dom";

const CheckOutSummary = ({children}) => {
     const movieCurrent = useSelector(selectCurrentMovie);
      const navigate = useNavigate();

    return (
      <>
        <Flex flexDir="column">
          <Text fontSize={{ base: "20px", md: "18px" }}>Checkout Summary</Text>
          <Text fontSize={{ base: "20px", md: "18px" }}>
            {" "}
            {movieCurrent?.Title}
          </Text>
          <span>concert</span> <span>Kathmandu.Nepal</span>
          <Flex paddingLeft="8px" justify="space-between">
            <Text>Normal</Text>
            <Text>$500.00</Text>
          </Flex>
          <Flex paddingLeft="8px" justify="space-between">
            <Text>Sub Total</Text>
            <Text>$1000.00</Text>
          </Flex>
          <Flex paddingLeft="8px" justify="space-between">
            <Text>Tax 13%</Text>
            <Text>$130.00</Text>
          </Flex>
          <Flex paddingLeft="8px" justify="space-between">
            <Text>Discount 0%</Text>
            <Text>$0.00</Text>
          </Flex>
          <Flex paddingLeft="8px" justify="space-between">
            <Text>Total</Text>
            <Text>$1130.00</Text>
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
}
 
export default CheckOutSummary;