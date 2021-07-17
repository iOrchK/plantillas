import React from "react";
import {
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import uuid from "react-uuid";

const PasswordFieldCustom = ({
  label,
  labelWidth,
  error,
  helperText,
  ...others
}) => {
  const [idEl, setIdEl] = React.useState(uuid());
  const [showPassword, setShowPassword] = React.useState(false);

  React.useEffect(() => {
    setIdEl(uuid());
  }, []);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <FormControl fullWidth variant="outlined" margin="dense">
      <InputLabel htmlFor={idEl} error={error}>
        {!label ? "Contraseña" : label}
      </InputLabel>
      <OutlinedInput
        id={idEl}
        type={showPassword ? "text" : "password"}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
              component="span"
            >
              {showPassword ? (
                <Visibility fontSize="small" />
              ) : (
                <VisibilityOff fontSize="small" />
              )}
            </IconButton>
          </InputAdornment>
        }
        labelWidth={!label ? 88 : labelWidth}
        error={error}
        helperText="error"
        {...others}
      />
      {error ? (
        <FormHelperText className="MuiFormHelperText-root Mui-error">
          {helperText || "Contraseña requerida"}
        </FormHelperText>
      ) : null}
    </FormControl>
  );
};

export default PasswordFieldCustom;
