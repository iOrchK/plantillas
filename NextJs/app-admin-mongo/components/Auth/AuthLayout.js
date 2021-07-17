import Head from "next/head";
import React from "react";
import Cookies from "js-cookie";
import { USER_INFO_ENDPOINT } from "../../utils/defaultVariables";
import { APIRequest, setAuthToken } from "../../utils/helpers";
import AuthContext from "./Context/AuthContext";
import { useRouter } from "next/router";

const AuthLayout = ({ title, children }) => {
  const [auth, setAuth] = React.useState(null);
  const router = useRouter();
  const authContext = React.useContext(AuthContext);
  const { isAuth } = authContext;

  React.useEffect(() => {
    const token = Cookies.get("ns_admin_token");
    if (token !== null && token !== undefined && token !== "") {
      getUser();
    }
    setAuthToken(token);
  }, []);

  const getUser = async () => {
    const res = await APIRequest.get(USER_INFO_ENDPOINT);
    console.log(res);
    if (!res) router.push("/auth");
    await isAuth();
    setAuth(res);
  };

  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {children}
    </div>
  );
};

export default AuthLayout;
