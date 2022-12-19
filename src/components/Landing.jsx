import React from "react";
import Navigation from "./navigation/Navigation";
import Hero from "./hero/Hero";
import Search from "./search/Search";
import { Box } from "@mui/system";
import { useState } from "react";
import MovieListPage from "./movieList/MovieListPage";

function Landing() {
  const [search, setSearch] = useState("");
  const [movieList, setMovieList] = useState([]);
  const [seriesList, setSeriesList] = useState([]);
  const [episodeList, setEpisodeList] = useState([]);
  return (
    <>
      <Navigation />
      <Hero />
      <Box
        sx={{
          padding: {
            xs: "81px 0 50px 28px",
            sm: "98px 0 67px 77px",
            md: "98px 0 67px 67px",
          },
          overflowX: "hidden",
        }}
      >
        <Search setSearch={setSearch} />
        <MovieListPage
          episodeList={episodeList}
          movieList={movieList}
          seriesList={seriesList}
          setMovieList={setMovieList}
          setSeriesList={setSeriesList}
          setEpisodeList={setEpisodeList}
          search={search}
        />
      </Box>
    </>
  );
}

export default Landing;
