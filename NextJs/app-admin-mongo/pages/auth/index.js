import React from "react";
import AuthLayout from "../../components/Auth/AuthLayout";
import SignIn from "../../components/Auth/SignIn";

const Auth = () => {
  const cover = "https://source.unsplash.com/random";

  return (
    <div
      style={{
        backgroundImage: `url(${cover})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: "100vh",
      }}
    >
      <AuthLayout>
        <SignIn />
      </AuthLayout>
    </div>
  );
};

export default Auth;
