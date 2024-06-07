import { Flex, Box } from "@chakra-ui/react";
import TicketBox from "../components/subcomponents/ticket-box";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CardComponent from "../components/subcomponents/card-component";
import { getMovieDetailAsync } from "../state/movies/movieFetchingSlice";
import { getAllMoviesAsync } from "../state/movies/movieFetchingSlice";
import { useEffect } from "react";
import { CheckoutDataState } from "../context/ticket";
const EventDetails = ({ children, ...props }) => {
  const dispatch = useDispatch();

  let { imdbID } = useParams();
const {checkoutData, setCheckoutData} = CheckoutDataState();
  const movieDetailState = useSelector((state) => state.movies.movieDetail);
  const allMoviesState = useSelector((state) => state.movies.allMovies);
  console.log("movie detail state", movieDetailState);
  console.log("all movies", allMoviesState.Search);
  useEffect(() => {
    dispatch(getMovieDetailAsync(imdbID));
  }, []);
  useEffect(() => {
    setCheckoutData((prev) => {
      return {
        ...prev,
        pricePerTicket: movieDetailState?.price,

      };
    });
  }, [movieDetailState]);

  return (
    <>
      <Flex
        dir="row"
        p={8}
        justify="space-evenly"
        bg={["primary.500", "primary.500", "transparent", "transparent"]}
      >
        <Box>
          <CardComponent item={movieDetailState}></CardComponent>
        </Box>

        <Box>
          <TicketBox></TicketBox>
        </Box>
      </Flex>
    </>
  );
};

export default EventDetails;
