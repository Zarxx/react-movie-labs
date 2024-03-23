import React from 'react';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';

const AddToUpcoming = ({ movie, addToUpcoming }) => {
    const handleAddToUpcoming = () => {
      addToUpcoming(movie.id);
    };

    return (
        <IconButton aria-label="add to upcoming" onClick={handleAddToUpcoming}>
          <FavoriteIcon color="primary" fontSize="large" />
        </IconButton>
      );
    };

    export default AddToUpcoming;