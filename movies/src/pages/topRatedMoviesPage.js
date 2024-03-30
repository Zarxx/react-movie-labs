import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from "react-query";
import { getTopRatedMovies } from "../api/tmdb-api";
import Spinner from "../components/spinner";
import MuSlider from "../components/mu-slider/MuSlider";

//   const TopRatedMoviesPage = () => {
//   const { data, error, isLoading, isError } = useQuery(
//  "toprated",
//   getTopRatedMovies
//   );

const TopRatedMoviesPage = (props) => {
  const { data, error, isLoading, isError } = useQuery(
    "toprated",
    getTopRatedMovies,
    {
      staleTime: 360000,
      refetchInterval: 360000,
      refetchOnWindowFocus: false,
    }
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const movies = data.results;

  return (
    <>
      <PageTemplate
        title="Top Rated Movies"
        movies={movies}
        action={(movie) => {}}
      />
      <MuSlider />
    </>
  );
};

export default TopRatedMoviesPage;
