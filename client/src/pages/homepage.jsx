import { useEffect, useState } from "react";
import moviesSvc from "./movies/movies.service";
import { useNavigate } from "react-router-dom";
import CardComponent from "../components/subcomponents/card-component"
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

const HomePage = () => {

  const [fetchedMovies, setFetchedMovies] = useState([]);
  const [hoveredCard, setHoveredCard] = useState();
   const [showCTA, setShowCTA] = useState(false);
  const getFilteredListMovies = async () =>{
    let response = await moviesSvc.getFilteredListMovies();
    console.log("response", response.Search[1].Title);
    setFetchedMovies(response.Search)
  }
  useEffect(()=>{
    getFilteredListMovies()
  }, [])
  return (
    <>
    
      <Flex flexWrap="wrap">
        {fetchedMovies?.map((item, i) => {
          return (
            <>
              {/* setHoveredCard , setShowCTA , hoveredCard, item */}
              <CardComponent
                displayCTA={true} i={i}
                setShowCTA={setShowCTA}
                setHoveredCard={setHoveredCard}
                hoveredCard={hoveredCard}
                item={item}
              />
            </>
          );
        })}
      </Flex>
    </>
  );
}
 
export default HomePage;