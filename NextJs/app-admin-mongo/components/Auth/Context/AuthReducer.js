import { GET_PROFILE, LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT } from "./AuthTypes";
import Cookies from "js-cookie";

const AuthReducer = (state, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      console.log(action);
      Cookies.set("ns_admin_token", action.payload.token, { expires: 1 });
      return {
        ...state,
        auth: true,
      };
    case GET_PROFILE:
      console.log(action);
      return {
        ...state,
        user: action.payload,
        auth: action.payload ? true : false,
      };
    case LOGIN_ERROR:
      console.log(action);
      Cookies.remove("ns_admin_token");
      return {
        ...state,
        token: null,
        auth: false,
        user: null,
      };
    case LOGOUT:
      console.log(action);
      Cookies.remove("ns_admin_token");
      return {
        token: null,
        user: null,
        auth: false,
      };
  }
};

export default AuthReducer;
