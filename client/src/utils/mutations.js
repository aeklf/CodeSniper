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
            }
        }
    }
`;

export const WRITE_POST = gql`
    mutation addPost($title: String!, $topic: String!, $content: String!) {
        addPost(title: $title, topic: $topic, content: $content) {
            username
            email
        }
    }
`;

export const DELETE_POST = gql`
    mutation removePost($postId: ID!) {
        removePost(postId: $postId) {
            username
            email
        }
    }
`;