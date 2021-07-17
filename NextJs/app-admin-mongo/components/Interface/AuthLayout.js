import { Button } from "@material-ui/core";
import { useRouter } from "next/router";
import React from "react";

const AuthLayout = ({ children }) => {
  const router = useRouter();

  return <div>{children}</div>;
};

export default AuthLayout;
