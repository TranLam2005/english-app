import { gql } from "@apollo/client";

export const GET_USERS  = gql`
    query {
        users{
            id
            username
            email
            is_active
        }
    }
`;

export interface User {
    id: number,
    username: string,
    email: string,
    is_active: boolean,
}