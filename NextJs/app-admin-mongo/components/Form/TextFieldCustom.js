import { TextField } from "@material-ui/core";
import React from "react";

const TextFieldCustom = (props) => {
  return (
    <TextField
      margin="dense"
      id="name"
      label="label"
      type="text"
      variant="outlined"
      fullWidth
      {...props}
    />
  );
};

export default TextFieldCustom;
