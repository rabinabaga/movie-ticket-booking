import HttpService from "../../service/http.service";

class MoviesService extends HttpService {
  async getFilteredListMovies() {
    try {
      let response = await this.getRequest(
        "https://www.omdbapi.com/?apiKey=3c96e044&page=1&s=batman",
        null
      );

      console.log("resons g pl sevc", response);
      return response;
    } catch (exception) {
      throw exception;
    }
  }

  async getCurrentMovie(imdbID){
    try{
      let response = await this.getRequest(
        "https://www.omdbapi.com/?apiKey=3c96e044&page=1&i="+imdbID
      );
      return response;
    }catch(exception){
      throw exception;
    }
  }


}

const moviesSvc = new MoviesService();
export default moviesSvc;
