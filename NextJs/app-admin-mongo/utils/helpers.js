/**
 * DEPENDENCIAS:
 * npm i react-toastify n2words axios
 */
import { ToastError, ToastSuccess } from "../components/Toast/Toast";
import * as n2words from "n2words";
import axios from "axios";
import * as CryptoJS from "crypto-js";

export const isContent = (obj) => {
  if (typeof obj === "object" && obj != null && obj?.length > 0) return true;
  else return false;
};

export const copyTextToClipBoard = async (text, successMessage) => {
  let message = "Texto copiado";
  if (typeof successMessage === "string") {
    message = successMessage;
  }
  // Validar secure context (https) para usar la navigator clipboard api
  if (
    typeof navigator != "undefined" &&
    navigator.clipboard &&
    typeof window != "undefined" &&
    window.isSecureContext
  ) {
    // Copiar link con la navigator clipboard api
    await navigator.clipboard.writeText(text);
    console.log("Con navigator", text);
    ToastSuccess(message);
  } else {
    // Crear un TextArea oculto
    let textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";
    textArea.style.left = "-999999px";
    textArea.style.top = "-999999px";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    console.log("Sin navigator", text);

    let copied = document.execCommand("copy");

    if (copied) {
      ToastSuccess(message);
    } else {
      ToastError("Esta función no es compatible con el navegador");
    }

    document.body.removeChild(textArea);
  }
};

export const transformTextToSpeech = (text) => {
  var msg = new SpeechSynthesisUtterance(text);
  window.speechSynthesis.speak(msg);
};

export const transformNumberToWords = (
  num,
  lang = "es",
  female = false,
  isPronoun = false,
  plural = false
) => {
  if (!num || typeof num !== "number") return "";
  if (num === 1) {
    if (female) {
      if (plural) return "unas";
      return "una";
    } else {
      if (isPronoun) return "un";
      if (plural) return "unos";
    }
  }
  return n2words(num, { lang });
};

export const getNameInitial = (name) => {
  if (typeof name !== "string") return "";
  if (!name?.length) return "";
  return name[0].toUpperCase();
};

/**
 * API HELPERS
 */

const statusSuccess = [200, 201, 202, 203];
const statusAlertSuccess = [201, 202, 203];

export const APIRequest = axios.create();

// Request Interceptor
APIRequest.interceptors.request.use(
  async (config) => {
    return config;
  },
  async (error) => {
    console.log("Request Error: ", error.message);
    ToastError(error.message);
  }
);

// Response Interceptor
APIRequest.interceptors.response.use(
  async (response) => {
    let { code, message, data } = response?.data;
    if (statusSuccess.indexOf(+code) === -1) {
      ToastError(message);
      return;
    }
    if (statusAlertSuccess.indexOf(+code) !== -1) {
      ToastSuccess(message);
    }
    return data;
  },
  async (error) => {
    if (error?.message === "Network Error" && !error?.response) {
      ToastError("Error de conexión, por favor inténtelo más tarde");
      return;
    }

    const { status, data } = error.response;

    if (status === 401) return null;

    if (status === 404) {
      ToastError("El servicio no existe");
      return;
    }

    if (data?.detail) {
      ToastError(data.detail);
      return;
    }

    if (data?.message) {
      ToastError(data.message);
      return;
    }

    if (status === 500) {
      ToastError("A ocurrido un error en el servidor");
      return;
    }
  }
);

export const setAuthToken = (token) => {
  if (token)
    APIRequest.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  else delete APIRequest.defaults.headers.common["Authorization"];
};

export const RequestMethod = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  DELETE: "DELETE",
};

export const StatusCode = {
  req_method_not_supported: "Método de consulta no soportado",
  data_incomplete: "Datos incompletos",
};

export const getStatusMessage = (key) => StatusCode[key];

export const getResponse = (code, message, data = null) => ({
  code,
  message,
  data,
});

export const encodePassword = (pass) => {
  const hash = CryptoJS.AES.encrypt(pass, process.env.SECRET_KEY).toString();
  return hash;
};

export const decodePassword = (hash) => {
  const pass = CryptoJS.AES.decrypt(hash, process.env.SECRET_KEY).toString(
    CryptoJS.enc.Utf8
  );
  return pass;
};

export const comparePassword = (pass1, pass2) => {
  return decodePassword(pass1) === decodePassword(pass2);
};
