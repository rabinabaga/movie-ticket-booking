import { Flex, Box } from "@chakra-ui/react";
import TicketBox from "../components/subcomponents/ticket-box";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentMovie, getMovieStatus } from "../reducers/movie.reducer";
import { getCurrentMovie } from "../reducers/movie.reducer";
import CardComponent from "../components/subcomponents/card-component";

const EventDetails = ({ children, ...props }) => {
  const dispatch = useDispatch();

  let { imdbID } = useParams();

  const movieStatus = useSelector(getMovieStatus);
  console.log("movie status", movieStatus);
  const movieCurrent = useSelector(selectCurrentMovie);


  // const handleDispatchResult = (movie)=>{
  //   setCurrentMovie(movie)
  // }
  useEffect(() => {
    if (movieStatus === "idle") {
      dispatch(getCurrentMovie(imdbID));
    }
  }, [movieStatus, dispatch]);

  // const currentMovieDetails = useSelector((root) => {
  //   console.log("in use selector in userp rofile page", root.movie);
  //   // return root.movie.currentMovie;
  // });

  //  useEffect(() => {
  //    dispatch(getCurrentMovie(imdbID)).then((res)=>{
  //     console.log("dispatch of get current movie", res.payload);
  //     // handleDispatchResult(res.payload);
  //    });

  //  }, []);

  return (
    <>
      <Flex
        dir="row"
        p={8}
        justify="space-evenly"
        bg={["primary.500", "primary.500", "transparent", "transparent"]}
      >
        <Box>
        <CardComponent item={movieCurrent}></CardComponent>
        
        </Box>

        <Box>
          <TicketBox></TicketBox>
        </Box>
      </Flex>
    </>
  );
};

export default EventDetails;
