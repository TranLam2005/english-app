export interface Token {
    token: string;
    expired_at: number;
    user_id?: string; // Optional, can be used to store user ID if needed
}
