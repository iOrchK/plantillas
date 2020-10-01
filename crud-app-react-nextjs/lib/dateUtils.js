import moment from "moment";
moment.locale("es-MX");

export const GetDate = () => {
  return moment().format("YYYY-MM-DD");
};

export const GetTime = () => {
  return moment().format("hh:mm:ss");
};

export const GetDateTime = () => {
  return moment().format("YYYY-MM-DD hh:mm:ss");
};

export const TransformDate = (strDate) => {
  if (moment(strDate, "YYYY-MM-DD").isValid()) {
    return moment(strDate).format("LL");
  } else {
    console.error("Invalid Date Format");
    return strDate;
  }
};

export const TransformTime = (strTime) => {
  if (moment(strTime, "hh:mm:ss").isValid()) {
    return moment(strTime).format("LT");
  } else {
    console.error("Invalid Time Format");
    return strTime;
  }
};

export const TransformDateTime = (strDateTime) => {
  if (moment(strDateTime, "YYYY-MM-DD hh:mm:ss").isValid()) {
    return moment(strDateTime).format("LL [a la(s)] LT a");
  } else {
    console.error("Invalid Date Time Format");
    return strDateTime;
  }
};
