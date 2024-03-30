import React, { useState } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

export default function MuSlider() {
  const [sliderValue, setSliderValue] = useState(50); //default slider value

  const handleSliderChange = (event, newValue) => {
    console.log(newValue);
    setSliderValue(newValue);
    updateBackgroundColor(newValue);
  };

  const updateBackgroundColor = (value) => {
    const darkness = value / 100; //conver value to percentage berween 0 and 1
    const backgroundColor = `hsl(0, 0%, ${100 - darkness * 100}%)`; //adjust lightness
    document.body.style.backgroundColor = backgroundColor; //update lightness
  };

  return (
    <Box sx={{ width: 300 }}>
      <Slider
        value={sliderValue}
        onChange={handleSliderChange}
        aria-label="Slider"
        valueLabelDisplay="auto"
      />
      <p>Value: {sliderValue}</p>
    </Box> //displays slider value
  );
}
