import React, { useContext } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { MoviesContext } from "../contexts/moviesContext";
import { useQueries } from "react-query";
import { getMovie } from "../api/tmdb-api";
import Spinner from '../components/spinner';
import RemoveFromPlaylist from "../components/cardIcons/removeFromPlaylist";

const ToWatchPage = () => {
  const {playlist: movieIds } = useContext(MoviesContext);

   //Create an array of queries and run in parallel.
  const toWatchQueries = useQueries(
    movieIds.map((movieId) => {
       return {
        queryKey: ["movie", { id: movieId }],
         queryFn: getMovie,
       };
     })
   );
   //Check if any of the parallel queries is still loading.
   const isLoading = toWatchQueries.find((m) => m.isLoading === true);

   if (isLoading) {
     return <Spinner />;
   }

   const movies = toWatchQueries.map((q) => {
     q.data.genre_ids = q.data.genres.map(g => g.id)
     console.log(q.data.genres)
     return q.data
    
   });

  return (
    <PageTemplate
      title="Movies to Watch"
      movies={movies}
      action={(movie) => {
        return (
          <>
            <RemoveFromPlaylist movie={movie} />
          </>
        );
      }}
    />
  );
};

export default ToWatchPage;