import React, { useEffect } from "react";
import axios from "axios";

function MovieList(props) {
  const { setMovieList, setEpisodeList, setSeriesList, search } = props;

  const url = `https://omdbapi.com/?s=${search}&apikey=eca60660`;
  console.log("first");
  const fetchApi = async () => {
    try {
      const resp = await axios.get(url);
      const movieData = resp.data;
      console.log(movieData, "d");
      const { Search: search, Response: response } = movieData;
      const seriesList = search.filter(({ Type }) => Type === "series");
      const movieList = search.filter(({ Type }) => Type === "movie");
      const episodeList = search.filter(({ Type }) => Type === "episode");

      setSeriesList(() => seriesList);
      setMovieList(() => movieList);
      setEpisodeList(() => episodeList);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchApi();
  }, [search]);
}

export default MovieList;
