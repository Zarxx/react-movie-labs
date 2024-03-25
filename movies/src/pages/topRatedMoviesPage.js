import React from "react";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import { getTopRatedMovies } from "../api/tmdb-api";
import Spinner from '../components/spinner';

const TopRatedMoviesPage = () => {
    const { data: movies, error, isLoading, isError } = useQuery('topRated', getTopRatedMovies);

    if (isLoading) {
        return <Spinner />;
      }

      if (isError) {
        return <h1>Error</h1>;
      }

      return (
        <PageTemplate
          title="Top Rated Movies"
          movies={movies.results}
        />
      );
    };

    export default TopRatedMoviesPage;