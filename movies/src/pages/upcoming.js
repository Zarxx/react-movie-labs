import React from "react";
import { getUpcoming } from "../api/tmdb-api";
import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";

const Upcoming = (props) => {
  const { data, error, isLoading, isError } = useQuery(
    "upcoming",
    getUpcoming,
    {
      staleTime: 360000, //data fresh for 6 minutes
      refetchInterval: 360000, //refetches data every 6 minutes
      refetchOnWindowFocus: false, //does not refetch data if window is in focus
    }
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  const movies = data.results;

  // Redundant, but necessary to avoid app crashing.

  return (
    <PageTemplate
      title="Upcoming Movies"
      movies={movies}
      action={(movie) => {}}
    />
  );
};

export default Upcoming;
