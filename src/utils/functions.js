import { HTTP_STATUS_CODE } from "../config/constants";
import HttpRequestError from "../http/HttpRequestError";
import { toast } from "react-toastify";

export const getDataFromLocalStorage = (key) => {
  const data = localStorage.getItem(key);

  if (data !== null && data !== "undefined") {
    const dataFormat = JSON.parse(data);

    return dataFormat;
  }

  return null;
};

export const formatEmail = (email) => {
  return email.replace(/(.{0,})(?=.{4}@)/g, function (match) {
    return "*".repeat(match.length);
  });
};

export const handleError = (error, isShow = true) => {
  if (error instanceof HttpRequestError) {
    isShow && toast.error(error.message);

    return { data: null, message: error.message, status: error.status };
  } else {
    return {
      data: null,
      message: "Something went wrong!!!",
      status: HTTP_STATUS_CODE.BAD_REQUEST,
    };
  }
};
