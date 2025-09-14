import axios from "axios";
// import {TOKEN_TYPE, getTokenFromCookies} from "./Cookies";

const API_URL = process.env.NEXT_PUBLIC_API_URL

const InstanceApi = axios.create({
    baseURL: API_URL,
    timeout: 30000,
    headers: {
        'Content-Type': 'application/json',
    },
    validateStatus: () => true,
})

export default InstanceApi;

// InstanceApi.interceptors.request.use(
//     (config) => {
//         const token = getTokenFromCookies(TOKEN_TYPE.ACCESS_TOKEN);
//         if (token) {
//             config.headers.Authorization = `Bearer ${token}`;
//         }
//         return config;
//     },
//     (error) => {
//         return Promise.reject(error);
//     }
// );


// handle error from server
InstanceApi.interceptors.response.use(
    (response) => {
        if (response.data && typeof response.data === "object") {
            if (response.data.code === CommonError.INTERNAL_SERVER.code) {
                response.data.message = CommonError.INTERNAL_SERVER.message;
            }
        }
        return response;
    },
    (error) => {
        return Promise.reject(error);
    }
)

export interface IResponse<T = null> {
  code: number;
  message: string;
  data?: T;
  pagination?: Pagination;
  errors?: Record<string, string>;
}

export interface Pagination {
  page: number;
  size: number;
  total: number;
}

export const CommonError = {
  SUCCESS: { code: 200, message: "success" },
  CREATED: { code: 201, message: "created" },
  BAD_REQUEST: { code: 400, message: "bad_request" },
  UNAUTHORIZED: { code: 401, message: "unauthorized" },
  FORBIDDEN: { code: 403, message: "forbidden" },
  NOT_FOUND: { code: 404, message: "not_found" },
  CONFLICT: { code: 409, message: "conflict" },
  INTERNAL_SERVER: { code: 500, message: "internal_server" },
};