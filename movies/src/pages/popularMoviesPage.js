import React from "react";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import { getPopularMovies } from "../api/tmdb-api";
import Spinner from '../components/spinner';


const PopularMoviesPage = (props) => {
//fetching populkar movies data
const { data, error, isLoading, isError } = useQuery('popular', getPopularMovies);


    if (isLoading) {
        return <Spinner />;
      }

      if (isError) {
        return <h1>Error loading data: {error.message}</h1>;
      }

      const movies = data.results;




      return (
        <PageTemplate
          title="Popular Movies"
          movies={movies}
          
        />
      );
    };

export default PopularMoviesPage;