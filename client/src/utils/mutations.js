import { gql } from "@apollo/client";

export const ADD_PROFILE = gql`
    mutation addProfile($username: String!, $email: String!, $password: String!) {
        addProfile(username: $username, email: $email, password: $password) {
          token
          user {
            email
            username
            _id
          }
        }
    }
`;

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                username
                email
                userPosts {
                    _id
                    title
                    topic
                    content
                }
            }
        }
    }
`;