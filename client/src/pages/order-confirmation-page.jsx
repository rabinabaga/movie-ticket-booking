import { Text, Flex,   Button,Box } from "@chakra-ui/react";
import CheckOutSummary from "../components/subcomponents/checkout-summary";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import {
  FormControl,
  FormLabel,Input,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import { CheckoutDataState } from "../context/ticket";
import { useSelector } from "react-redux";


export const OrderConfirmationPage = () => {
    const movieDetailState = useSelector((state) => state.movies.movieDetail);
    const { checkoutData, setCheckoutData } = CheckoutDataState();
    
    return (
      <>
        <Flex flexDir="column" justify="space-evenly">
          <Text fontSize={{ base: "24px", md: "30px" }}>
            Order Confirmation
          </Text>
          <hr />

          <Flex justify="space-evenly" flexWrap="wrap" flexDir="row">
            <Flex flexDir="column" w={{ base: "100%", md: "40%" }}>
              <Text fontSize={{ base: "22px" }}>Information</Text>
              <FormControl>
                <FormLabel>Full Name:</FormLabel>
                <Input type="text" placeholder="eg. Jane Cooper" />
              </FormControl>
              <Flex
                flexDir="row"
                justify="space-between"
                flexWrap="wrap"
            
              >
                <FormControl w="45%">
                  <FormLabel>Email*:</FormLabel>
                  <Input type="text" placeholder="eg.janecooper@xyz.com" />
                  <FormHelperText>We'll never share your email.</FormHelperText>
                </FormControl>
                <FormControl w="45%">
                  <FormLabel>Address*:</FormLabel>
                  <Input type="text" />
                </FormControl>
                <FormControl w="45%">
                  <FormLabel>Country*:</FormLabel>
                  <Input type="text" defaultValue="Nepal" />
                </FormControl>
                <FormControl w="45%">
                  <FormLabel>State:</FormLabel>
                  <Input type="text" />
                </FormControl>
                <FormControl w="45%">
                  <FormLabel>City:</FormLabel>
                  <Input type="text" />
                </FormControl>
                <FormControl w="45%">
                  <FormLabel>Zip/Post Code:</FormLabel>
                  <Input type="number" />
                </FormControl>

              
              </Flex>
            </Flex>

            <CheckOutSummary></CheckOutSummary>
          </Flex>
        </Flex>
      </>
    );
}
export default OrderConfirmationPage;





