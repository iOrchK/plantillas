import React from "react";
import AuthContext from "./AuthContext";
import AuthReducer from "./AuthReducer";
import { GET_PROFILE, LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT } from "./AuthTypes";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import {
  USER_INFO_ENDPOINT,
  USER_LOGIN_ENDPOINT,
} from "../../../utils/defaultVariables";
import {
  APIRequest,
  encodePassword,
  setAuthToken,
} from "../../../utils/helpers";

const AuthState = ({ children }) => {
  //   const router = useRouter();
  const token = Cookies.get("ns_admin_token");

  const initialState = {
    token,
    auth: null,
    user: null,
  };

  const [state, dispatch] = React.useReducer(AuthReducer, initialState);

  const login = async (user) => {
    try {
      const password = encodePassword(user.password);
      const response = await APIRequest.post(USER_LOGIN_ENDPOINT, {
        ...user,
        password,
      });
      console.log(response);
      if (response) {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: response,
        });
        isAuth();
        //router.push('/admin')
      } else {
        dispatch({
          type: LOGIN_ERROR,
        });
      }
    } catch (err) {
      console.log(err);
      dispatch({
        type: LOGIN_ERROR,
      });
    }
  };

  const isAuth = async () => {
    const token = Cookies.get("ns_admin_token");
    if (token) {
      setAuthToken(token);
    } else {
      dispatch({
        type: LOGIN_ERROR,
      });
    }

    try {
      const res = await APIRequest.get(USER_INFO_ENDPOINT);
      console.log(res);
      if (res) {
        dispatch({
          type: GET_PROFILE,
          payload: res,
        });
      } else {
        dispatch({
          type: LOGIN_ERROR,
        });
      }
    } catch (err) {
      console.log(err.response);
      dispatch({
        type: LOGIN_ERROR,
      });
    }
  };

  const logout = async () => {
    console.log(state);
    setAuthToken(null);
    dispatch({
      type: LOGOUT,
    });
  };

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        auth: state.auth,
        user: state.user,
        login,
        isAuth,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthState;
