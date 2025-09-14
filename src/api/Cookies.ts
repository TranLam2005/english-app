import { Token } from "./types";
import Cookies from 'js-cookie';
export const initialToken: Token = {
    token: '',
    expired_at: 0
}

export const cookieOptions: Cookies.CookieAttributes = {
    expires: 1,
    secure: true,
    // sameSite: 'Strict',
};

export enum TOKEN_TYPE {
    REFRESH_TOKEN = "refresh_token",
    ACCESS_TOKEN = "access_token",
}

export const parseJwt = (jwt: string): Token | null => {
    try {
        const parts = jwt.split('.');
        if (parts.length !== 3) {
            return null;
        }
        const payload = parts[1];
        const parsePayload = JSON.parse(atob(payload));
        const expired_at = parsePayload.exp ? parsePayload.exp * 1000 : Date.now() + 3600 * 1000; // Default to 1 hour if exp is not present\
        const user_id = parsePayload.user_id;
        return {
            token: jwt,
            expired_at: expired_at,
            user_id: user_id,
        }
    }
    catch (error) {
        console.error("Failed to parse JWT:", error);
        return null;
    }
}

export const setTokenToCookies = (type: TOKEN_TYPE, token: string): void => {
    Cookies.set(type, token, cookieOptions);
}

export const getTokenFromCookies = (type: TOKEN_TYPE): string => {
    const tokenStr = Cookies.get(type);
    if (tokenStr) {
        return tokenStr;
    }
    return "";
}

export const removeTokenFromCookies = (type: TOKEN_TYPE): void => {
    Cookies.remove(type);
}