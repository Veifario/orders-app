import axios from "axios";

import { getLocalStorage } from "@/helpers/auth.helper";

const baseUrl = `${import.meta.env.VITE_BASE_URL}/api`;

const mainInstance = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

mainInstance.interceptors.request.use(
  (config) => {
    const accessToken = getLocalStorage("accessToken");
    accessToken
      ? (config.headers.Authorization = `Bearer ${accessToken}`)
      : null;

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export { mainInstance };
