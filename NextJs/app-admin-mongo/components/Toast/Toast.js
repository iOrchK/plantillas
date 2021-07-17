import React from "react";
import { toast } from "react-toastify";
import SuccessIcon from "@material-ui/icons/Check";
import ErrorIcon from "@material-ui/icons/Error";
import WarningIcon from "@material-ui/icons/Warning";
import InfoIcon from "@material-ui/icons/Info";
import { Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import { transformTextToSpeech } from "../../utils/helpers";

const WhiteTextTypography = withStyles({
  root: {
    color: "#FFFFFF",
  },
})(Typography);

const ToastOptions = {
  position: "bottom-center",
  pauseOnHover: false,
  autoClose: 4000,
  closeOnClick: true,
  hideProgressBar: false,
};

export function ToastSuccess(message) {
  const Content = (
    <WhiteTextTypography>
      <SuccessIcon />
      {message}
    </WhiteTextTypography>
  );
  transformTextToSpeech(message);
  return toast.success(Content, ToastOptions);
}

export function ToastWarning(message) {
  const Content = (
    <WhiteTextTypography>
      <WarningIcon />
      {message}
    </WhiteTextTypography>
  );
  transformTextToSpeech(message);
  return toast.warning(Content, ToastOptions);
}

export function ToastError(message) {
  const Content = (
    <WhiteTextTypography>
      <ErrorIcon />
      {message}
    </WhiteTextTypography>
  );
  transformTextToSpeech(message);
  return toast.error(Content, ToastOptions);
}

export function ToastInfo(message) {
  const Content = (
    <WhiteTextTypography>
      <InfoIcon />
      {message}
    </WhiteTextTypography>
  );
  transformTextToSpeech(message);
  return toast.info(Content, ToastOptions);
}
