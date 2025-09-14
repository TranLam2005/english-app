import { parseJwt, TOKEN_TYPE } from "@/api/Cookies";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import InstanceApi from "./api/common";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const publicPaths = ['/login', '/registry'];
  if (publicPaths.includes(pathname)) {
    return NextResponse.next();
  }

  const token = request.cookies.get(TOKEN_TYPE.ACCESS_TOKEN)?.value || '';
  const parseToken = token ? parseJwt(token) : undefined
  const isTokenValid: boolean = !!(token&&parseToken&&parseToken.expired_at>Date.now());
  
  if(!token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
  else if (!isTokenValid) {
    try {
      const refreshToken = request.cookies.get(TOKEN_TYPE.REFRESH_TOKEN)?.value || '';
      if (!refreshToken) {
        // Không có refresh token, redirect to login
        const response = NextResponse.redirect(new URL('/login', request.url));
        response.cookies.delete(TOKEN_TYPE.ACCESS_TOKEN);
        response.cookies.delete(TOKEN_TYPE.REFRESH_TOKEN);
        return response;
      }

      // Thử refresh token
      const refresh_token = await InstanceApi.post('/authenticated/refresh', {
        refresh: refreshToken
      })

      // Tạo response để set cookie mới
      console.log("New access token received:", refresh_token.data);
      const nextResponse = NextResponse.next();
      
      nextResponse.cookies.set(TOKEN_TYPE.ACCESS_TOKEN, refresh_token.data.access);
      console.log("New access token set in cookies:", refresh_token.data.access);
      return nextResponse;
    } catch (error) {
      console.error("Error refreshing token:", error);
      const response = NextResponse.redirect(new URL('/login', request.url));
      response.cookies.delete(TOKEN_TYPE.ACCESS_TOKEN);
      response.cookies.delete(TOKEN_TYPE.REFRESH_TOKEN);
      return response;
    }
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
};