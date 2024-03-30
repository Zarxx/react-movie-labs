import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from "react-query";
import { getPopularMovies } from "../api/tmdb-api";
import Spinner from "../components/spinner";
import MuSlider from "../components/mu-slider/MuSlider";

const PopularMoviesPage = (props) => {
  //fetching populkar movies data
  const { data, error, isLoading, isError } = useQuery(
    "populars",
    getPopularMovies,
    {
      staleTime: 360000,
      refetchInterval: 360000,
      refetchOnWindowFocus: false,
    }
  );

  if (isLoading) {
    console.log({
      loading: "loding.",
    });
    return <Spinner />;
  }

  if (isError) {
    return <h1>Error loading data: {error.message}</h1>;
  }
  console.log({
    data,
  });

  const movies = data.results;

  console.log({
    movies,
  });

  if (movies && movies.length > 0) {
    return (
      <>
        <PageTemplate
          title="Popular Movies"
          movies={movies}
          action={(movie) => {}}
        />
        <MuSlider />
      </>
    );
  } else {
    return <p>Failed to load popular movies</p>;
  }
};

export default PopularMoviesPage;
