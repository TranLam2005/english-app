import { TOKEN_TYPE } from "@/api/Cookies";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { restApi } from "./api/restApi";
import type { InternalAxiosRequestConfig } from "axios";
// import { useRouter } from "next/navigation";

export function middleware(request: NextRequest) {
  const token = request.cookies.get(TOKEN_TYPE.ACCESS_TOKEN);
  restApi.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      const token = request.cookies.get(TOKEN_TYPE.ACCESS_TOKEN);
      if (token) {
        config.headers.set('Authorization', `Bearer ${token}`);
      }
      return config;
    },
    (error) =>  Promise.reject(error)
  )
  if(!token) {
    return NextResponse.redirect(new URL('/login', request.url));// Redirect to login page if not authenticated
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/']
};