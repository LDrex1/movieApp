import { Typography } from "@mui/material";
import React from "react";
import MovieList from "./MovieList";
import MovieRow from "./MovieRow";

function MovieListPage(props) {
  const { setMovieList, setEpisodeList, setSeriesList } = props;
  const { movieList, episodeList, seriesList } = props;
  console.log(movieList, "");
  return (
    <>
      <Typography component={"h3"} variant={"h5"} mt={8}>
        Movies
      </Typography>
      <MovieRow movieList={movieList} />
      <Typography component={"h3"} variant={"h5"}>
        Series
      </Typography>
      <MovieRow movieList={seriesList} />
      <Typography component={"h3"} variant={"h5"}>
        Episodes
      </Typography>
      <MovieRow movieList={episodeList} />
      <MovieList
        setMovieList={setMovieList}
        setSeriesList={setSeriesList}
        setEpisodeList={setEpisodeList}
        search={props.search}
      />
      ;
    </>
  );
}

export default MovieListPage;
