import React from "react";
import { getUpcoming } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToUpcoming from '../components/cardIcons/addToUpcoming';

const Upcoming = (props) => {

  const {  data, error, isLoading, isError }  = useQuery('upcoming', getUpcoming)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;

  
  // Redundant, but necessary to avoid app crashing.

  const addToUpcoming = (movieId) => true;

return (
  <PageTemplate
      title="Upcoming Movies"
      movies={movies}
      action={(movie) => {
        return <AddToUpcoming movie={movie} addToUpcoming={addToUpcoming} />;
      }}
    />
  );
};

export default Upcoming;