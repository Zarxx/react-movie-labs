import * as React from "react";
import Checkbox from "@mui/material/Checkbox";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function MuCheckbox() {
  return (
    <div>
      <Checkbox {...label} defaultUnchecked />
    </div>
  );
}
