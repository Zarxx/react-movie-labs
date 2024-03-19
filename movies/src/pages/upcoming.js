import React, { useState, useEffect } from "react";
import PageTemplate from "../components/templateMovieListPage";
import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/movie/upcoming',
  params: {language: 'en-US', page: '1'},
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer f4f06b44f097d50bc065937344408b11'
  }
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });



const FavoriteMoviesPage = (props) => {
    const toDo = () => true;
    // Get movies from local storage.
    const movies = JSON.parse(localStorage.getItem("favorites")); 
  
    return (
      <PageTemplate
        title="Upcoming Movies"
        movies={movies}
        selectFavorite={toDo}
      />
    );
  };

export default upcoming;