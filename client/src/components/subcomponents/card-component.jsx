import {
  Card,
  Stack,
  Heading,
  Text,
  ButtonGroup,
  Button,
  Divider,
  Image,
  CardBody,
  CardFooter,
  VStack,
  HStack,
  Flex,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const CardComponent = ({  i=null,
   setHoveredCard =null,
   setShowCTA =false,
  hoveredCard=null,
  item,
  displayCTA=null
}
) => {
     const navigate = useNavigate();
// console.log("item", item);
  return (
    <>
      <Card
        key={i}
        maxW="sm"
        onMouseOver={() => {
         if(displayCTA){
           setHoveredCard(i);
         }
        }}
        onMouseOut={() => {
         if(displayCTA){
           setShowCTA(false);
         }
        }}
      >
     <CardBody style={{ position: "relative", backgroundColor: "#14111A" }}>
          <Image
            position="ab"
            width="100%"
            src={item?.Poster}
            borderRadius="lg"
          />
        {hoveredCard == i && displayCTA && (
             <ButtonGroup
               style={{
                 position: "absolute",
                 bottom: "50%",
                left: "30%",
              }}
              spacing="2"
            >
              <VStack>
                <Button variant="solid" colorScheme="red">
                  Get Tickets
                </Button>
                <Button
                  variant="solid"
                  colorScheme="white"
                  onClick={() => {
                    navigate("eventDetails/"+item?.imdbID);
                  }}
                >
                  View Details
                </Button>
              </VStack>
            </ButtonGroup>
          )}
          <Stack mt="6" spacing="3" color="white">
            <Heading size="md">{item?.Title}</Heading>
            <HStack spacing="8">
              <Text>August 29 2023</Text>

              <Text>Kathmandu, Nepal</Text>
            </HStack>
          </Stack>
        </CardBody>
      </Card>
    </>
  );
};

export default CardComponent;


// const CardComponent = ({i}) => {
//   return ( <>
//     <p>Card with {i}</p>
//   </> );
// }
 
// export default CardComponent;