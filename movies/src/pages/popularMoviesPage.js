import React from "react";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import { getPopularMovies } from "../api/tmdb-api";
import Spinner from '../components/spinner';


const PopularMoviesPage = () => {
//fetching populkar movies data
    const { data: movies, error, isLoading, isError } = useQuery('popular', getPopularMovies);

    if (isLoading) {
        return <Spinner />;
      }

      if (isError) {
        return <h1>Error loading data</h1>;
      }



      const movieList = movies && movies.results ? movies.results : [];


  
  


      return (
        <PageTemplate
          title="Popular Movies"
          movies={movieList}
        />
      );
      }

export default PopularMoviesPage;