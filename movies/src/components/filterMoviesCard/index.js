import React, {useState}  from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import img from '../../images/pexels-dziana-hasanbekava-5480827.jpg'
import { getGenres, getReleaseYears } from "../../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from '../spinner'

const formControl = {
  margin: 1,
  minWidth: 220,
  backgroundColor: "rgb(255, 255, 255)",
};

export default function FilterMoviesCard(props) {
  const { setNameFilter, setGenreFilter, setReleaseYearFilter } = props;
const [releaseYear, setReleaseYear] = useState("");
const { data, error, isLoading, isError } = useQuery("genres", getGenres);



const handleChange = (type, value) => {
  if (type === "name") setNameFilter(value);
  else if (type === "genre") setGenreFilter(value);
  else if (type === "releaseYear") setReleaseYearFilter(value);
};

const handleTextChange = (e) => {
  handleChange(e, "name", e.target.value);
};

const handleGenreChange = (e) => {
  handleChange(e, "genre", e.target.value);
};

const handleYearChange = (e) => {
  setReleaseYear(e.target.value);
};

const handleReleaseYearChange = (e) => {
  const selectedYear = e.target.value;
  setReleaseYear(selectedYear);        //updates local state
  setReleaseYearFilter(selectedYear);  //updates prop
};


if (isLoading) {
  return <Spinner />;
}

if (isError) {
  return <h1>{error.message}</h1>;
}

const genres = data.genres;
  if (genres[0].name !== "All") {
    genres.unshift({ id: "0", name: "All" });
  }





  return (
    <Card 
    sx={{
      maxWidth: 345,
      backgroundColor: "rgb(204, 204, 0)"
    }} 
    variant="outlined">
    <CardContent>
      <Typography variant="h5" component="h1">
        <SearchIcon fontSize="large" />
        Filter the movies.
      </Typography>
      <TextField
      sx={{...formControl}}
      id="filled-search"
      label="Search field"
      type="search"
      variant="filled"
      value={props.titleFilter}
      onChange={(e) => setNameFilter(e.target.value)}
    />
        <FormControl sx={{...formControl}}>
        <InputLabel id="genre-label">Genre</InputLabel>
        <Select
          labelId="genre-label"
          id="genre-select"
          defaultValue=""
          value={props.genreFilter}
          onChange={(e) => setGenreFilter(e.target.value)}
   >
            {genres.map((genre) => {
            return (
              <MenuItem key={genre.id} value={genre.id}>
                {genre.name}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>




<FormControl sx={{ ...formControl }}>
<InputLabel id="release-year-label">Release Year</InputLabel>

<Select
    labelId="release-year-label"
    id="release-year-select"
    value={props.releaseYearFilter}
    onChange={handleReleaseYearChange}
  >

<MenuItem value="">All</MenuItem>
<MenuItem value="2024">2024</MenuItem>
<MenuItem value="2023">2023</MenuItem>
<MenuItem value="2023">2022</MenuItem>
<MenuItem value="2023">2021</MenuItem>
<MenuItem value="2023">2020</MenuItem>
<MenuItem value="2023">2019</MenuItem>
<MenuItem value="2023">2018</MenuItem>
<MenuItem value="2023">2017</MenuItem>
<MenuItem value="2023">2016</MenuItem>
<MenuItem value="2023">2015</MenuItem>
<MenuItem value="2023">2014</MenuItem>
<MenuItem value="2023">2013</MenuItem>
<MenuItem value="2023">2012</MenuItem>
<MenuItem value="2023">2011</MenuItem>
<MenuItem value="2023">2010</MenuItem>
<MenuItem value="2023">2009</MenuItem>
<MenuItem value="2023">2008</MenuItem>
<MenuItem value="2023">2007</MenuItem>
<MenuItem value="2023">2006</MenuItem>
<MenuItem value="2023">2005</MenuItem>
<MenuItem value="2023">2004</MenuItem>


</Select>
</FormControl>

</CardContent>
      <CardMedia
        sx={{ height: 300 }}
        image={img}
        title="Filter"
      />
      <CardContent>
        <Typography variant="h5" component="h1">
          <SearchIcon fontSize="large" />
          Filter the movies.
          <br />
        </Typography>
      </CardContent>
    </Card>
  );
}