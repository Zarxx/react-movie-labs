import React, { useState } from "react";
import Header from "../headerMovieList";
import FilterCard  from "../filterMoviesCard";
import MovieList from "../movieList";
import Grid from "@mui/material/Grid";

function MovieListPageTemplate({ movies, title, action }) {
  const [nameFilter, setNameFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0");
  const genreId = Number(genreFilter);
  const [releaseYearFilter, setReleaseYearFilter] = useState("");
  
  let displayedMovies = movies
  .filter((m) => m.title.toLowerCase().search(nameFilter.toLowerCase()) !== -1)
  .filter((m) => (genreId > 0 ? m.genre_ids.includes(genreId) : true))
  .filter((m) => (releaseYearFilter ? m.releaseYear === releaseYearFilter : true));

  const handleChange = (type, value) => {
    if (type === "name") {
      setNameFilter(value);
    } else if (type === "genre") {
      setGenreFilter(value);
    } else if (type === "releaseYear") {
      setReleaseYearFilter(value);
    }
  };

  return (
    <Grid container sx={{ padding: '20px' }}>
      <Grid item xs={12}>
        <Header title={title} />
      </Grid>
      <Grid item container spacing={5}>
        <Grid key="find" item xs={12} sm={6} md={4} lg={3} xl={2}>
          <FilterCard
            onUserInput={handleChange}
            titleFilter={nameFilter}
            genreFilter={genreFilter}
            releaseYearFilter={releaseYearFilter}
            setReleaseYearFilter={setReleaseYearFilter}
            setGenreFilter={setGenreFilter}
          />
        </Grid>
        <MovieList action={action} movies={displayedMovies}></MovieList>
      </Grid>
    </Grid>
  );
}
export default MovieListPageTemplate;