import { BASE_URL } from "@/constants/config";
import axios from "axios";
import Cookie from "js-cookie";

const token = Cookie.get("token");

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

export const axiosInstanceToken = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
