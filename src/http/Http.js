import axios, { AxiosError } from "axios";
import { HTTP_STATUS_CODE } from "../config/constants";
import HttpRequestError from "./HttpRequestError";

const headers = {
  "Content-Type": "application/json; charset=utf-8",
  "Access-Control-Allow-Credentials": true,
};

const injectToken = (config) => {
  try {
    const token = localStorage.getItem("access_token");

    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  } catch (error) {
    throw new Error(error);
  }
};

export class Http {
  instance;

  constructor(baseUrl) {
    const http = axios.create({
      baseURL: baseUrl,
      headers,
    });

    http.interceptors.request.use(injectToken, (error) =>
      Promise.reject(error)
    );

    http.interceptors.response.use(
      (response) => response.data,
      (error) => {
        if (error instanceof AxiosError) {
          if (!error.response) {
            error = {
              message: error.message,
              success: false,
              data: null,
            };
          } else {
            error = error.response;
          }
        }

        return this.handleError(error);
      }
    );

    this.instance = http;
  }

  request(config) {
    return this.instance.request(config);
  }

  get(url, config) {
    return this.instance.get(url, config);
  }

  post(url, data, config) {
    return this.instance.post(url, data, config);
  }

  put(url, data, config) {
    return this.instance.put(url, data, config);
  }

  delete(url, config) {
    return this.instance.delete(url, config);
  }

  // Handle global app errors
  // We can handle generic app errors depending on the status code
  handleError(error) {
    const data = error.data;
    const status = error.status;

    if (!data || !status) {
      return Promise.reject(
        new HttpRequestError(
          {
            success: false,
            data: null,
            message: error.message ?? "Something went wrong!!!",
          },
          HTTP_STATUS_CODE.NOTFOUND
        )
      );
    }

    return Promise.reject(new HttpRequestError(data, status));
  }
}
